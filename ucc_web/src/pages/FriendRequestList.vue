<template>
  <div class="FriendList">
    <navbar></navbar>
    <div class="background"></div>
    <div class="container">
      <div class="title"><h3>追蹤請求</h3></div>
      <!-- <div class="searchFriend">
        <input
          type="text"
          placeholder="追蹤請求"
          v-model="userSearchInput"
          v-on:keydown="search"
        />
      </div> -->
      <!------------- 朋友列表 ------------->
      <div class="friendList">
        <div v-for="user in searchResult" :key="user">
          <div class="friendInfo">
            <img class="friendImg" :src="user.imageUrl" />
            <div class="friendDesc">
              <div id="friendName">{{ user.name }}</div>
              <div id="major">{{ user.majorSubject }}</div>
            </div>
            <div class="follow">
              <button @click="sendFollowingRequest(user.id)">確認</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/base/Navbar";
import { searchUserFollowing } from "@/api/follow";

export default {
  name: "FriendList",

  components: {
    navbar,
  },
  data() {
    return {
      userSearchInput: "",
      searchResult: [],
    };
  },
  methods: {
    searchUserFollowing() {
      searchUserFollowing(false).then((r) => {
        console.log(r.data.result);
        this.searchResult = r.data.result;
      });
    },
  },

  mounted() {
    this.searchUserFollowing();
  },
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}
.background {
  background-color: rgb(165, 101, 42);
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
}
.container {
  position: relative;
  min-width: 400px;
  height: 600px;
  background-color: #fff;
  margin-top: 80px;
  margin-bottom: 30px;
  width: 800px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 50px 50px 1fr;
  padding: 30px 80px 0 80px;
}
.title {
  display: flex;
  grid-row: 1/2;
  justify-content: flex-start;
}
.title h3 {
  font-weight: bold;
}
.searchFriend {
  grid-row: 2/3;
}
.searchFriend input {
  width: 100%;
  border-radius: 15px;
  background: lightgray;
  border: 1.5px lightgray solid;
  outline: none;
  padding-left: 8px;
  height: 30px;
  font-size: 16px;
  letter-spacing: 1px;
}
.searchFriend input:focus {
  border: 1.5px rgb(165, 101, 42) solid;
  transition: all 0.3s ease;
}
.friendList {
  grid-row: 3/4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, 70px);
  overflow-y: hidden;
}
.friendList:hover {
  overflow-y: scroll;
}
.friendInfo:nth-child(odd) {
  height: 70px;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  grid-column: 1/2;
  position: relative;
}
.friendInfo:nth-child(even) {
  height: 70px;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  grid-column: 2/3;
  position: relative;
}
.friendImg {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.friendDesc {
  text-align: left;
  margin-left: 8px;
}
.follow {
  position: absolute;
  right: 0;
  width: 100px;
  border-left: 1px rgb(100, 100, 100) solid;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.follow button {
  border: none;
  height: 35px;
  width: 70%;
  background-color: rgb(165, 101, 42);
  color: #fff;
  border-radius: 15px;
}
.follow button:hover {
  background-color: rgb(90, 56, 24);
  transition: all 0.3s ease;
}

/* scrollbar 樣式 */
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background: #bbb;
}
</style>