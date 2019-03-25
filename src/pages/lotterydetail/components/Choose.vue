<template>
  <van-popup v-model="isShow" position="bottom" :overlay="false">
    <!-- 大类 -->
    <div class="lot_choose g-home">
      <div class="lot_choose_title">
        全部玩法
        <i class="iconfont iconcha" @click="handleHideClick"></i>
      </div>
      <div class="lot_choose_a">
        <ul>
          <li
            v-for="(item,index) of treedata"
            :key="index"
            :class="{classred:index==current}"
            @click="handlePlaySelectClick(index,item.name)"
          >{{item.name}}</li>
        </ul>
      </div>
      <!-- 小类 -->
      <div class="g-contant">
        <div class="lot_choose_b" v-for="(items,index) of treeList" :key="index">
          <div>
            <h1>{{items.name}}</h1>
            <ul>
              <li
                v-for="(kitem,index) in items.detail"
                :class="{selectColor:kitem.enumid==gamePlayValue}"
                :key="index"
                :let="gamePlayValue"
                :item="kitem.enumid"
                @click="handleKeyClick(kitem.enumid,kitem.name)"
              >{{kitem.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    treedata: {
      type: Array
    }
  },
  data() {
    return {
      current: 0,
      treeList: "",
      categories: ""
    };
  },
  computed: {
    ...mapState(["gamePlayValue"]),
    isShow: {
      get() {
        return this.$store.state.gamePlayPopup;
      },
      set() {
        return this.$store.commit("GamePlayPopup", false);
      }
    }
  },
  created() {
    // 选中值绑定
  },
  methods: {
    //玩法选中
    handlePlaySelectClick(index = 0, val) {
      this.categories = val;
      this.current = index;
      this.treeList = this.treedata[index].detail;
    },

    // 玩法跳转 带值传参
    handleKeyClick(key, val) {
      let classArgs = {
        categories: this.categories || "中三",
        class: val
      };
      this.gameTypes(classArgs);
      // 修改vuex里面玩法枚举的值
      this.changeGamePlayValue(key);
      // 选中顺便隐藏弹出
      this.handleHideClick();
      this.selectId = this.gamePlayValue;
    },
    ...mapMutations(["gameTypes", "changeGamePlayValue"]),
    // 点击隐藏 弹出
    handleHideClick() {
      this.$store.commit("GamePlayPopup", false);
    }
  },
  mounted() {
    this.handlePlaySelectClick();
  }
};
</script>
<style lang="less">
@import "~@/assets/style/mixin.less";
@import "~@/assets/style/public.less";
.classred {
  background-color: #ca0915 !important;
  // border: 1px solid #ca0915 !important;
  color: #fff !important;
}
.selectColor {
  border: 1px solid #ca0915 !important;
  color: #ca0915;
}
.van-popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .lot_choose {
    position: relative;
    .lot_choose_title {
      text-align: center;
      width: 100%;
      line-height: 3rem;
      background-color: @bgColor;
      color: #fff;
      i {
        position: absolute;
        right: 0.5rem;
      }
    }
    .lot_choose_a {
      background: rgb(247, 247, 247);
      ul {
        width: 100%;
        display: inline-block;
        height: auto;
        box-sizing: border-box;
        padding: 0rem 0.5rem 1rem 0.5rem;
        li {
          width: 30%;
          overflow: hidden;
          height: 1.8rem;
          line-height: 2rem;
          border-radius: 0.2rem;
          background: #fff;
          font-size: 0.8rem;
          text-align: center;
          color: #666;
          margin-top: 1rem;
          float: left;
          margin-left: 2.5%;
        }
      }
    }
    .g-contant {
      background-color: #fff;
      .lot_choose_b {
        padding-bottom: 1rem;
        padding: 0 0.5rem;
        &>div {
          border-bottom: 1px solid #ccc;
          h1 {
            font-size: 0.8rem;
            line-height: 2rem;
            padding-left: 0.5rem;
          }

          ul {
            width: 100%;
            overflow: hidden;
            li {
              text-align: center;
              line-height: 2rem;
              height: 1.8rem;
              width: 30%;
              color: #666;
              font-size: 0.8rem;
              border-radius: 0.2rem;
              margin-left: 2%;
              border: 1px solid #ccc;
              margin-bottom: 1rem;
              float: left;
            }
          }
        }
      }
    }
  }
}
</style>


