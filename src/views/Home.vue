<template>
<div class="app-home">
	<div class="menu">
		<router-link v-for="(item, index) in menu" :key="index" tag="span" :to="'/type/' + item.id">{{item.text}}</router-link>
	</div>
	<!-- 卡片 -->
	<div class="card-container">
		<Card v-for="(item, index) in list" :key="index" :data="item"></Card>
	</div>
	<!-- 购物车 -->
	<ShoppingCar></ShoppingCar>
</div>
</template>
<style type="text/css" lang="scss">
.app-home {
	.menu {
		height: 40px;
		background: #fff;
		text-align: center;
		span {
			font-size: 16px;
			color: #666;
			padding: 0 20px;
			line-height: 40px;
			border-bottom: 2px solid transparent;
			box-sizeing: border-box;
			height: 40px;
			display: inline-block;
		}
		.router-link-active {
			color: #f30;
			border-bottom-color: #f30;
		}
	}
	.card-container {
		padding: 30px 0 60px;
	}
}
</style>
<script type="text/javascript">
import Card from "../components/Card.vue";
import ShoppingCar from "../components/ShoppingCar.vue";
export default {
	components: { Card, ShoppingCar },
	data() {
		return {
			menu: [
				{ text: "高级课程", id: "super"},
				{ text: "进阶课程", id: "middle"},
				{ text: "初级课程", id: "easy"}
			],
			list: []
		}
	},
	methods: {
		getData() {
			console.log(this.$route);
			let url = "";
			// 判断请求的是首页还是分类页
			// 分类页
			if (this.$route.path.indexOf('/type/') >= 0) {
				url = "data/lesson/type.json?id=" + this.$route.params.id;
			} else {
				// 首页
				url = "data/lesson/home.json"
			}
			this.$http
				.get(url)
				.then(({ data }) => {
					if (data.errno === 0) {
						// 如果数据在store中，应该将hasBuy设置为true
						data.data.forEach(item => {
							// 如果在store的lessons中，能够寻找到该数据，说明在store中
							if (this.$store.state.lessons.find( lesson => lesson._id === item._id)) {
								item.hasBuy = true;
							}
						});
						// 课程存在应该设置成已经购买
						this.list = data.data
					} else {
						alert(data.msg)
					}
				})
		}
	},
	created() {
		this.getData()
	},
	// 监听路由的变化
	watch: {
		// 路由改变
		$route() {
			// 如果是首页
			if (this.$route.path === '/' || this.$route.path.indexOf('/type/') === 0) {
				// 路由变化，更新数据
				// 如果组件不销毁，其他页面切换，不要发送请求
				this.getData()
			}
		}
	}
}
</script>
