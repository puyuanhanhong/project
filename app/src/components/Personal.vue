<template>
	<div id="personal">
		<!-- <router-view></router-view> -->
		<nav>
			<router-link to='/me' tag='span'>&lt;返回</router-link>
		</nav>
		<div>
			<span></span>
			<span>修改资料</span>
		</div>
		<div>

		</div>

		<ul>
			<li>
				<span>徽章</span>
				<span>&gt;</span>
			</li>
			<li>
				<span>参加的训练</span>
				<span>&gt;</span>
			</li>
			<li>
				<span>动态</span>
			</li>
		</ul>
		<h3>还没有动态</h3>
	</div>
</template>

<script>
	export default {
		name:'Personl',
		data(){
			return{
				
			}
		},
		mounted(){
			
		},
		methods:{

		}
	}
</script>

<style scoped=''>
#personal{
	font-size: 14px;
}
nav{
	height: 120px;
	background-color: rgb(215, 213, 213);
	padding-top: 5px;
	z-index: 1;
}
nav p{
	font-size: 14px;
	display: block;
	margin-left: 10px;
}
#personal div:nth-of-type(1){
	display: flex;
	justify-content: space-between;
	padding: 0 10px;
}
#personal div:nth-of-type(1) span:first-child{
	width: 75px;
	height: 75px;
	border: 1px solid #bbb;
	border-radius: 50%;
	z-index: 2;
	position: relative;
	top: -25px;
	opacity: 1;
}
#personal div:nth-of-type(1) span:last-child{
	margin-top: 20px;
	font-size: 10px;
	border: 1px solid rgb(215, 213, 213);
	height: 20px;
	width: 70px;
	text-align: center;
	line-height: 20px;
	border-radius: 10px;
	padding: 0 10px;
}
#personal div:nth-of-type(2){
	height: 200px;
	background: #bbb;
}
li{
	display: flex;
	justify-content: space-between;
	padding: 0 10px;
	height: 60px;
	border-bottom: 1px solid rgb(215, 213, 213);
	line-height: 60px;
}
h3{
	position: fixed;
	bottom: 0;
	left: 35%;
	color: rgb(215, 213, 213);
}
</style>