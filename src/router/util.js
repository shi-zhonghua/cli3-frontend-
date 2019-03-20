import _ from 'lodash'

export const initPublicRoutes = routes => {
  if (!_.isArray(routes)) {
    routes = [routes]
  }
  routes.forEach(route => {
    if (route.meta) {
      route.meta.public = true
    } else {
      route.meta = {
        public: true
      }
    }
    if (route.children) {
      route.children.forEach(childRoute => {
        if (childRoute.meta) {
          childRoute.meta.public = true
        } else {
          childRoute.meta = {
            public: true
          }
        }

        if (!childRoute.alias && childRoute.path && !childRoute.path.startsWith('/')) {
          childRoute.alias = '/' + childRoute.path
        }
      })
    }
  })
}
