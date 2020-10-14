<template>
    <div id="demo" class="carousel slide" data-ride="carousel" data-interval="10000">

      <!-- 指示符 -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="index" v-for="(item, index) in carouselList" v-bind:key="index" :class="index == 0 ? 'active' : ''"></li>
      </ul>

      <!-- 轮播图片 -->
      <div class="carousel-inner">
        <div v-for="(item, index) in carouselList" v-bind:key="index" class="carousel-item" :class="index == 0 ? 'active' : ''">
          <div v-if="index == 0">
            <img :src="item.src" @click="click1">
          </div>
          <div v-else-if="index == 1">
            <img :src="item.src" @click="click2">
          </div>
          <div v-else>
            <img :src="item.src" @click="click3">
          </div>
        </div>
      </div>

      <!-- 左右切换按钮 -->
      <!-- <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a> -->

      <el-dialog
        title="宝氢"
        :visible.sync="dialogVisible">
        <img class="dialogImg" :src="this.$GLOBAL.staticUrl + '/xcx.jpg'" alt="">
        <p>{{ dialogText }}</p>
      </el-dialog>

    </div>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    carouselList: Array
  },
  data () {
      return {
          carousel: [],
          dialogVisible: false,
          dialogText: ""
      }
  },
  methods: {
    click1 () {
      this.dialogVisible = true
      var ua = navigator.userAgent.toLowerCase();
      var isWeixin = ua.indexOf('micromessenger') != -1;
      if (isWeixin) {
          this.dialogText = "长按识别图中的二维码"
      }else{
          this.dialogText = "请使用微信扫一扫，扫描该二维码"
      }
    },
    click2 () {
      this.$router.push({
        path: '/member'
      })
    },
    click3 () {
      console.log("click3")
    }
  },
  mounted () {
    // console.log(JSON.stringify(this.carouselList));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-item img{
  width: 100%;
  height: auto;
}
.carousel-indicators {
  bottom: -1rem;
}
.carousel-indicators .active{
  background-color: aqua;
}
@media (min-width: 768px){
    div >>> .el-dialog {
        width: 25% !important;
    }
    .carousel-indicators li{
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-left: 6px;
      margin-right: 6px;
    }
}
@media (max-width: 768px){
    div >>> .el-dialog {
        width: 70% !important;
    }
    .carousel-indicators li{
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
}
.dialogImg {
  width: 100%;
}
</style>
