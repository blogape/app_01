<template>
  <div class="register g-home">
    <div class="login">
      <div class="login_top rowflex">
        <i class="iconfont iconcha"></i>
        <i style="margin-left:1.2rem;font-size:1.2rem;">注册</i>
        <i>免费试玩</i>
      </div>
      <div class="login_form">
        <div class="login_form_a rowflex">
          <p class="rowflex">
            <i>*</i>
            账号
          </p>
          <div class="input">
            <input type="text" placeholder="6~16之间数字、字母、下划线组成">
          </div>
        </div>
        <div class="login_form_a rowflex">
          <p class="rowflex">
            <i>*</i>
            密码
          </p>
          <div class="input">
            <input type="text" placeholder="6位以上数字、字母、下划线组">
          </div>
          <i class="iconfont iconyanjing" v-if="show" @click="eyes"></i>
          <i class="iconfont iconyanjing1" v-if="!show" @click="eyes"></i>
        </div>
        <div class="login_form_a rowflex">
          <p class="rowflex">
            <i>*</i>
            邀请码
          </p>
          <div class="input">
            <input type="text" placeholder="请输入邀请码">
          </div>
        </div>
        <div class="login_form_a rowflex">
          <p class="rowflex">
            <i>*</i>
            验证码
          </p>
          <div class="input">
            <input type="text" placeholder="请输入验证码">
          </div>
          <img src="../../assets/img/yzm.png" alt>
        </div>
      </div>

      <div class="submit">立即注册</div>

      <div class="login_bot">
        <ul class="rowflex">
          <li>已有账号？</li>
          <li style="color:#c00;">立即登录</li>
        </ul>
      </div>

      <div class="login_agreement">注册代表您已同意各项开启条约
        <span style="color:#0090ff;">"开户协议"</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      show: false
    };
  },
  methods: {
    eyes() {
      if (this.show == false) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }
};
</script>

<style lang='less'>
.register {
  background: #fff;
  .login_form {
    .login_form_a {
      p {
        width: 25%;
        line-height: 3rem;
        padding-left: 0.2rem;
        i {
          padding-right: 0.5rem;
          font-size: 1rem;
          color: red;
        }
      }
      .input {
        display: block;
        width: 70%;
        overflow: hidden;
        input {
          width: 100%;
        }
      }
    }
    .login_form_a:nth-child(2) {
      .input {
        width: 60%;
      }
    }
    .login_form_a:last-child {
      .input {
        width: 50%;
      }
      img {
        width: 25%;
      }
    }
    .login_form_a:not(:last-child) {
      border-bottom: 1px solid rgb(246, 246, 246);
    }
  }
  .login_agreement {
    font-size: 0.7rem;
    text-align: center;
    color: #666;
    margin-top: 0.8rem;
  }
}
</style>
