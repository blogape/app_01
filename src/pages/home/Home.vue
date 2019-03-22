<template>
  <div class="home g-home">
    <!-- 头部 -->
    <component-headers></component-headers>
    <!-- 轮播图+彩种 -->
    <div class="g-contant">
      <Banner></Banner>
      <hot-column></hot-column>
      <Grid></Grid>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { login } from "@/services/api.js";

import ComponentHeaders from "./components/ComponentHeader";

import Banner from "@/components/banner/Banner";
import HotColumn from "./components/HotColumn";
import Grid from "./components/Grid";
export default {
  name: "home",
  components: {
    ComponentHeaders,
    Banner,
    HotColumn,
    Grid,
  },
  data() {
    return {};
  },
  mounted() {
    // this.data();
  },
  methods: {
    // async data() {
    //   let a = await login();
    //   console.log(" 122qww");
    // }
  }
};
</script>

<style lang='less'>

</style>
