<template>
	<div>
		<!-- <router-view></router-view> -->
		<nav>
			<p><router-link to='/me' tag='span'>&lt;返回</router-link></p>
		</nav>
	</div>
</template>

<script>
	export default {
		name:'Mydata',
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
}
nav p{
	font-size: 14px;
	display: block;
	margin-left: 10px;
}
</style>