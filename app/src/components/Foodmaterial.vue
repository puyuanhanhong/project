<template>
	<div>
		<h1>食材</h1>
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
			'sfz':'@id()',
			'yz':'@email()'
		}
	]
}) */
	export default {
		name:'Foodmaterial',
		data(){
			return{
				// tit:'跑步机'
				list:[]
			}
		},
		mounted(){
			/* axios({
					method:'get',
					url:"http://121.199.46.215:8090/qz/appcitylistGoodsdetail.action"
				}).then(function(data){

				})	
			 */
		},
		methods:{

		}
	}
</script>

<style scoped=''>

</style>