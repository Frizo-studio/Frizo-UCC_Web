<template>
  <div>

      <div class="topic">
          <h3>我的追蹤者 demo 頁</h3>
      </div>

      <div>

          <div id="bottom-area" class="el-button-group">
              <div class="my-button">
                  <button @click="findAllMyFollowers">我的追蹤者</button>
              </div>

              <div class="my-button">
                  <button @click="findAllMyNonAcceptUser">待確認名單</button>
              </div>

          </div>

          <div class="search-list">
              <a>aa</a>
          </div>

      </div>

  </div>
</template>

<script>
import {searchUserFollowing} from '@/api/follow'

export default {
  name: "myFollowerPage",

  data() {
    return {
      myFollowerList: [],
      nonAcceptList: []
    };
  },
  methods: {

      findAllMyFollowers(){
          searchUserFollowing(true)
            .then(resp => {
                console.log(resp)
            })
      },

      findAllMyNonAcceptUser(){
          searchUserFollowing(false)
            .then(resp => {
                console.log(resp)
            })
      }
    
  },
};
</script>

<style>

    .topic{
        margin-bottom: 50px;
    }

    .my-button{
        float: left;
        margin-left: 50px;
    }

    #bottom-area{
        margin-bottom: 20px;
    }


</style>