<template>
  <div>
    <ul>
      <li v-for="item in resultList" :key="item">
        <p v-if="item.ValidName">{{item}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        resultList: [
          {"ValidName": true, "S_ProjectName": "A專案", "S_NodeName": "node A"},
          {"ValidName": false, "S_ProjectName": "B專案", "S_NodeName": "node B"},
          {"ValidName": true, "S_ProjectName": "C專案", "S_NodeName": "node C"},
          {"ValidName": false, "S_ProjectName": "D專案", "S_NodeName": "node D"},
          {"ValidName": false, "S_ProjectName": "E專案", "S_NodeName": "node E"},
        ]
      }
    }
  }
</script>