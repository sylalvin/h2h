<template>
  <div class="main pb-1 pb-md-3">
    <carousel v-bind:carousel-list="carouselList"></carousel>
    <div class="container-fluid mt-3 mb-3">
      <div class="row">
        <div class="col-1 col-md-4"></div>
        <div class="col-10 col-md-4">
          <div class="row animate_2000 animate__animated animate__flipInX">
            <div class="col-0 col-md-2"></div>
            <div class="col-3 col-md-2 p-2">
              <img class="img-fluid brs" v-lazy="this.$GLOBAL.staticUrl + '/product_icon_1.png'">
              <p class="product_icon-text product_icon-text_1">高浓度氢</p>
            </div>
            <div class="col-3 col-md-2 p-2">
              <img class="img-fluid brs" v-lazy="this.$GLOBAL.staticUrl + '/product_icon_2.png'">
              <p class="product_icon-text product_icon-text_2">密封性优</p>
            </div>
            <div class="col-3 col-md-2 p-2">
              <img class="img-fluid brs" v-lazy="this.$GLOBAL.staticUrl + '/product_icon_3.png'">
              <p class="product_icon-text product_icon-text_3">轻巧便携</p>
            </div>
            <div class="col-3 col-md-2 p-2">
              <img class="img-fluid brs" v-lazy="this.$GLOBAL.staticUrl + '/product_icon_4.png'">
              <p class="product_icon-text product_icon-text_4">容量充足</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-left text-md-center">
          <h4 class="moudle_title pl-2 pl-md-0 pb-0 pb-md-2">视频专区</h4>
        </div>
      </div>
      <div class="row mt-3 d-block d-md-none" style="overflow: hidden;">
        <div class="col-12">
          <div style="display: flex;">
            <div style="flex: 1; margin-right: 10px;" class="animate__animated animate__fadeInLeft">
              <div class="card img-fluid" style="border: none !important;" @click="openVedio('http://files.h2h777.cn/index/vedio/how-to-use.mp4')">
                <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/use_product.jpg'">
                <div class="card-img-overlay bgc2">
                  <div class="text-left moudle_content">
                    <img class="moudle_icon" v-lazy="this.$GLOBAL.staticUrl + '/right.png'" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div class="card img-fluid animate__animated animate__fadeInDown" style="border: none !important;" @click="openVedio('http://files.h2h777.cn/index/vedio/vedio2.mp4')">
                  <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/member_product.jpg'">
                  <div class="card-img-overlay bgc2">
                    <div class="text-left moudle_content">
                      <img class="moudle_icon" v-lazy="this.$GLOBAL.staticUrl + '/right.png'" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="card img-fluid animate__animated animate__fadeInUp" style="border: none !important;" @click="openVedio('http://files.h2h777.cn/index/vedio/vedio1.mp4')">
                  <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/auth_product.jpg'">
                  <div class="card-img-overlay bgc2">
                    <div class="text-left moudle_content">
                      <img class="moudle_icon" v-lazy="this.$GLOBAL.staticUrl + '/right.png'" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3 d-none d-md-block">
        <div class="offset-2 col-8">
          <!-- <div class="row">
            <div class="col-4">
              <div class="card img-fluid" style="border: none !important; overflow: hidden;" @click="openVedio('http://files.h2h777.cn/index/vedio/how-to-use.mp4')" @mouseenter="moveIn('use')" @mouseleave="moveOut('use')">
                <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/product-detail.jpg'">
                <div class="card-img-overlay animate__animated" :style="{'display': moudleName == 'use' ? 'block' : 'none'}" :class="{bgc5: moudleName == 'use' ? true : false,animate__fadeInLeft: moudleName == 'use' ? true : false}">
                  <div class="text-left moudle_text">
                    <h6>我该如何使用？</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card img-fluid" style="border: none !important; overflow: hidden;" @click="openVedio('http://files.h2h777.cn/index/vedio/how-to-use.mp4')" @mouseenter="moveIn('member')" @mouseleave="moveOut('member')">
                <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/product-detail.jpg'">
                <div class="card-img-overlay animate__animated" :style="{'display': moudleName == 'member' ? 'block' : 'none'}" :class="{bgc5: moudleName == 'member' ? true : false,animate__fadeInLeft: moudleName == 'member' ? true : false}">
                  <div class="text-left moudle_text">
                    <h6>会籍规则不了解？</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card img-fluid" style="border: none !important; overflow: hidden;" @click="openVedio('http://files.h2h777.cn/index/vedio/how-to-use.mp4')" @mouseenter="moveIn('auth')" @mouseleave="moveOut('auth')">
                <img class="card-img-top" v-lazy="this.$GLOBAL.staticUrl + '/product-detail.jpg'">
                <div class="card-img-overlay animate__animated" :style="{'display': moudleName == 'auth' ? 'block' : 'none'}" :class="{bgc5: moudleName == 'auth' ? true : false,animate__fadeInLeft: moudleName == 'auth' ? true : false}">
                  <div class="text-left moudle_text">
                    <h6>对产品不放心？</h6>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <!-- other style begin -->
          <div class="row mt-3">
            <div class="col-12 p-0">
              <div class="card img-fluid brs0 border-0">
                <!-- <img class="card-img-top brs0" v-lazy="this.$GLOBAL.staticUrl + '/product-detail.jpg'"> -->
                <img class="card-img-top brs0" v-lazy="this.$GLOBAL.staticUrl + '/vedio-bg.jpg'">
                <div class="card-img-overlay p-0">
                  <div class="row h-100 m-0">
                    <div class="col-4 p-0 border-fff" :class="{bgc1: moudleName == 'use' ? false : true, bgc3: moudleName == 'use' ? true : false}" @click="openVedio('http://files.h2h777.cn/index/vedio/how-to-use.mp4')" @mouseenter="moveIn('use')" @mouseleave="moveOut('use')">
                      <div class="text-center vedio-content" :class="{animate__moveUp: moudleName == 'use' ? true : false}">
                        <div class="vedio-content-desc">
                          <img class="vedio-content-desc-icon" v-lazy="this.$GLOBAL.staticUrl + '/right.png'" alt="">
                          <h5>我该如何使用？</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 p-0 border-fff" :class="{bgc1: moudleName == 'member' ? false : true, bgc3: moudleName == 'member' ? true : false}" @click="openVedio('http://files.h2h777.cn/index/vedio/vedio2.mp4')" @mouseenter="moveIn('member')" @mouseleave="moveOut('member')">
                      <div class="text-center vedio-content" :class="{animate__moveUp: moudleName == 'member' ? true : false}">
                        <div class="vedio-content-desc">
                          <img class="vedio-content-desc-icon" v-lazy="this.$GLOBAL.staticUrl + '/right.png'" alt="">
                          <h5>会籍规则不了解？</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 p-0 border-fff" :class="{bgc1: moudleName == 'auth' ? false : true, bgc3: moudleName == 'auth' ? true : false}" @click="openVedio('http://files.h2h777.cn/index/vedio/vedio1.mp4')" @mouseenter="moveIn('auth')" @mouseleave="moveOut('auth')">
                      <div class="text-center vedio-content" :class="{animate__moveUp: moudleName == 'auth' ? true : false}">
                        <div class="vedio-content-desc">
                          <img class="vedio-content-desc-icon" v-lazy="this.$GLOBAL.staticUrl + '/right.png'" alt="">
                          <h5>对产品不放心？</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- other style end -->

        </div>
      </div>
      <!-- 实时动态 -->
      <div class="row mt-3">
        <div class="col-12 text-left text-md-center">
          <h4 class="moudle_title pl-2 pl-md-0 pb-0 pb-md-2" @click="jumpNews">实时动态</h4>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row news_item" v-for="(item, index) in allList" :key="index + '-web'">
        <div class="col-9 col-md-10 text-left">
          <router-link :to="{name: 'news-detail', params: {id: item.id}}" tag="div">
            <dt class="mt-2 d-block d-md-none">{{item.title.substring(0,20) + '...'}}</dt>
            <dt class="mt-2 d-none d-md-block">{{item.title}}</dt>
            <dd class="mt-2 mb-2">{{item.add_time_date}}</dd>
          </router-link>
        </div>
        <div class="col-3 col-md-2" style="height: 100%;">
          <img :src="item.images.length > 0 ? item.images[0] : defaultsrc" class="img-fluid rounded news_img" alt="">
        </div>
      </div>
    </div>

    <div class="showmodal" v-show="videoModal">
      <div class="video_modal" style="display: flex; justify-content: center; align-items: center;">
        <div class="video_content">
          <video id="video" ref="myvideo" :src="videoSrc" controls="controls" autoplay></video>
        </div>
        <div class="close_icon" @click="closeVedio">
          <img style="width: 32px;" v-lazy="this.$GLOBAL.staticUrl + '/error.png'" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../../public/components/carousel.vue'
