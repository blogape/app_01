<template>
  <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for='(item,index) of images' :key='index'  class="banner-img"><img :src="item"/></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["https://cpweb-new.dgstaticresources.net/uploads/20181208/99bb89eead800e1c23753af305c9ee39.jpg", "https://cpweb-new.dgstaticresources.net/uploads/20181210/01ea96360d23920a71c91461d6090101.jpg"]
    };
  }
};
</script>

<style lang='less' scoped>
.banner{
    overflow: hidden;
}
.banner-img{
    overflow: hidden;
    img{
        width: 100%;
        display: block;
    }
}
</style>
