<template>
  <div class="hot-colum">
    <p> <span>热门推荐</span> </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
@import '~@/assets/style/mixin.less';
.hot-colum{
  padding:0.5rem 0.5rem;
  p{
    border-left:3px solid @bgColor;
    span{
      padding-left:0.5rem;
      font-size: 0.8rem;
    }
  }
}
</style>
