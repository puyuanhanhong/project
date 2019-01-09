<template>
	<div>
		<!-- <router-view></router-view> -->
		<nav>
			<router-link to='/me' tag='span'>&lt;返回</router-link>
			<span>我的课程</span>
			<span>添加</span>
		</nav>
	</div>
</template>

<script>
	export default {
		name:'Mycourses',
		data(){
			return{
				
			}
		},
		mounted(){
			
		},
		methods:{

		}
	}
</script>

<style scoped=''>
nav{
	height: 120px;
	background-color: rgb(215, 213, 213);
	padding-top: 5px;
	display: flex;
	justify-content: space-around;
}

</style>