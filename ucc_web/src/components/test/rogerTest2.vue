<template>
  <div class="user">
    <Navbar></Navbar>
    <div class="main">
      <div>
        <ul>
          <li v-for="(item, index) in searchResult" :key="item">
            <div :id="index">
              <div class="item">
                <div class="imgBox">
                  <img :src="item.dmPicture" class="itemImg" />
                </div>
                <div class="itemContent">
                  <div class="activityOwnUser">
                    <div>
                      <!-- 圖示 -->
                    </div>
                    <div>社團名稱</div>
                  </div>
                  <div class="activityCreatedDate">{{item.createdAt}}</div>
                  <div class="itemTitle">
                    <b>{{item.title}}</b>
                  </div>
                  <div class="tagGroup">
                    <!-- <div class="tag" v-for="tag in tags" :key="tag.label" :type="tag.type"> -->
                    <div class="tag" v-for="tag in tags" :key="tag.label" :type="tag.type">
                      <span>{{ item.labelNameList }}</span>
                    </div>
                  </div>
                  <div class="itemIntroduction mb-4">
                    <div class="description">{{item.description}}</div>
                  </div>
                  <!-- <div class="divider"></div> -->
                  <div class="bottomGroup">
                    <div class="maxJoinPeople">
                      <font-awesome-icon icon="user" size="lg" class="tipsIcon" />
                      {{item.maxNumberOfPeople}}人
                    </div>
                    <div class="place">
                      <font-awesome-icon icon="map-marker" size="lg" class="tipsIcon" />
                      {{item.place}}
                    </div>
                    <div class="activityDate">
                      <font-awesome-icon icon="clock" size="lg" class="tipsIcon" />
                      {{item.eventStartTime}}
                    </div>
                    <div class="message">
                      <font-awesome-icon icon="comment" size="lg" class="tipsIcon" />30
                    </div>
                    <div class="like">
                      <font-awesome-icon icon="heart" size="lg" class="tipsIcon" />
                      {{item.likes}}
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
              </div>
            </div>
          </li>
        </ul>
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
      console.log(routerParams);
    },
  },
  watch: {
    $route: "getParams",
  },
};
</script>

<style>
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
/* .item:nth-child(odd) {
  margin-right: 10px;
}
.item:nth-child(even) {
  margin-left: 10px;
} */

/* .item:hover {
  box-shadow: 0 0 15px #2e2e2e;
  transition: all 0.2s ease-in;
  transform: scale(1.01);
} */

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
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.activityOwnUser :first-child {
  height: 25px;
  width: 25px;
  background-color: chocolate;
  border-radius: 12.5px;
}

.activityCreatedDate {
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.itemTitle {
  /* font-size: 12px; */
  grid-column: 1/4;
  grid-row: 2/3;
  display: flex;
  align-items: center;
  text-align: left;
}

.tagGroup {
  grid-column: 4/6;
  grid-row: 1/3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  color: #ea7807;
  opacity: 0.8;
}

.tag {
  display: flex;
  justify-content: center;
}

.tag span {
  height: 90%;
  width: 90%;
  border: 1px #9e9e9e solid;
  border-radius: 5px;
  font-weight: 900;
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

.bottomGroup {
  grid-row: 5/6;
  grid-column: 1/6;
  display: grid;
  grid-template-columns: 15% 30% 25% 15% 15%;
  grid-template-rows: 100%;
  align-items: center;
}

.maxJoinPeople {
  text-align: left;
  grid-column: 1/2;
  grid-row: 1/2;
}

.activityDate {
  grid-column: 3/4;
  grid-row: 1/2;
  text-align: left;
}

.place {
  grid-column: 2/3;
  grid-row: 1/2;
  text-align: left;
}

.message {
  grid-column: 4/5;
  grid-row: 1/2;
  text-align: left;
}

.like {
  grid-column: 5/6;
  grid-row: 1/2;
  text-align: left;
}

@media (max-width: 650px) {
  .itemTitle {
    font-size: 22px;
  }
}
</style>
