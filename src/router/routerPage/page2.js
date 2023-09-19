
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
        component: () => import('@/md/participation.md')
      },
      {
        path: 'updatelog',
        name: '更新日志',
        component: () => import('@/md/updatelog.md')
      },
      {
        path: 'install',
        name: '安装使用',
        component: () => import('@/md/install.md')
      },
      {
       path: 'button',
       name: 'Button 按钮',
       component: () => import('/packages/button/doc/doc.md')
     },{
       path: 'badge',
       name: 'Badge 徽章',
       component: () => import('/packages/badge/doc/doc.md')
     },{
       path: 'layout',
       name: 'Layout 布局',
       component: () => import('/packages/layout/doc/doc.md')
     },{
       path: 'test',
       name: 'Test 测试',
       component: () => import('/packages/test/doc/doc.md')
     }
    ]
  }
]
