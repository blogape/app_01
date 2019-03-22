<template>
  <div class="Selectionnum">
    <div class="Selectionnum-out">
      <textarea style="padding:0.5rem;" placeholder="请手动输入号码"></textarea>
    </div>
    <div class="tip">
      每一注号码之间请用逗号[,]、空格[]、换行键[Enter]隔开
    </div>
  </div>
</template>

<script>
export default {
  name: "Selectionnum"
};
</script>

<style lang="less">
.Selectionnum {
  width: 100%;
  .Selectionnum-out {
    width:95%;
    height: 20rem;
    // padding: 1rem;
    background: rgb(247,248,252);
    margin:0 auto;
    border:1px solid rgb(235,237,243);
    textarea {
      width:90%;
      height:17rem;
       border:1px solid rgb(235,237,243);
      //  margin-top:1rem;
      //  margin-left:1rem;
      display: block;
      margin:1rem auto;
       resize:none;
       color: #666;
       font-size: 1rem;
    }
  }
  .tip{
    font-size: 0.6rem;
    line-height: 3.5rem;
    color:#666;
    width: 23rem;
    margin:0 auto;
  }
}
</style>
