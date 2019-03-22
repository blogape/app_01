<template>
  <div class="header">
    <div class="content rowflex">
      <div class="back" @click='$router.history.go(-1)'>
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title rowflex" @click='handleShowPopup'>
        <p class="culflex">
          <i>玩</i>
          <i>法</i>
        </p>
        <div class="choose rowflex" >
          <p>{{gameTypes.categories}}-{{gameTypes.class}}</p>
          <i class="iconfont iconsj"></i>
        </div>
      </div>
      <div class="more">
        <i class="iconfont icongengduo"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  // name: "header"
  data(){
    return{
      
    }
  },
  computed:{
    ...mapState(['gameTypes'])
  },
  mounted(){
    
  },
  methods:{
    handleShowPopup(){
      this.$store.commit('GamePlayPopup',true)
    }
  }
};
</script>

<style lang='less' scoped>
@import "~@/assets/style/mixin.less";
@import "~@/assets/style/public.less";

.header {
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
  height: 3rem;
  background-color: @bgColor;
  .content {
    justify-content: space-between;
  }
  .back {
    line-height: 3rem;
    i {
      color: #fff;
      font-size: 1.5rem;
    }
  }
  .title {
    height: 2rem;
    margin-top: 0.5rem;
    color: #fff;
    & > p {
      width: 1rem;
      height: 2rem;
      font-size: 0.6rem;
      i {
        text-align: center;
        line-height: 1.1rem;
      }
    }
    .choose {
      padding: 0 1rem;
      line-height: 2rem;
      border-radius: 3px;
      font-size: 1.1rem;
      justify-content: space-between;
      border: 1px solid #fff;
      & > p {
        text-align: center;
      }
      i {
        font-size: 0.5rem;
        margin-left: 1rem;
      }
    }
  }
  .more {
    line-height: 3rem;
    i {
      color: #fff;
      font-size: 1.5rem;
    }
  }
}
</style>
