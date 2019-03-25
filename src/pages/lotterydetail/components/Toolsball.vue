<template>
  <div class="number-choose">
    <!-- 数字选择 -->
    <div
      v-for="(item,index) of playdata"
      :key="index"
      :let="index"
      :left="currentnumber"
      @click="handlecCalculateClick"
    >
      <span>{{item.msg}}</span>
      <div @click="handleClick(index)">
        <lot-class :data="item.name" @handleToosBack="handleCallClick" v-if="item.number.length<11"></lot-class>
      </div>
      <!-- <select-tools :data="item.number" :logo="currentnumber" :selectdata="index==xnumber?handleSelect:''"></select-tools> -->
      <select-tools :data="item.number" :logo="index" :selectdata="item.type"></select-tools>
    </div>
  </div>
</template>

<script>
import SelectTools from "@/components/tools/SelectTools.vue"; //数字选择
import LotClass from "./LotClass";
import { setTimeout } from "timers";
import { mapState, mapMutations } from "vuex";
import a from "./a.json";

export default {
  props: {
    playdata: {
      type: Array
    }
  },
  components: {
    SelectTools: SelectTools,
    LotClass: LotClass
  },
  data() {
    return {
      handleSelect: "",
      currentnumber: 0,
      xnumber: ""
    };
  },
  computed: {
    ...mapState(["gamePlayValue", "sumPriceNoteValue"])
  },
  mounted() {
    setTimeout(() => {
      for (let item of this.playdata) {
        item.type = "清";
      }
      this.$forceUpdate();
    }, 300);
  },
  methods: {
    // 工具（全大小单双清）
    handleCallClick(msg) {
      // console.log(index);
      this.handleSelect = msg;
    },
    handlecCalculateClick() {
      let selectArray = [];
      //循环遍历选中的数组
      for (let i = 0; i < this.playdata.length; i++) {
        selectArray[i] = [];
        for (let k = 0; k < this.playdata[i].number.length; k++) {
          if (this.playdata[i].number[k].istrue === true) {
            selectArray[i].push(this.playdata[i].number[k].n);
          }
        }
      }
      //需要生成需要传参的规则
      let str = "";
      for (let i = 0; i < selectArray.length; i++) {
        str += selectArray[i] + "|";
      }
      // 生成后的值
      let val = str.slice(0, str.length - 1);
      //绑定玩法
      let lotteryObj = new CurrentLottery({ val: val, multiple: 1 });
      let playGameFind = "a" + this.gamePlayValue;
      let playVal = a.a[playGameFind].value;
      let obj = lotteryObj[playVal]();
      if (!obj) {
        this.handleSumPriceValue("null");
      }
      this.handleSumPriceValue(obj);
    },
    handleClick(index) {
      this.playdata[index].type = this.handleSelect;
      this.$forceUpdate();
    },
    ...mapMutations(["handleSumPriceValue"])
  },
  watch: {
    currentnumber(val) {
      this.xnumber = val;
    }
  }
};
</script>

<style lang='less'>
</style>
