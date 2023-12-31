
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
       path: 'progress',
       name: 'Progress 进度条',
       component: () => import('/packages/progress/doc/doc.md')
     },{
       path: 'checkbox',
       name: 'Checkbox 多选框',
       component: () => import('/packages/checkbox/doc/doc.md')
     },{
       path: 'date',
       name: 'Date 日期选择',
       component: () => import('/packages/date/doc/doc.md')
     },{
       path: 'input',
       name: 'Input 输入框',
       component: () => import('/packages/input/doc/doc.md')
     },{
       path: 'confirm',
       name: 'Confirm 消息确认',
       component: () => import('/packages/confirm/doc/doc.md')
     },{
       path: 'message',
       name: 'Message 消息提示',
       component: () => import('/packages/message/doc/doc.md')
     },{
       path: 'menu',
       name: 'Menu 菜单',
       component: () => import('/packages/menu/doc/doc.md')
     },{
       path: 'modal',
       name: 'Modal 弹窗',
       component: () => import('/packages/modal/doc/doc.md')
     },{
       path: 'optfile',
       name: 'Optfile 文件选择',
       component: () => import('/packages/optfile/doc/doc.md')
     },{
       path: 'dropdown',
       name: 'DropDown 下拉菜单',
       component: () => import('/packages/dropdown/doc/doc.md')
     },{
       path: 'drawer',
       name: 'Drawer 抽屉',
       component: () => import('/packages/drawer/doc/doc.md')
     },{
       path: 'switch',
       name: 'Switch 开关',
       component: () => import('/packages/switch/doc/doc.md')
     },{
       path: 'textarea',
       name: 'Textarea 文本域',
       component: () => import('/packages/textarea/doc/doc.md')
     },{
       path: 'icon',
       name: 'Icon 图标',
       component: () => import('/packages/icon/doc/doc.md')
     },{
       path: 'loading',
       name: 'Loading 加载中',
       component: () => import('/packages/loading/doc/doc.md')
     },{
       path: 'pagination',
       name: 'Pagination 分页',
       component: () => import('/packages/pagination/doc/doc.md')
     },{
       path: 'color',
       name: 'Color 颜色',
       component: () => import('/packages/color/doc/doc.md')
     },{
       path: 'select',
       name: 'Select 下拉框',
       component: () => import('/packages/select/doc/doc.md')
     },{
       path: 'radio',
       name: 'Radio 单选',
       component: () => import('/packages/radio/doc/doc.md')
     },{
       path: 'table',
       name: 'Table 表格',
       component: () => import('/packages/table/doc/doc.md')
     },{
       path: 'tree',
       name: 'Tree 树形控件',
       component: () => import('/packages/tree/doc/doc.md')
     }
    ]
  }
]
