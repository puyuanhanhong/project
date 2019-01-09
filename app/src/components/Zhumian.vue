<template>
	<div>
		<h1>助眠</h1>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	export default {
		name:'Zhumian',
		data(){
			return{
				tit:'助眠'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
</style>