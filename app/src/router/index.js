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
import Logo from '@/components/Logo'
import Login from '@/components/Login'
import Remen from '@/components/Remen'
import Zuixin from '@/components/Zuixin'
import Daren from '@/components/Daren'
import Like from '@/components/Like'


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
		    		path:'/me',
		    		component:Me
		    },
		    {
		    		path:'/goods',
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
					component:Exercise
				},
				{
					path:'/diet',
					component:Diet
				}
      ]
    },
    {
    		path:'/detail/:id',
    		component:Detail
    	
    },
    {
    		path:'/register',
    		component:Register
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
  ]
})
