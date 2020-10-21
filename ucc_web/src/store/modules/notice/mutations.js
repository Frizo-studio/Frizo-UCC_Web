import * as types from './mutation-types'

const mutations = {
    [types.UPDATE_NOTICE_COUNT](state, {followingNoticeCount, eventNoticeCount, chatNoticeCount}){
        console.log("update user notice count");
        if (followingNoticeCount != null){
            state.followingNoticeCount = followingNoticeCount;
        }
        if (eventNoticeCount != null){
            state.eventNoticeCount = eventNoticeCount;
        }
        if (chatNoticeCount != null){
            state.chatNoticeCount = chatNoticeCount;
        }
    },

    // noticeType 參數為 'followingNoticeCount', 'eventNoticeCount', 'chatNoticeCount'
    [types.CLEAR_NOTICE_COUNT](state, {noticeType}){
        console.log("clear notice count: " + noticeType)
        if (noticeType.eq("followingNoticeCount")){
            state.followingNoticeCount = 0;
        }
        if (noticeType.eq("eventNoticeCount")){
            state.eventNoticeCount = 0;
        }
        if (noticeType.eq("chatNoticeCount")){
            state.chatNoticeCount = 0;
        }
    }
};

export default mutations;