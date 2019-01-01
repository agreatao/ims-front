import React from 'react';
import './styles/version.less';
import http from 'lib/http';
import { Row, Col, message } from 'antd';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            committedDate: "",
            versionNum: "",
            revision: ""
        }
    }

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        message.loading('正在加载，请稍候...', 0)
        http.post(
            'system/findSystemInfo.action',
            null,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
        ).then((data) => {
            var data = data.data;
            this.setState({
                committedDate: data.committedDate,
                versionNum: data.versionNum,
                revision: data.revision
            });
        })
        .catch(e => http.showError(e))
        .then(e => message.destroy());
    }

    render() {
        var { state } = this;
        return (
            <div className="version-container">
                <Row>
                    <Col span={6}>版本日期：</Col>
                    <Col span={14}>{state.committedDate}</Col>
                </Row>
                <Row>
                    <Col span={6}>平台版本号：</Col>
                    <Col span={14}>{state.versionNum}</Col>
                </Row>
                <Row>
                    <Col span={6}>SVN版本号：</Col>
                    <Col span={14}>{state.revision}</Col>
                </Row>
            </div>
        );
    }
}

export default App;
