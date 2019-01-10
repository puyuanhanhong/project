<template>
	<div>
		<mt-header title="注册">
  <router-link to="/login" slot="left">
    <mt-button icon="back">登录</mt-button>

    
  </router-link>
  
</mt-header>
		
		<div style="margin-top:30%;" class="reg">
			<mt-field label="用户昵称：" placeholder="请输入不少于6字的昵称" v-model="name"></mt-field>
			<mt-field label="注册账号：" placeholder="可使用邮箱/手机号" v-model="phonenum"></mt-field>
			<mt-field label="密码：" placeholder="请输入6—10位数的字符" v-model="pass"></mt-field>
			<mt-field label="请确认密码：" placeholder="请输入相同字符" v-model="pass1"></mt-field>
			<div style="display:flex;justify-content:space-between;">
				<mt-field label="手机号：" placeholder="请输入手机号" v-model="phone"> </mt-field>
				<mt-button size="normal" style="width:60px;height:50px;font-size:14px;background:#ccc;">发送</mt-button> 
			</div>
			<mt-field label="验证码：" placeholder="请输入手机验证码" v-model="phonecode"></mt-field>
			<mt-button size="normal" style="width:100px;height:50px;font-size:20px;background:rgba(147, 145, 145, 1);color:#000;margin-top:50px;margin-left:40%;">注册</mt-button> 
			
			
			
			
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	import axios from 'axios';
	
	
	export default{
		name:"Register",
		data(){
			return{
				name:'',
				phonenum:'',
				pass:'',
				pass1:'',
				phone:'',
				phonecode:''
			}
		},
		// methods:{
		// 	send(){
		// 		var _this=this;
		// 		axios({
		// 			method:'post',
		// 			url:'http://localhost:3000/register',
		// 			params:{phonenum:_this.phonenum,id:'1'}
		// 		}).then(function(data){
		// 			console.log(data.data)
		// 		})
		// 	},
		// 	register(){
		// 		var _this=this;
		// 		axios({
		// 			method:'post',
		// 			url:'http://localhost:3000/register',
		// 			params:{phonenum:_this.phonenum,id:'2',pass:_this.pass,yzm:_this.yzm}
		// 		}).then(function(data){
		// 			console.log(data.data)
		// 		})
		// 	}
		// }
	}
</script>

<style scoped>
	header{
		background: rgba(174, 174, 174, 1);
		font-size: 18px;
		
	}
</style>
