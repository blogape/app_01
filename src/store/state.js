// 默认玩法
let defaultPlay = {
    categories: '中三',
    class: '复试'
}

// 判断默认玩法缓存是否存在
if (localStorage.playgame) {
    //获取缓存
    let obj=localStorage.getItem('playgame');
    let data=JSON.parse(obj);
    defaultPlay = {
        categories: data[0].categories,
        class: data[0].class
     }
}

// 全部玩法 弹出层初始值
let gamePlayPopup = false;


// 玩法初始值设置
let gamePlayDefaultValue=27;

export default {
    gameTypes: defaultPlay, //玩法类型
    gamePlayPopup: gamePlayPopup, //玩法弹出
    gamePlayValue:localStorage.getItem('gameplayvalue')||gamePlayDefaultValue //玩法值 (枚举) 涉及到选中的class
}