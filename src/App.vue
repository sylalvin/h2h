<template>
  <div id="app">
    <router-view name="header" class="header"/>
    <router-view name="content" class="content"/>
    <router-view name="footer" class="footer"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      innerWidth:window.innerWidth
    }
  },
  mounted(){
    let that = this;
    window.onresize =() =>{
      return (()=>{
        that.innerWidth = window.innerWidth;
      })()
    };
  },
  watch:{
    // 设置静态资源的地址
    innerWidth(newVal,oldVal){
      if(newVal > 768) {
        if(this.$GLOBAL.staticUrl != "http://files.h2h777.cn/index/bqimg") {
          window.location.reload()
        }
      }
      if(newVal <= 768) {
        if(this.$GLOBAL.staticUrl != "http://files.h2h777.cn/index/bqimg-mobile") {
          window.location.reload()
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
