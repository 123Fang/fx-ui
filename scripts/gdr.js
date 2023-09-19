import render from "json-templater/string.js";
import fs from 'fs'
import routerPages from '../src/router/routerPage/page.js'
import menuList from '../src/const/menuList.js'
import path from 'path'
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const [, , name_En, name_Zh, category] = process.argv
const name_En_Up = name_En.slice(0,1).toUpperCase() + name_En.slice(1)


// 生成文档菜单文件
function genMenuList() {
  const menuItem = menuList.find((item) => {
    return item['title-cn'] === category
  })
  menuItem.list.push({
    "title-cn": `${name_En_Up} ${name_Zh}`,
    "title-en": name_En_Up ,
    path: `/fx/${name_En}`,
  })
}
genMenuList()
const menuListTemplate = `export default ${JSON.stringify(menuList,null,2)}`
fs.writeFileSync(path.join(__dirname,'../src/const/menuList.js'), menuListTemplate)



// 生成文档路由文件
const children = routerPages[1].children.filter((item) => {
  return ['贡献指南','更新日志','安装使用'].indexOf(item.name) === -1
})
const componentRoute = {
  path: name_En,
  name: `${name_En_Up} ${name_Zh}`,
  component: () => import(`/packages/${name_En}/doc/doc.md`)
}
children.push(componentRoute)
const routeTemplateList = []
const ROUTE_TEMPLATE = 
     `{
       path: '{{path}}',
       name: '{{name}}',
       component: () => import('/packages/{{path}}/doc/doc.md')
     }`
children.forEach((item) => {
  routeTemplateList.push(render(ROUTE_TEMPLATE, {
    path: item.path.toLowerCase(),
    name: item.name
  })) 
})
const TEMPLATE = `
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
      {{routesPage}}
    ]
  }
]
`
const pageRouteContext = render(TEMPLATE, {
  routesPage: routeTemplateList.join(',')
})
fs.writeFileSync(path.join(__dirname, '../src/router/routerPage/page.js'), pageRouteContext)
console.log('生成组件文档路由配置成功')

