<template>
  <div class="lotclass rowflex">
    <p class="lotclass_ws">
      <i>{{data}}</i>
    </p>
    <div class="lotclass_ul">
      <ul class="rowflex">
        <li @click="handleAllClick(item)" v-for='(item,index) of list' :key='index'>{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: String
    }
  },
  data() {
    return {
      list:['全','大','小','单','双','清']
    };
  },
  created() {},
  methods: {
    handleAllClick(val) {
        this.$emit('handleToosBack',val);
    }
  }
};
</script>
<style lang='less' scoped>
.lotclass {
  width: 100%;
  color: #333;
  box-sizing: border-box;
  padding: 0.8rem 0.5rem;
  justify-content: space-between;
  .lotclass_ws {
    width: 1rem;
    height: 2rem;
    line-height: 1rem;
    font-size: 0.8rem;
    color: #8f9ab5;
  }
  .lotclass_ul {
    width: 93%;
    ul {
      box-shadow: rgb(172, 179, 190) 0px 0.06rem 0.03rem 0px inset;
      height: 1.7rem;
      line-height: 1.7rem;
      border: 1px solid #ccc;
      border-radius: 1.7rem;
      background-color: rgb(242, 245, 248);
      color: rgb(51, 51, 51);
      font-size: 1.1rem;
      li {
        text-align: center;
        width: 16.6%;
        float: left;
      }
    }
  }
}
</style>

