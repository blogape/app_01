<template>
  <div class="Echartsjiben g-home">
    <!-- 头部 -->
    <div class="chart_header">
      <div class="content rowflex">
        <div class="back">
          <i class="iconfont iconfanhui"></i>
        </div>
        <div class="title rowflex">
          <div class="choose rowflex">
            <p>基本走势</p>
            <i class="iconfont iconsj"></i>
          </div>
        </div>
        <div class="more">
          <i class="iconfont iconshezhi1"></i>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="Ec_table">
      <div class="Ec_table_top">
        <!-- 开奖结果 -->
        <div v-if="contant==0" class="zhoushi">
          <ul class="rowflex">
            <li>期号</li>
            <li>开奖号码</li>
            <li>前三</li>
            <li>中三</li>
            <li>后三</li>
            <li>大小</li>
            <li>单双</li>
            <li>牛牛</li>
          </ul>
          <div class="zhoushi_bot">
            <ul v-for="(title,index) in 20" :key="index" class="rowflex">
              <li>3022期</li>
              <li v-for="(title,index) in 7" :key="index">00</li>
            </ul>
          </div>
        </div>
        <!-- 冷热 -->
        <div v-else-if="contant==1" class="pjyl">
          <ul class="rowflex">
            <li v-for="(weishu,index) in weishu" :key="index" class="rowflex">
              <p>{{weishu}}</p>
              <div class="three culflex">
                <i></i>
                <i></i>
              </div>
            </li>
          </ul>
          <div class="zhoushi_bot">
            <ul v-for="(title,index) in 10" :key="index" class="rowflex">
              <li class="qihao">
                <i>0</i>
              </li>
              <li v-for="(title,index) in 5" :key="index">0</li>
            </ul>
            <div class="tip">展示为近30期开奖号码里，号码1~9在万、千、百、十、个位上的出现次数，红色为出现次数最多的号码，蓝色为出现次数最少的号码。</div>
          </div>
        </div>
        <!-- 平均遗漏 -->
        <div v-else class="pjyl">
          <ul class="rowflex">
            <li v-for="(weishu,index) in weishu" :key="index" class="rowflex">
              <p>{{weishu}}</p>
              <div class="three culflex">
                <i></i>
                <i></i>
              </div>
            </li>
          </ul>
          <div class="zhoushi_bot">
            <ul v-for="(title,index) in 10" :key="index" class="rowflex">
              <li class="qihao">
                <i>0</i>
              </li>
              <li v-for="(title,index) in 5" :key="index">0</li>
            </ul>
            <div class="tip">展示为近30期开奖号码里，号码1~9在万、千、百、十、个位上平均几期开出一次。</div>
          </div>
        </div>
      </div>
      <div class="Ec_table_bot">
        <ul class="rowflex">
          <li
            v-for="(title,index) in title"
            :key="index"
            @click="titlechange(index)"
            :class="contant==index?'Ec_active':''"
          >{{title}}</li>
        </ul>
      </div>
      <div class="Ec_djs">
        <i
          style=" display: inline-block;width:0.5rem;height:0.5rem;border-radius: 0.5rem;background:#333;"
        ></i>
        距离开奖时间：
        <span style="color:red">{{ss}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { formateDate } from "../../utils/utils.js";

export default {
  components: {
    Header
  },
  data() {
    return {
      title: ["开奖结果", "冷热", "平均遗漏"],
      weishu: ["号码", "万位", "千位", "百位", "十位", "个位"],
      contant: 0,
      ss:"00:00:00"
    };
  },
  created(){
    let vm = this
    var i = 1000;
    window.setInterval(function() {
      vm.$set(vm.$data,'ss', formateDate(i))
      i--;
      if (i == 1) {
        //这里做变为1的时候的事
      }
    }, 1000);
  },
  methods: {
    titlechange(index) {
      this.contant = index;
    }
  }
};
</script>

<style lang="less">
@import "~@/assets/style/mixin.less";
@import "~@/assets/style/public.less";
.Echartsjiben {
  .Ec_table {
    height: 90%;
    .Ec_table_top {
      overflow: auto;
      height: 90%;
      color: #9198ab;
      .zhoushi {
        & > ul {
          background: rgb(229, 229, 229);
          font-size: 0.8rem;
          color: rgb(177, 178, 189);
          border-bottom: 1px solid #cdcdcd;
          li {
            text-align: center;
            height: 2rem;
            line-height: 2rem;
          }
          li:first-child {
            width: 18%;
          }
          li:nth-child(2) {
            width: 20% !important;
          }
          li:not(:first-child) {
            width: 10.33%;
            border-left: 1px solid rgb(177, 178, 189);
          }
        }
        .zhoushi_bot {
          height: 38rem;
          & > ul:nth-child(even) {
            background: rgb(248, 248, 248);
          }
          & > ul:nth-child(odd) {
            background: #fff;
          }
          & > ul {
            border-bottom: 1px solid rgb(177, 178, 189);
            font-size: 0.8rem;
            color: rgb(177, 178, 189);
            li {
              position: relative;
              text-align: center;
              height: 2rem;
              line-height: 2rem;
            }
            li:first-child {
              width: 18%;
            }
            li:nth-child(2) {
              width: 20% !important;
            }
            li:not(:first-child) {
              width: 10.33%;
              border-left: 1px solid rgb(177, 178, 189);
            }
          }
        }
      }

      .pjyl {
        & > ul {
          background: rgb(229, 229, 229);
          font-size: 0.8rem;
          color: rgb(177, 178, 189);
          border-bottom: 1px solid #cdcdcd;
          li {
            text-align: center;
            height: 2.2rem;
            line-height: 2.2rem;
            p {
              margin-left: 0.6rem;
            }
            .three {
              display: inline-block;
              height: 1.5rem;
              margin-left: 0.4rem;
              margin-top: 0.4rem;
              i {
                display: block;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0.3rem;
              }
              i:first-child {
                border-color: transparent transparent #666 transparent;
              }
              i:last-child {
                margin-top: 0.2rem;
                border-color: #666 transparent transparent transparent;
              }
            }
          }
          li:first-child {
            width: 20%;
          }
          li:not(:first-child) {
            width: 20%;
            border-left: 1px solid rgb(177, 178, 189);
          }
        }
        .zhoushi_bot {
          height: 38rem;
          .tip {
            padding: 0.8rem;
            color: #666;
            font-size: 0.6rem;
            line-height: 1.2rem;
          }
          & > ul:nth-child(even) {
            background: rgb(248, 248, 248);
          }
          & > ul:nth-child(odd) {
            background: #fff;
          }
          & > ul {
            border-bottom: 1px solid rgb(177, 178, 189);
            font-size: 0.8rem;
            color: rgb(177, 178, 189);
            li {
              position: relative;
              text-align: center;
              height: 2.2rem;
              line-height: 2.2rem;
            }
            .qihao {
              width: 20%;
              i {
                display: block;
                width: 2rem;
                height: 2rem;
                border-radius: 2rem;
                line-height: 2rem;
                background: red;
                margin: 0 auto;
                color: #fff;
                margin-top: 0.1rem;
              }
            }
            li:not(:first-child) {
              width: 20%;
              border-left: 1px solid rgb(177, 178, 189);
            }
          }
        }
      }
    }
    .Ec_table_bot {
      width: 100%;
      ul {
        justify-content: space-between;
        li {
          text-align: center;
          width: 33.3%;
          line-height: 1.5rem;
          font-size: 0.8rem;
          color: #666;
          background-color: #ddd;
        }
      }
    }
    
  }
}

.Ec_active {
  background-color: #f11717 !important;
  color: #fff !important;
}
</style>
