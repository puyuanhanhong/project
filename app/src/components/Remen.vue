<template>

    <div >
		
		<div class="remen">
			<section>
        <mt-swipe :auto="4000" style="height:150px;margin-top:5px;">
		  <mt-swipe-item style="background: red;">1</mt-swipe-item>
		  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
		  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
		</mt-swipe>

		<!-- 附近信息 -->
		<div class="fujin">
			<span >附近信息</span>
			<span>清除位置并退出</span>
		</div>

		<div>
			
			<ul>
				<li>
					<img src="" alt="">
					<em><a href="#">健身健身健身健身健身</a></em>
				</li>
				<li>
					<img src="" alt="">
					<em><a href="#">健身健身健身健身健身</a></em>
				</li>
			</ul>
		</div>

		<!-- 运动团队 -->
		<div>
			<div class="fujin">
				<span >运动团队</span>
				<span>更多>></span>
			</div>
			<div class="tem" >
				<div class="head_pic" style="width: 49px;height: 70px;">
					<i>头像</i>
					<span>小明</span>
				</div>
				<em >查看他更多的运动信息</em>
				<p>今日行走是千米，燃烧20g脂肪...</p>
			</div>
			<div class="tem" >
				<div class="head_pic" style="width: 49px;height: 70px;">
					<i>头像</i>
					<span>小明</span>
				</div>
				<em >查看他更多的运动信息</em>
				<p>今日行走是千米，燃烧20g脂肪...</p>
			</div>
			
		</div>
		</section>
    </div>
	
	</div>
</template>

<script>
export default {
    name:"Remen",
}
</script>

<style scoped>
.remen{
	height: 100%;
}
section{
	height: 83vh;
	overflow: auto;
	
}
    .fujin{
		display: flex;
		justify-content: space-between;
		height: 50px;
		
		width: 90%;
		line-height: 50px;
		margin: auto;
	}
	span:hover{
		border-bottom: 1px solid #cccccc;
	}
	li{
		list-style: none;
	}
	ul>li>img{
		display: block;
		width: 90%;
		height: 95px;
		margin-top: 10px;
		margin: auto;
		border: 1px solid #000;
	}
	ul{
		display: flex;
		justify-content:space-around;
	}
	em{
		font-style: normal;
	}
	a{
		text-decoration: none;
		color: #cccccc;
	}
	.tem{
		position: relative;
		width: 90%;
		margin: auto;
		height: 86px;
		border-bottom: 1px solid #cccccc;
		
	}
	.head_pic{
		position: absolute;
		left: 0;
		top: 9px;
	}
	.head_pic i{
		display: block;
		width: 49px;
		height: 49px;
		border: 1px #cccccc solid;
		border-radius: 50%;
		text-align: center;
		line-height: 49px;
	}
	.head_pic span{
		display: block;
		font-size: 15px;
		text-align: center;
	}
	.tem>em{
		font-style: normal;
		font-size: 16px;
		position: absolute;
		right: 0;
		top: 9px;
	}
	.tem>p{
		font-size: 15px;
		position: absolute;
		right: 60px;
		top: 50px;
	}

	
</style>
