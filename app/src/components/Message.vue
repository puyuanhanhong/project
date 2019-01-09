<template>
	<div id="message">
		<!-- <router-view></router-view> -->
		<nav>
			<router-link to='/me' tag='span'>&lt;返回</router-link>
			<span>消息</span>
		</nav>
		<div>
			<router-link to='' tag="span">私信</router-link>
			<router-link to='' tag='span'>评论</router-link>
			<router-link to='' tag="span">@我</router-link>
			<router-link to='' tag="span">粉丝</router-link>
			<router-link to='' tag="span">加油</router-link>
		</div>
		<h2>暂时无人评论</h2>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
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
/* .router-link-active{
		border-bottom: 1px solid rgb(217, 214, 214);
	} */
#message{
	font-size: 12px;
	color: rgb(16, 16, 16);

}
nav{
	display: flex;
	height: 40px;
	background-color: rgb(215, 213, 213);
	padding-top: 5px;
	line-height: 40px;
}
nav span{
	font-size: 14px;
	display: block;
	margin-left: 10px;
}
nav span:last-child{
	margin-left: 30%;
}
#message div:nth-of-type(1){
	display: flex;
	justify-content: space-around;
	height: 30px;
	line-height: 30px;
}
h2{
	margin: 30% 30%;
	color: rgb(215, 213, 213);
	
}
</style>