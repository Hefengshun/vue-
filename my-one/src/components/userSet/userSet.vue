<template>
  <div>
    <!-- <el-button type="primary" icon="el-icon-setting" 
      >退出</el-button
    >
    <el-button type="info" @click="userInfo">发送获取信息</el-button> -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" @click="exit">退出</el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { userInfoPost } from "../../axios/request/index";
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    exit() {
      this.$router.push("/");
      this.$message({
        message: "退出成功，来到登陆页",
        type: "success",
      });
    },
    userInfo() {
      let params = {
        userName: "何风顺",
        password: "123456",
      };
      userInfoPost(params)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {});
    },
    handleSelect() {},
  },
};
</script>

<style>
</style>