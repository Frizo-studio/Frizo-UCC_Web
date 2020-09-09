<template>
  <div class="user">
    <Navbar></Navbar>

    <div class="title">
      <h1>Find Event Part</h1>
    </div>

    <hr />

    <div class="main">
      <p>主要</p>

      <form>
        <div>
          <label>關鍵字</label>
          <input type="text" v-model="searchSpec.keywords" />
        </div>

        <div>
          <label>頁數</label>
          <input type="number" v-model="searchSpec.pageNumber" />
        </div>

        <div>
          <label>活動發表時間起始</label>
          <input type="date" v-model="searchSpec.createTimeA" />
          <label>活動發表時間結束</label>
          <input type="date" v-model="searchSpec.createTimeB" />
        </div>

        <div>
          <label>活動開始時間起始</label>
          <input type="date" v-model="searchSpec.startTimeA" />
          <label>活動開始時間結束</label>
          <input type="date" v-model="searchSpec.startTimeB" />
        </div>

        <div>
          <label>報名開始時間起始</label>
          <input type="date" v-model="searchSpec.registrationDeadlineA" />
          <label>報名開始時間結束</label>
          <input type="date" v-model="searchSpec.registrationDeadlineB" />
        </div>

        <div>
          <label>依照以下排序:</label>
          <label>
            <input type="radio" name="sortBy" value="createdAt" checked v-model="searchSpec.sortBy" />發表時間
          </label>
          <label>
            <input type="radio" name="sortBy" value="likes" v-model="searchSpec.sortBy" />熱度
          </label>
          <label>
            <input type="radio" name="sortBy" value="eventStartTime" v-model="searchSpec.sortBy" />活動開始時間
          </label>
          <label>
            <input
              type="radio"
              name="sortBy"
              value="registrationDeadline"
              v-model="searchSpec.sortBy"
            />報名截止時間
          </label>
        </div>

        <div>
          <label>選擇升降序:</label>
          <label>
            <input
              type="radio"
              name="direction"
              value="DESC"
              v-model="searchSpec.direction"
              checked
            />降序
          </label>
          <label>
            <input type="radio" name="direction" value="ASC" v-model="searchSpec.direction" />升序
          </label>
        </div>

        <div>
          <input type="submit" value="search" @click.prevent="sendQuery" />
        </div>
      </form>

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
import { findEvent } from "@/api/event";
export default {
  data() {
    return {
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
        sortBy: "createdAt",
      },

      searchResult: ["nothing.."],
    };
  },

  methods: {
    sendQuery() {
      findEvent(this.searchSpec)
        .then((resp) => {
          resp.data.result.forEach((element) => {
            element.eventStartTime = element.eventStartTime.substr(0, 10);
            element.createdAt = element.createdAt.substr(0, 10);
          });
          var query = resp.data.result;
          console.log(query);
          if (resp.data.success) {
            this.searchResult = resp.data.result;
            //
            this.$router.push({
              path: "/testForRoger2",
              // name: 'mallList',
              query: {
                result: resp.data.result,
              },
            });
            //
          } else {
            console.log(resp.data.message);
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    },
  },

  components: {
    Navbar: navbar,
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
