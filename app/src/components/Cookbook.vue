<template>
	<div id="cookbook">
		<h1>菜谱</h1>
		<!-- <router-view></router-view> -->
		<ul>
			<!-- <li v-for="item in data"><router-link :to="'/detail/'+item.name">{{item.pname}}</router-link></li> -->
		</ul>
	</div>
</template>

<script>
import axios from 'axios';
import Mock from 'mockjs';

/* Mock.mock('http://www.aaa.com',{
		'users|3-6':[
			{
				'name':'@cname()',
				'sfz':"@id()",
				"yx":"@email()"
			}
		]
	}) */
	export default {
		name:'Cookbook',
		data(){
			return{
				// tit:'跑步机'
			}
		},
		mounted(){
			
		},
		methods:{
		}
	}
</script>

<style scoped=''>
	#cookbook{
		
	}
</style>