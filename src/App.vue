<template>
<div id="app">
    <Header></Header>
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
</div>
</template>
<style lang="scss">
</style>
<script type="text/javascript">
import Header from "./components/Header.vue";
export default {
    components: { Header }
}
</script>

