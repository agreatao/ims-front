import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Affix, Dropdown, Icon } from 'antd';
import urlparse from 'url-parse';
import addEventListener from 'add-dom-event-listener';

import http from 'lib/http';
import { userChange, themeChange, taskcenterCount } from 'actions';
import { REQUESTURL } from 'config';
import asyncComponent from 'loader';
import './styles/nav.less';
import './styles/navigation.less';
import { lessVars } from 'config';
import TaskCenter from 'components/taskCenter';
import Badge from 'components/badge';
import { refreshTaskCenterCount } from 'lib/refreshTaskCenterCount';

var Storage = asyncComponent(u => new Promise(resolve => {require([], u => resolve(require('components/storage').default))}))
var Version = asyncComponent(u => new Promise(resolve => {require([], u => resolve(require('./version').default))}))

var isFAS = REQUESTURL === '/fas'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            children: [],
            index: 0,
            version_show: false,
            active: false,
            current: menus[0].contents[0].name
        }
        this.menus_map = {}
        this.authorityMenu = [...(JSON.parse(JSON.stringify(menus)))]
        this.storageModules = [
            'snapshot',
            'faceSearch',
            'identification',
            'controlQuery',
            'foothold',
            'together'
        ]

        menus.forEach(item => {
            item.contents.forEach(({name, title}) => {
                this.menus_map[name] = title
            })
        })

        // var linkFavicon1 = document.getElementById('linkFavicon1');
        // var linkFavicon2 = document.getElementById('linkFavicon2');
        // if(props.user.is361){
            // linkFavicon1.setAttribute('href', './images/favicon.ico');
            // linkFavicon2.setAttribute('href', './images/logo_361.png');
        // }else{
            // linkFavicon1.setAttribute('href', './images/favicon_ga.ico');
            // linkFavicon2.setAttribute('href', './images/logo_ga.png');
        // }
    }

    openVersion() {
        this.setState({
            version_show: true
        });
    }

    closeVersion() {
        this.setState({
            version_show: false
        });
    }

    getDefaultNav(menu) {
        var defaultNavName;
        for (var i=0; i<menu.length; i++) {
            if (menu[i].contents.length === 0) {
                continue
            } else {
                defaultNavName =  menu[i].contents[0].name;
                break;
            }
        }
        return defaultNavName || ''
    }

    componentDidMount() {
        var that = this
        this.showTitle()
        this.event = addEventListener(window, 'hashchange', ::this.showTitle)
        var props = this.props;
        var userChange = props.userChange;

        // 处理IE8 集成平台跳转URL问题
        var pat = /(#\/)(\w+\b)/;
        var href = location.href;
        if (!pat.test(href) && href.indexOf('m=') > 0) {
            var currentModuleName = href.match(/([?|&]m\=)(\w+\b)/);
            if (currentModuleName && typeof (currentModuleName[2]) != 'undefined') {
                var urlArray = href.split('#/');
                var str = urlArray[0] + '#/' + currentModuleName[2] + urlArray[1];
                location.href = str;
            }
        }

        //处理管控查询一键登记ie8下问题!!!!!!
        if(href.indexOf('?wellNumber=') > 0){
            setTimeout(()=>{
                 this.refs.refreshHuman.click();
            }, 100);
        }

        http.get('/getAuthorizedMenu.action').then(data => {
            if(props.user.is361){
                // data.children.forEach((item, index) => {
                //     if (item.authCode === 'FMS_030000') {
                //         data.children.splice(index, 1);
                //     }
                // });
            }
            data.children.forEach((d) => {
                var names = urlparse(d.url).hash.split('#')[1];
                d['name'] = names;
            });
    		this.setState({
    			...data
            });
            if (isFAS) {
                this.authorityMenu.forEach(item => {
                    item.contents = item.contents.filter(value => {
                       return that.state.children.some(stateValue => stateValue.authCode == value.authCode)
                    })
                });
                var currentNavName = this.getDefaultNav(this.authorityMenu)
                if (pat.test(location.href)) {
                    currentNavName = pat.exec(location.href)[0].split('#/')[1];
                }
                this.setState({
                    current: currentNavName
                })
            } else {
                var currentIndex = null
                var currentNavName = data.children[0].name
                if (pat.test(location.href)) {
                    currentNavName = pat.exec(location.href)[0].split('#/')[1];
                }
                this.state.children.forEach((value, index) => {
                    if (value.name == currentNavName) {
                        currentIndex = index
                    }
                })

                this.setState({
                    index: currentIndex
                })
            }

            var eportalArray = data.eportal && data.eportal.split(':') || [];
            userChange({codes: data.children.map(item => item.authCode), eportalIP: eportalArray[0], eportalPort: eportalArray[1], userInfo: data.user});
    	}).catch(e => http.showError(e))
        // 从集成平台获取外接系统配置
        if (isFAS) {
            http.get('/system/findAppInfos.action').then(data => {
                userChange({appInfos: data.list});
            }).catch(e => http.showError(e))
        }

        // fake data 任务中心接口
        if(isFAS){
            //370不使用
            // refreshTaskCenterCount((payload) => {
            //     props.taskcenterCount(payload)
            // });
        }
    }

    refreshHumanHandel() {
        var href = location.href;
        window.location.href = href.replace('?wellNumber=', '#');
    }

    componentWillUnmount() {
        this.event.remove()
    }

    versionHandler() {
        this.openVersion();
    }

    themeHandler() {
        var props = this.props

        props.themeChange(props.theme ? '' : lessVars['fas-prefix-cls']);
    }

    logoutHandler() {
        var _self = this;
        // 370说不要确定的提示了
        // if(_self.props.user.is361){
            http.post('/logout.action').then(({ data }) => {
                var currentModule = urlparse(location.hash.split('#')[1], true).pathname.split('/')[1];
                if (isFAS) {
                    currentModule = currentModule || 'snapshot';
                }else{
                    currentModule = currentModule || 'human';
                }
                location.href = `${data}?m=${currentModule}%26buttJoint=361`;
            })
        // }else{
        //     Modal.confirm({
        //         title: "退出系统",
        //         content: "你确定要退出系统吗",
        //         onOk() {
        //             return http.post('/logout.action').then(({ data }) => {
        //                 var currentModule = urlparse(location.hash.split('#')[1], true).pathname.split('/')[1];
        //                 if (isFAS) {
        //                     currentModule = currentModule || 'snapshot';
        //                 }else{
        //                     currentModule = currentModule || 'human';
        //                 }
        //                 location.href = `${data}?m=${currentModule}`
        //             })
        //         },
        //         onCancel() {
        //         },
        //     });
        // }
    }

    onMouseOver() {
        this.setState({
            active: true
        });
    }

    onMouseLeaveHandler() {
        this.setState({
            active: false
        });
    }

    showTitle(name) {
        var current = urlparse(location.hash.split('#')[1], true).pathname.split('/')[1]
        if(current) {
            if (isFAS) {
                this.setState({ current })
            } else {
                var currentIndex = null
                this.state.children.forEach((value, index) => {
                    if (value.name == current) {
                        currentIndex = index
                    }
                })
                this.setState({
                    index: currentIndex
                })
            }
        } else {
            if (isFAS) {
                this.setState({
                    current: this.getDefaultNav(this.authorityMenu)
                })
            }
            else {
                this.setState({
                    index: 0
                })
            }
        }
    }

    handleClick(index) {
        this.setState({
            index: index
        })
    }

    render() {
        var { props, state } = this;
        var { active, current, label } = state
        var currentTitle = this.menus_map[current]
        var storage_length = props.storage.length;
        var taskcenterObject = {};

        for(let key in props.taskcenter.count){
            if (state.children.some(item =>  {return item.name == key})) {
                taskcenterObject[key] = props.taskcenter.count[key]
            }
        }
        var taskcenter_count = Object.values(taskcenterObject).reduce((sum,value)=>(sum+value),0)
        let isCsModel = props.user.model === 'cs';
        let currentModule = urlparse(location.hash.split('#')[1], true).pathname.split('/')[1]
        let isStorageModule = !currentModule || this.storageModules.includes(currentModule)
        let pathname = urlparse(location.href, true).pathname
        const DropMenus = props.user.is361 ?
            (
                <div className="nav-drop-container" style={{width: 164,right:0}}>
                    <a href="javascript:;" onClick={::this.logoutHandler}>
                        <span style={{paddingLeft: 5}}>退出系统</span>
                    </a>
                </div>
            )
            :
            (
                <div className="nav-drop-container">
                    <a href="javascript:;" onClick={::this.versionHandler}>
                        <i className="nav-icon-version"></i>
                        <span>版本信息</span>
                    </a>
                    <a href="javascript:;" onClick={::this.themeHandler}>
                        <i className="nav-icon-theme"></i>
                        <span>皮肤切换</span>
                    </a>
                    <a href="javascript:;" onClick={::this.logoutHandler}>
                        <i className="nav-icon-logout"></i>
                        <span>退出系统</span>
                    </a>
                </div>
            );
        var newStyle = props.user.is361 ? { backgroundColor: '#1f81f7' } : {};

        return (
            isCsModel
            ?
            isFAS
            &&
            <div className="nav-menu-storage-cs">
                {
                    !props.user.is361 &&
                    <i className="icon-theme" onClick={::this.themeHandler}></i>
                }
                {
                isStorageModule
                &&
                <Dropdown overlay={<Storage/>}>
                    <a href="javascript:void(0);">
                        <i className="icon-storage-cs"></i>
                        <div className="count-wrapper">(<span className="count">{storage_length}</span>)</div>
                    </a>
                </Dropdown>
                }
            </div>
            :
            <Affix>
                <div className="nav-menus" id="nav-menus" style={newStyle}>
                    <div ref="refreshHuman" onClick={::this.refreshHumanHandel}></div>
                    <div className="nav-menus-log">
                        <span className={props.user.is361 ? 'logo361' : ''}>
                            {
                                props.user.is361?
                                (
                                    isFAS?
                                    '物联智能应用平台':
                                    '边缘域管理调度平台'
                                ):
                                (
                                    state.label
                                )
                            }

                        </span>
                    </div>
                    {
                        !isFAS
                        &&
                        <div className="nav-menus-content">
                            {
                                state.children.map((item, index) =>
                                    <a className={index == state.index ? 'nav-current active' : 'nav-current'} href={'#' + item.name + (props.user.is361 ? '?buttJoint=361' : '')} key={item.authCode} onClick={(e) => this.handleClick(index)} ref={'menu_' + index}>
                                        <i className={'nav-icon-' + item.name} />
                                        {item.label}
                                    </a>
                                )
                            }
                        </div>
                    }

                    {
                    isFAS
                    &&
                    currentTitle
                    &&
                    <div className="nav-current">
                        <i className={'nav-icon-'+current}/>
                        {currentTitle}
                    </div>
                    }
                    <div className="nav-menus-control">
                        {
                            isFAS
                            &&
                            <a href="javascript:;" className="nav-quick-navigation" onMouseOver={::this.onMouseOver}><i className="nav-menus-quick"></i><span>快捷导航</span></a>
                        }
                        {
                            !props.user.is361&&
                            <a href={state.apolloServer} onMouseOver={::this.onMouseLeaveHandler}>
                                <i className="nav-menus-home"></i>
                            </a>
                        }
                        {
                            //isFAS, 370中因为去掉了redux传递,这里也隐藏
                            false
                            &&
                            <Dropdown overlay={<TaskCenter/>} onMouseOver={::this.onMouseLeaveHandler}>
                                <a href="javascript:void(0);">
                                    <i className="nav-menus-taskcenter"></i>
                                    <Badge count={taskcenter_count}/>
                                </a>
                            </Dropdown>
                        }
                        {
                            isFAS
                            &&
                            <Dropdown overlay={<Storage/>} onMouseOver={::this.onMouseLeaveHandler}>
                                <a href="javascript:void(0);">
                                    <i className="nav-menus-storage"></i>
                                    <Badge count={storage_length}/>
                                </a>
                            </Dropdown>
                        }
                        <Dropdown overlay={DropMenus} onMouseOver={::this.onMouseLeaveHandler}>
                            {
                                props.user.is361 ?
                                <a className="nav-menus-control361" href="javascript:void(0);">
                                    <span className="nav-menus-control-text" title={state.user && state.user.realName || state.user && state.user.name}>{state.user && state.user.realName || state.user && state.user.name}</span>
                                    <Icon type="down" />
                                </a>
                                :
                                <a href="javascript:void(0);">
                                    <i className="nav-menus-user"></i>
                                    <span className="nav-menus-control-text" title={state.user && state.user.realName || state.user && state.user.name}>{state.user && state.user.realName || state.user && state.user.name}</span>
                                </a>
                            }
                        </Dropdown>
                        <Modal width={500} height={500} visible={state.version_show} title="版本信息" onCancel={::this.closeVersion} footer={null} maskClosable={false}>
                            {
                                state.version_show ?
                                <Version onCancel={::this.closeVersion} />
                                :
                                null
                            }
                        </Modal>
                    </div>
                    <div className="navigation-container" onMouseLeave ={::this.onMouseLeaveHandler} style={{visibility: active ? 'visible' : 'hidden', opacity: active ? '1' : '0'}}>
                        <div className="navigation-item-container">
                            <div style={{width: menus.length * 250, overflow: 'hidden'}}>
                                {
                                this.authorityMenu.map((item, index) =>
                                <div className="navigation-item" key={'navigation-item-'+index}>
                                    <h1>{item.title}</h1>
                                    <ul>
                                    {
                                    item.contents.map((el, index) => <li className={'navigation-item-each ' + item.columns} key={'navigation-item-each-'+index}>
                                            <a href={`${pathname}#${el.name}`} className="navigation-item-link">{el.title}</a>
                                        </li>
                                    )
                                    }
                                    </ul>
                                </div>
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Affix>
        )
    }
}

export default connect(
    state => ({storage: state.storage, user: state.user, theme: state.theme, taskcenter: state.taskcenter }),
    dispatch => bindActionCreators({ userChange, themeChange, taskcenterCount }, dispatch)
)(App);

// menus TEST
// 查询检索：以脸搜脸、人脸查询、身份确认、以脸搜证
// 比对预警：实时抓拍（CS）、实时预警（CS）、历史预警（CS）、身份核验（CS待考虑）、1V1比对（CS）
// 分析研判：人脸查重、人脸碰撞、频繁过人、人员落脚点、同行人分析
// 统计分析：人脸数据分析
// 实有人口管控：高危管控实时抓拍（CS）、管控实时抓拍（CS）、管控人员查询、管控人员分析、统计分析
// 视频分析：实时分析、录像分析
var menus = []
if(REQUESTURL === '/fas') {
    menus = [{
        "title": "查询检索",
        "columns": "single",
        "contents": [{
            "title": "以脸搜脸",
            "name": "snapshot",
            "authCode": "FAS_030000"
        }, {
            "title": "人脸查询",
            "name": "faceSearch",
            "authCode": "FAS_010000"
        }, {
            "title": "身份确认",
            "name": "identity",
            "authCode": "FAS_020000"
        }, {
            "title": "以脸搜证",
            "name": "identification",
            "authCode": "FAS_110000"
        }]
    }, {
        "title": "分析研判",
        "columns": "double",
        "contents": [{
            "title": "人脸查重",
            "name": "faceDuplicate",
            "authCode": "FAS_090000"
        }, {
            "title": "人脸碰撞",
            "name": "faceCollision",
            "authCode": "FAS_100000"
        }, {
            "title": "频繁过人",
            "name": "frequently",
            "authCode": "FAS_130000"
        }, {
            "title": "同行人分析",
            "name": "together",
            "authCode": "FAS_140000"
        }, {
            "title": "人员落脚点",
            "name": "foothold",
            "authCode": "FAS_150000"
        }]
    }, {
        "title": "统计分析",
        "columns": "single",
        "contents": [{
            "title": "人脸数据分析",
            "name": "dataAnalysis",
            "authCode": "FAS_120000"
        }]
    }, {
        "title": "实有人口管控",
        "columns": "single",
        "contents": [{
            "title": "管控人员查询",
            "name": "controlQuery",
            "authCode": "FAS_160000"
        }, {
            "title": "管控人员分析",
            "name": "controlAnalysis",
            "authCode": "FAS_190000"
        }, {
            "title": "管控实时抓拍",
            "name": "personnelControl",
            "authCode": "FAS_200000"
        }, {
            "title": "管控数据统计",
            "name": "controlStatistics",
            "authCode": "FAS_210000"
        }]
    }, {
        "title": "视频分析",
        "columns": "single",
        "contents": [{
            "title": "实时分析",
            "name": "realtimeAnalysis",
            "authCode": "FAS_170000"
        }, {
            "title": "录像分析",
            "name": "videoAnalysis",
            "authCode": "FAS_180000"
        }]
    }];
} else {
    menus = [{
        "title": "应用管理",
        "columns": "single",
        "contents": [{
            "title": "名单管理",
            "name": "human",
            "authCode": "FMS_010000"
        }, {
            "title": "资源管理",
            "name": "resource",
            "authCode": "FMS_020000"
        }, {
            "title": "布控管理",
            "name": "control",
            "authCode": "FMS_030000"
        }, {
            "title": "服务管理",
            "name": "configuration",
            "authCode": "FMS_040000"
        }, {
            "title": "系统配置",
            "name": "system",
            "authCode": "FMS_100000"
        }]
    }]
}
const taskCenterMap = {
    "snapshot": "snapshot",
    "collision": "faceCollision",
    "controlAnalysis": "controlAnalysis",
    "peerswho": "together",
    "faceCheck": "faceDuplicate",
    "detection": "frequently",
    "foothold": "foothold"
}
