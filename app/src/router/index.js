<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Me from '@/components/Me'
import Home from '@/components/Home'
import Goods from '@/components/Goods'
import Detail from '@/components/Detail'
import Register from '@/components/Register'
import Sleep from '@/components/Sleep'
import Diet from '@/components/Diet'
import Exercise from '@/components/Exercise'
import Paobuji from '@/components/Paobuji'
import Yujia from '@/components/Yujia'
import Foods from '@/components/Foods'
import Zhumian from '@/components/Zhumian'
import Personal from '@/components/Personal'
import Mydata from '@/components/Mydata'
import Message from '@/components/Message'
import Setup from '@/components/Setup'
import Traincamp from '@/components/Traincamp'
import Walking from '@/components/Walking'
import Yoga from '@/components/Yoga'
import Kit from '@/components/Kit'
import Cycling from '@/components/Cycling'
import Fitness from '@/components/Fitness'
import Cookbook from '@/components/Cookbook'
import Foodmaterial from '@/components/Foodmaterial'
import Eatdrink from '@/components/Eatdrink'
import Topic from '@/components/Topic'
import Onlineteaching from '@/components/Onlineteaching'
import Mycourses from '@/components/Mycourses'
import Logo from '@/components/Logo'
import Login from '@/components/Login'
import Remen from '@/components/Remen'
import Zuixin from '@/components/Zuixin'
import Daren from '@/components/Daren'
import Like from '@/components/Like'
import Wenzhang from '@/components/Wenzhang'

=======
import Vue from 'vue'//vue
import Router from 'vue-router'//router
import HelloWorld from '@/components/HelloWorld'//hellowworld根页面
import Me from '@/components/Me'//主页面底部	我的
import Home from '@/components/Home'//主页面
import Goods from '@/components/Goods'//主页面底部	商品
import Detail from '@/components/Detail'//详情页面
import Register from '@/components/Register'//注册页面
import Sleep from '@/components/Sleep'//主页面底部	睡眠
import Diet from '@/components/Diet'//主页面底部	饮食
import Exercise from '@/components/Exercise'//主页面底部	运动
import Paobuji from '@/components/Paobuji'//主页面底部	商品	跑步机
import Yujia from '@/components/Yujia'//主页面底部	商品	瑜伽
import Foods from '@/components/Foods'//主页面底部	商品	食品
import Zhumian from '@/components/Zhumian'//主页面底部	商品	助眠
import Personal from '@/components/Personal'//主页面底部	我的	用户名右侧箭头
import Traincamp from '@/components/Traincamp'//主页底部	运动	训练营
import Walking from '@/components/Walking'//主页底部	运动	行走
import Yoga from '@/components/Yoga'//主页底部	运动	瑜伽
import Kit from '@/components/Kit'//主页底部	运动	kit
import Cycling from '@/components/Cycling'//主页底部	运动	骑行
import Fitness from '@/components/Fitness'//主页底部	运动	健身
import Cookbook from '@/components/Cookbook'//主页底部	饮食	菜谱
import Foodmaterial from '@/components/Foodmaterial'//主页底部	饮食	食材
import Eatdrink from '@/components/Eatdrink'//主页底部	饮食	吃喝计划
import Topic from '@/components/Topic'//主页底部	饮食	话题
import Onlineteaching from '@/components/Onlineteaching'//主页底部	饮食	在线教学
import Mydata from '@/components/Mydata'//主页面底部	我的	我的数据右侧箭头
import Message from '@/components/Message'//主页面底部	我的	消息
import Setup from '@/components/Setup'//主页面底部	我的	设置
import Mycourses from '@/components/Mycourses'//主页底部	我的	我的课程
import Logo from '@/components/Logo'//logo引导页
import Login from '@/components/Login'//登录页面
import Remen from '@/components/Remen'//主页	今天热门
import Zuixin from '@/components/Zuixin'//主页	最新
import Daren from '@/components/Daren'//主页	享瘦达人
import Like from '@/components/Like'//主页	猜你喜欢
>>>>>>> adf2f2173b0b369066b15450a54c54e0bdfa5ec8


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/home',
      component: HelloWorld,
      children:[
		     {
					path:'/home',
					redirect:'/remen',
					component:Home,
					children:[
						{
							path:'/remen',
							
							component:Remen,
						},
						{
							path:'/zuixin',
							component:Zuixin
						},
						{
							path:'/daren',
							component:Daren
						},
						{
							path:'/like',
							component:Like
						} 
					]

		    },
		    {
					path:'/goods',
					redirect:'/paobuji',
					component:Goods,
					children:[
						{
							path:'/paobuji',
							component:Paobuji
						},
						{
							path:'/yujia',
							component:Yujia
						},
						{
							path:'/foods',
							component:Foods
						},
						{
							path:'/zhumian',
							component:Zhumian
						} 
					]
				},
				{
					path:'/sleep',
					component:Sleep
				},
				{
					path:'/exercise',
					redirect:'/traincamp',
					component:Exercise,
					children:[
						{
							path:'/cycling',
							component:Cycling
						},
						{
							path:'/traincamp',
							component:Traincamp
						},
						{
							path:'/walking',
							component:Walking
						},
						{
							path:'/fitness',
							component:Fitness
						},
						{
							path:'/yoga',
							component:Yoga
						},
						{
							path:'/kit',
							component:Kit
						}
					]
				},
				{
					path:'/diet',
					redirect:'/cookbook',
					component:Diet,
					children:[
						{
							path:'/cookbook',
							component:Cookbook
						},
						{
							path:'/foodmaterial',
							component:Foodmaterial
						},
						{
							path:'/eatdrink',
							component:Eatdrink
						},
						{
							path:'/topic',
							component:Topic
						},
						{
							path:'/onlineteaching',
							component:Onlineteaching
						},
					]
				}
      ]
	},
	{
		path:'/me',
		component:Me
	 },
	 {
		path:'/mycourses',
		component:Mycourses
	 },
    {
    		path:'/detail/:id',
    		component:Detail
    	
    },
    {
    		path:'/register',
			component:Register,
			
	},
	{
		path:'/personal',
		component:Personal
	},
	{
		path:'/mydata',
		component:Mydata
	},
	{
		path:'/message',
		component:Message
	},
	{
		path:'/setup',
		component:Setup
	},
	{
		path:'/logo',
		component:Logo
	},
	{
		path:'/login',
		component:Login
	},
	{
		path:'/wenzhang',
		component:Wenzhang
	},

  ]
})
