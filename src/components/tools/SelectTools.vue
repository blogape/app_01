<template>
  <div class="ball-list rowflex" id="selectnumber-id">
    <ul>
      <li v-for="(item,index) of data" :key="index" :item="index">
        <span :class="{'active':item.istrue}" @click="handleBallClick($event,index,logo)">{{item.n}}</span>
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
      default: "清"
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
  mounted() {
  },
  methods: {
    handleBallClick(e, index, logo) {
      //  console.log(this.data[index].istrue=true);
      this.data[index].istrue = this.data[index].istrue === true ? false : true;
    }
  },
  watch: {
    selectdata(val) {
      console.log(val);
      switch (val) {
        case "全":
          this.concat = [
            (this.data[0].istrue = true),
            (this.data[1].istrue = true),
            (this.data[2].istrue = true),
            (this.data[3].istrue = true),
            (this.data[4].istrue = true),
            (this.data[5].istrue = true),
            (this.data[6].istrue = true),
            (this.data[7].istrue = true),
            (this.data[8].istrue = true),
            (this.data[9].istrue = true)
          ];
          break;
        case "大":
          this.concat = [
            (this.data[0].istrue = false),
            (this.data[1].istrue = false),
            (this.data[2].istrue = false),
            (this.data[3].istrue = false),
            (this.data[4].istrue = false),
            (this.data[5].istrue = true),
            (this.data[6].istrue = true),
            (this.data[7].istrue = true),
            (this.data[8].istrue = true),
            (this.data[9].istrue = true)
          ];
          break;
        case "小":
          this.concat = [
            (this.data[0].istrue = true),
            (this.data[1].istrue = true),
            (this.data[2].istrue = true),
            (this.data[3].istrue = true),
            (this.data[4].istrue = true),
            (this.data[5].istrue = false),
            (this.data[6].istrue = false),
            (this.data[7].istrue = false),
            (this.data[8].istrue = false),
            (this.data[9].istrue = false)
          ];
          break;
        case "单":
          this.concat = [
            (this.data[0].istrue = false),
            (this.data[1].istrue = true),
            (this.data[2].istrue = false),
            (this.data[3].istrue = true),
            (this.data[4].istrue = false),
            (this.data[5].istrue = true),
            (this.data[6].istrue = false),
            (this.data[7].istrue = true),
            (this.data[8].istrue = false),
            (this.data[9].istrue = true)
          ];
          break;
        case "双":
          this.concat = [
            (this.data[0].istrue = true),
            (this.data[1].istrue = false),
            (this.data[2].istrue = true),
            (this.data[3].istrue = false),
            (this.data[4].istrue = true),
            (this.data[5].istrue = false),
            (this.data[6].istrue = true),
            (this.data[7].istrue = false),
            (this.data[8].istrue = true),
            (this.data[9].istrue = false)
          ];
          break;
        case "清":
          this.concat = [
            (this.data[0].istrue = false),
            (this.data[1].istrue = false),
            (this.data[2].istrue = false),
            (this.data[3].istrue = false),
            (this.data[4].istrue = false),
            (this.data[5].istrue = false),
            (this.data[6].istrue = false),
            (this.data[7].istrue = false),
            (this.data[8].istrue = false),
            (this.data[9].istrue = false)
          ];
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
