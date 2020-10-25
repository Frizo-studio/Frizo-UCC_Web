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
            <select id="sortBy" @change="checkSortBy">
              <option value="likes">熱門</option>
              <option value="createdAt">最新</option>
              <!-- <option>追蹤</option> -->
            </select>
          </li>
        </div>
        <div class="line"></div>
        <!-- 資料顯示區塊 -->
        <div class="comprehensiveList">
          <div class="activity">
            <div class="item" v-for="index in comprehensiveList" :key="index">
              <div class="imgBox">
                <img :src="index.img" class="itemImg" />
              </div>
              <div class="itemContent">
                <div class="activityOwnUser">● 社團名稱</div>
                <div class="activityCreatedDate">{{ index.createdAt }}</div>
                <div class="itemTitle">
                  <b>{{ index.title }}</b>
                </div>
                <div class="tag">
                  <span v-for="tag in index.labelNameSet" :key="tag"
                    >#{{ tag }}</span
                  >
                </div>
                <div class="itemIntroduction mb-4">
                  <div class="description">{{ index.message }}</div>
                </div>
                <div class="maxJoinPeople">
                  人{{ index.maxNumberOfPeople }}人
                </div>
                <div class="place">地 {{ index.place }}</div>
                <div class="activityDate">時{{ index.eventStartTime }}</div>
                <div class="message">訊 30</div>
                <div class="like">愛 {{ index.likes }}</div>
              </div>
              <div class="divider"></div>
            </div>
          </div>
          <div class="itemIntroduction mb-4">
            <div class="description">{{ index.message }}</div>
          </div>
          <div class="maxJoinPeople">
            <i class="el-icon-user-solid"></i>{{ index.joinPeople }}人
          </div>
          <div class="place"><i class="el-icon-location"></i> 台北商業大學</div>
          <div class="activityDate">
            <i class="el-icon-time"></i>{{ index.deadline }}
          </div>
          <div class="message"><i class="el-icon-chat-round"></i> 30</div>
          <div class="like">
            <font-awesome-icon icon="heart" size="sm" style="color: #000" /> 15
          </div>
        </div>
        <!-- 資料顯示區塊 -->
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
import { findEvent } from "@/api/event";

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
      comprehensiveList: [],
      selected: "likes",
      selects: [
        { value: "likes" },
        { value: "createdAt" },
        { value: "eventStartTime" },
      ],
      searchSpec: {
        keywords: "",
        pageNumber: 0,
        createTimeA: null,
        createTimeB: null,
        startTimeA: null,
        startTimeB: null,
        registrationDeadlineA: null,
        registrationDeadlineB: null,
        direction: "DESC",
        sortBy: "likes",
      },
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
    getParams() {
      // 取到路由帶過來的引數
      const routerParams = this.$route.query.result;
      // 將資料放在當前元件的資料內
      this.comprehensiveList = routerParams;
    },
    checkSortBy() {
      this.searchSpec.sortBy = document.getElementById("sortBy").value;
      console.log(this.searchSpec);
      findEvent(this.searchSpec)
        .then((resp) => {
          resp.data.result.forEach((element) => {
            element.eventStartTime = element.eventStartTime.substr(0, 10);
            element.createdAt = element.createdAt.substr(0, 10);
          });
          console.log(resp);
          if (resp.data.success) {
            // console.log(resp.data.result);
            this.comprehensiveList = resp.data.result;
          } else {
            console.log(resp.data.message);
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    },
  },
  created() {
    this.getParams();
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
  position: relative;
  top: 50px;
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
/* ------------------------- */
.comprehensiveList {
  position: relative;
  top: 10px;
}

.activity {
  width: 100%;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr); */
}

.item {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  height: 250px;
  width: 100%;
  background-color: #ffffff;
  margin-top: 5px;
  /* border-bottom: 1px solid #707070; */
  padding-left: 1%;
  padding-right: 1%;
}

.imgBox {
  padding: 5px;
  grid-column: 1/2;
  grid-row: 1/2;
}

.itemImg {
  height: 100%;
  width: 100%;
}

.itemContent {
  grid-column: 2/4;
  grid-row: 1/2;
  padding: 0px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
}

.activityOwnUser {
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  align-items: center;
}

.activityCreatedDate {
  grid-column: 2/4;
  grid-row: 1/2;
  display: flex;
  align-items: center;
}

.itemTitle {
  /* font-size: 12px; */
  grid-column: 1/4;
  grid-row: 2/3;
  display: flex;
  align-items: center;
  text-align: left;
}

.tag {
  position: relative;
  top: -5px;
  grid-column: 4/6;
  grid-row: 2/3;
  color: #ea7807;
  opacity: 0.8;
}

.itemIntroduction {
  text-align: left;
  grid-column: 1/6;
  grid-row: 3/5;
  height: 35px;
}

/* 省略文字 */
/* 和chat.vue的省略文字寫法有些許差異 */
.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.itemTitle b:hover {
  text-decoration: underline;
  cursor: pointer;
}

.divider {
  position: relative;
  border-bottom: 1px #aaaaaa solid;
  grid-column: 1/4;
  grid-row: 1/2;
  width: 100%;
  height: 1px;
  top: 100%;
}

.maxJoinPeople {
  text-align: left;
  grid-column: 1/2;
  grid-row: 5/6;
}

.activityDate {
  grid-column: 2/3;
  grid-row: 5/6;
  text-align: left;
}

.place {
  grid-column: 3/4;
  grid-row: 5/6;
  text-align: left;
}

.message {
  grid-column: 4/5;
  grid-row: 5/6;
  text-align: left;
}

.like {
  grid-column: 5/6;
  grid-row: 5/6;
  text-align: left;
}

@media (max-width: 650px) {
  .itemTitle {
    font-size: 22px;
  }
}
</style>