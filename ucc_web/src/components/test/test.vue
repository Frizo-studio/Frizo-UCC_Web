
<template>
<<<<<<< HEAD
  <div class="initiateActivity">
    <!-- Model 主體 -->
    <div :class="isActivityPage?'ModelForActivity':'ModelForMessage'">
      <div :class="isActivityPage?'stateLine':'stateLine2'"></div>
      <!-------------------------- 發起活動頁面 -------------------------->
      <div class="initialActivityPage" v-if="isActivityPage">
        <div class="switchPage">
          <li>
            <div class="switchBtn" id="activityBtn" @click="gotoActivityPage">發布活動</div>
          </li>
          <li>
            <div class="switchBtn" @click="gotoMessagePage">發布消息</div>
          </li>
        </div>
        <div class="line"></div>
        <!-- 活動標題 -->
        <input
          type="text"
          class="activityTitle"
          v-model="event.title"
          placeholder="標題"
          maxlength="20"
        />
        <!-- 活動描述 -->
        <textarea
          class="activityDescription"
          v-model="event.description"
          style="width:97%;height:200px;"
          placeholder="活動描述..."
        ></textarea>
        <!-- 上傳活動照片 -->
        <div class="dm">
          <label :class="isAddPic ? 'havePic' : 'noPic' ">
            <input type="file" style="display:none;" accept="image/*" @change="selectDM" />
            <font-awesome-icon icon="file-image" size="lg" class="imageIcon" />
            <span>上傳照片</span>
          </label>
          <img :src="this.picPreview" class="dmImg" :class="isAddPic ? 'noPic' : 'havePic'" />
          <button
            style="border:none;background-color:white;color:rgb(165, 101, 42);"
            @click="deleteDmImg"
            :class="isAddPic ? 'haveDeleteIcon' : 'noDeleteIcon'"
          >
            <font-awesome-icon icon="times-circle" size="lg" class="closeIcon" />
          </button>
        </div>
        <!-- 活動人數 -->
        <div class="people">
          <label class="peopleDescription">人數</label>
          <select v-model="people" class="peopleSelect">
            <option>請選擇</option>
            <option value="5人">5人</option>
            <option value="5~10人">5~10人</option>
            <option value="10~20人">10~20人</option>
            <option value="20人以上">20以上</option>
          </select>
        </div>
        <!-- 活動地點 -->
        <div class="location">
          <label class="locationDescription">活動地點</label>
          <input type="text" class="locationInput" placeholder="請輸入活動地點" />
        </div>
        <!-- 報名截止日 -->
        <div class="deadline">
          <span class="demonstration">活動報名截止日</span>
          <el-date-picker
            v-model="event.registrationDeadline"
            type="date"
            placeholder="選擇日期"
            @change="deadlineDateChange"
          >
            <template slot="prepend">活動報名截止日</template>
          </el-date-picker>
        </div>
        <!-- 活動開始日期 -->
        <div class="time">
          <span class="demonstration">活動開始日期</span>
          <el-date-picker
            v-model="event.eventStartTime"
            type="date"
            placeholder="選擇日期"
            @change="startTimeDateChange"
          >
            <template slot="prepend">活動開始日期</template>
          </el-date-picker>
        </div>
        <!-- 活動標籤 -->
        <div class="tag">
          <el-tag
            :key="tag"
            v-for="tag in event.labelNameList"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          ></el-input>
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="newTag"
            :disabled="tagsNumber == 5"
          >新增標籤</el-button>
        </div>
        <!-- 提交活動至後端 -->
        <div class="activityPush">
          <button class="pushActivityBtn" round @click.prevent="sendCreateRequest">發布</button>
        </div>
      </div>
      <!-------------------------- 發起消息頁面 -------------------------->
      <div class="initialMessagePage" v-else>
        <div class="switchPage">
          <li>
            <div class="switchBtn" @click="gotoActivityPage">發布活動</div>
          </li>
          <li>
            <div
              class="switchBtn"
              id="messageBtn"
              @click="gotoMessagePage"
              style="font-weigth:700;"
            >發布消息</div>
          </li>
        </div>
        <div class="line"></div>
        <!-- 頭像&姓名 -->
        <div class="avatar">
          <div class="userImgFrame">
            <img
              class="userImg"
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646029"
            />
          </div>
          <span class="userName">{{userInfo.name}}</span>
        </div>
        <!-- 消息描述 -->
        <textarea class="messageDescription" style="width:97%;height:200px;" placeholder="有什麼消息..."></textarea>
        <!-- 上傳消息照片 -->
        <div class="msgPic">
          <label :class="isAddMsgPic ? 'haveMsgPic' : 'noMsgPic' ">
            <input type="file" style="display:none;" accept="image/*" @change="selectMsgPic" />
            <font-awesome-icon icon="file-image" size="lg" class="imageIcon" />
            <span>上傳照片</span>
          </label>
          <img
            :src="this.msgPicPreview"
            class="msgPicImg"
            :class="isAddMsgPic ? 'noMsgPic' : 'haveMsgPic'"
          />
        </div>
        <!-- 提交消息至後端 -->
        <div class="messagePush">
          <button class="pushMessageBtn">發布</button>
