<template>
  <div class="table">
    <div class="table_table">
      <div class="table_titel rowflex">
        <div style="width:15%;">期次</div>
        <div style="width:33%">开奖号码</div>
        <div style="width:13%">和值</div>
        <div style="width:13%">大小</div>
        <div style="width:13%">单双</div>
        <div style="width:13%">牛牛</div>
      </div>
      <div class="table_ul">
        <ul>
          <li class="rowflex">
            <div class="one">9033期</div>
            <div class="two">
              <ul class="rowflex">
                <li class="clicle">1</li>
                <li class="clicle">2</li>
                <li class="clicle">3</li>
                <li class="clicle">4</li>
                <li class="clicle">5</li>
              </ul>
            </div>
            <div class="three">13</div>
            <div class="three">小</div>
            <div class="three">单</div>
            <div class="three">牛三</div>
          </li>
          <li class="rowflex">
            <div class="one">9033期</div>
            <div class="two">
              <ul class="rowflex">
                <li class="clicle">1</li>
                <li class="clicle">2</li>
                <li class="clicle">3</li>
                <li class="clicle">4</li>
                <li class="clicle">5</li>
              </ul>
            </div>
            <div class="three">13</div>
            <div class="three">小</div>
            <div class="three">单</div>
            <div class="three">牛三</div>
          </li>
          <li class="rowflex">
            <div class="one">9033期</div>
            <div class="two">
              <ul class="rowflex">
                <li class="clicle">1</li>
                <li class="clicle">2</li>
                <li class="clicle">3</li>
                <li class="clicle">4</li>
                <li class="clicle">5</li>
              </ul>
            </div>
            <div class="three">13</div>
            <div class="three">小</div>
            <div class="three">单</div>
            <div class="three">牛三</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "table",
  data() {}
};
</script>
<style lang='less'>
@import "~@/assets/style/mixin.less";
@import "~@/assets/style/public.less";
.table {
  width: 100%;
  overflow: auto;
  max-height: 50rem;
  color: #8f9ab5;
  box-shadow: 0 0.2rem 1.5rem hsla(0, 0%, 68%, 0.64);
  .table_table {
    width: 115%;
    .table_titel {
      line-height: 2rem;
      background-color: #f2f5f8;
      border-bottom: 1px solid #fff;
      & > div {
        text-align: center;
      }
    }
    .table_ul {
      & > ul {
        & > li {
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          & > .one {
            width: 15%;
          }
           & > .two {
            width: 33%;
            &>ul{
                justify-content: center;
                &>li{
                    margin-top:0.2rem;
                    margin-left:0.1rem !important;
                }
            }
          }
           & > .three {
            width: 13%;
          }
        }

        & > li:nth-of-type(odd) {
          background-color: #f2f5f8;
        }
        & > li:nth-of-type(even) {
          background-color: #fff;
        }
      }
    }
  }
}
</style>


