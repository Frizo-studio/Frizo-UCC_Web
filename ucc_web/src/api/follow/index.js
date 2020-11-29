import {
    getRequest,
} from "../../utils/UccSender";

//寄送追蹤請求給某 user
export const setFollowRequire = (fowllowingUserId) => {
    let actionUrl = "/following/send/request";
    let params = {};

    if (fowllowingUserId == null) {
        return;
    } else {
        params.fowllowingUserId = fowllowingUserId;
    }

    return getRequest(actionUrl, params);
};

//取消追蹤
export const cencelFollowing = (fowllowingUserId) => {
    let actionUrl = "/following/cancel?fowllowingUserId=" + fowllowingUserId;
    let params = {};

    if (fowllowingUserId == null) {
        return;
    } else {
        params.fowllowingUserId = fowllowingUserId;
    }

    return getRequest(actionUrl, params);
};

//拒絕追蹤的請求
export const refuseFollowRequire = (requesterId) => {
    let actionUrl = "/following/refuse/request?requesterId=" + requesterId;
    let params = {};

    if (requesterId == null) {
        return;
    } else {
        params.requesterId = requesterId;
    }

    return getRequest(actionUrl, params);
};

//接受追蹤的請求
export const acceptFollowRequire = (requesterId) => {
    let actionUrl = "/following/accept?requesterId=" + requesterId;
    let params = {};

    if (requesterId == null) {
        return;
    } else {
        params.requesterId = requesterId;
    }

    return getRequest(actionUrl, params);
};

//封鎖追蹤者
export const blockFollowing = (followerId) => {
    let actionUrl = "/following/block?followerId=" + followerId;
    let params = {};

    if (followerId == null) {
        return;
    } else {
        params.followerId = followerId;
    }

    return getRequest(actionUrl, params);
};

//搜尋自己追蹤的追蹤者true及尚未確認的追蹤者false
export const searchFollowingUser = (accepted) => {
    let actionUrl = "/following/my/list";
    let params = { accepted };

    return getRequest(actionUrl, params);
};

//搜尋自己的追隨者true及尚未確認的追隨者false
export const searchUserFollowing = (accepted) => {
    let actionUrl = "/following/my/followers";
    let params = { accepted };

    return getRequest(actionUrl, params);
};