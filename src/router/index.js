import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import BootstrapVueExample from '@/components/BootstrapVueExample'
// import BootstrapVue from 'bootstrap-vue'

import ElementUILayout from '@/components/ElementUILayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
        name: 'ElementUILayout',
        component: ElementUILayout
    }
  ]
})
