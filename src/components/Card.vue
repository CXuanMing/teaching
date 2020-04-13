<template>
<div class="app-card">
	<img :src="data.img" alt="">
	<div class="content">
		<h2>{{data.title}}</h2>
		<p>
			<span class="sales">{{data.sales}}人与你一起学习</span>
			<span :class="data.hasBuy ? 'btn-buy has-buy' : 'btn-buy'" @click="buyItem">{{data.hasBuy ? '取消' : '购买' }}</span>
			<span class="price">￥{{data.price}}</span>
		</p>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.app-card {
	margin: 0 20px 20px;
	overflow: hidden;
	border-radius: 10px;
	img {
		width: 100%;
	}
	.content {
		background: #fff;
		padding: 15px 10px 20px;
		h2 {
			font-weight: normal;
		}
		p {
			margin-top: 10px;
			font-size: 14px;
		}
		.btn-buy {
			float: right;
			border-radius: 2px;
			display: inline-block;
			color: #fff;
			background: #f30;
			padding: 4px 8px;
			&.has-buy {
				background: #efefef;
				color: #333;
			}
		}
		.price {
			float: right;
			color: #f30;
			font-size: 18px;
			margin-right: 10px;
		}
	}
}
</style>
<script type="text/javascript">
export default {
	props: ['data'],
	methods: {
		// 购买课程
		buyItem() {
			this.$store.commit(this.data.hasBuy ? 'removeLesson' : 'addLesson', this.data)
			console.log(this.data);
			// 数据丢失
			this.$set(this.data, 'hasBuy', !this.data.hasBuy)
		}
	}
}
</script>