<template>
    <div>
        <div class="remen">
			<section>
        <mt-swipe :auto="4000" style="height:150px;margin-top:5px;">
		  <mt-swipe-item style="background: red;">1</mt-swipe-item>
		  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
		  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
		</mt-swipe>

		<!-- 一周最新 -->
		<div class="fujin">
			<span >一周最新</span>
			<span>加油，努力</span>
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

		<!-- 最新活动 -->
		<div>
			<div class="fujin">
				<span >最新活动</span>
				<span>更多>></span>
			</div>
			<div class="huodong">
                空白
            </div>
            <div style="width:90%;height:40px;margin:auto;">
                <span>享瘦狂欢节-预热</span>
                <p>运动赢代币丨你的每次运动都值得回报</p>	
			</div>
		</div>
		</section>
    </div>
    </div>
</template>


<script>
export default {
    name:"Zuixin",
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
	.huodong{
        width: 90%;
        height: 100px;
        border: 1px solid #000;
        margin: auto;
    }

	
</style>
