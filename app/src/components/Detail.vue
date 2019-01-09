<template>
	<div class="detail">
		<header>
			<span class="fanhui" @click="fanhui()">&lt; </span>详情</header>
		<section>
			<p>{{detail}}</p>
			<img :src="img" alt="">
			<span>价格:{{price}}</span>
		</section>

	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'Detail',
		data(){
			return{
				detail:"",
				img:'',
				price:''
			}
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
			}
		},
		mounted(){
			var _this=this;
			axios({
				method:'get',
				url:'http://jx.xuzhixiang.top/ap/api/detail.php',
				params:{uid:'11475',id:_this.$route.params.id}
			}).then((data)=>{
				// console.log(data.data.data)
				_this.detail=data.data.data.pdesc;
				_this.img=data.data.data.pimg;
				_this.price=data.data.data.pprice;
			})
		}
	}
</script>

<style>
	.detail{
		height: 100vh;
		display: flex;
		flex-direction: column;
		font-size: 14px;
	}
	header{
		height: 50px;
		line-height: 50px;
		background: rgb(227, 225, 225);
		text-align: center;
	}
	section{
		flex: 1;
		padding-top: 10px;
		font-size: 14px;
	}
	section span{
		display: block;
		margin-top: 10px;
	}
	.fanhui{
		  position: absolute;
   		 left: 20px;
   		 color: #fff;
   		 font-size: 16px;
	}
	img{
		margin-top: 10px;
	}
</style>