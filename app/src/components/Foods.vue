<template>
	<div>
		<h1>食品</h1>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Food',
		data(){
			return{
				tit:'食品'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
</style>