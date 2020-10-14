<template>
  <div class="main">
    <div class="container-fluid">
      <div class="d-block d-md-none topBtn fixed-bottom">
        <div class="purchase text-center" @click="purchase">
          <img style="width: 36px;" :src="this.$GLOBAL.staticUrl + '/purchase.png'" alt="">
        </div>
      </div>
      <el-dialog
        title="宝氢"
        :visible.sync="dialogVisible">
        <img class="dialogImg" :src="this.$GLOBAL.staticUrl + '/xcx.jpg'" alt="">
        <p>{{ dialogText }}</p>
      </el-dialog>
    </div>
    <div ref="division"></div>
    <div class="container-fluid mb-3">
      <div class="row">

        <!-- <tabs v-bind:tabs-list="tabsList"></tabs> -->
        
        
        <router-view></router-view>
        
        
      </div>
      <div class="row">
        <div class="col-12">
          <div class="d-none d-md-block slideBtn">
            <button class="btn btn-success" @click="purchase">
              前<br>
              往<br>
              购<br>
              买<br>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '../../public/components/tabs.vue'
export default {
  name: 'm-index',
  data () {
    return {
      active: true,
      dialogVisible: false,
      dialogText: "",
      tabsList: [
        {
          link: "/member/bq",
          name: "宝氢会籍"
        }
      ]
    }
  },
  components: {
    "tabs": Tabs
  },
    methods: {
    // handleScrollx() {
    //   let active = this.$refs.division != undefined ? this.$refs.division.getBoundingClientRect().top : '';
    //   if(active > 50) {
    //     this.active = false
    //   } else {
    //     this.active = true
    //   }
    // },
    purchase() {
      this.dialogVisible = true
      var ua = navigator.userAgent.toLowerCase();
      var isWeixin = ua.indexOf('micromessenger') != -1;
      if (isWeixin) {
          this.dialogText = "长按识别图中的二维码"
      }else{
          this.dialogText = "请使用微信扫一扫，扫描该二维码"
      }
    }
  },
  mounted () {
  //   window.addEventListener('scroll',this.handleScrollx)
  // },
  // destroyed(){
  //   window.removeEventListener('scroll', this.handleScrollx)
  // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents {
  font-family: 'Courier New', Courier, monospace;
  border-bottom: #08ac7a solid 1px;
}
ul {
  padding: 10px 0px;
}
li {
  list-style: none;
  padding: 10px;
}
li a {
  color: black;
}
.inner-nav .router-link-active {
  background-color: #fff !important;
  color: #000 !important;
  font-weight: 600 !important;
  border-bottom: none;
}
.topBtn {
  width: 48px;
  height: 48px;
  line-height: 48px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgb(106, 106, 106);
  background-color: rgba(200, 200, 200, 0.3);
}
.purchase {
  width: 48px;
}
.fixed-bottom {
  bottom: 50px;
  left: 25px;
}
.slideBtn {
  position: fixed;
  top: calc(50% - 50px);
  right: 0;
}
@media (min-width: 768px){
    div >>> .el-dialog {
        width: 25% !important;
    }
}
@media (max-width: 768px){
    div >>> .el-dialog {
        width: 70% !important;
    }
}
.dialogImg {
  width: 100%;
}
</style>
