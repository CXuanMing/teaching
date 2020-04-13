<template>
<div class="app-header">
	<div class="btn-search" @click="showSearch">搜索</div>
	<h1 @click="showHomePage">前端网课学习站</h1>
	<div class="btn-login">登录</div>
	<div class="search" v-show="isShow">
		<input type="text" v-model="msg" @keyup.enter="showSearchPage" placeholder="请输入搜索关键词">
		<span class="cancel" @click="hideSearch">取消</span>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
@import "../base.scss";
* {
	margin: 0;
	padding: 0;
}
body, html {
	background: #efefef;
}
.app-header {
	display: flex;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background: $color;
	color: #fff;
	position: relative;
	.btn-search,
	.btn-login  {
		width: 50px;
	}
	h1 {
		flex: 1;
		font-size: 23px;
	}
	.search {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		padding: 10px 20px;
		background: #fff;
		input {
			flex: 1;
			height: 30px;
			line-height: 30px;
			padding-left: 20px;
			background: #efefef;
			border: none;
			outline: none;
			border-top-left-radius: 15px;
			border-bottom-left-radius: 15px;
		}
		.cancel {
			color: #000;
			height: 30px;
			line-height: 30px;
			padding-right: 20px;
			font-size: 14px;
			background: #efefef;
			border-top-right-radius: 15px;
			border-bottom-right-radius: 15px;
		}
	}
}
</style>
<script type="text/javascript">
export default {
	data() {
		return {
			isShow: false,
			msg: ""
		}
	},
	methods: {
		// 搜索 显示
		showSearch() {
			this.isShow = true;

		},
		// 取消 隐藏
		hideSearch() {
			this.isShow = false;
		},
		showHomePage() {
			location.hash = "#/";
		},
		// 点击搜索按钮，更改地址
		showSearchPage() {
			this.$store.commit('changeSearch', this.msg)
			location.hash = '#/search/' + this.msg;
			this.msg = ''
		}
	}
}
</script>