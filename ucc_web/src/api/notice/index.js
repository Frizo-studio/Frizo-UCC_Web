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