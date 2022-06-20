import Vue from 'vue'
import App from './App.vue'
//按需引入
import {Button,MessageBox,Message,Pagination,Dialog,Input,Select,Switch,DatePicker,Option,Form,FormItem,Tag,Table,Breadcrumb,BreadcrumbItem,TableColumn,Radio,Container,Col,Row,Card,Dropdown,DropdownItem,DropdownMenu,Main,Header,Aside,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui';
//引入element ui 样式
import 'element-ui/lib/theme-chalk/index.css';
//引入整体的样式
import './assets/less/index.less'

//全局引入路由配置
import router from './router/index.js'
//全局引入vuex 大仓库
import store from './store/index.js'
//引入axios
import http from 'axios'
//全局引入mock数据
import './api/mock.js'

Vue.config.productionTip = false
//在原型上挂载http
Vue.prototype.$http =http
Vue.prototype.$confirm =MessageBox.confirm
Vue.prototype.$message =Message
//按需引入
Vue.use(Button)
Vue.use(Pagination)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Col)
Vue.use(Card)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)

router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token =store.state.user.token
  if(!token && to.name !== 'login'){
    next({name:'login'})
  }else if(token && to.name === 'login'){
    next({name:'home'})
  }else{
    next()
  }
})

new Vue({
  router,
  render: h => h(App),
  created(){
  store.commit('admin',router)
  },
  store,
}).$mount('#app')
