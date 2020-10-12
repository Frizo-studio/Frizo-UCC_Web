<template>
  <div class="SearchResult">
    <navbar></navbar>
    <!-- Model 主體 -->
    <div class="Model">
      <div id="statusLine"></div>
      <!-------------------------- 活動頁面(綜合) -------------------------->
      <div
        class="Page"
        id="comprehensiveActivityPage"
        v-show="PageStatus.isComprehensivePage"
      >
        <div class="switchPage">
          <li>
            <div
              class="switchBtn"
              id="comprehensiveBtnInComprehensivePage"
              @click="switchPageFun"
              style="font-weight: 900"
            >
              綜合
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="followBtnInComprehensivePage"
              @click="switchPageFun"
            >
              追蹤
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="activityBtnInComprehensivePage"
              @click="switchPageFun"
            >
              活動
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="accountBtnInComprehensivePage"
              @click="switchPageFun"
            >
              用戶
            </div>
          </li>

          <li class="filter">排序依照</li>
          <li class="selector">
            <select>
              <option>熱門</option>
              <option>最新</option>
              <option>追蹤</option>
            </select>
          </li>
        </div>
        <div class="line"></div>
        <keep-alive>
          <component class="searchLists" :is="listPrint"></component>
        </keep-alive>
        <div id="app">
          <!-- kebab-case in HTML -->
          <child-input :user-name="initial_input"></child-input>
        </div>
        <div class="mt-3">
          <el-button type="primary" round class="mb-3">更多</el-button>
        </div>
      </div>
      <!-------------------------- 活動頁面(追蹤) -------------------------->
      <div
        class="Page"
        id="followActivityPage"
        v-show="PageStatus.isFollowPage"
      >
        <div class="switchPage">
          <li>
            <div
              class="switchBtn"
              id="comprehensiveBtnInFollowPage"
              @click="switchPageFun"
            >
              綜合
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="followBtnInFollowPage"
              @click="switchPageFun"
              style="font-weight: 900"
            >
              追蹤
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="activityBtnInFollowPage"
              @click="switchPageFun"
            >
              活動
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="accountBtnInFollowPage"
              @click="switchPageFun"
            >
              用戶
            </div>
          </li>
          <li class="filter">排序依照</li>
          <li class="selector">
            <select>
              <option>熱門</option>
              <option>最新</option>
              <option>追蹤</option>
            </select>
          </li>
        </div>
        <div class="line"></div>
        <keep-alive>
          <component class="searchLists" :is="listPrint"></component>
        </keep-alive>
        <div class="mt-3">
          <el-button type="primary" round class="mb-3">更多</el-button>
        </div>
      </div>
      <!-------------------------- 活動頁面(活動) -------------------------->
      <div class="Page" id="ActivityPage" v-show="PageStatus.isActivityPage">
        <div class="switchPage">
          <li>
            <div
              class="switchBtn"
              id="comprehensiveBtnInActivityPage"
              @click="switchPageFun"
            >
              綜合
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="followBtnInActivityPage"
              @click="switchPageFun"
            >
              追蹤
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="activityBtnInActivityPage"
              @click="switchPageFun"
              style="font-weight: 900"
            >
              活動
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="accountBtnInActivityPage"
              @click="switchPageFun"
            >
              用戶
            </div>
          </li>
          <li class="filter">排序依照</li>
          <li class="selector">
            <select>
              <option>熱門</option>
              <option>最新</option>
              <option>追蹤</option>
            </select>
          </li>
        </div>
        <div class="line"></div>
        <keep-alive>
          <component class="searchLists" :is="listPrint"></component>
        </keep-alive>
        <div class="mt-3">
          <el-button type="primary" round class="mb-3">更多</el-button>
        </div>
      </div>
      <!-------------------------- 活動頁面(用戶) -------------------------->
      <div class="Page" id="AccountPage" v-show="PageStatus.isAccountPage">
        <div class="switchPage">
          <li>
            <div
              class="switchBtn"
              id="comprehensiveBtnInAccountPage"
              @click="switchPageFun"
            >
              綜合
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="followBtnInAccountPage"
              @click="switchPageFun"
            >
              追蹤
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="activityBtnInAccountPage"
              @click="switchPageFun"
            >
              活動
            </div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="accountBtnInAccountPage"
              @click="switchPageFun"
              style="font-weight: 900"
            >
              用戶
            </div>
          </li>
          <li class="filter">排序依照</li>
          <li class="selector">
            <select>
              <option>熱門</option>
              <option>最新</option>
              <option>追蹤</option>
            </select>
          </li>
        </div>
        <div class="line"></div>
        <keep-alive>
          <component class="searchLists" :is="listPrint"></component>
        </keep-alive>
        <div class="mt-3">
          <el-button type="primary" round class="mb-3">更多</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { createEvent } from "@/api/event";
import navbar from "@/components/base/Navbar";
import { mapGetters } from "vuex";
import comprehensiveList from "@/components/searchResultListGroup/comprehensiveList";
import followList from "@/components/searchResultListGroup/followList";
import activityList from "@/components/searchResultListGroup/activityList";
import accountList from "@/components/searchResultListGroup/accountList";

