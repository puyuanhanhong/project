<template>
	<div id="sleep">
		 <div class="tab-tit">
            <span @click="msg=0" :class="{'cur':msg===0}">睡眠时间</span>
            <span @click="msg=1" :class="{'cur':msg===1}">睡眠记录</span>
            <span @click="msg=2" :class="{'cur':msg===2}">睡眠话题</span>
        </div>
            <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
                如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
        <div class="tab-con">
            <div v-show="msg===0">
                睡眠时间
            </div>
            <div v-show="msg===1">
                 <div>
					 图片
				 </div>
				 <h3 style="margin-top:25px">睡眠时长</h3>
				 <ul>
					 <li>
						 <span>上次睡眠时间</span>
						 <span>22:40</span>
						 <span>请勿熬夜</span>
					 </li>
					 <li>
						 <span>上次睡眠时间</span>
						 <span>22:40</span>
						 <span>请勿熬夜</span>
					 </li>
					 <li>
						 <span>上次睡眠时间</span>
						 <span>22:40</span>
						 <span>请勿熬夜</span>
					 </li>
				 </ul>
				 <h3>时间计划</h3>
				 <div>

				 </div>
				 
            </div>
            <div v-show="msg===2">
                <div>
					<span></span>
					<span>如何养成一个好的生物钟</span>
				</div>
				<h3>助眠小知识</h3>
				<div>
					<span></span>
					<span>不想睡也得让你睡</span>
				</div>
				<h3>科学睡眠</h3>
				<div>
					<span></span>
					<span>让你每天精神焕发</span>
				</div>
				<h3>科学睡眠</h3>
				<div>
					<span></span>
					<span>让你每天精神焕发</span>
				</div>
            </div>
        </div>

		<router-view></router-view>
		
		
	</div>
</template>

<script>
	export default{
		name:'Sleep',
		data(){
			return{
				tit:'关于',
				msg:2
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
#sleep{
	font-size: 12px;
	color: rgb(16, 16, 16)
}
.tab-tit{
	height: 35px;
	display: flex;
	justify-content: space-around;
	line-height: 35px;
}
.tab-con{
	height: 300px;
	margin-top: 15px;
}
.tab-con div:nth-of-type(2) div{
	height: 150px;
	background: #f1f1f1;
	text-align: center;
}
.tab-con div:nth-of-type(2) li{
	display: flex;
	justify-content: space-around;
	height: 45px;
	line-height: 45px;

}
.tab-con div:nth-of-type(3) span:first-child{
	display: block;
	height: 150px;
	background: #f1f1f1;
}
.tab-con div:nth-of-type(3) span:last-child{
	text-align: center;
	display: block;
	height: 30px;
	line-height: 30px;
}
h3{
	font-weight:600; 
}
</style>