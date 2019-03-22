<template>
  <div class="ball-list rowflex">
    <ul>
      <li v-for="(item,index) of data" :key="index" :item="index">
        <span :class="{'active':concat.indexOf(item)==-1?false:true}">{{item}} </span>
      </li>
    </ul>
    <!-- <div class="ball-item" v-for="(item,index) in data" :key="index">
      <span class="ball" :class="{active:isactive}" @click="handleToggleClick($event)">{{item-1}}</span>
    </div>-->
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    selectdata: {
      type: String,
      default: "大"
    },
    logo: {
      type: Number
    }
  },
  data() {
    return {
      isactive: false,
      concat: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    // handleToggleClick() {}
  },
  watch: {
    selectdata(val) {
        switch (val) {
        case "全":
          this.concat = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
          break;
        case "大":
          this.concat = [5, 6, 7, 8, 9];
          break;
        case "小":
          this.concat = [0, 1, 2, 3, 4];
          break;
        case "单":
          this.concat = [1, 3, 5, 7, 9];
          break;
        case "双":
          this.concat = [0, 2, 4, 6, 8];
          break;
        case "清":
          this.concat = [];
          break;
      }
    }
  },
  computed: {}
};
</script>

<style lang='less' scoped>
@import "~@/assets/style/mixin.less";
.active {
  background-color: red;
}
.ball-list {
  width: 100%;
  color: #333;
  box-sizing: border-box;
  padding: 0.8rem 0.5rem;
  ul {
    width: 93%;
    font-size: 1.1rem;
    margin-left: 7%;
    li {
      text-align: center;
      width: 16.6%;
      float: left;
      margin-bottom: 0.5rem;
      span {
        display: block;
        width: 2.3rem;
        height: 2.3rem;
        text-align: center;
        line-height: 2.3rem;
        border-radius: 50%;
        border-color: rgb(204, 204, 204);
        margin: 0 auto;
        color: rgb(51, 51, 51);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 0.1rem 0.1rem 0px;
      }
    }
  }
}
.active {
  background-color: @selectRed;
  color: #fff !important;
}
</style>
