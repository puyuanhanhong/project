<template>

	<div id="">
		<!-- <ul>
			<li v-for="item in list"><router-link :to="'/detail/'+item.pid">{{item.pname}}</router-link></li>
		</ul> -->

		<!---导航 -->
		<ul>
			<router-link to="/Remen" tag="span">今天热门</router-link>
			<router-link to="/Zuixin" tag="span">最新</router-link>
			<router-link to="/Daren" tag="span">享瘦达人</router-link>
			<router-link to="/Like" tag="span">猜你喜欢</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

// <script>
// 	import axios from 'axios';
// 	export default {
// 		name:"Home",
// 		data(){
// 			return{
// 				str:'hello world vuejiashoujia',
// 				// tit:'首页',
// 				list:[]
// 			}
// 		},
// 		methods:{
			
// 		},
// 		mounted(){
// 			this.$emit('toparent',this.tit)
// 			var _this=this;
// 			axios({
// 				method:'get',
// 				url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
// 				params:{uid:'11475'}
// 			}).then((data)=>{
// 				_this.list=data.data.data
// 				// console.log(_this.list)
// 			})
			
			
// 		}
// 	}
	
	
// </script>


<script>
export default {
	data() {
		return {
			active:"",
		}
	},
}
</script>


<style scoped="">
	ul{
		display:flex;
		justify-content:space-around;
		height: 50px;
		background: #ffffff;
		line-height: 50px;
	}
	
	span:hover{
		border-bottom: 1px solid #cccccc;
	}
</style>