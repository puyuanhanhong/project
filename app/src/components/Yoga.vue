<template>
	<div id="yoga">
		<div style="text-align:center">
			"开始第一次瑜伽吧"
		</div>
		<h1>
			<span>已参加的课程</span>
			<span>+添加</span>
		</h1>
		<h2>
			<span>5分钟瑜伽练习体验课<p>5分钟</p></span>
			<em>无需器械，站立即可完成，来感受瑜伽的美妙吧</em>
		</h2>
		<h3>冥想</h3>
		<ul>
			<li>6分钟观呼吸</li>
			<li>助眠冥想</li>
			<li>助眠冥想2</li>
		</ul>
		<h3>瑜伽课程推荐</h3>
		<ul>
			<li v-for="(item,i) in list" :key="i"><img :src="item.img" alt=""><span>{{item.name}}</span></li>
		</ul>
		<h3>每周瑜伽知识<span>></span></h3>
		<ul class="list">
			<li v-for="(item,i) in list" :key='i'><img :src="item.img" alt=""><i><p>瑜伽倒立式要练多久</p><span>{{item.name}}</span></i></li>
		</ul>
		<h3>每周瑜伽达人</h3>
		<ul>
			<li v-for="(item,i) in list" :key="i"><img :src="item.img" alt=""><span>{{item.name}}</span></li>
		</ul>
		<h3>瑜伽商品</h3>
		<ul>
			<li v-for="(item,i) in list" :key="i"><img :src="item.img" alt=""><span>{{item.name}}</span></li>
		</ul>
		<div style="height:50px"></div>
		<!-- <router-view></router-view> -->
		
	</div>
</template>

<script>
import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('http://www.aaa.com',{
	'users|2':[
		{
			'name':'@cname()',
			'img':"@image('160x100', '#f1f1f1')"
		}
	]
})
	export default {
		name:'Yogo',
		data(){
			return{
				// tit:'跑步机'
				list:[]
			}
		},
		mounted(){
			var _this=this;
			axios({
					method:'get',
					url:"http://www.aaa.com"
				}).then(function(data){
					_this.list=data.data.users;
				})	
			
		},
		methods:{

		}
	}
</script>

<style scoped=''>
#yoga div:nth-of-type(1){
	height: 120px;
	background: #f1f1f1;
	margin-top: 10px;
}
h1{
	font-weight: 400;
	font-size: 13px;
	display: flex;
	justify-content: space-between;
	height: 40px;
	line-height: 40px;
	padding: 0 5%;
}
h1 span:last-child{
	border: 1px solid rgb(217, 214, 214);
	width: 3rem;
	text-align: center;
	height: 20px;
	line-height: 20px;
	border-radius: 15px;
	margin-top: 10px;
}
h2{
	display: flex;
	flex-direction: column;
	padding: 0 5%;
	font-weight: 400;
	font-size: 12px;
	height: 90px;
	background: #f1f1f1;
}
h3{
	margin-top: 20px;
	padding: 0 5%;
	display: flex;
	justify-content: space-between;
	font-weight: 400;
	font-size: 12px;
}
h2 span{
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	margin-top: 20px;
}
h2 em{
	font-style: normal;
	color: #999;
	margin-top: 10px;
}
#yoga ul:nth-of-type(1){
	display: flex;
	margin-top: 10px;
	justify-content: space-around;
}
#yoga ul:nth-of-type(1) li{
	width: 25%;
	height: 95px;
	border-radius: 50%;
	background: #f1f1f1;
	text-align: center;
	line-height: 95px;
}
#yoga ul:nth-of-type(2),#yoga ul:nth-of-type(4),#yoga ul:nth-of-type(5){
	display: flex;
	justify-content: space-between;
	padding: 0 5%;
}
#yoga ul:nth-of-type(2) li,#yoga ul:nth-of-type(4) li,#yoga ul:nth-of-type(5) li{
	display: flex;
	flex-direction: column;
}
#yoga ul:nth-of-type(2) li span,#yoga ul:nth-of-type(4) li span,#yoga ul:nth-of-type(5) li span{
	text-align: center;
}
.list{
	margin-top: 10px;
}
.list li{
	padding: 5%;
	display: flex;
	justify-content: space-between;
}
.list li i{
	font-style: normal;
	display: flex;
	flex-direction: column;
	padding: 20px 5%;
}
.list li i span{
	margin-top: 20px;
	line-height: 24px;
}
</style>