const baseSize=32;
function setRem(){
    const scale=document.documentElement.clientWidth/750;
    document.documentElement.style.fontSize=(baseSize*Math.min(scale,2))+'px';
}
setRem();

//当浏览器被重置大小的时候调用
window.onresize=function(){
    setRem();
}