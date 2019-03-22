<template>
  <div class="number-choose">
    <!-- 数字选择 -->
    <div v-for="(item,index) of playdata" :key="index" @click="handleClick(index)" :let="index" :left='currentnumber'>
      <lot-class :data="item.name" @handleToosBack="handleCallClick" v-if="item.number.length<11"></lot-class>
      <select-tools :data="item.number" :logo="currentnumber" :selectdata="index==xnumber?handleSelect:''"></select-tools>
    </div>
  </div>
</template>

<script>
import SelectTools from "@/components/tools/SelectTools.vue"; //数字选择
import LotClass from "./LotClass";

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
  created() {},
  methods: {
    // 工具（全大小单双清）
    handleCallClick(msg) {
      // console.log(index);
      console.log(msg);
      this.handleSelect = msg;
      // console.log(msg);
    },
    handleClick(index) {
     this.currentnumber=index;
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