export default {
  name: 'i-index',
  data () {
    return {
      username: JSON.parse(localStorage.getItem("userInfo")) != null ? JSON.parse(localStorage.getItem("userInfo")).username : "",
      carouselList: [
        {
          "src": this.$GLOBAL.staticUrl + '/banner1.jpg',
          "title": "便携氢气",
          "desc": "以氢健康技术造福人类"
        },
        {
          "src": this.$GLOBAL.staticUrl + '/banner2.jpg',
          "title": "便携氢气",
          "desc": "以氢健康技术造福人类"
        },
        {
          "src": this.$GLOBAL.staticUrl + '/banner3.jpg',
          "title": "便携氢气",
          "desc": "以氢健康技术造福人类"
        }
      ],
      allList: [], // 首页动态
      defaultsrc: this.$GLOBAL.staticUrl + '/default.jpg',
      videoModal: false,
      videoSrc: "",
      moveActive: false,
      moudleName: ""
    }
  },
  components: {
    "carousel": Carousel
  },
  methods: {
    handleScrollx() {
      // let pic2_height = this.$refs.pic2 != undefined ? this.$refs.pic2.getBoundingClientRect().top : '';
      // let h = document.documentElement.clientHeight || document.body.clientHeight; // 屏幕高度
      // if(h - 50 > pic2_height) {
      //   this.pic2_show = true
      //   this.pic2_active = true
      // } else {
      //   this.pic2_show = false
      //   this.pic2_active = false
      // }
    },
    getAllList () {
      var that = this
      that.$http.post(that.$GLOBAL.apiUrl + '/article/index',{
        page: 1,
        size: 4
      }).then(
        function(res) {
          if(res.body.code == 0) {
            that.allList = []
            let newlist = res.body.data
            for(let key in newlist){
              if(key != "total") {
                let thumbnail = that.imgUrl(newlist[key].content)
                if(thumbnail) {
                  newlist[key].images = thumbnail
                }
                newlist[key].content = that.removeHTMLTag(newlist[key].content)
                that.allList.push(newlist[key])
              }
            }
          } else {
            that.$message({
              message: res.body.msg,
              type: "warning"
            })
          }
        },
        function(error) {
          that.$message({
            message: "网络请求失败",
            type: "warning"
          })
        }
      )
    },
    /*移除HTML标签代码*/
    removeHTMLTag (str) {
      str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
      str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
      str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
      str = str.replace(/-->/g,''); //去除多余空行
      str = str.replace(/<!--.*/g,''); //去除多余空行
      str = str.replace(/&(quot|#34);/g,'\\'); //去除多余空行
      str = str.replace(/&(amp|#38);/g,'&'); //去除多余空行
      str = str.replace(/&(lt|#60);/g,'<'); //去除多余空行
      str = str.replace(/&(gt|#62);/g,'>'); //去除多余空行
      str = str.replace(/&(nbsp|#160);/g,''); //去除多余空行
      str=str.replace(/ /ig,'');//去掉 
      return str;
    },
    imgUrl(string) {
      var a = string;
      var arrimg = [];
      a.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
        arrimg.push(capture);
      })
      if (arrimg != null && arrimg.length > 0) {
        return arrimg;
      } else {
        return false
      }
    },
    openVedio (x) {
      this.videoModal = true
      this.videoSrc = x
      this.$refs.myvideo.play()
    },
    closeVedio () {
      this.$refs.myvideo.pause()
      this.videoModal = false
    },
    moveIn (name) {
      this.moudleName = name
      this.moveActive = true
    },
    moveOut (name) {
      this.moudleName = ""
      this.moveActive = false
    },
    jumpNews () {
      this.$router.push({
        path: '/news'
      })
    }
  },
  mounted () {
    this.getAllList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
span.title-text {
  font-weight: 900 !important;
  background-color: #64AE34;
  padding: 10px 20px;
  color: #fff;
}
.index-img {
  width: 100%;
  height: 50px;
}
.carousel-item img{
  width: 100%;
  height: auto;
}
.down {
  width: 32px;
}
kbd {
  background-color: #2BA234;
}
@media (min-width: 768px){
  .moudle_title {
    border-left: none;
    border-bottom: 2px solid #62ac30;
    color: #62ac30;
    font-weight: 600;
    width: 120px;
    margin: auto;
  }
  .product_icon-text {
    font-size: 0.8rem;
  }
}
@media (max-width: 768px){
  .pc {
    display: none;
  }
  .mobile {
    display: block;
  }
  .moudle_title {
    border-left: 2px solid #62ac30;
    border-bottom: none;
    color: #62ac30;
    font-weight: 600;
  }
  .product_icon-text {
    font-size: 0.8rem;
  }
}
.border-fff {
  border: #fff solid .5px;
}
.brs {
  border-radius: 5px;
}
.brs0 {
  border-radius: 0px;
}
.bgc1 {
  height: 100%; width: 100%; background-color: rgb(0,0,0,0.1);
}
.bgc2 {
  height: 100%; width: 100%; background-color: rgb(0,0,0,0.2);
}
.bgc3 {
  height: 100%; width: 100%; background-color: rgb(0,0,0,0.3);
}
.bgc5 {
  height: 100%; width: 100%; background-color: rgb(0,0,0,0.5);
}
.img-fluid {
  width: 100%;
}
.product_icon-text_1 {
  color: #1992F7;
}
.product_icon-text_2 {
  color: #897afa;
}
.product_icon-text_3 {
  color: #ff5960;
}
.product_icon-text_4 {
  color: #1bd584;
}
.moudle_content {
  position:absolute;
  top:calc(100% - 48px);
  left:calc(100% - 48px);
  color: #fff;
}
.moudle_text {
  position:absolute;
  top:20px;
  left:20px;
  color: #fff;
}
.vedio-content {
  height: 100%;
  width: 100%;
}
.vedio-content-desc {
  width: 100%;
  color: #fff;
  position: absolute;
  top: 70%;
}
.vedio-content-desc-icon {
  width: 32px;
  opacity: 0.9;
  margin-bottom: 10%;
}
.moudle_icon {
  width: 32px;
  opacity: 0.6;
}
.news_item {
  border-bottom: #f1f1f1 dotted 1px;
  height: 100px;
}
.row.news_item:hover {
  color: #62ac30;
}
.news_img {
  height: 50px;
  position: relative;
  top: calc(50% - 25px);
}
.video_display {
  display: none;
}
.video_modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0,0,0,1);
  z-index: 9999;
}
.close_icon {
  position: fixed;
  bottom: 40px;
  /* background-color: rgb(0,255,0,1); */
  z-index: 99999;
}
.animate_2000 {
  animation-duration: 2s;
  animation-delay: 0s;
}
.animate_1500 {
  animation-duration: 1500ms;
  animation-delay: 0s;
}
.animate__moveUp {
  transition:.5s;
  -ms-transition:.5s;
  -webkit-transition:.5s;
  transform:translateY(-10%);
	-ms-transform:translateY(-10%);
	-webkit-transform:translateY(-10%);
}
</style>