=======
  <div class="content">
    <div class="banner mt-3">
      <Banner></Banner>
    </div>
    <div class="activityList">
      <div class="selectList" ref="selectList4Event">
        <!-- <el-radio-group v-model="radio" @change="changeList" style="display:none;">
          <el-radio :label="1">
            <b>熱門</b>
          </el-radio>
          <el-radio :label="2">
            <b>最新</b>
          </el-radio>
          <el-radio :label="3">
            <b>追蹤</b>
          </el-radio>
        </el-radio-group>-->
        <!-- {{this.radio}} -->
        <div class="listBtnGroup">
          <div class="listBtn" :class="{active:radio==1}">
            <span @click.prevent="changeList(1)">熱門</span>
          </div>
          <div class="listBtn" :class="{active:radio==2}">
            <span @click.prevent="changeList(2)">最新</span>
          </div>
          <div class="listBtn" :class="{active:radio==3}">
            <span @click.prevent="changeList(3)">追蹤</span>
          </div>
>>>>>>> 375ebd68b00d52811f869f78fa0600ff3a2dd204
        </div>
      </div>
      <keep-alive>
        <component :is="listPrint"></component>
      </keep-alive>
      <div class="mt-3">
        <el-button type="primary" round class="mb-3">更多</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import hotList from "@/components/test/testHotlist";
import newList from "@/components/listGroup/newList";
import followList from "@/components/listGroup/followList";

