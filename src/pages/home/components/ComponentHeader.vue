<template>
    <div class="header rowflex">
        <span class="left">登录</span>
        <span class="right">注册</span>
    </div>
</template>

<script>
export default {
        name:'header',
        data(){
            return{
                
            }
        }
}
</script>

<style lang='less' scoped>
@import '~@/assets/style/mixin.less';
.header{
     background-color: @bgColor;
     color: #fff;
     line-height: 3rem;
     justify-content: space-between;
     span{
         padding: 0 0.5rem;
     }
}
</style>
