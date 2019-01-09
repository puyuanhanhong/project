<template>
	<div id="cookbook">
		<div>
			营养健康无黄油小零食
		</div>
		<h3>最新推荐</h3>
		 <ul>
			<li v-for="(item,i) in list" :key='i'><img :src='item.img' alt=""><span>{{item.name}}</span></li>
		</ul>
		<h4>查看更多</h4>
		<h5>已添加的菜谱</h5>
		<div>
			<ul>
				<li><h6>汤羹</h6></li>
				<li>水果萝卜清汤</li>
				<li>蔬菜银鱼蒸蛋</li>
				<li>小白菜土豆汤</li>
				<li><h2>查看更多</h2></li>
			</ul>
			<ul>
				<li><h6>小吃</h6></li>
				<li>糖油粑粑</li>
				<li>紫薯薏米芝麻球</li>
				<li>铜锣烧</li>
				<li><h2>查看更多</h2></li>
			</ul>
			<ul>
				<li><h6>主食</h6></li>
				<li>口袋面包</li>
				<li>三明治早餐</li>
				<li>鸟巢蛋饼</li>
				<li><h2>查看更多</h2></li>
			</ul>
		</div>
		<h5>好友菜谱</h5>
		<div class="friend">
			<ul>
				<li>头像</li>
				<li>他的收藏</li>
				<li>他的喜欢</li>
				<li>最近添加</li>
				<li>全部</li>
			</ul>
			<ul>
				<li>小红</li>
				<li>火腿虾蔬菜</li>
				<li>发面饼</li>
				<li>红糖芋圆</li>
			</ul>
		</div>

		<div class="friend">
			<ul>
				<li>头像</li>
				<li>他的收藏</li>
				<li>他的喜欢</li>
				<li>最近添加</li>
				<li>全部</li>
			</ul>
			<ul>
				<li>小红</li>
				<li>火腿虾蔬菜</li>
				<li>发面饼</li>
				<li>红糖芋圆</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('http://www.aaa.com',{
		'users|2':[
			{
				'name':'@cname()',
				'img':"@image('180x100', '#f1f1f1')"
			}
		]
	})
	export default {
		name:'Cookbook',
		data(){
			return{
				// tit:'跑步机'
				list:[]
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
			var _this=this;
			axios({
					method:'get',
					url:"http://www.aaa.com"
				}).then(function(data){
					// console.log(data.data)
					_this.list=data.data.users;
				})
		},
		methods:{
		}
	}
</script>

<style scoped=''>
#cookbook{
	font-size: 12px;
}
h2{
	font-size: 13px;
	margin-top: 10px;
}
h3{
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid rgb(217, 214, 214);
	width: 60px;
	margin-bottom: 10px;
	font-weight: 400;
	padding: 0 10px;
}
h4{
	text-align: center;
	height: 40px;
	line-height: 40px;
}
h5{
	font-size: 13px;
	font-weight: 400;
	margin-top: 15px;
	padding: 0 10px;
}
h6{
	font-size: 12px;
}
#cookbook ul:nth-last-of-type(1){
	height: 120px;
}
#cookbook ul:nth-last-of-type(1) li{
	float: left;
	margin-left: 5px;
}
#cookbook ul:nth-last-of-type(1) span{
	display: block;
	text-align: center;
	
}
#cookbook div:nth-of-type(1){
	height: 150px;
	background: #f1f1f1;
	text-align: center;
	line-height: 150px;
}
#cookbook div:nth-of-type(2){
	display: flex;
}
#cookbook div:nth-of-type(2) ul{
	display: flex;
	flex-direction: column;
	width: 33.3%;
	border-right: 1px solid rgb(217, 214, 214);
	margin-top: 0.5rem;
	text-align: center;
}
#cookbook div:nth-of-type(2) ul li{
	height: 30px;
	line-height: 30px;
}
.friend{
	display: flex;
	flex-direction: column;
	padding: 0 5px;
	margin-top: 10px;
	height: 80px;
}
.friend ul li{
	float: left;
	width: 20%;
	height: 25px;
	line-height: 25px;
}
.friend ul:first-child{
	margin-left: 5px;
}
.friend ul:last-child li{
	border-bottom: 1px solid rgb(217, 214, 214);
	height: 40px;
}
</style>