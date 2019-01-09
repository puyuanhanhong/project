<template>
    <div>
        <div class="remen">
			<section>
        <mt-swipe :auto="4000" style="height:150px;margin-top:5px;">
		  <mt-swipe-item style="background: red;">1</mt-swipe-item>
		  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
		  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
		</mt-swipe>

		<!-- 达人讲堂 -->
		<div class="fujin">
			<span >达人讲堂</span>
			
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

		<!-- 达人排行榜 -->
		<div>
			<div class="fujin">
				<span >达人排行榜</span>
				<span>更多>></span>
			</div>
			<ul class="list">
                <li>
                    <div></div>
                    <p>增肌排行榜</p>
                    <p>让身体恢复最原始...</p>
                </li>
                
                <li>
                    <div></div>
                    <p>增肌排行榜</p>
                    <p>让身体恢复最原始...</p>
                </li>
                <li>
                    <div></div>
                    <p>增肌排行榜</p>
                    <p>让身体恢复最原始...</p>
                </li>
            </ul>
		</div>
		</section>
    </div>
    </div>
</template>
<script>
export default {
    name:'Daren',
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
	.list{
        width: 90%;
        display: flex;
        justify-content: space-around;
        margin: auto;
    }
    .list li{
        list-style: none;
        width: 110px;
        height: 140px;
        margin-right: 5px;
    }
    .list>li>div{
        width: 110px;
        height: 100px;
        border: 1px #000 solid;
       
    }

	
</style>
