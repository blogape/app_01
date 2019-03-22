<template>
  <div v-if="show"  @click="littlehide" class="littlenav">
    <div class="ll_nav">
      <ul>
        <li>
          <i class="iconfont iconzoushitu"></i>
          <p>走势图</p>
        </li>
        <li>
          <i class="iconfont iconjiangbei"></i>
          <p>近期开奖</p>
        </li>
        <li>
          <i class="iconfont iconjilu"></i>
          <p>购彩记录</p>
        </li>
        <li>
          <i class="iconfont iconicon401"></i>
          <p>玩法说明</p>
        </li>
      </ul>
      <div class="three"></div>
    </div>
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      show:false
    };
  },
  methods:{
    littlehide(){
      this.show = false
    }
  }
};
</script>
<style lang="less">
.littlenav {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(30, 30, 30, 0.5);
  width: 100%;
  height: 100%;
  .ll_nav {
    width: 6rem;
    background: #fff;
    position: absolute;
    right: 0.5rem;
    top: 4rem;
    ul {
      font-size: 0.8rem;
      li:not(:last-child) {
        border-bottom: 1px solid #ddd;
      }
      li {
        display: flex;
        flex-direction: row;
        color: #666;
        line-height: 2rem;
        i {
          font-size: 1rem;
          padding: 0 0.5rem;
        }
      }
    }
    .three {
      position: absolute;
      top:-1.2rem;
      right:0.4rem;
      width: 0rem;
      height: 0rem;
      border-width: 0.6rem;
      border-style: solid;
border-color:transparent transparent  #fff  transparent ;
    }
  }
}
</style>


