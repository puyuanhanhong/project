<template>
	<div id="paobuji">
		<ul>
			<li v-for="(item,i) in list" :key='i'><img :src='item.pimg' alt=""><div><router-link :to="'/detail/'+item.pid" tag="span">{{item.pname}}</router-link><p>查看详情</p></div></li>
		</ul>

	</div>
</template>

<script>
import axios from 'axios';
import Mock from 'mockjs';
/* Mock.mock('http://www.aaa.com',{
	'users|3-6':[
		{
			'name':'@cname()',
			'sfz':'@id()',
			'yz':'@email()'
		}
	]
}) */
	export default {
		name:'Yujia',
		data(){
			return{
				str:'hello world vuejiashoujia',
				// tit:'首页',
				list:[]
			}
		},
		mounted(){
			/* axios({
					method:'get',
					url:"http://121.199.46.215:8090/qz/appcitylistGoodsdetail.action"
				}).then(function(data){

				})	
			 */


			this.$emit('toparent',this.tit)
			var _this=this;
			axios({
				method:'get',
				url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
				params:{uid:'11475'}
			}).then((data)=>{
				_this.list=data.data.data
				// console.log(_this.list)
			})




		},
		methods:{

		}
	}
</script>

<style scoped=''>
li{
	list-style: none;
}
#paobuji{
	font-size: 12px;
}
#paobuji li{
	display: flex;
}
#paobuji li div{
	display: flex;
	flex-direction: column;
}
#paobuji ul{
	margin-top: 10px;
}
img{
	height: 100px;
}
</style>