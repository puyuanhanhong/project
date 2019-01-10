<template>
	<div id="traincamp">
		<h1>
			<span></span>
			coack
		</h1>
		<ul>
			<li>
				<span>已参加的课程</span>
				<span>+添加</span>
			</li>
			<li>
				<span>5分钟瑜伽体验课</span>
				<span>10人正在练</span>
			</li>
			<li>
				<span>2分钟体验课</span>
				<span>5人正在练</span>
			</li>
		</ul>
		<h2>查看全部</h2>
		<h3>训练计划</h3>
		<div>

		</div>
		<h4>为你定制的智能计划</h4>
		<p>智能训练计划已经改变了238万人的身材，希望也能改变你的！</p>
		<button>获取智能训练计划</button>




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
		name:'Traincamp',
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
#traincamp{
	font-size: 12px;
	font-weight: 400;
	padding: 0 5%;
}
h1{
	display: flex;
	height: 32px;
	font-size: 12px;
	font-weight: 400;
	line-height: 32px;
	margin-top: 10px;
	
}
h1>span{
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 1px solid rgb(217, 214, 214);
	margin-right: 10px;
}
h2{
	text-align: center;
	margin-top: 20px; 	
	font-weight: 400;
	font-size: 12px;
}
h3{
	margin-top: 20px;
	font-weight: 400;
}
h4{
	font-weight: 400;
	font-size: 14px;
}
p{
	text-indent: 2rem;
	font-size: 10px;
	color: #cccccc;
	line-height: 24px;
}
ul li{
	display: flex;
	justify-content: space-between;
	height: 40px;
	line-height: 40px;
}
ul li:first-child{
	margin-top: 15px;
}
ul li:first-child span:last-child{
	border: 1px solid rgb(217, 214, 214);
	width: 3rem;
	text-align: center;
	height: 25px;
	line-height: 25px;
	border-radius: 15px;
}
#traincamp div:nth-of-type(1){
	height: 150px;
	width: 100%;
	background: #f1f1f1;
	margin: 15px 0;
}
button{
	width: 40%;
	height: 30px;
	border-radius: 15px;
	border: 0;
	margin: 10% 28%;
}
</style>