import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import vueRouter from 'vue-router'
import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'
//import Routes from './routes'

Vue.use(VueResource)
Vue.use(vueRouter)

const router = new vueRouter({
	routes : [
		{path:"/", component:showBlogs},
		{path:"/add", component:addBlog}
	]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})

	
