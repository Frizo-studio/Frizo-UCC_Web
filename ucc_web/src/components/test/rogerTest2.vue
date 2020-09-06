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
</style>
