<template>
  <div class="Echarts g-home">
    <!-- <Choose></Choose> -->
    <Header></Header>
    <div v-if="contant==0" class="Echarts-choose">
      <div class="Echarts-choose-a">
        <div class="Echarts-choose-a-top g-home">
          <ul class="Echarts-choose-a-top-title rowflex">
            <li>期号</li>
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
          </ul>
          <div class="Echarts-choose-a-top-contant">
            <ul v-for="(title,index) in 20" :key="index" class="rowflex">
              <li>990</li>
              <li>
                <p class="p_active">
                  0
                  <i class="i_active">1</i>
                </p>
              </li>
              <li v-for="(title,index) in 9" :key="index">1</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="Echarts-choose-b">
        <ul v-for="(title,index) in 4" :key="index" class="rowflex">
          <li>990</li>
          <li v-for="(title,index) in 10" :key="index">1</li>
        </ul>
      </div>
    </div>
    <div v-else-if="contant==1" class="Echarts-choose">跨度</div>
    <div v-else class="Echarts-choose">和值</div>
    <!-- 选择 -->
    <div class="Echarts-bot">
      <ul class="rowflex">
        <li
          v-for="(title,index) in title"
          :key="index"
          @click="titlechange(index)"
          :class="contant==index?'Ec_active':''"
        >{{title}}</li>
      </ul>
    </div>

    <!-- 倒计时 -->
    <div class="Ec_djs">
      <i
        style=" display: inline-block;width:0.5rem;height:0.5rem;border-radius: 0.5rem;background:#333;"
      ></i>
      距离开奖时间：
      <span style="color:red;">{{ss}}</span>
    </div>
  </div>
</template>

<script>
import Choose from "./components/Choose.vue";
import Header from "./Header.vue";
// import { Tab, Tabs } from "vant";
import { formateDate } from "../../utils/utils.js";

export default {
  components: {
    Header,
    Choose
  },
  data() {
    return {
      title: ["走势", "跨度", "和值"],
      contant: 0,
      ss:"00:00:00"
    };
  },
  created() {
  
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

<style lang="less"                                            >
@import "~@/assets/style/mixin.less";
@import "~@/assets/style/public.less";
.Echarts {
  height: 100%;
  .Echarts-choose {
    height: 82%;
    color: rgb(177, 178, 189);
    .Echarts-choose-a {
      height: 75%;
      font-size: 0.8rem;
      .Echarts-choose-a-top-title {
        width: 100%;
        background: rgb(229, 229, 229);
        height: 8%;
        border-bottom: 1px solid rgb(177, 178, 189);
        li {
          text-align: center;
          line-height: 2rem;
        }
        li:first-child {
          width: 15%;
        }
        li:not(:first-child) {
          width: 8.5%;
          border-left: 1px solid rgb(177, 178, 189);
        }
      }
      .Echarts-choose-a-top-contant {
        height: 92%;
        overflow: scroll;
        ul {
          border-bottom: 1px solid rgb(177, 178, 189);
          li {
            text-align: center;
            line-height: 2rem;
          }
          li:first-child {
            width: 15%;
          }
          li:nth-child(2) {
            p {
              position: relative;
              width: 1.5rem;
              height: 1.5rem;
              border-radius: 50%;
              margin-top: 0.25rem;
              margin-left: 0.2rem;
              line-height: 1.5rem;
            }
            i {
              position: absolute;
              right: -0.3rem;
              top: -0.3rem;
              font-size: 0.1rem !important;
              display: block;
              display: none;
              width: 0.8rem;
              height: 0.8rem;
              line-height: 0.8rem;
              background: rgb(64, 137, 242);
              border-radius: 50%;
              text-align: center;
            }
          }
          li:not(:first-child) {
            width: 8.5%;
            border-left: 1px solid rgb(177, 178, 189);
          }
        }
        & > ul:nth-child(even) {
          background: rgb(248, 248, 248);
        }
        & > ul:nth-child(odd) {
          background: #fff;
        }
      }
    }
    .Echarts-choose-b {
      height: 25%;
      font-size: 0.8rem;

      ul {
        height: 25%;
        border-bottom: 1px solid #ddd;
        background: rgb(239, 254, 213);

        li:first-child {
          width: 15%;
        }
        li {
          line-height: 2rem;
          text-align: center;
        }
        li:not(:first-child) {
          width: 8.5%;
          border-left: 1px solid #ddd;
        }
      }
    }
  }
  .Echarts-bot {
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

.p_active {
  color: #fff !important;
  background-color: @bgColor !important;
}
.i_active {
  display: block !important;
}

</style>
