<template>
	<div>
		<div>
			<router-link to='/paobuji' tag="span">跑步机</router-link>
			<router-link to='/yujia' tag='span'>瑜伽</router-link>
			<router-link to='/foods' tag="span">食品</router-link>
			<router-link to='/zhumian' tag="span">助眠</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Goods',
		data(){
			return{
				tit:'其他'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
.router-link-active{
		border-bottom: 1px solid rgb(217, 214, 214);
	}
span{
	margin-top: 10px;
	color: rgb(16, 16, 16);
	font-size: 14px;
	font-weight: 600;
	width: 25%;
	height: 30px;
	display: block;
	float: left;
	text-align: center;
	line-height: 30px;
}
</style>