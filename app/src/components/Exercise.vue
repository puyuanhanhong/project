<template>
	<div id="exercise">
		<div>
			<router-link to='/traincamp' tag="span">训练营</router-link>
			<router-link to='/walking' tag='span'>行走</router-link>
			<router-link to='/cycling' tag="span">骑行</router-link>
			<router-link to='/yoga' tag="span">瑜伽</router-link>
			<router-link to='/fitness' tag="span">健身</router-link>
			<router-link to='/kit' tag="span">Kit</router-link>
		</div>
		<router-view></router-view>
		
	</div>
</template>

<script>
	export default{
		name:'Exercise',
		data(){
			return{
				tit:'关于'
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
#exercise{
	font-size: 12px;
	color: rgb(16, 16, 16);
}
#exercise div:nth-of-type(1){
	display: flex;
	justify-content: space-around;
	height: 35px;
	line-height: 35px;
}
</style>