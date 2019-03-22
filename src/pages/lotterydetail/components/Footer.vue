<template>
  <div class="lottery_footer rowflex" :style="style">
    <div class="price rowflex">
      <div class="price_zhu">
        共 <span>2</span> 注 共 <span>222</span>元
      </div>
      <div class="price_money">
        单住最多可赢利 <span>389389</span> 元
      </div>
    </div>
    <div class="btn lo_qk">清空</div>
    <div class="lo_num">
      <p>
        余额 元
        <i class="iconfont iconzhuanhuan" style="color:#666;"></i>
      </p>
      <div class="lo_choose rowflex">单注
        <van-button @touchstart.native.stop="show = true">{{value}}</van-button>

        <van-number-keyboard
          :show="show"
          extra-key="."
          close-button-text="完成"
          @blur="show = false"
          @input="onInput"
          @delete="onDelete"
        />元
      </div>
    </div>
    <div class="btn lo_qd">确定</div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      show: false,
      style: "bottom:0;",
      value: "0"
    };
  },
  watch: {
    show: function(val) {
      if (val) {
        this.style = "bottom:15rem;";
      } else {
        this.style = "bottom:0rem;";
      }
    }
  },
  methods: {
    onInput(value) {
      this.value = this.value + value;
    },
    onDelete() {
        this.value = this.value.substring(0, this.value.length - 1);
    }
  }
};
</script>
<style  lang='less'>
.lottery_footer {
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  background: #fff;
  left: 0;
  padding: 1rem;
  justify-content: space-between;
  border-top:1px solid #ffefef;
  .price{
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    top:-2rem;
    left:0;
    justify-content: space-between;
    color: #666;
    background-color: #e5e5e5;
    padding: 0.9rem 0.5rem;
    font-size: 0.9rem;
    span{
      color:red;
    }
  }

  .btn {
    line-height: 1.8rem;
    height: 1.8rem;
    padding: 0 1rem;
    border-radius: 0.2rem;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  .lo_qk {
    border: 1px solid #c00;
    color: #c00;
    background: #ffefef;
  }
  .lo_qd {
    background: #c00;
    color: #fff;
  }
  .lo_num {
    text-align: center;
    .lo_choose {
      height: 2rem;
      line-height: 2rem;
      .van-button {
        display: block;
        min-width: 3rem !important;
        height: 1.5rem !important;
        line-height: 1.5rem !important;
        border: 1px solid #ccc;
        border-radius: 0.3rem;
        margin: 0 0.3rem;
        margin-top: 0.4rem;
        color: red;
      }
    }
  }
}
</style>

