import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()  //vue实例可以作为事件总线

//安装toast插件
Vue.use(toast)

//解决移动端300ms延迟
// FastClick.attach(document.body)

//使用懒加载插件 将:src="" 改成v-lazy="",下面第二个参数可以设置未加载成功时的图片
Vue.use(VueLazyLoad)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
