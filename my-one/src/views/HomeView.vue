<template>
  <el-container>
    <el-header><userSet /></el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import userSet from "../components/userSet/userSet.vue";

export default {
  name: "HomeView",
  components: { userSet },
};
</script>
<style lang="less">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 800px;
  height: 93.8vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 800px;
}
</style>
