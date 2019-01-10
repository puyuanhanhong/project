<template>
	<div id="cycling">
		<div style="text-align:center">
			"感受风的快乐"
		</div>
		<div>
			<span>骑行</span>
		</div>
		<h1>为你精选</h1>
		<div>

		</div>
		<h2>我的11月骑行目标</h2>
		<h3>骑行知识<span>></span></h3>
		<ul class="list">
			<li v-for="(item,i) in list" :key='i'><img :src="item.img" alt=""><i><p>为什么别人骑瘦了，而你却没有变化</p><span>{{item.name}}</span></i></li>
		</ul>
		<div style="height:50px"></div>
		<!-- <router-view></router-view> -->
		<!-- <ul>
			<li v-for="item in data"><router-link :to="'/detail/'+item.name">{{item.pname}}</router-link></li>
		</ul> -->
	</div>
</template>

<script>
import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('http://www.aaa.com',{
	'users|3-7':[
		{
			'name':'@cname()',
			'img':"@image('90x100', '#f1f1f1')"
		}
	]
})
	export default {
		name:'Cycling',
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
#cycling{

}
h1{
	font-weight: 400;
	font-size: 13px;
	margin-top: 15px;
	height: 30px;
	line-height: 30px;
	padding: 0 5%;
}
h2{
	text-align: center;
	font-weight: 400;
	font-size: 13px;
	height: 30px;
	line-height: 30px;
	padding: 0 5%;
}
h3{
	display: flex;
	justify-content: space-between;
	font-size: 13px;
	font-weight: 400;
	height: 30px;
	line-height: 30px;
	padding: 0 5%;
}
#cycling div:nth-of-type(1){
	height: 120px;
	background: #f1f1f1;
	margin-top: 10px;
}
#cycling div:nth-of-type(2){
	height: 120px;
	background: #f1f1f1;
	margin-top: 10px;
}
#cycling div:nth-of-type(2) span{
	display: block;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: #fff;
	line-height: 50px;
	text-align: center;
	margin: 0 43%;
	position: relative;
	top: 35px;
	border: 1px solid rgb(217, 214, 214);
}
#cycling div:nth-of-type(3){
	height: 120px;
	background: #f1f1f1;
}
ul{
	margin-top: 10px;
}
li{
	padding: 5%;
	border-bottom: 1px solid rgb(217, 214, 214);
	display: flex;
	justify-content: space-between;
}
i{
	font-style: normal;
	display: flex;
	flex-direction: column;
	padding: 20px 5%;
}
li i span{
	margin-top: 20px;
	line-height: 24px;
}
</style>