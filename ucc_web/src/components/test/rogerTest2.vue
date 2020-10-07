<template>
  <div class="SearchResult">
    <Navbar></Navbar>
    <div class="activity">
      <div class="item" v-for="index in searchResult" :key="index">
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
            <span v-for="tag in index.labelNameSet" :key="tag">#{{ tag }}</span>
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
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/base/Navbar";
export default {
  data() {
    return {
      searchResult: ["nothing.."],
    };
  },

  components: {
    Navbar: navbar,
  },

  created() {
    this.getParams();
  },

  methods: {
    getParams() {
      // 取到路由帶過來的引數
      const routerParams = this.$route.query.result;
      // 將資料放在當前元件的資料內
      this.searchResult = routerParams;
      console.log(routerParams[0].labelNameSet[0]);
    },
  },
  watch: {
    $route: "getParams",
  },
};
</script>

<style>
.SearchResult {
  position: relative;
  padding: 30px 25px;
  margin: auto;
  height: 100%;
  width: 900px;
  background-color: #fff;
  border-radius: 20px;
  z-index: 5;
  top: 100px;
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
