<template>
  <div class="userPage">
    <!-- useCenter為固定水平置中，merge進user群組時，可調整刪除 -->
    <div class="userIntroductionBg"></div>
    <div class="useCenter">
      <div class="userHome">
        <div class="userIntroduction">
          <div class="userBackgroundPhoto"></div>
          <div class="userAvatar">
            <el-avatar :size="150" :src="circleUrl"></el-avatar>
          </div>
          <div class="userName">
            <b>{{ userName }}</b>
          </div>
          <div class="description">{{ description }}</div>
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
                <component
                  class="searchLists"
                  :is="listPrint"
                ></component> </keep-alive
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
import comprehensiveList from "@/components/searchResultListGroup/comprehensiveList";
import activityList from "@/components/searchResultListGroup/activityList";

export default {
  components: {
    comprehensiveList,
    activityList,
  },
  data() {
    return {
      userName: "roger",
      description: "自我介紹",
      radio: 1,
      activeName: "first",
      listPrint: "comprehensiveList",
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
  /* 高度之後再做微調 */
  height: 200vh;
}

.useCenter {
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.userHome {
  width: 750px;
  /* 高度之後再做微調 */
  height: 200vh;
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
  background-color: aqua;
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
  height: 100vh;
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
  height: 700px;
}
</style>