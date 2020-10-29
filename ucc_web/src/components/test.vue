<template>
  <div class="EventPage">
    <navbar></navbar>
    <div class="background"></div>
    <div class="container">
      <div class="eventDetails">
        <div class="eventDesc" id="eventPic"></div>
        <div class="eventDesc" id="people">
          人數 <span class="eventData">20人</span>
        </div>
        <div class="eventDesc" id="place">
          活動地點 <span class="eventData">台北商業大學</span>
        </div>
        <div class="eventDesc" id="endDate">
          報名截止日 <span class="eventData">2020年 12月 31 日 </span>
        </div>
        <div class="eventDesc" style="color: black">
          <font-awesome-icon icon="calendar-alt" size="med" />
          <span id="eventPeriod"
            >活動時間2020年6月24 12:00 PM 至 2020年6月24日 6:00 PM</span
          >
        </div>
        <div class="signUp"><button>立即報名</button></div>
        <div class="divideLine"></div>
      </div>
      <!---------------------------- 活動內文區塊 ---------------------------->
      <div class="eventContent">
        <div class="eventContentHeader">
          <div class="societiesImgFrame">
            <img
              class="societiesImg"
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646029"
            />
          </div>
          <span class="societiesName">社團名稱</span>
          <span class="postDate">2020年 10月24號 20:25</span>
        </div>
        <div class="eventTitle">
          <h3>活動標題</h3>
        </div>
        <div class="eventContentDesc">
          <p>活動內文</p>
        </div>
        <div class="eventTag">
          <ul>
            <li>熱舞社</li>
            <li>熱舞社</li>
            <li>熱舞社</li>
            <li>熱舞社</li>
            <li>熱舞社</li>
          </ul>
        </div>
        <div class="likeAndComment">
          <button @click="likeEvent" id="heartBtn">
            <font-awesome-icon icon="heart" size="lg" id="heart" /></button
          ><span>15</span>
          <div class="eventComment">
            <i
              class="el-icon-chat-line-square"
              style="color: #gray; font-size: 30px"
            ></i
            ><span>6</span>
          </div>
        </div>
        <div class="divideLineForContent"></div>
      </div>
      <!---------------------------- 留言區塊 ---------------------------->
      <div class="commentsArea">
        <div class="myComment">
          <div class="myInfo">
            <img
              class="myPicImg"
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646002"
            />
            <span class="myName">莊鈞凱</span>
          </div>
          <input class="myCommentDesc" placeholder="留言" />
          <button>送出</button>
        </div>
        <div class="commentTitle">留言</div>
      </div>

      <div class="commentsGroup">
        <div class="comments">
          <div class="userInfo">
            <img
              class="userImg"
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646002"
            />
            <span class="userName">莊鈞凱</span>
          </div>
          <div class="userComments">
            <span>留言留言留言留言留言留言留言留言留言留言</span>
          </div>
        </div>
        <div class="comments">
          <div class="userInfo">
            <img
              class="userImg"
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646002"
            />
            <span class="userName">莊鈞凱</span>
          </div>
          <div class="userComments">
            <span>留言留言留言留言留言留言留言留言留言留言</span>
          </div>
        </div>
        <div class="comments">
          <div class="userInfo">
            <img
              class="userImg"
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646002"
            />
            <span class="userName">莊鈞凱</span>
          </div>
          <div class="userComments">
            <span>留言留言留言留言留言留言留言留言留言留言</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/base/Navbar";
// import { mapGetters } from "vuex";

