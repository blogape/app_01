<template>
  <div class="game g-home">
    <div class="chart_header">
      <div class="content rowflex">
        <div class="back">
          <i class="iconfont iconfanhui"></i>
        </div>
        <div class="title rowflex">
          <div class="choose rowflex">
            <p>时时彩</p>
            <i class="iconfont iconsj"></i>
          </div>
        </div>
        <div class="more"></div>
      </div>
    </div>

    <div class="game_intro g-contant">
      <div class="game_intro_top">
        <ul class="rowflex">
          <li
            v-for="(intro,index) in intro"
            :key="index"
            @click="change(index)"
            :class="contant==index?'active':''"
          >{{intro}}</li>
        </ul>
      </div>
      <div class="game_intro_bot">
        <!-- 彩种介绍 -->
        <div v-if="contant==0">
          <div class="game_time">
            <div class="game_time_title rowflex">
              <i class="iconfont iconsvg-"></i>
              <span>开奖时间</span>
            </div>
            <div class="game_time_class">
              <p>重庆时时彩：</p>
              <span>00:31~23:50,每20分钟一期，全天59期</span>
            </div>

            <div class="game_time_class">
              <p>重庆时时彩：</p>
              <span>00:31~23:50,每20分钟一期，全天59期</span>
            </div>
          </div>
          <div class="game_time">
            <div class="game_time_title rowflex">
              <i class="iconfont iconxialakuang-wanfashuoming" style="font-size:1.2rem;"></i>
              <span style="padding-left:0.3rem;">玩法简介</span>
            </div>
            <div class="game-time-intro">
              <p>1.时时彩投注区分为万位、千位、百位、十位和个位，个位号码范围为0~9.每期从各位出1个号码作为中奖号码，即开奖号码为5位数。时时彩玩法即是竞猜5位开奖号码的全部号码、部分号码或者部分号码特征。</p>
              <p>1.时时彩投注区分为万位、千位、百位、十位和个位，个位号码范围为0~9.每期从各位出1个号码作为中奖号码，即开奖号码为5位数。时时彩玩法即是竞猜5位开奖号码的全部号码、部分号码或者部分号码特征。</p>
            </div>
            <div class="game-time-intro">
              <p style="padding-bottom: 0.6rem;">
                <i class="iconfont iconzuojiantou"></i>
                直选：将号码以唯一的排列方式进行投注
              </p>

              <p style="padding-bottom: 0.6rem;">
                <i class="iconfont iconzuojiantou"></i>
                组选：将投注号码的所有排列方式作为一注投注号码，进行投注。事例：123，排列方式有123、132、213、231、312、321，共有6种。
              </p>
              <p style="padding-bottom: 0.6rem;">
                <i class="iconfont iconzuojiantou"></i>
                直选：将号码以唯一的排列方式进行投注
              </p>

              <p style="padding-bottom: 0.6rem;">
                <i class="iconfont iconzuojiantou"></i>
                组选：将投注号码的所有排列方式作为一注投注号码，进行投注。事例：123，排列方式有123、132、213、231、312、321，共有6种。
              </p>
              <p style="padding-bottom: 0.6rem;">
                <i class="iconfont iconzuojiantou"></i>
                直选：将号码以唯一的排列方式进行投注
              </p>

              <p style="padding-bottom: 0.6rem;">
                <i class="iconfont iconzuojiantou"></i>
                组选：将投注号码的所有排列方式作为一注投注号码，进行投注。事例：123，排列方式有123、132、213、231、312、321，共有6种。
              </p>
            </div>
          </div>
        </div>
        <!-- 玩法规则 -->
        <div v-if="contant==1">
          <div class="game-intro-Folding">
            
            <van-collapse v-model="activeName" accordion>
              <h1>五星</h1>
              <van-collapse-item title="五星直选" name="1">
                <p class="five_star">
                  <i>复式：</i>
                  <span>网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</span>
                </p>
                <p class="five_star">
                  <i>复式：</i>
                  <span>网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</span>
                </p>
              </van-collapse-item>
              <van-collapse-item title="五星组选" name="2">
                 <p class="five_star">
                  <i>复式：</i>
                  <span>网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</span>
                </p>
                <p class="five_star">
                  <i>复式：</i>
                  <span>网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</span>
                </p>
              </van-collapse-item>
              <h1>四星</h1>
              <van-collapse-item title="四星直选" name="3">
                <p class="five_star">
                  <i>复式：</i>
                  <span>网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</span>
                </p>
                <p class="five_star">
                  <i>复式：</i>
                  <span>网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</span>
                </p>
              </van-collapse-item>
              <van-collapse-item title="四星组选" name="4">
                 <p class="five_star">
                  <i>复式：</i>
                  <span>网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</span>
                </p>
                <p class="five_star">
                  <i>复式：</i>
                  <span>网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</span>
                </p>
              </van-collapse-item>
            </van-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: ["彩种介绍", "玩法规则"],
      contant: 0,
      activeName: "1",
      sixingactiveName:'1'
    };
  },
  methods: {
    change(index) {
      this.contant = index;
    }
  }
};
</script>

<style lang='less'>
@import "~@/assets/style/mixin.less";
.game {
  background: #fff;
  .game_intro {
    .game_intro_top {
      ul {
        li {
          width: 50%;
          height: 2.3rem;
          line-height: 2.3rem;
          font-size: 1rem;
          text-align: center;
          color: rgb(210, 210, 210);
        }
        .active {
          color: @bgColor;
          border-bottom: 0.1rem solid red;
        }
      }
    }
    .game_intro_bot {
      color: rgb(51, 51, 51);
      .game_time {
        padding: 1rem;
        .game_time_title {
          font-size: 1rem;
          line-height: 1.5rem;
          span {
            padding-left: 0.5rem;
          }
          i {
            display: block;
            font-size: 1rem;
            color: @bgColor;
          }
        }
        .game-time-intro {
          p {
            font-size: 0.9rem;
            line-height: 1.2rem;
            padding-left: 1.5rem;
            padding-bottom: 1rem;
            i {
              color: rgb(102, 102, 102);
            }
          }
        }
        .game_time_class {
          padding-left: 1.5rem;
          font-size: 0.8rem;
          line-height: 1.5rem;
          margin-top: 0.5rem;
          span {
            color: #333;
          }
        }
      }
      .game-intro-Folding {
        h1 {
          font-size: 0.6rem;
          line-height: 2rem;
          padding-left: 0.5rem;
          color: #999;
          background: #f5f5f9;
        }
        .five_star {
          margin-bottom: 1rem;
          i {
            color: blue;
          }
        }
      }
    }
  }
}
</style>
