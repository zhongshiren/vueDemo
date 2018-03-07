import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld1'
import databind from '@/components/databind'
import v_on from '@/components/v-on'
import compute from '@/components/compute'
import IndexPage from '@/pages/index'
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/2',
      name: 'HelloWorld1',
      component: HelloWorld1
    },
    {
	path:'/3',
    name: 'databind',
    component:  databind
    },
    {
	path:'/4',
    name: 'v-on',
    component:  v_on
    },
    {
    	path:'/5',
    	name:'compute',
    	component:compute
    }
  ]
})
