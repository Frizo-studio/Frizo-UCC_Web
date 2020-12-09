import {
    getRequest,
} from "../../utils/UccSender";

//取得所有notice
export const getNoticeAll = () => {
    let actionUrl = "/notice/all";
    let params = {};

    return getRequest(actionUrl, params);
};

//清除指定notice
export const clearNotice = ({ noticeType }) => {
    let actionUrl = "notice/clear/" + noticeType;
    let params = {};

    return getRequest(actionUrl, params);
};

export const clearEventOne = (eventNoticeId) => {
    let actionUrl = "notice/read/event/message"
    let params = {}

    params.eventNoticeId = eventNoticeId;

    return getRequest(actionUrl, params);
}

export const findEventNotice = (page) => {
    let actionUrl = "notice/find/my/event/notice/message";
    let params = {};

    if (page == null) {
        params.page = 0
    } else {
        params.page = page;
    }
    return getRequest(actionUrl, params);
}

export const clearAllNotice = () => {
    let actionUrl = "event/clear/all/my/event/message"
    let params = {}

    return getRequest(actionUrl, params);
}