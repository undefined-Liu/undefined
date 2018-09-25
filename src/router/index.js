import Vue from 'vue'
import Router from 'vue-router'
import nmzl from '@/components/nmzl'
import lsc from '@/components/lsc'
import lyc from '@/components/lyc'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'nmzl',
      component: nmzl
    },
		{
			path: '/lsc',
			name: 'lsc',
			component: lsc
		},
		{
			path: '/lyc',
			name: 'lyc',
			component: lyc
		}
  ]
})
