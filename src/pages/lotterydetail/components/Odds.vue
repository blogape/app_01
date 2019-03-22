<template>
    <div class="odds rowflex">
        <p class="odds_left rowflex">
            赔率： <i>88</i>
        </p>
        <p class="odds_right rowflex">
            玩法提示：<i class="iconfont iconxiaoyuhao-copy-copy-copy"></i>
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang='less'>
.odds{
    justify-content: space-between;
    color: #8f9ab5;
    font-size: 0.8rem;
    padding: 1rem 0;
    .odds_left{
        background: #f2f5f8;
        padding: 0 0.8rem;
        line-height: 1.5rem;
        border-radius: 0rem 1rem 1rem 0rem;
    }
    .odds_right{
        background: #f2f5f8;
        border-radius: 1rem 0rem 0rem 1rem;
        padding: 0 0.8rem;
        line-height: 1.5rem;
        i{
            display: block;
            color: #666;
            font-size: 1.3rem;
        }
    }
}
</style>


