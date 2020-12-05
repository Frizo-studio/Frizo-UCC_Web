import * as types from './mutation-types'

const updateUserNoticeCount = function ({ commit }, { followingNoticeCount, eventNoticeCount, chatNoticeCount }) {
    let userNoticeCount = {
        followingNoticeCount: followingNoticeCount,
        eventNoticeCount: eventNoticeCount,
        chatNoticeCount: chatNoticeCount
    };
    commit(types.UPDATE_NOTICE_COUNT, userNoticeCount)
};

const clearUserNoticeCount = function ({ commit }, { noticeType }) {

    //---------------------------------------------------
    // 後端需要清空資料，未實作。
    //---------------------------------------------------
    commit(types.CLEAR_NOTICE_COUNT, noticeType)
};

const actions = {
    updateUserNoticeCount,
    clearUserNoticeCount
};

export default actions;