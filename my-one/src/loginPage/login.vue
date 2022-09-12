<template>
  <div class="login">
    <div class="background">
      <h2>LOGIN</h2>
      <el-input v-model="username" placeholder="请输入内容"></el-input>
      <br />
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
      ></el-input>
      <br />
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="success" @click="register">注册</el-button>
      <el-button type="info" @click="userInfo">发送获取信息</el-button>
    </div>
  </div>
</template>

<script>
import { login, register, userInfoGet } from "../axios/request/index";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    userInfo() {
      let params = {
        userName: "何风顺",
        password: "123456",
      };
      userInfoGet({ token: localStorage.token })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {});
    },
    login() {
      console.log(this.username, this.password);
      let params = { username: this.username, password: this.password };
      login(params)
        .then((result) => {
          if (result.code == 200 && result.msg == "success") {
            this.$message({
              message: "登陆成功，来到个人主页",
              type: "success",
            });
            localStorage.setItem("token", result.token);
            this.$router.push("/home");
          }
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    register() {
      console.log(this.username, this.password);
      // register({ username: this.username, password: this.password })
      register({ token: localStorage.token })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.el-input {
  margin: 10px 0px;
  width: 400px;
}
button {
  margin: 20px 0px;
}
.login {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: black;
  h2 {
    padding-top: 0;
    padding-bottom: 20px;
    font-size: 45px;
    font-weight: 900;
    color: #1d76cf;
  }
  .background {
    width: 30vw;
    height: 20vw;
    background: rgba(255, 255, 255, 0.2);
    // line-height: 10vh;
    padding-top: 5vh;
    box-sizing: border-box;
    border: 1px solid rgb(20, 5, 155);
  }
}
</style>