<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      setUserInfo: "user/setUserInfo"
    })
  },

  created() {
    this.setUserInfo();
  },

  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap");
#app {
  /* font-family: Malgun Gothic; */
  font-family: "Noto Sans TC", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #b2702f;
  opacity: 0.8;
}
</style>
