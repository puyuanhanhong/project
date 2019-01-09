<template>
	<div id="diet">
		<!-- <h1>diet</h1>
		<mt-swipe :auto="4000" style="height:200px">
		  <mt-swipe-item style="background: red;">1</mt-swipe-item>
		  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
		  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
		</mt-swipe> -->
		<div>
			<router-link to='/cookbook' tag='span'>菜谱</router-link>
			<router-link to='/foodmaterial' tag='span'>食材</router-link>
			<router-link to='/eatdrink' tag='span'>吃喝计划</router-link>
			<router-link to='/topic' tag='span'>话题</router-link>
			<router-link to='/onlineteaching' tag='span'>在线教学</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'Diet',
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
#diet{
	font-size: 12px;
	color: rgb(16, 16, 16);
}
#diet div:nth-of-type(1){
	display: flex;
	justify-content: space-around;
	height: 35px;
	line-height: 35px;
}
</style>