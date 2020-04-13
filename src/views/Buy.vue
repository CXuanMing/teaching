<template>
<div class="app-buy">
	<div class="price-part">
		<span>课程总价</span>
		<span class="price">￥{{$store.state.price}}</span>
	</div>
	<div class="btns">
		<span @click="btnCancel">取消购买</span>
		<span class="btn-buy" @click="btnLesson">立即付款</span>
	</div>
	<h2 class="buy-title">已购商品</h2>
	<div class="gradient"></div>
	<div class="lesson-container">
		<Card v-for="(item, index) in $store.state.lessons" :key="index" :data="item"></Card>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.app-buy {
	.price-part {
		background: #fff;
		padding: 40px 20px 20px;
		font-size: 18px;
		.price {
			font-size: 34px;
			color: red;
		}
	}
	.btns {
		background: #fff;
		text-align: center;
		span {
			color: #fff;
			padding: 6px 12px;
			display: inline-block;
			border-radius: 4px;
			background: #999;
			font-size: 14px;
			margin: 0 10px;
		}
		.btn-buy {
			background: red;
		}
	}
	.buy-title {
		font-size: 24px;
		background: #fff;
		padding: 20px 20px 0;
		font-weight: normal;
	}
	.gradient {
		background: linear-gradient(#fff, #efefef);
		height: 30px;
	}
}
</style>
<script type="text/javascript">
import Card from "../components/Card.vue";
export default {
	components: { Card },
	// 没有商品不能进入 进入首页
	mounted() {
		if (this.$store.state.lessons.length === 0) {
			location.hash = '#/';
			alert('请选购商品')
			return
		}
		// 滑动到顶部
		window.scrollTo(0, 0)
	},
	// 如果商品都删除了，要进入首页
	updated() {
		if (this.$store.state.lessons.length === 0) {
			location.hash = '#/';
			return
		}
	},
	methods: {
		// 购买课程
		btnLesson(){
			this.$http
				.get("data/lesson/buy.json")
				.then(({ data }) => console.log(data))
		},
		// 取消购买
		btnCancel() {
			// 取消购买通过历史记录返回
			history.go(-1)
		}
	},
	watch: {
		$route() {
			// 在购买页面中
			if (this.$route.path === '/buy') {
				window.scrollTo(0, 0)
			}
		}
	}
}
</script>