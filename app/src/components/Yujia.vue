<template>
	<div>
		<h1>yujia</h1>
		<!-- <div>
			<router-link to="/paobuji" tag="span">跑步机</router-link>
			<router-link to="/yuja" tag='span'>瑜伽</router-link>
			<router-link to='/foots' tag="span">食品</router-link>
			<router-link to="/zhumian" tag="span">助眠</router-link>
		</div> -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Yujia',
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

<style>
</style>