export default {
  name: "Content",

  components: {
    Banner,
    hotList,
    newList,
    followList
  },

  data() {
    return {
      listPrint: "hotList",
      radio: 1,
      selectListHeight: "",
      curHeight: "",
      Height: "",
      changeHeight: ""
    };
  },
<<<<<<< HEAD
  methods: {
    // 送出活動發起請求
    sendCreateRequest() {
      createEvent(this.event)
        .then(resp => {
          console.log(resp.data);
          alert("發佈成功");
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    // 進入發起活動頁
    gotoActivityPage() {
      if (this.isActivityPage === false) {
        this.isActivityPage = true;
      }
    },
    // 進入發起消息頁
    gotoMessagePage() {
      if (this.isActivityPage === true) {
        this.isActivityPage = false;
      }
    },
    // 活動照片匯入
    selectDM(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      alert(files[0].name);
      this.dmPicture = files[0];
      this.isAddPic = true;

      // 活動圖片預覽
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = e => {
          this.picPreview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    // 刪除預覽活動照片
    deleteDmImg() {
      this.picPreview = null;
      this.isAddPic = false;
    },
    // 訊息照片匯入
    selectMsgPic(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      alert(files[0].name);
      this.msgPicture = files[0];
      this.isAddMsgPic = true;
=======
>>>>>>> 375ebd68b00d52811f869f78fa0600ff3a2dd204

  methods: {
    changeList(val) {
      if (val == 1) {
        this.radio = 1;
        this.listPrint = "hotList";
      } else if (val == 2) {
        this.radio = 2;
        this.listPrint = "newList";
      } else if (val == 3) {
        this.radio = 3;
        this.listPrint = "followList";
      }
    },
    // selectList Function
    selectListFix() {
      this.curHeight = window.pageYOffset;
      if (this.curHeight > this.changeHeight) {
        this.selectList.classList.add("selectFix");
      } else {
        this.selectList.classList.remove("selectFix");
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.selectListFix, true);
    this.selectList = this.$refs.selectList4Event;

    // 偵測selectList 物件高度
    this.selectListHeight = this.selectList.offsetTop;
    // 計算selectList與使用者窗口的高度
    this.Height = this.selectListHeight - this.curHeight;
    // 計算要Fixed的高
    this.changeHeight = this.Height - 62;
  }

  // mounted() {
  //   if (this.radio === 1) {
  //     this.listPrint = hotList;
  //   } else if (this.radio === 2) {
  //     this.listPrint = newList;
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  position: relative;
  top: 50px;
  margin: auto;
  width: 900px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 15px;
}
<<<<<<< HEAD
/* 發起活動模組 */
.ModelForActivity {
=======
.banner {
>>>>>>> 375ebd68b00d52811f869f78fa0600ff3a2dd204
  position: relative;
  padding-top: 7px;
}
/* .activityList {
  margin: auto;
  width: 900px;
  box-sizing: border-box;
} */
.selectList {
  text-align: right;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: auto auto 200px;
  grid-template-rows: 100%;
  /* height: 35px; */
}
<<<<<<< HEAD
/* 發起消息模組 */
.ModelForMessage {
  position: relative;
  padding: 15px 25px;
  margin: auto;
  height: 550px;
  width: 600px;
  background-color: #fff;
  border-radius: 10px;
  z-index: 5;
}
.switchPage {
=======
.listBtnGroup {
  position: relative;
>>>>>>> 375ebd68b00d52811f869f78fa0600ff3a2dd204
  grid-row: 1/2;
  grid-column: 3/4;
  display: grid;
  grid-template-columns: auto auto auto 20px;
  grid-template-rows: 100%;
  margin-top: 5px;
}
.listBtn {
  text-align: center;
  font-size: 20px;
}
<<<<<<< HEAD
.activityDescription:focus {
  border: 1px rgb(165, 101, 42) solid;
  outline: none;
}

/* 活動圖片CSS */
.dm {
  position: relative;
  grid-row: 8/13;
  max-width: 240px;
  max-height: 200px;
  overflow: hidden;
  margin-top: 6px;
}

.dm label {
  height: 25px;
  width: 100px;
  position: absolute;
  left: 10px;
  top: 5px;
  margin: 0;
}
.dm label span,
.imageIcon {
  transition: color 0.2s;
  margin-left: 3px;
}
.dm label:hover span,
.dm label:hover .imageIcon {
  color: rgb(165, 101, 42);
}
.dmImg {
  position: absolute;
  width: 250px;
  height: 200px;
  object-fit: contain;
}
.havePic {
  display: none;
}
.noPic {
  display: block;
}
.noDeleteIcon {
  display: none;
}
.haveDeleteIcon {
  position: absolute;
  right: 2px;
  z-index: 5;
  border-radius: 50%;
  box-shadow: 1px 1px 2px 1px black;
  height: 22px;
  width: 22px;
  display: grid;
  place-items: center;
}

/* 活動人數 & 地點CSS */
.people {
  grid-row: 13/14;
  display: flex;
  margin-left: 72px;
  font-size: 14px;
}
.peopleDescription,
.locationDescription {
  line-height: 25px;
  margin-right: 3px;
}
.peopleSelect,
.locationInput {
  height: 25px;
  margin-left: 5px;
  border: 1px #ddd solid;
  border-radius: 5px;
  outline: none;
  color: rgb(105, 105, 105);
  background-color: #ddd;
  transition: all 0.2s ease;
}
.peopleSelect:focus,
.locationInput:focus {
  border: 1px rgb(165, 101, 42) solid;
}
.location {
  grid-row: 14/15;
  display: flex;
  height: 25px;
  margin-left: 44px;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
}
.locationInput {
  border: 1px #ddd solid;
  padding: 5px;
  width: 220px;
}
/* 報名截止時間 */
.deadline {
  grid-row: 15/16;
=======
.listBtn span:hover {
  cursor: pointer;
>>>>>>> 375ebd68b00d52811f869f78fa0600ff3a2dd204
}
.active {
  border-bottom: 2px rgb(255, 155, 23) solid;
}
/* .selectFix {
  text-align: right;
  background-color: #ffffff;
  box-shadow: 0px 0px 3px #000000;
  height: 35px;
  padding-top: 8px;
  padding-right: 10px;
  position: fixed;
  width: 900px;
  top: 62px;
  z-index: 5;
} */

@media (max-width: 995px) {
  .activityList {
    width: 750px;
  }
}

<<<<<<< HEAD
.initialMessagePage {
  display: grid;
  grid-template-rows: repeat(15, 1fr);
  height: 500px;
}
/* 頭像&姓名 CSS */
.avatar {
  grid-row: 2/3;
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 7px;
}
.userImgFrame {
  height: 30px;
  width: 30px;
  position: relative;
  border-radius: 50%;
  border: 1px black solid;
  object-fit: contain;
  margin-right: 8px;
}
.userImg {
  height: 28px;
  width: 28px;
  border-radius: 50%;
}
.userName:hover {
  cursor: default;
}
/* 消息描述CSS */
.messageDescription {
  grid-row: 3/9;
  display: flex;
  border: 1px lightgray solid;
  border-radius: 5px;
  transition: all 0.1s ease;
  padding: 5px;
  margin-left: 5px;
  margin-top: 5px;
}
.messageDescription:focus {
  border: 1px rgb(165, 101, 42) solid;
  outline: none;
}

/* 消息圖片CSS */
.msgPic {
  position: relative;
  grid-row: 9/16;
  float: left;
  max-width: 240px;
  max-height: 200px;
  overflow: hidden;
  margin-top: 20px;
=======
@media (max-width: 837px) {
  .activityList {
    width: 100%;
  }
}

/* @media (max-width: 650px) {
  .activityList {
    width: 450px;
  }
>>>>>>> 375ebd68b00d52811f869f78fa0600ff3a2dd204
}

@media (max-width: 450px) {
  .activityList {
    width: 300px;
  }
} */
</style>
