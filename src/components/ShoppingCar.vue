<template>
<div class="app-shopping-car">
	<div class="price">共￥{{$store.state.price}}元</div>
	<router-link class="btn-buy" to="/buy/" tag="div">选好了</router-link>
</div>
</template>
<style type="text/css" lang="scss">
.app-shopping-car {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50px;
	line-height: 50px;
	background: #484d54;
	display: flex;
	color: #fff;
	text-align: center;
	font-size: 20px;
	.price {
		flex: 1;
	}
	.btn-buy {
		width: 100px;
		background: #fe2947;
	}
}
</style>