<template>
  <div class="Ec_choose">
    <ul>
      <li class="choose_active">基本走势
        <div class="three"></div>
        <i class="iconfont iconduigou"></i>
      </li>
      <li>定位胆</li>
      <li>三星组三</li>
      <li>前二走势</li>
      <li>后二走势</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // 取消页面滑动
    var mo = function(e) {
      e.preventDefault();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("touchmove", mo, false); //禁止页面滑动

    // 出现滚动条
    // document.body.style.overflow='';//出现滚动条
    // document.removeEventListener("touchmove",mo,false);
  },
  methods: {}
};
</script>

<style lang="less">
.Ec_choose {
  position: fixed;
  top: 3rem;
  left: 0;
  z-index: 3;
  background: rgba(000, 000, 000, 0.5);
  width: 100%;
  height: 100%;
  ul {
    background: #fff;
    padding: 0.5rem 0;
    overflow: hidden;
    li {
      position: relative;
      width: 30%;
      height: 2rem;
      line-height: 2rem;
      border: 1px solid #ccc;
      text-align: center;
      float: left;
      margin-top: 0.5rem;
      border-radius: 0.2rem;
      color: #333;
      margin-left: 2.4%;
      overflow: hidden;
      .three{
        position: absolute;
        width: 0;
        height: 0;
        border-top: 4rem solid transparent;
        border-bottom: 2rem solid transparent;
        right: 0;
        bottom: -4.5rem;
        border-right: 4rem solid red;
      }
      i {
        line-height: 1rem;
        position: absolute;
        right: 0;
        bottom: 0;
        color: #fff;
      }
      
    }
    .choose_active{
        border:1px solid red !important;
      }
  }
}
</style>
