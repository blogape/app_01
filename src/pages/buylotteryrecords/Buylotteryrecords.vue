<template>
  <div class="buylot g-home">
    <!-- 彩票订单的头部 -->
    <div class="chart_header">
      <div class="content rowflex">
        <div class="back">
          <i class="iconfont iconfanhui"></i>
        </div>
        <div class="choose">
          <ul class="rowflex">
            <li v-for="(title,index) in title" @click="titlechoose(index)" :key="index">
              <p :class="titlecontant==index?'active':''">{{ title }}</p>
            </li>
          </ul>
        </div>
        <div class="more" :style="titlecontant==0?hiding:''">
          <i class="iconfont iconfunnel"></i>
        </div>
      </div>
    </div>
    <!-- 数字彩票 -->
    <div v-if="titlecontant==0" class="num_lot g-contant">
      <van-tabs v-model="active" swipeable>
        <van-tab v-for="(numlot,index) in numlot" :title="numlot" :key="index">
          <div v-if="active==0" class="all">
            <div class="liang rowflex">
              <p>
                投注量：
                <i>0</i>
              </p>
              <p>
                盈亏量：
                <i>0</i>
              </p>
            </div>
            <Nodata></Nodata>  
          </div>
          <div v-else-if="active==1" class="all">
             <Nodata></Nodata>  
          </div>
          <div v-else-if="active==2" class="all">
            <Nodata></Nodata>  
          </div>
          <div v-else class="all">
             <Nodata></Nodata>  
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 体育彩票 -->
    <div v-else class="num_lot g-contant">
      <van-tabs v-model="active" swipeable>
        <van-tab v-for="(numlot,index) in numlot" :title="numlot" :key="index">
          <div v-if="active==0" class="all">
            <div class="have_num">
              <ul>
                <li v-for="(numlot,index) in 20" :key="index">
                  <div class="have_num_top rowflex">
                    <img
                      src="https://cpweb-new.dgstaticresources.net/cp77.kosungames.com/uploads/images/20170113/5878a932233e8.png"
                      alt
                    >
                    <i>重庆时时彩 20190313048期</i>
                  </div>
                  <div class="have_num_bot rowflex">
                    <p>
                      投注：
                      <i>2.0000</i> 元
                    </p>
                    <div class="noaward">
                      <i class="iconfont iconcha1"></i>
                      <i>未中奖</i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div v-else-if="active==1" class="all">
            <Nodata></Nodata>  
          </div>
          <div v-else-if="active==2" class="all">
             <Nodata></Nodata>  
          </div>
          <div v-else class="all">
             <Nodata></Nodata>  
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Nodata from "./components/Nodata.vue";
export default {
  components:{
    Nodata
  },
  data() {
    return {
      active: 0,
      title: ["数字彩票", "体育彩票"],
      titlecontant: 0,
      numlot: ["全部注单", "待开奖", "已开奖", "已撤单"],
      hiding: "visibility:hidden;"
    };
  },
  methods: {
    titlechoose(index) {
      this.titlecontant = index;
    }
  }
};
</script>

<style lang="less">
.buylot {
  .choose {
    width: 50%;
    height: 2rem;
    margin-top: 0.5rem;
    ul {
      height: 100%;
      justify-content: space-between;
      li {
        width: 45%;
        font-size: 0.9rem !important;
        color: #fff;
        line-height: 2rem;

        text-align: center;
        p {
          width: 100%;
          height: 100%;
        }
        .active {
          border-bottom: 0.1rem solid #fff !important;
        }
      }
    }
  }
  .num_lot {
    .van-tabs__content {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      overflow: scroll;
    }
    .all {
      .have_num {
        ul {
          li {
            padding: 1rem;
            border-bottom: 1px solid #ddd;
          }
        }
        img {
          display: block;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 1.5rem;
        }
        .have_num_top {
          line-height: 1.5rem;
          font-size: 0.8rem;
          i {
            padding: 0 0.5rem;
          }
        }
        .have_num_bot {
          font-size: 0.6rem;
          line-height: 2rem;
          justify-content: space-between;
          p {
            padding-left: 0.5rem;
          }
          .noaward {
            i {
              font-size: 0.5rem;
              color: #666;
              margin-left: 0.2rem;
            }
          }
        }
      }
      .liang {
        padding: 1rem;
        justify-content: space-between;
        font-size: 0.8rem;
        color: #333;
        i {
          color: red;
        }
      }
      
    }
  }
}
</style>
