<template>
	<div id="mycourses">
		<!-- <router-view></router-view> -->
		<nav>
			<router-link to='/me' tag='span'>&lt;返回</router-link>
			<span>我的课程</span>
			<span>添加</span>
		</nav>

		 <div class="tab-tit">
            <span @click="msg=0" :class="{'cur':msg===0}">全部</span>
            <span @click="msg=1" :class="{'cur':msg===1}">健身</span>
            <span @click="msg=2" :class="{'cur':msg===2}">跑步</span>
            <span @click="msg=3" :class="{'cur':msg===3}">瑜伽</span>
        </div>
            <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
                如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
        <div class="tab-con">
            <div v-show="msg===0">
                <ul>
					<li>
						<span>5分钟瑜伽体验课</span>
						<span>7人正在训练</span>
					</li>
					<li>
						<span>5分钟瑜伽体验课</span>
						<span>7人正在训练</span>
					</li>
				</ul>
            </div>
            <div v-show="msg===1">
                <h3>未参加健身课程</h3>
				<span>点击右上添加，发现更多课程</span>
            </div>
            <div v-show="msg===2">
                <h3>未参加跑步课程</h3>
				<span>点击右上添加，发现更多课程</span>
            </div>
            <div v-show="msg===3">
                <h3>未参加瑜伽课程</h3>
				<span>点击右上添加，发现更多课程</span>
            </div>
        </div>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Mycourses',
		data(){
			return{
				msg:2
			}
		},
		mounted(){
			
		},
		methods:{

		}
	}
</script>

<style scoped=''>
#mycourses{
	font-size: 12px;
	color: rgb(16, 16, 16);
}
nav{
	height: 35px;
	background-color: rgb(215, 213, 213);
	padding-top: 5px;
	display: flex;
	justify-content: space-around;
	line-height: 35px;
}
#mycourses .tab-tit{
	height: 35px;
	display: flex;
	justify-content: space-around;
	line-height: 35px;
}
#mycourses .tab-tit span:hover{
	border-bottom: 1px solid rgb(215, 213, 213);
}
.tab-con div:nth-of-type(1) li{
	display: flex;
	justify-content: space-around;
	height: 60px;
	line-height: 60px;
	border-bottom: 1px solid rgb(215, 213, 213);
}
.tab-con div:nth-of-type(2),.tab-con div:nth-of-type(3),.tab-con div:nth-of-type(4){
	display: flex;
	flex-direction: column;
	margin: 50% 25%;
	text-align: center;

}
.tab-con{
	height: 300px;
	margin-top: 15px;
}
</style>