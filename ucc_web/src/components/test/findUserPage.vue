<template>
  <div>
      <h3>用戶搜尋功能 demo 頁</h3>

      <br>

    <div>
        <label>用戶姓名或 email </label>
        <input id="userSearch" type="text" v-model="userSearchInput">
        <button @click="findUsersByKeyWords">搜尋</button>
    </div>

    <br>

    <div id="searchResult">
      <h3>search result</h3>

        <ul>
            <li v-for="user in searchResult" :key="user">

                <div>
                    <div class="column">
                        <label>照片</label>
                        <img width="50px" height="50px" v-bind:src="user.imageUrl">
                    </div>

                    <div class="column">
                        <label>名稱</label>
                        {{user.name}}
                    </div>

                    <div class="column">
                        <label>聯絡信箱</label>
                        {{user.email}}
                    </div>

                    <div class="column">
                        <a href="#">個人資料</a>
                    </div>

                    <div>
                        <button @click="sendFollowingRequest(user.id)">追蹤</button>
                    </div>
                </div>

            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import {findUser} from "@/api/user"
import {setFollowRequire} from "@/api/follow"

export default {

  name: "FollowPage",

  data() {
    return {
      userSearchInput: "",
      searchResult: []
    };
  },
  methods: {
    findUsersByKeyWords(){
        var page = 0;
        findUser(this.userSearchInput, page).then(resp => {
            var results = resp.data.result;
            this.searchResult = results;
            console.log("page: " + page);
            console.log(results);
        })
    },

    sendFollowingRequest(targetUserId){
        console.log("追蹤: " + targetUserId)
        setFollowRequire(targetUserId).then(resp=>{
            console.log(resp)
        })
    }
  },
};
</script>

<style>
 .column {
     background-color: yellow;
     float: left;
     margin-left: 50px;
 }
</style>