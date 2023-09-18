export default [
  {
    path: '/',
    name: '主页',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/fx',
    name: '组件页面',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '',
        name: '贡献指南',
        // component: () => import('')
      },
      {
        path: 'updatelog',
        name: '更新日志',
        // component: () => import('')
      },
      {
        path: 'install',
        name: '安装使用',
        // component: () => import('')
      },
      {
        path: 'button',
        name: 'Button 按钮',
        component: () => import('/packages/button/doc/doc.md')
      },
      {
        path: 'badge',
        name: 'Badge 徽章',
        component: () => import('/packages/badge/doc/doc.md')
      },
    ]
  }
]
