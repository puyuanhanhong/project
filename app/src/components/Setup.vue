<template>
	<div id="setup">
		<!-- <router-view></router-view> -->
		<nav>
			<p><router-link to='/me' tag='span'>&lt;返回</router-link></p>
		</nav>
		<ul>
			<li><router-link to='' tag='span'>个人资料</router-link><p></p></li>
			<li><router-link to='' tag='span'>账号管理和绑定</router-link></li>
			<li><router-link to='' tag='span'>运动概况</router-link></li>
			<li><router-link to='' tag='span'>运动风险须知</router-link></li>
			<li><router-link to='' tag='span'>隐私</router-link></li>
			<li><router-link to='' tag='span'>达人认证</router-link></li>
			<li><router-link to='' tag='span'>训练</router-link></li>
			<li><router-link to='' tag='span'>语音设置</router-link></li>
			<li><router-link to='' tag='span'>离线地图</router-link></li>
			<li><router-link to='' tag='span'>自动生成语音记录</router-link></li>
			<li><router-link to='' tag='span'>免流量服务</router-link></li>
			<li><router-link to='' tag='span'>消息通知</router-link></li>
			<li><router-link to='' tag='span'>权限设置</router-link></li>
			<li><router-link to='' tag='span'>缓存管理</router-link></li>
			<li><router-link to='' tag='span'>传感器诊断</router-link></li>
			<li><router-link to='' tag='span'>网络诊断</router-link></li>
			<li><router-link to='' tag='span'>邀请好友</router-link></li>
			<li><router-link to='' tag='span'>帮助中心</router-link></li>
			<li><router-link to='' tag='span'>社区公约</router-link></li>
			<li><router-link to='' tag='span'>社区规范</router-link></li>
			<li><router-link to='' tag='span'>检查更新</router-link></li>
			<li><router-link to='' tag='span'>关于</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'Setup',
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
#setup{
	font-size: 12px;
	color: rgb(16, 16, 16);
	font-weight: 400;
}
li{
	list-style: none;
}
nav{
	height: 30px;
	background-color: rgb(215, 213, 213);
	padding-top: 5px;
}
nav p{
	font-size: 14px;
	display: block;
	margin-left: 10px;
}
ul{
	padding: 0 10px;
}
li{
	height: 40px;
	border-bottom:1px solid #f1f1f1; 
	line-height: 40px;
}
li:first-child{
	display: flex;
	justify-content: space-between;
}
li:first-child p{
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 1px solid #bbb;
	margin-top: 3px;
}
</style>