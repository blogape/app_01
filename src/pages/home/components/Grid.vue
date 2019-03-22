<template>
  <div class="h-grid">
    <ul>
      <li class="item" v-for="(item,index) of 18" :key="index">
        <div class="content rowflex">
          <img
            src="https://cpweb-new.dgstaticresources.net/cp77.kosungames.com/uploads/images/20170113/5878a932233e8.png"
            alt="图片"
          >
          <div class="ball-name">
            <p class="fs-32">五分六合彩</p>
            <p class="fs-24">5分钟一期</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.h-grid {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    &>li:nth-child(odd){
      &>.content{
        border-right:1px solid rgb(241,243,244);
      }
    }
    li {
      width: 50%;
      box-sizing: border-box;
      padding:1.2rem 0 1.2rem 1.2rem;
      border-top:1px solid rgb(241,243,244);
      img {
        width: 3rem;
        height: 3rem;
        display: block;
      }
      .ball-name{
        margin-left:0.5rem;
        .fs-32{
          font-size: 1.2rem;
          color: #333;
          line-height: 2rem;
        }
        .fs-24{
          font-size: 0.6rem;
          color:#999;
        }
      }
    }
  }
}
</style>
