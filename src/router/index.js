import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home';
import LotteryDetail from '../pages/lotterydetail/LotteryDetail.vue';//详情页面
import Echarts    from '../pages/charts/Echarts.vue';//趋势图
import Echartsjiben   from '../pages/charts/Echartsjiben.vue';//基本走势
import Buylotteryrecords   from '../pages/buylotteryrecords/Buylotteryrecords.vue';
import Gameshows from '../pages/gameshows/Gameshows.vue'
import Recentlylottery   from '../pages/recentlylottery/Recentlylottery.vue';
import Login   from '../pages/login/Login.vue';//登录
import Register from '../pages/register/Register.vue';//注册

Vue.use(Router);

export default new Router({
    // mode: "history",
  //  base: process.env.BASE_URL,
    routes: [
     {
        path:'/',
        name:'Home',
        component:Home
      },
      {
        path:'/lotterydetail',
        name:'LotteryDetail',
        component:LotteryDetail
      },
      {
        path:'/echarts',
        name:'Echarts',
        component:Echarts
      },
      {
        path:'/echartsjiben',
        name:'Echartsjiben',
        component:Echartsjiben
      },
      {
        path:'/gameshows',
        name:'Gameshows',
        component:Gameshows
      },
      {
        path:'/buylotteryrecords',
        name:'Buylotteryrecords',
        component:Buylotteryrecords
      },
      {
        path:'/recentlylottery',
        name:'Recentlylottery',
        component:Recentlylottery
      },
      {
        path:'/login',
        name:'Login',
        component:Login
      },
      {
        path:'/register',
        name:'Register',
        component:Register
      }
    ],
  })
