/**
 * nuxt 配置文件
 */
export default {
  router: {
    // 自定义路由表
    extendRoutes(routes, resolve) {
      // 清空基于pages 生成的 默认 的路由表
      routes.splice(0)

      routes.push(
        ...[
          {
            path: '/',
            component: resolve(__dirname, 'pages/layout/'),
            children: [
              {
                // 默认子路由
                path: '',
                component: resolve(__dirname, 'pages/home/')
              }
            ]
          }
        ]
      )
    }
  }
}
