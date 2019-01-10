<template>
	<div id="walking">
		<div style="text-align:center">
			用步伐丈量世界
		</div>
		<div class="tab-tit">
            <span @click="msg=0" :class="{'cur':msg===0}">行走</span>
            <span @click="msg=1" :class="{'cur':msg===1}">健走</span>
            <span @click="msg=2" :class="{'cur':msg===2}">徒步</span>
            <span @click="msg=3" :class="{'cur':msg===3}">登山</span>
        </div>
            <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
                如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
        <div class="tab-con">
            <div v-show="msg===0">
                <span>行走</span>
            </div>
            <div v-show="msg===1">
                <span>健走</span> 
            </div>
            <div v-show="msg===2">
                <span>徒步</span>
            </div>
            <div v-show="msg===3">
				<span>登山</span>
            </div>
        </div>

		<h1>行走课程</h1>
		<ul class="list">
			<li v-for="(item,i) in list" :key='i'><img :src="item.img" alt=""><span>{{item.name}}</span></li>
		</ul>
		<h2>周好友行走排名</h2>
		<ul class="paiming">
			<li>
				<em>
					1
					<span></span>
					小红
				</em>
					
				<p>30.00km</p>
			</li>
			<li>
				<em>
					1
					<span></span>
					小绿
				</em>
					
				<p>28.00km</p>
			</li>
		</ul>

		<router-view></router-view>
		<!-- <ul>
			<li v-for="item in data"><router-link :to="'/detail/'+item.name">{{item.pname}}</router-link></li>
		</ul> -->
	</div>
</template>

<script>
import axios from 'axios';
import Mock from 'mockjs';
Mock.mock('http://www.aaa.com',{
	'users|3':[
		{
			'name':'@cname()',
			'img':"@image('90x100', '#f1f1f1')"
		}
	]
})
	export default {
		name:'Paobuji',
		data(){
			return{
				// tit:'跑步机'
				list:[],
				msg:0
			}
		},
		mounted(){
			var _this=this;
			axios({
					method:'get',
					url:"http://www.aaa.com"
				}).then(function(data){
					console.log(data.data)
					_this.list=data.data.users;
				})	
			
		},
		methods:{

		}
	}
</script>

<style scoped=''>
#walking{
	font-size: 12px;
	font-weight: 400;
}
h1{
	height: 50px;
	line-height: 50px;
	font-size: 13px;
	font-weight: 400;
	padding: 0 5%;
}
h2{
	font-weight: 400;
	font-size: 13px;
	padding: 0 5%;
}
#walking div:nth-of-type(1){
	height: 120px;
	background: #f1f1f1;
	margin-top: 10px;
}
.tab-tit{
	display: flex;
}
.tab-tit span{
	width: 25%;
	text-align: center;
	height: 20px;
	line-height: 20px;
	margin: 10px 0;
	border-right: 1px solid rgb(217, 214, 214);
}
.tab-tit span:hover{
	color: rgb(217, 214, 214);
}
.tab-con{
	height: 150px;
	background: #f1f1f1;
}
.tab-con span{
	display: block;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: #fff;
	line-height: 50px;
	text-align: center;
	margin: 0 43%;
	position: relative;
	top: 50px;
	border: 1px solid rgb(217, 214, 214);
}
.list{
	display:flex;
	justify-content: space-around; 
}
.list li{
	display: flex;
	flex-direction: column;
}
.list li span{
	text-align: center;
	line-height: 38px;
}
.paiming{
	margin-top: 10px;
}
.paiming li{
	display: flex;
	justify-content: space-between;
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid rgb(217, 214, 214);
	border-top: 1px solid rgb(217, 214, 214);
	padding: 0 5%;
}
.paiming li em{
	display: flex;
	font-style: normal;
}
.paiming li span{
	width: 32px;
	height: 32px;
	border: 1px solid rgb(217, 214, 214);
	border-radius: 50%;
	margin: 8px 15px;
	
}
</style>