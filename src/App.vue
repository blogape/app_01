<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  background: #fff;
  box-sizing: border-box;
}
#app{
  position: absolute;
  /* min-width: 800rem; */
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  overflow: hidden;
  background-color: #f5f5f9;
  color: #333;
  box-sizing: border-box;
}
</style>