<template>
  <div class="login g-home">
    <div class="login_top rowflex">
      <i class="iconfont iconcha"></i>
      <i>免费试玩</i>
    </div>
    <div class="login_form">
      <div class="login_form_a rowflex">
        <i class="iconfont iconren"></i>
        <input type="text" v-model="username" placeholder="请输入用户名">
      </div>
      <div class="login_form_a rowflex">
        <i class="iconfont iconsuo"></i>
        <input type="password" placeholder="请输入密码" v-model="password">
        <!-- <i class="iconfont iconyanjing" v-if="show" @click="eyes"></i>
        <i class="iconfont iconyanjing1" v-if="!show" @click="eyes"></i> -->
      </div> 
      <div class="login_form_a rowflex">
        <i class="iconfont iconrenzheng"></i>
        <input type="text" placeholder="请输入验证码">
        <img :src="imageSrc" alt="">
      </div>
    </div>

    <div class="submit" @click='handleSubmit'>登录</div>

    <div class="login_bot">
      <ul class="rowflex">
        <li>立即注册</li>
        <span>|</span>
        <li>找回密码</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {Login} from '@/services/api';
import {setToken} from '@/utils/token';
export default {
  name: "login",
  data(){
    return{
      show:false,
      username:'',
      password:'',
      imageSrc:''
    }
  },
  methods:{
    // eyes(){
    //  if(this.show==false){
    //    this.show = true
    //  }else{
    //    this.show = false
    //  }
    // },
    // 提交 登录表单
    async handleSubmit(){
        if(this.placeholder==''||this.password==''){
         Toast('请输入账号与密码');
        }else{
            let userData=await Login(this.username,this.password);
            if(userData.status==200){
                setToken(userData.data)
                this.$router.push('/');
            }
        }
    },
    // 获取验证码
    

  },
  mounted(){
    this.imageSrc='http://192.168.1.104:8000/login/code';
  }
};
</script>

<style lang="less">
@import '~@/assets/style/mixin.less';
.login {
  background: #fff;
  .login_top {
    width: 90%;
    font-size: 1rem;
    line-height: 1rem;
    color: #333;
    justify-content: space-between;
    margin:1rem auto;
    i:first-child {
      font-size: 1.5rem;
    }
  }
  .login_form {
    width: 90%;
    overflow: hidden;
    border: 1px solid rgb(246, 246, 246);
    margin: 3.5rem auto 2rem auto;
    border-radius: 0.5rem;
    .login_form_a:not(:last-child) {
     border-bottom: 1px solid rgb(246, 246, 246);
    }
    .login_form_a:first-child {
      input {
        width: 90%;
      }
    }
    .login_form_a:nth-child(2) {
      input {
        width: 80%;
      }
    }
    .login_form_a {
      box-sizing: border-box;
      i {
        font-size: 1.5rem;
        line-height: 3rem;
        text-align: center;
        width: 12%;
        display: block;
        color: rgb(170, 170, 170);
      }
      input {
        width: 58%;
        border: none;
        height: 3rem;
        font-size: 1rem;
        padding-left: 0.6rem;
        color: rgb(204, 204, 204);
      }
      input::-webkit-input-placeholder {
        color: rgb(204, 204, 204);
      }
      img {
        display: block;
        width: 30%;
      }
    }
  }
  .submit {
    width: 90%;
    margin: 0 auto;
    height: 2.5rem;
    background-color: @bgColor;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 0.2rem;
    color: #fff;
  }
  .login_bot {
    ul {
      width: 50%;
      margin: 0 auto;
      font-size: 0.7rem;
      justify-content: center;
      margin-top:1.5rem;
      color: #666;
      span {
        padding: 0 1rem;
        color: #ddd;
      }
    }
  }
}
</style>