export default {
  name: "SearchPage",
  components: {
    comprehensiveList,
    activityList,
    followList,
    accountList,
    navbar,
  },
  data() {
    return {
      //頁面切換控制項
      PageStatus: {
        isComprehensivePage: true,
        isFollowPage: false,
        isActivityPage: false,
        isAccountPage: false,
      },
      listPrint: "comprehensiveList",
    };
  },
  methods: {
    // 切換頁面
    switchPageFun(e) {
      var targetId = e.target.id;
      //先判斷從哪一頁做切換
      if (
        targetId.indexOf("ComprehensivePage") != -1 && // 在綜合活動頁
        targetId != "comprehensiveBtnInComprehensivePage"
      ) {
        this.PageStatus.isComprehensivePage = false;
        //判斷要前往哪一頁
        if (targetId.indexOf("follow") != -1) {
          this.PageStatus.isFollowPage = true;
          this.listPrint = "followList";
          document.getElementById("statusLine").style.left = "110px";
        } else if (targetId.indexOf("activity") != -1) {
          document.getElementById("statusLine").style.left = "175px";
          this.listPrint = "activityList";
          this.PageStatus.isActivityPage = true;
        } else if (targetId.indexOf("account") != 1) {
          document.getElementById("statusLine").style.left = "240px";
          this.PageStatus.isAccountPage = true;
          this.listPrint = "accountList";
        }
      } else if (
        targetId.indexOf("FollowPage") != -1 && //在追蹤活動頁
        targetId != "followBtnInFollowPage"
      ) {
        this.PageStatus.isFollowPage = false;
        if (targetId.indexOf("comprehensive") != -1) {
          document.getElementById("statusLine").style.left = "45px";
          this.PageStatus.isComprehensivePage = true;
          this.listPrint = "comprehensiveList";
        } else if (targetId.indexOf("activity") != -1) {
          document.getElementById("statusLine").style.left = "175px";
          this.listPrint = "activityList";
          this.PageStatus.isActivityPage = true;
        } else if (targetId.indexOf("account") != -1) {
          document.getElementById("statusLine").style.left = "240px";
          this.PageStatus.isAccountPage = true;
          this.listPrint = "accountList";
        }
      } else if (
        targetId.indexOf("ActivityPage") != -1 && //在純顯示活動頁
        targetId != "activityBtnInActivityPage"
      ) {
        this.PageStatus.isActivityPage = false;
        if (targetId.indexOf("comprehensive") != -1) {
          document.getElementById("statusLine").style.left = "45px";
          this.listPrint = "comprehensiveList";
          this.PageStatus.isComprehensivePage = true;
        } else if (targetId.indexOf("follow") != -1) {
          document.getElementById("statusLine").style.left = "110px";
          this.listPrint = "followList";
          this.PageStatus.isFollowPage = true;
        } else if (targetId.indexOf("account") != -1) {
          document.getElementById("statusLine").style.left = "240px";
          this.PageStatus.isAccountPage = true;
          this.listPrint = "accountList";
        }
      } else if (
        targetId.indexOf("AccountPage") != -1 && //在帳號頁
        targetId != "accountBtnInAccountPage"
      ) {
        this.PageStatus.isAccountPage = false;
        if (targetId.indexOf("comprehensive") != -1) {
          document.getElementById("statusLine").style.left = "45px";
          this.listPrint = "comprehensiveList";
          this.PageStatus.isComprehensivePage = true;
        } else if (targetId.indexOf("follow") != -1) {
          document.getElementById("statusLine").style.left = "110px";
          this.listPrint = "followList";
          this.PageStatus.isFollowPage = true;
        } else if (targetId.indexOf("activity") != -1) {
          document.getElementById("statusLine").style.left = "175px";
          this.listPrint = "activityList";
          this.PageStatus.isActivityPage = true;
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      userInfo: "user/userInfo",
    }),
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
}
.SearchResult {
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
}
/* 活動搜尋頁-綜合 */
.Model {
  position: relative;
  padding: 30px 25px;
  margin: auto;
  height: 100%;
  width: 900px;
  background-color: #fff;
  border-radius: 20px;
  z-index: 5;
  /* overflow: hidden; */
}
.switchPage {
  grid-row: 1/2;
  display: flex;
  padding-left: 20px;
}
.switchBtn {
  font-size: 20px;
  display: inline;
  margin-right: 25px;
  cursor: pointer;
}
.filter {
  position: absolute;
  margin-top: 1px;
  right: 80px;
}
.selector {
  position: absolute;
  right: 10px;
  border-radius: 5px;
}
#statusLine {
  position: absolute;
  z-index: 1;
  top: 67px;
  left: 45px;
  height: 3px;
  width: 40px;
  background-color: rgb(165, 101, 42);
  transition: all 0.3s ease;
}
.line {
  height: 1.5px;
  width: 100%;
  /* overflow: hidden; */
  position: absolute;
  background-color: rgb(156, 156, 156);
  margin-top: 40px;
  left: 0px;
}
.Page {
  display: grid;
  grid-template-rows: repeat(18, 1fr);
  height: 770px;
}
.searchLists {
  margin-top: 10px;
}
</style>