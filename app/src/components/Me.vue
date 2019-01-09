<template>
	<div id="me">
		<!-- <mt-swipe :auto="4000" style="height:200px">
		  <mt-swipe-item style="background: red;">1</mt-swipe-item>
		  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
		  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
		</mt-swipe> -->
		<nav>
			<span>我</span>
			<router-link to='/message' tag='span'>消息</router-link>
			<router-link to='/setup' tag='span'>设置</router-link>
		</nav>

		<section>
			<ul class="user">
			<li></li>
			<li>
				<p>用户名</p>
				<p>成为会员</p>
			</li>
			<li><router-link to='/personal' tag='span'>&gt;</router-link></li>
		</ul>
		<div>
			<span>KG.0</span>
			<span>等级中心&gt;</span>
		</div>
		<div>
			<span>我的数据</span>
			<span><router-link to='/mydata' tag='span'>&gt;</router-link></span>
		</div>

		<ul>
			<li>我的课程<router-link to='/mycourses' tag='span'>&gt;</router-link></li>
			<li>我的活动 <span>打赏你的活动</span><router-link to='/mydata' tag='span'>&gt;</router-link></li>
			<li>我的社区<router-link to='/mydata' tag='span'>&gt;</router-link></li>
			<li>我的收藏<router-link to='/mydata' tag='span'>&gt;</router-link></li>
			<li>我的徽章<router-link to='/mydata' tag='span'>&gt;</router-link></li>
			<li>我的智能设备<router-link to='/mydata' tag='span'>&gt;</router-link></li>
			<li>我的钱包<router-link to='/mydata' tag='span'>&gt;</router-link></li>
			<li>我的订单<router-link to='/mydata' tag='span'>&gt;</router-link></li>
			<li>购物车<router-link to='/mydata' tag='span'>&gt;</router-link></li>
		</ul>
		</section>

		


		<footer>
			<router-link to="/home" tag="span">首页</router-link>
			<router-link to="/exercise" tag='span'>运动</router-link>
			<router-link to='/diet' tag="span">饮食</router-link>
			<router-link to="/sleep" tag="span">睡眠</router-link>
			<router-link to="/goods" tag="span">商品</router-link>
			<router-link to="/me" tag="span">我的</router-link>
   		</footer>
	</div>
</template>

<script>
	export default{
		name:'Me',
		data(){
			return{
				tit:'关于'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		},
		methods:{
			tap(){
				
			}
		}
	}
</script>


<style scoped="">
#me{
	font-size: 12px;
	color: rgb(16, 16, 16);
}
li{
	list-style: none;
}
#me{
	display: flex;
	flex-direction: column;
}
nav span{
	width: 15%;
	height: 25px;
	display: block;
	float: left;
	text-align: center;
	font-size: 16px;
	line-height: 25px;
	color: rgb(16, 16, 16);
}
nav span:nth-child(2){
	margin-left: 55%;
}
.user{
	margin-top: 30px;
	display: flex;
	font-size: 12px;
	border-bottom: 2px solid #bbb;
	padding-bottom: 30px;
}
.user li:first-child{
	width: 56px;
	height: 56px;
	border-radius: 50%;
	border: 1px solid #bbb;
	margin-left: 15px;
}
.user li:nth-child(2){
	display: flex;
	flex-direction: column;
	padding-top: 10px;
	height: 46px;
	margin-left: 5%;
}
p:first-child{
	color: rgb(16, 16, 16);
	font-size: 16px;
	font-weight: 400;
}
p:last-child{
	width: 72px;
	height: 22px;
	line-height: 22px;
	color: #fff;
	background: #000;
	text-align: center;
	border-radius: 10px;
}
.user li:nth-child(3){
	margin-left: 35%;
	line-height: 56px;
	font-weight: bold;
	font-size: 18px;
}
#me div:nth-of-type(1){
	display: flex;
	justify-content:space-between;
}
#me div:nth-of-type(2){
	height: 250px;
	background: #f1f1f1;
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	border-bottom: 2px solid #bbb;
}
#me ul:nth-of-type(2) li{
	height: 40px;
	border: 1px solid #f1f1f1;
	color: rgb(16, 16, 16);
	font-weight: 400;
	line-height: 40px;
	font-size: 12px;
	display: flex;
	justify-content: space-between;
}
section{
	padding: 0 10px;
}
footer{
		width: 100%;
		height: 30px;
		background: rgb(227, 225, 225);
		text-align: center;
		line-height: 30px;
		position: fixed;
		bottom: 0;

	}
	footer span{
		display: block;
		float: left;
		width: 54px;
		color: rgba(119, 118, 118, 1);
		font-size: 12px;
	}
</style>