export default {
  name: "EventPage",
  components: {
    navbar,
  },
  data() {
    return {};
  },
  methods: {
    likeEvent() {
      //活動點讚事件，須加上傳送喜歡之API
      if (document.getElementById("heartBtn").style.color == "gray") {
        document.getElementById("heartBtn").style.color = "red";
      } else {
        document.getElementById("heartBtn").style.color = "gray";
      }
    },
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
  height: 2000px;
  background-color: #fff;
  margin-top: 80px;
  margin-bottom: 30px;
  width: 800px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 500px 700px 250px;
}
/* ------------------------活動細項區塊(第一部分)------------------------ */
.eventDetails {
  position: relative;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  padding: 30px 40px;
}
#eventPic {
  background-color: #000;
  width: 500px;
  height: 240px;
  grid-row: 1/7;
  margin: auto;
  margin-top: 0;
}
.eventDesc {
  color: rgb(165, 101, 42);
  font-weight: bold;
  text-align: left;
  margin-left: 90px;
}
.eventData {
  font-weight: 800;
  position: absolute;
  left: 250px;
  color: black;
}
#eventPeriod {
  color: rgb(165, 101, 42);
  font-size: 12px;
  position: absolute;
  left: 160px;
  margin-top: 4px;
}
.signUp {
  grid-row: 9/11;
  position: absolute;
  right: 80px;
}
.signUp button {
  border: none;
  background-color: rgb(165, 101, 42);
  padding: 7px;
  color: #fff;
  border-radius: 5px;
  margin-top: 30px;
  transition: 0.3s ease;
}
.signUp button:hover {
  background-color: rgb(212, 155, 101);
}
.divideLine {
  grid-row: 11/12;
  height: 1.5px;
  width: 100%;
  position: relative;
  background-color: rgb(70, 70, 70);
}
/* ------------------------活動內文區塊------------------------ */
.eventContent {
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 10px;
  padding-left: 35px;
  padding-right: 35px;
}
.eventContentHeader {
  grid-row: 1/2;
  display: flex;
  position: relative;
  align-items: center;
}
.societiesImg {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.societiesName {
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
}
.postDate {
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
}
.eventTitle {
  grid-row: 2/3;
  color: #000;
  display: flex;
}
.eventTitle h3 {
  font-weight: 900;
}
.eventContentDesc {
  grid-row: 3/9;
  display: flex;
  overflow-y: hidden;
  font-size: 20px;
  height: 350px;
}
.eventContentDesc:hover {
  overflow-y: scroll;
}

.eventTag {
  grid-row: 9/10;
  display: flex;
}
.eventTag ul li:first-child {
  margin-left: 0;
}
.eventTag ul li {
  display: inline;
  margin-left: 8px;
  color: rgb(165, 101, 42);
  font-weight: bold;
  border: black 1px solid;
  padding: 5px;
  border-radius: 7px;
}
.likeAndComment {
  grid-row: 10/11;
  display: flex;
  align-items: center;
}
.likeAndComment span {
  margin-left: 5px;
  font-size: 20px;
}
.likeAndComment button {
  border: none;
  background: none;
  color: gray;
  outline: none;
  font-size: 20px;
}
.eventComment {
  margin-left: 15px;
  align-items: center;
  display: flex;
}
.divideLineForContent {
  grid-row: 11/12;
  height: 1px;
  width: 100%;
  position: relative;
  background-color: rgb(70, 70, 70);
}

/* ------------------------留言區部分------------------------ */
.commentsArea {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  padding: 0 35px;
  height: 300px;
}
.myComment {
  margin-top: 20px;
  grid-row: 1/4;
  padding: 10px 10px;
  background-color: rgb(97, 60, 25);
  border-radius: 10px;
  position: relative;
  height: 150px;
}
.myInfo {
  position: relative;
  display: flex;
  align-items: center;
}
.myPicImg {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.myName {
  margin-left: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}
.myCommentDesc {
  display: flex;
  background: none;
  border: none;
  border-bottom: 1px #fff solid;
  height: 30px;
  margin-top: 5px;
  outline: none;
  color: #fff;
  font-size: 18px;
  width: 90%;
}
::placeholder {
  color: #fff;
}
.myComment button {
  border: none;
  position: absolute;
  right: 15px;
  margin-top: 10px;
  padding: 5px;
  background-color: rgb(165, 101, 42);
  color: #fff;
  width: 50px;
  border-radius: 5px;
}
.commentTitle {
  grid-row: 4/5;
  font-size: 25px;
  display: flex;
  align-items: center;
  border-bottom: 1px black solid;
  margin-bottom: 10px;
}
.commentsGroup {
  padding: 0 35px;
  height: 100%;
  overflow-y: hidden;
}
.commentsGroup:hover {
  overflow-y: scroll;
}
.comments {
  height: 100px;
  border-bottom: 1px rgb(138, 136, 136) solid;
}
.userInfo {
  margin-top: 10px;
  position: relative;
  display: flex;
  align-items: center;
}
.userImg {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.userName {
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;
}
.userComments {
  display: flex;
  margin-top: 10px;
  font-size: 18px;
  margin-left: 10px;
  overflow-y: hidden;
}
.userComments:hover {
  overflow-y: scroll;
}
</style>