import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test'
import checkboxes from '@/components/checkboxes'
import activities from '@/components/activity/activities'
import activityPublic from '@/components/activity/activityPublic'
import tree from '@/components/tree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/activity',
      name: 'activities',
      component: activities,
      children: [
          {path: '', component: activityPublic},
          {path: '/activity/activityPublic', component: activityPublic},
          {path: '/test', component: test}
      ]
    }, {
      path: '/checkboxes',
      name: 'checkboxes',
      component: checkboxes
    }, {
      path: '/tree',
      name: 'tree',
      component: tree
    }
  ]
})
