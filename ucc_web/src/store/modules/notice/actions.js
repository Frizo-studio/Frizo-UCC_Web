import * as types from './mutation-types'
import { authenticated} from "@/utils/AuthStore";
import {getNoticeAll, clearNotice} from '@/api/notice'

const updateUserNoticeCount = function ({ commit }, { followingNoticeCount, eventNoticeCount, chatNoticeCount }) {
    console.log("----------------in notice/action-------------------");
    console.log("followingNoticeCount: " + followingNoticeCount);
    console.log("eventNoticeCount: " + eventNoticeCount);
    console.log("chatNoticeCount: " + chatNoticeCount);
    console.log("-------------------------------------------------");
    let userNoticeCount = {
        followingNoticeCount: followingNoticeCount,
        eventNoticeCount: eventNoticeCount,
        chatNoticeCount: chatNoticeCount
    };
    commit(types.UPDATE_NOTICE_COUNT, userNoticeCount)
};


const setUserNoticeCount = function ({commit}) {
    if (authenticated()) {
        getNoticeAll()
            .then(res => {
                if (res.data.success) {
                    console.log("notice: " + res.data);
                    let userNoticeCount = {
                        followingNoticeCount: res.data.result.followingNoticeCount,
                        eventNoticeCount: res.data.result.eventNotiveCount,
                        chatNoticeCount: res.data.result.chatNoticeCount,
                    };
                    commit(types.UPDATE_NOTICE_COUNT, userNoticeCount)
                }
        })
            .catch(error => {
            alert(error.response.data.message);
            console.log(error)
        })
    }
};

const clearUserNoticeCount = function ({ commit }, noticeType) {
    console.log("into clearUserNoticeCount");
    console.log("noticeType = " + noticeType);
    //---------------------------------------------------
    if (authenticated()) {
        clearNotice({noticeType})
            .then(res => {
                if (res.data.success) {
                    console.log("成功清除 notice count.")
                }
            })
            .catch(err => {
                console.log("清除 notice count 失敗.")
                console.log(err)
            })
    }
    //---------------------------------------------------
    commit(types.CLEAR_NOTICE_COUNT, noticeType)
};

const actions = {
    updateUserNoticeCount,
    clearUserNoticeCount,
    setUserNoticeCount
};

export default actions;