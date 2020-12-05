import * as types from './mutation-types'
import { authenticated} from "@/utils/AuthStore";

const updateUserNoticeCount = function ({ commit }, {followingNoticeCount, eventNoticeCount, chatNoticeCount}) {
    let userNoticeCount = {
        followingNoticeCount: followingNoticeCount,
        eventNoticeCount: eventNoticeCount,
        chatNoticeCount: chatNoticeCount
    };
    commit(types.UPDATE_NOTICE_COUNT, userNoticeCount)
};

const setUserNoticeCount = function ({commit}) {
    if (authenticated()) {

    }

};

const clearUserNoticeCount = function ({ commit }, {noticeType}) {

    //---------------------------------------------------
    // 後端需要清空資料，未實作。
    //---------------------------------------------------
    commit(types.CLEAR_NOTICE_COUNT, noticeType)
};

const actions = {
    updateUserNoticeCount,
    clearUserNoticeCount,
    setUserNoticeCount
};

export default actions;