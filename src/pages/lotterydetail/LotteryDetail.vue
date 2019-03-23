<template>
  <div class="lottery g-home">
    <!-- 头部 -->
    <components-header v-if="out"></components-header>
    <!-- 弹出层 玩法选择  -->
    <lottery-choose v-if="cqssTreeData.length" :treedata="cqssTreeData"></lottery-choose>
    <!-- 时间与近期开奖组件 -->
    <components-time></components-time>
    <!-- 提示与赔率 -->
    <lottery-odds></lottery-odds>
    <!-- 点击近期开奖 弹出层 -->
    <Table></Table>
    <div class="lottery-choose g-contant">
      <!-- 球与大小单双视图 -->
      <lottery-toolsball :playdata="playTreeData" v-if="playTreeData"></lottery-toolsball>
      <!-- 文本视图 -->
      <lottery-textarea v-if="!playTreeData"></lottery-textarea>
    </div>
    <!-- 底部 -->
    <lottery-footer v-if="true"></lottery-footer>
    <!-- 右侧小弹窗 -->
    <lottery-littlenav></lottery-littlenav>
  </div>
</template>

<script>
import ComponentsHeader from "@/components/header/header.vue";
import ComponentsTools from "@/components/tools/SelectTools.vue";
import ComponentsTime from "@/components/time/Time.vue";
import ComponentsTable from "@/components/table/Table.vue";
import LotteryFooter from "./components/Footer.vue";
import LotteryLotclass from "./components/LotClass";
import LotteryOdds from "./components/Odds.vue";
import LotteryChoose from "./components/Choose.vue";
import LotteryLittlenav from "@/components/littlenav/Littlenav.vue";
import LotteryToolsball from "./components/Toolsball";
import LotteryTextarea from "./components/Texarea";
import { getCqssTreeData } from "@/services/api.js";
import { mapState, mapMutations } from "vuex";
import a from "./components/a.json";
export default {
  name: "lotterydetail",
  data() {
    return {
      out: true,
      cqssTreeData: [], //重庆时时树形结构彩数组
      playTreeData: [],
      vl: 1
    };
  },
  components: {
    ComponentsHeader: ComponentsHeader,
    ComponentsTools: ComponentsTools,
    ComponentsTime: ComponentsTime,
    ComponentsTable: ComponentsTable,
    LotteryFooter: LotteryFooter,
    LotteryToolsball: LotteryToolsball,
    LotteryLotclass: LotteryLotclass,
    LotteryOdds: LotteryOdds,
    LotteryChoose: LotteryChoose,
    LotteryLittlenav: LotteryLittlenav,
    LotteryTextarea: LotteryTextarea
  },
  computed: {
    ...mapState(["gameTypes", "gamePlayValue"])
  },
  created() {},
  methods: {
    // 获取tree重庆时时彩树形结构
    async handleGetCqssTreeData() {
      let data = await getCqssTreeData();
      this.cqssTreeData = data.data;
    },
    //拿到视图渲染方式
    getView() {
      // 绑定玩法中心的值
      let playGameFind = "a" + this.gamePlayValue;
      // 查询后的玩法数据绑定
      this.playTreeData = a.a[playGameFind].data ? a.a[playGameFind].data : "";
    },
    // 改变弹出状态
    ...mapMutations(["GamePlayPopup", true])
  },
  mounted() {
    this.handleGetCqssTreeData();
    this.getView();
    // let lotteryObj = new CurrentLottery({ number: 3, multiple: 2 });
    // 玩法绑定
    // let playVal = a.a[playGameFind].value;
    // console.log(this.playTreeData);
    // let obj = lotteryObj[x]();
    // console.log(obj);
  },
  watch: {
    gamePlayValue(val) {
      // 绑定玩法中心的值
      let playGameFind = "a" + val;
      // 查询后的玩法数据绑定
      this.playTreeData = a.a[playGameFind].data ? a.a[playGameFind].data : "";
    }
  }
};
</script>

<style lang='less'>
.lottery {
  background: #fff;
  .lottery-choose {
    padding-bottom: 8rem;
  }
}
</style>
