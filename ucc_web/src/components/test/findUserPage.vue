<template>
  <div>
      <h3>用戶搜尋功能 demo 頁</h3>

      <br>

    <div>
        <label>用戶姓名或 email </label>
        <input id="userSearch" type="text" v-model="userSearchInput">
        <button>搜尋</button>
    </div>

    <br>

    <div id="searchResult">
      <h3>search result</h3>

      {{userSearchInput}}
    </div>
  </div>
</template>

<script>

export default {
  name: "FollowPage",

  data() {
    return {
      userSearchInput: ""
    };
  },
  methods: {
    
  },
};
</script>

<style>

</style>