import Vue from "vue";
import Vuex, { Store } from "vuex";
Vue.use(Vuex);
export default new Store({
	state: {
		// 总价
		price: 0,
		// 购买的课程
		lessons: [],
		// 搜索
		search: ''
	},
	mutations: {
		// 搜索
		changeSearch(state, search) {
			state.search = search;
		},
		// 购买课程
		addLesson(state, lesson) {
			// 价格是nan不能添加
			if (Object.is(+lesson.price, NaN)) {
				return
			}
			// 已经购买不能继续购买
			if (state.lessons.find((item) => item._id === lesson._id)) {
				return
			}
			// 更新价格
			state.price += +lesson.price;
			// 储存课程
			state.lessons.push(lesson)
		},
		// 取消购买
		removeLesson(state, lesson) {
			// 排除价格不为数字
			if (Object.is(+lesson.price, NaN)) {
				return
			}
			// 排除课程不存在
			if (state.lessons.find((item) => item._id === lesson._id)) {
				state.price -= lesson.price;
				// 移除课程
				state.lessons = state.lessons.filter((item) => item._id !== lesson._id);
			}
		}
	}
})