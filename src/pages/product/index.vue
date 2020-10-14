<template>
  <div class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-left">
          <h4 class="moudle_title pl-2 mt-3 mb-3">产品中心</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4 mb-3">
          <router-link to="/product/detail" tag="span">
            <!-- <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/banner1.jpg'"> -->
            <div class="card img-fluid" style="border: none !important;" @mouseenter="moveIn('detail')" @mouseleave="moveOut('detail')">
              <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/product-detail.jpg'">
              <div class="card-img-overlay" :style="{'display': moudleName == 'detail' ? 'block' : 'none'}" :class="{bgc: moudleName == 'detail' ? true : false}">
                <div class="text-left moudle_content">
                  <h6>宝氢专栏</h6>
                  <!-- <p>宝氢详情介绍</p> -->
                </div>
              </div>
            </div>
          </router-link>
          
        </div>
        <div class="col-12 col-md-4 mb-3">
          <router-link to="/product/health" tag="span">
            <!-- <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/banner2.jpg'"> -->
            <div class="card img-fluid" style="border: none !important;" @mouseenter="moveIn('health')" @mouseleave="moveOut('health')">
              <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/product-health.jpg'">
              <div class="card-img-overlay" :style="{'display': moudleName == 'health' ? 'block' : 'none'}" :class="{bgc: moudleName == 'health' ? true : false}">
                <div class="text-left moudle_content">
                  <h6>保健专栏</h6>
                  <!-- <p>保健介绍</p> -->
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <router-link to="/product/cosmet" tag="span">
            <!-- <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/banner3.jpg'"> -->
            <div class="card img-fluid" style="border: none !important;" @mouseenter="moveIn('cosmet')" @mouseleave="moveOut('cosmet')">
              <img class="card-img-top brs" v-lazy="this.$GLOBAL.staticUrl + '/product-cosmet.jpg'">
              <div class="card-img-overlay" :style="{'display': moudleName == 'cosmet' ? 'block' : 'none'}" :class="{bgc: moudleName == 'cosmet' ? true : false}">
                <div class="text-left moudle_content">
                  <h6>美容专栏</h6>
                  <!-- <p>美容介绍</p> -->
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- <tabs v-bind:tabs-list="tabsList"></tabs> -->
        
        <!-- <router-view></router-view> -->
        
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
      tabsList: [
        {
          link: "/product/detail",
          name: "产品详情"
        },
        {
          link: "/product/health",
          name: "保健",
        },
        {
          link: "/product/cosmet",
          name: "美容",
        }
      ],
      moveActive: false,
      moudleName: ""
    }
  },
  components: {
    "tabs": Tabs
  },
  methods: {
    moveIn (name) {
      this.moudleName = name
      this.moveActive = true
    },
    moveOut (name) {
      this.moudleName = ""
      this.moveActive = false
    }
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
.moudle_title {
  border-left: 2px solid #62ac30;
  color: #62ac30;
  font-weight: 600;
}
.brs {
  border-radius: 5px;
}

.bgc {
  height: 100%; width: 100%; background-color: rgb(0,0,0,0.7);
}
.moudle_content {
  color: #fff;
}
</style>
