<template>
  <div class="userPage">
    <Navbar></Navbar>
    <!-- useCenter為固定水平置中，merge進user群組時，可調整刪除 -->
    <div class="userIntroductionBg"></div>
    <div class="useCenter">
      <div class="userHome">
        <div class="userIntroduction">
          <div class="userBackgroundPhoto">
            <img class="imgSize" :src="this.userBgImg" />
          </div>
          <div class="userAvatar">
            <el-avatar :size="150" :src="this.userImg"></el-avatar>
          </div>
          <div class="userName">
            <b>{{ this.name }}</b>
          </div>
          <div class="description">{{ this.description }}</div>
          <div class="divider"></div>
        </div>
        <div class="userActivity">
          <el-tabs
            class="switchTag"
            v-model="activeName"
            @tab-click="handleClick"
          >
            <el-tab-pane class="contentPage" label="活動" name="first"
              ><keep-alive>
                <!-- <component
                  class="searchLists"
                  :is="listPrint"
                ></component>  -->
                <div class="comprehensiveList">
                  <div class="activity">
                    <div
                      class="item"
                      v-for="index in comprehensiveList"
                      :key="index"
                    >
                      <div class="imgBox">
                        <img :src="index.dmUrl" class="itemImg" />
                      </div>
                      <div class="itemContent">
                        <div class="activityOwnUser">
                          ●{{ index.posterName }}
                        </div>
                        <div class="activityCreatedDate">
                          {{ index.createdAt }}
                        </div>
                        <div class="itemTitle">
                          <b>{{ index.title }}</b>
                        </div>
                        <div class="tag">
                          <span
                            v-for="tag in tags"
                            :key="tag.label"
                            :type="tag.type"
                            >#{{ tag.label }}</span
                          >
                        </div>
                        <div class="itemIntroduction mb-4">
                          <div class="description">{{ index.message }}</div>
                        </div>
                        <div class="maxJoinPeople">
                          <i class="el-icon-user-solid"></i
                          >{{ index.maxNumberOfPeople }}人
                        </div>
                        <div class="place">
                          <i class="el-icon-location"></i> 台北商業大學
                        </div>
                        <div class="activityDate">
                          <i class="el-icon-time"></i>{{ index.eventStartTime }}
                        </div>
                        <div class="message">
                          <i class="el-icon-chat-round"></i> 30
                        </div>
                        <div class="like">
                          <font-awesome-icon
                            icon="heart"
                            size="sm"
                            style="color: #000"
                          />
                          {{ index.likes }}
                        </div>
                      </div>
                      <div class="divider"></div>
                    </div>
                  </div>
                </div> </keep-alive
            ></el-tab-pane>
            <el-tab-pane class="contentPage" label="消息" name="second"
              ><keep-alive>
                <component
                  class="searchLists"
                  :is="listPrint"
                ></component> </keep-alive
            ></el-tab-pane>
          </el-tabs>

          <div class="activityContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/base/Navbar";
// import comprehensiveList from "@/components/searchResultListGroup/comprehensiveList";
import activityList from "@/components/searchResultListGroup/activityList";
import { getOtherUserInfo } from "@/api/user";
import { findEvent } from "@/api/event";

export default {
  components: {
    // comprehensiveList,
    activityList,
    Navbar,
  },
  data() {
    return {
      name: "",
      userImg: null,
      userBgImg: null,
      description: "",
      radio: 1,
      activeName: "first",
      listPrint: "comprehensiveList",
      data: {
        keywords: "吉他",
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
      comprehensiveList: [],
    };
  },
  methods: {
    handleClick() {
      if (this.listPrint == "comprehensiveList") {
        this.listPrint = "activityList";
      } else {
        this.listPrint = "comprehensiveList";
      }
    },
    getParams() {
      // 取到路由帶過來的引數
      const routerParams = this.$route.query.result;
      // 將資料放在當前元件的資料內
      this.getUserData(routerParams);
      this.getUserEvent(this.data);
    },

    getUserData(id) {
      getOtherUserInfo(id)
        .then((r) => {
          console.log(r.data.result);
          this.name = r.data.result.name;
          this.userImg = r.data.result.imageUrl;
          this.description = r.data.result.description;
          this.userBgImg = r.data.result.backgroundUrl;
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    },

    getUserEvent(data) {
      findEvent(data)
        .then((r) => {
          r.data.result.forEach((element) => {
            element.eventStartTime = element.eventStartTime.substr(0, 10);
            element.createdAt = element.createdAt.substr(0, 10);
          });
          this.comprehensiveList = r.data.result;
          console.log(r.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getParams();
  },

  name: "userPage",
};
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
.userPage {
  position: relative;
  top: 80px;
  /* 高度之後再做微調 */
  height: 280vh;
}

.useCenter {
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.userHome {
  width: 900px;
  /* 高度之後再做微調 */
  height: 1200px;
  background-color: #ffffff;
}

.userIntroduction {
  position: relative;
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
}

.userIntroductionBg {
  position: absolute;
  width: 100%;
  /* background-color: #fff; */
  height: 400px;
}
.userBackgroundPhoto {
  grid-column: 1/9;
  grid-row: 1/5;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.imgSize {
  height: 100%;
  width: 100%;
}

.userAvatar {
  grid-column: 1/9;
  grid-row: 4/6;
  height: 100%;
  margin: auto;
}

.userName {
  grid-column: 1/9;
  grid-row: 7/8;
  font-size: 28px;
}

.description {
  position: relative;
  grid-column: 1/9;
  grid-row: 8/9;
  font-size: 20px;
}

.userActivity {
  position: relative;
  height: 150vh;
  /* top: 5px; */
  background-color: #fff;
  padding: 5px 25px 0 25px;
}
.switchTag {
  /* margin-top: 5px; */
  background-color: #fff;
}
.contentPage {
  /* background-color: rgb(165, 101, 42); */
  height: 750px;
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
  grid-column: 1/3;
  grid-row: 1/2;
  display: flex;
  align-items: center;
}

.activityCreatedDate {
  grid-column: 3/5;
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