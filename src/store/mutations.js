export default{
    // 全部玩法弹出隐藏事件
    GamePlayPopup(state,popuStatus){
        state.gamePlayPopup=popuStatus;
    },
    // 玩法文字传值 、传参
    gameTypes(state,...typeArgs){
        let obj=[...typeArgs];
        state.gameTypes.class=obj[0].class;
        state.gameTypes.categories=obj[0].categories;
        localStorage.setItem('playgame',JSON.stringify(obj));
    },
    // 玩法枚举的值
    changeGamePlayValue(state,val){
         state.gamePlayValue=val;
         localStorage.setItem('gameplayvalue',val);
    }    
}