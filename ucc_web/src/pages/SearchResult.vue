<template>
  <div class="SearchResult">
    <Navbar></Navbar>
    <div class="activity">
      <div class="item" v-for="index in comprehensiveList" :key="index">
        <div class="imgBox">
          <img :src="index.img" class="itemImg" />
        </div>
        <div class="itemContent">
          <div class="activityOwnUser">● 社團名稱</div>
          <div class="activityCreatedDate">6月10號 20:25</div>
          <div class="itemTitle">
            <b>{{ index.title }}</b>
          </div>
          <div class="tag">
            <span v-for="tag in tags" :key="tag.label" :type="tag.type"
              >#{{ tag.label }}</span
            >
          </div>
          <div class="itemIntroduction mb-4">
            <div class="description">{{ index.message }}</div>
          </div>
          <div class="maxJoinPeople">人{{ index.joinPeople }}人</div>
          <div class="place">地 台北商業大學</div>
          <div class="activityDate">時{{ index.deadline }}</div>
          <div class="message">訊 30</div>
          <div class="like">愛 15{{ childUserName }}</div>
        </div>
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/base/Navbar";
export default {
  name: "comprehensiveList",
  components: {
    Navbar,
  },
  data() {
    return {
      tags: [
        { type: "info", label: "熱舞" },
        { type: "info", label: "談得賽" },
        { type: "info", label: "哇哈哈" },
        { type: "info", label: "朵茉莉扣" },
        { type: "info", label: "kn44" },
      ],
      comprehensiveList: [],
    };
  },
  methods: {
    getParams() {
      // 取到路由帶過來的引數
      const routerParams = this.$route.query.result;
      // 將資料放在當前元件的資料內
      this.searchResult = routerParams;
      console.log(routerParams);
    },
  },
  created() {
    this.getParams();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SearchResult {
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
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
}

.activityOwnUser {
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  align-items: center;
}

.activityCreatedDate {
  grid-column: 2/3;
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
