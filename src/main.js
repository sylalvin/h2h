// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import { getTodayDate, checkNull, checkLogin, bindMobile, Global, Address, MemberLevel } from './unit.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import animate from 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/common.css'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$MEMBER = MemberLevel
Vue.prototype.$ADDRESS = Address
Vue.prototype.$GLOBAL = Global
Vue.prototype.$getTodayDate = getTodayDate
Vue.prototype.$checkNull = checkNull
Vue.prototype.$checkLogin = checkLogin
Vue.prototype.$bindMobile = bindMobile
Vue.use(VueResource)
Vue.use(animate)
Vue.use(ElementUI)
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  error:'./assets/error.png',
  loading:'./assets/loading.png',
  attempt: 1
})

/* eslint-disable no-new */
router.beforeEach((to, from ,next) => {
  // 设置静态资源的地址
  if(window.innerWidth < 768) {
    Vue.prototype.$GLOBAL.staticUrl = "http://files.h2h777.cn/index/bqimg-mobile";
  } else {
    Vue.prototype.$GLOBAL.staticUrl = "http://files.h2h777.cn/index/bqimg";
  }
  
  let hasLogin = checkLogin()
  if(to.path.indexOf("/mycenter") != -1) {
    if (!hasLogin) {
      ElementUI.Message({
        message: "您还未登录，请先登录！",
        type: "warning"
      })
      return
    } else {
        let hasBind = bindMobile()
        if(!hasBind) {
          router.push({
            path: '/bind'
          })
          return
        }
    }
  }
  if((to.path.indexOf("/login") != -1) || (to.path.indexOf("/register") != -1)) {
    if (hasLogin) {
        let bindres = bindMobile()
        if(!bindres) {
          router.push({
            path: '/bind'
          })
        } else {
          ElementUI.Message({
            message: "您已登录，请勿重复登录！",
            type: "warning"
          })
          return
        }
    } 
  }
  if(to.meta) {
    if(to.meta.title) {
      document.title = to.meta.title
    } else {
      document.title = to.meta
    }
  }
  next()
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
