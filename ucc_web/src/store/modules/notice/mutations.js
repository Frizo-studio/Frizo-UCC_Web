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
    [types.CLEAR_NOTICE_COUNT](state, noticeType){
        console.log("clear notice count in vuex: " + noticeType);
        if (noticeType === "FOLLOWING"){
            state.followingNoticeCount = 0;
        }
        if (noticeType === "EVENT"){
            state.eventNoticeCount = 0;
        }
        if (noticeType === "CHAT"){
            state.chatNoticeCount = 0;
        }
    }
};

export default mutations;