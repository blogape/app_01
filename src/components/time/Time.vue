<template>
  <div class="time rowflex">
    <div class="time_left">
      <p>距9042天截止时间</p>
      <div class="djs">{{ss}}</div>
    </div>
    <div class="time_right">
      <div class="award rowflex">
        <p>近期开奖</p>
        <i class="iconfont iconsj"></i>
      </div>
      <div class="num">
        <ul class="rowflex">
          <li class="clicle">1</li>
          <li class="clicle">2</li>
          <li class="clicle">3</li>
          <li class="clicle">4</li>
          <li class="clicle">5</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { formateDate } from "../../utils/utils.js";
export default {
  // name: "time",
  data() {
    return {
      ss: "00:00:00"
    };
  },
  created() {
    // 倒计时
    let vm = this;
    var i = 1000;
    window.setInterval(function() {
      vm.$set(vm.$data, "ss", formateDate(i));
      i--;
      if (i == 1) {
        //这里做变为1的时候的事
      }
    }, 1000);
  }
};
</script>
<style  lang='less'>
@import "~@/assets/style/mixin.less";
@import "~@/assets/style/public.less";

.time {
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem 0.5rem;
  box-shadow: 0 0.2rem 1.5rem hsla(0, 0%, 68%, 0.64);
  color: #333;
  .time_left {
    width: 40%;
    border-right: 1px solid #ccc;
    text-align: center;
    line-height: 1.8rem;
    & > p {
      font-size: 0.8rem;
    }
    .djs {
      color: #c00;
      font-size: 1.3rem;
      font-family: numberfont !important;
    }
  }
  .time_right {
    width: 60%;
    .award {
      margin: 0 auto;
      font-size: 0.8rem;
      justify-content: center;
      line-height: 1.8rem;
      i {
        font-size: 0.4rem;
        margin-left: 0.4rem;
      }
    }
    .num {
      ul {
        justify-content: center;
      }
    }
  }
}
</style>

