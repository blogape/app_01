<template>
  <div class="number-choose">
    <!-- 数字选择 -->
    <div v-for="(item,index) of playdata" :key="index"  :let="index" :left='currentnumber'>
      <span>{{item.msg}}</span>
      <div @click="handleClick(index)">

      <lot-class :data="item.name" @handleToosBack="handleCallClick" v-if="item.number.length<11"></lot-class>
            </div>

      <!-- <select-tools :data="item.number" :logo="currentnumber" :selectdata="index==xnumber?handleSelect:''"></select-tools> -->
      <select-tools :data="item.number" :logo='index' :selectdata="item.type"></select-tools>
    </div>
  </div>
</template>

<script>
import SelectTools from "@/components/tools/SelectTools.vue"; //数字选择
import LotClass from "./LotClass";
import { setTimeout } from 'timers';

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
      xnumber:''
    };
  },
  mounted() {
    setTimeout(() => {
      for (let item of this.playdata) {
        item.type = '清'
      }
      this.$forceUpdate()
    }, 300)
  },
  methods: {
    // 工具（全大小单双清）
    handleCallClick(msg) {
      // console.log(index);
      this.handleSelect = msg;
    },
    handleClick(index) {
      // this.currentnumber=index;
      this.playdata[index].type = this.handleSelect
      this.$forceUpdate()
    },

  },
  watch:{
    currentnumber(val){
      this.xnumber=val;
    }
  }
};
</script>

<style lang='less'>
</style>
