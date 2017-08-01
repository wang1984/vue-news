# news-project

> A Vue.js project  基于 vue2.0  

## Build Setup
 
# install dependencies

--vue init webpack-simple my-project
--npm install
```
  package.json:

  "dependencies": {
     "vue": "^2.3.3"
   },
   "devDependencies": {
     "babel-core": "^6.0.0",
     "babel-loader": "^6.0.0",
     "babel-preset-env": "^1.5.1",
     "cross-env": "^3.0.0",
     "css-loader": "^0.23.1",
     "style-loader": "^0.13.1",
     "file-loader": "^0.9.0",
     "vue-loader": "^12.1.0",
     "vue-template-compiler": "^2.3.3",
     "webpack": "^2.6.1",
     "webpack-dev-server": "^2.4.5"
  }
 webpack.config.js:

  {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
  }, 
  {  
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader'
  }
```

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
 
# 建议 一些公共的文件 如 jquery jquery插件 一般放在index.html中引入（推荐）
# 当然也可以在 main.js 中使用 require 或者 import引入

# 在js文件中引入 css文件 需要webpack的 style-loader 和 css-loader

# 注意 在webpack2中  不能简写 必须将 -loader写全
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }

# 项目需要的模块
> vuex
> vue-router
> axios   

# 项目目录结构
|-assets 项目的静态资源文件夹
|-components 所有的组件文件夹

#在main.js 文件中引入 base.css （这样是全局引入）
require('./assets/css/base.css') //全局引入、、
不推荐这样使用
推荐使用 在index.html文件中直接将这些静态文件引入


 
App.vue 是项目的首页
在App.vue中引入index.css
<style>
 @import url('./assets/css/index.css');
</style>

>>>
  mounted(){
     this.slider(); 页面加载完毕调用这个方法
  },
  methods:{
    silder(){  //首页轮播图 -- 这个方法可以直接使用jquery插件写
      
    }
  }
<<<  
# 项目规划
>1.规划组件结构
    |--编写 导航栏组件 Nav.vue
    |--编写 |--主要内容组件 Home.vue
                |-- Slider.vue组件
            |--关注组件  Focus.vue      
            |--栏目组件  Column.vue 

    |--编写 底部导航组件 Footer.vue

>2.编写对应的路由
    ```
    main.js

    import VueRouter from 'vue-router'
    import routes from './routeConfig.js'
    Vue.use(VueRouter);
 
    const router = new VueRouter({
      mode: 'history', //切换路径模式，变成history模式 地址栏中就不会有 #
      scrollBehavior: () => ({
        y: 0
      }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
      routes: routes
    });


    new Vue({
      el: '#app',
      render: h => h(App),
      router
    })
    ```
    ```
    routeConfig.js

    import Home from './components/Home.vue'
    import Focus from './components/Focus.vue'
    import Column from './components/Column.vue'
    export default [{
      path: '/home',
      component: Home
    }, {
      path: '/focus',
      component: Focus
    }, {
      path: '/column',
      component: Column
    }, {
      path: '/',
      redirect: '/home'
    }, {
      path: '*',
      redirect: '/home'
    }];
    ``` 
    ```
    Nav.vue:

      <router-link to="/home" tag="li" active-class="active">
        <a href="javascript:;">首页</a>
      </router-link>
      <!-- router-link 默认生成 a 标签 使用tag属性可以让他生成别的标签 -->
      <router-link to="/focus" tag="li" active-class="active">
        <a href="javascript:;">关注</a>
      </router-link>
      <router-link to="/column" tag="li" active-class="active">
        <a href="javascript:;">栏目</a>
      </router-link>  
    ```
>3.编写组件
>4.状态管理 Nav.vue 在个人中心中是不显示的
                    当路由是个人中心的时候是不显示的 
                    watch:{
                      $route(to,from){
                         console.log(to); 
                         console.log(from); 
                        var path=to.path.substring(1);
                        console.log(path)
                      }
                    } 
>5.交互 axios
  loading组件的存在时间 发出请求到接收到数据这段时间内 loading组件要显示
  
  ```
    import Loading from './components/Loading'
    Vue.use(Loading);
    
    import axios from 'axios'
    //axios 是不能 使用 Vue.use()的
    //axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
    
    axios.interceptors.request.use(function(config) { //配置发送请求的信息
      store.dispatch('showLoading')
      return config;
    }, function(error) {
      return Promise.reject(error);
    });
    
    axios.interceptors.response.use(function(response) { //配置请求回来的信息
      store.dispatch('hideLoading')
      return response;
    }, function(error) {
    
      return Promise.reject(error);
    });
    
    //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 配置默认的请求头信息（post）
    //axios.defaults.baseURL='http://localhost:8082/'; 配置默认请求路径
    Vue.prototype.$http = axios //其他页面在使用axios的时候直接  this.$http就可以了 
  ```

>6.自定义过滤器的使用



                          







