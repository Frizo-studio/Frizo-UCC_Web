<template>
  <div class="apiTEST">
    <input type="number" v-model="info" />
    {{info}}
    <button @click.prevent="findOtherUserInfo">送出</button>
  </div>
</template>

<script>
import { getOtherUserInfo } from "@/api/user";

export default {
  name: "apiTEST",

  data() {
    return {
      info: ""
    };
  },

  methods: {
    findOtherUserInfo() {
      getOtherUserInfo(this.info)
        .then(resp => {
          console.log(resp.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
</style>