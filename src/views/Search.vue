<template>
  <div class="app-search">
    <div class="lesson-container">
        <Card v-for="(item, index) in detilist" :key="index" :data="item"></Card>
    </div>
    <ShoppingCar></ShoppingCar>
  </div>
</template>
<style type="text/css" lang="scss">
.app-search {
    .lesson-container {
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
			list: []
		}
	},
    // 搜索
    computed: {
        detilist() {
            return this.list.filter(item => item.title.indexOf(this.$store.state.search) >=0 );
        }
    },
    methods: {
        getData() {
            let { params } = this.$route;
            this.$http
                .get("data/lesson/search.json?id=" + params.id)
                .then(({ data }) => {
                    console.log(data)
                    if (data.errno === 0) {
                        data.data.forEach(item => {
                            if (this.$store.state.lessons.find(lesson => lesson._id === item._id)) {
                                // 更新hasBuy
                                item.hasBuy = true;
                            }
                        })
                        this.list = data.data;
                    } else {
                        alert(data.msg)
                    }
                })
        }
    },
	created() {
        this.getData()
	},
    // 监听路由变化
    watch: {
        // 路由发生变化
        $route() {
            // 是搜索页面
            if (this.$route.path.indexOf('/search/') === 0) {
                // 更新数据
                this.getData();
            }
        }
    }
}
</script>
