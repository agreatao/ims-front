import './style/index.less';

import { MessageBox } from 'element-ui';

const info = '<svg viewBox="64 64 896 896" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg>';
const success = '<svg viewBox="64 64 896 896" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>';
const error = '<svg viewBox="64 64 896 896" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>';
const ask = '<svg viewBox="64 64 896 896" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path></svg>';

const icon = {
    info, success, error, confirm: ask, warn: info
};

function contentTemplate(type, title, content) {
    return '<div class="alert"><h4><i class="' + type + '">' + icon[type] + '</i><span>' + title + '</span></h4><p>' + content + '</p></div>'
}

export default {
    info: (content) => {
        return MessageBox({
            customClass: 'alert-wrapper',
            dangerouslyUseHTMLString: true,
            title: null,
            message: contentTemplate('info', '提示', content),
            type: null,
            showClose: false,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            confirmButtonText: '知道了'
        })
    },
    error: (content) => {
        return MessageBox({
            customClass: 'alert-wrapper',
            dangerouslyUseHTMLString: true,
            title: null,
            message: contentTemplate('error', '错误', content),
            type: null,
            showClose: false,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            confirmButtonText: '知道了'
        })
    },
    warn: (content) => {
        return MessageBox({
            customClass: 'alert-wrapper',
            dangerouslyUseHTMLString: true,
            title: null,
            message: contentTemplate('warn', '警告', content),
            type: null,
            showClose: false,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            confirmButtonText: '知道了'
        })
    },
    success: (content) => {
        return MessageBox({
            customClass: 'alert-wrapper',
            dangerouslyUseHTMLString: true,
            title: null,
            message: contentTemplate('success', '提示', content),
            type: null,
            showClose: false,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            confirmButtonText: '知道了'
        })
    },
    confirm: (title, content) => {
        return MessageBox({
            customClass: 'alert-wrapper',
            dangerouslyUseHTMLString: true,
            title: null,
            message: contentTemplate('confirm', title, content),
            type: null,
            showClose: false,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消'
        })
    },
    delete: () => {
        return MessageBox({
            customClass: 'alert-wrapper',
            dangerouslyUseHTMLString: true,
            title: null,
            message: contentTemplate('confirm', '删除', '确认要删除吗？'),
            type: null,
            showClose: false,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            showCancelButton: true,
            confirmButtonText: '删除',
            cancelButtonText: '取消'
        })
    }
};