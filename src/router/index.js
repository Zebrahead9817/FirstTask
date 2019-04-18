import Vue from 'vue'
import Router from 'vue-router'
import FirstList from '@/components/FirstList'
import SecondList from '@/components/SecondList'
import ThirdList from '@/components/ThirdList'


Vue.use(Router);

export default new Router({
  routes: [
      {
        path: '/',
        name: 'FirstList',
        component: FirstList,
      },
      {
        path: '/SecondList',
        name: 'SecondList',
        component: SecondList,

      },
      {
        path: '/ThirdList',
        name: 'ThirdList',
        component: ThirdList
      },
    ]
  })
