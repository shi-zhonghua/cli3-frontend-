import _ from 'lodash'
import layout from '@/components/layout'
import home from './home'
import about from './about'

const routeList = []
const nonPublicChildRoutes = [
  home,
  about,
]
nonPublicChildRoutes.forEach(item => {
  if (_.isArray(item)) {
    item.forEach(route => {
      routeList.push(route)
    })
  } else {
    routeList.push(item)
  }
})

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '',
        redirect: home
      },
      ...routeList
    ]
  }
]

export default [...routes]