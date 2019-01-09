<template>
  <div class="hello">
   	<!--<header>{{title}}</header>-->
   	<!-- <mt-header fixed :title="title"></mt-header>	 -->
		 <header>
			 <!-- <mt-search v-model="value"></mt-search> -->
			 <div>
				 <input type="text" placeholder="商品">
				 <input type="button" value="搜索">
		
			 </div>
		 </header>
   	<section>
   		<router-view @toparent="getdata"></router-view>
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
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '首页'
    }
  },
  methods:{
  	getdata(msg){
  		this.title=msg;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
	/*vw== 可视窗口 横向宽度*/
	/*vh==竖向高度*/
	.router-link-active{
		color: #fff;
	}
	
	
	.hello{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	header{
		padding-top: 10px;
			margin: 0 1%;
	}
	header>div{
		width: 90%;
		height: 16px;
		background: rgb(227, 225, 225);
		border-radius: 5px;
		padding: 2px 15px;
	}
	header>div>input:last-child{
		color: rgb(70, 69, 69);
		font-size: 10px;
		width: 20%;
		height: 100%;
		float: right;
		border: 0;
		font-size: 12px;
	}
	header>div>input:first-child{
		color: rgb(70, 69, 69);
		width: 80%;
		height: 100%;
		float: left;
		border: 0;
		background: rgb(227, 225, 225);
		font-size: 12px;
		outline:none;
	}
	footer{
		height: 30px;
		background: rgb(227, 225, 225);
		text-align: center;
		line-height: 30px;
		position: fixed;
		bottom: 0;
		display: flex;
	}
	section{
		flex: 1;
		background: rgb(252, 252, 252);
		color: rgba(119, 118, 118, 1);
	}
	
	footer span{
		display: block;
		float: left;
		width: 4rem;
		color: rgba(119, 118, 118, 1);
		font-size: 12px;
	}
	
	
</style>
