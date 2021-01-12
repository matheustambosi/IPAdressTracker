import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const axios = require("axios");

export default new Vuex.Store({
	state: {
		items: [],
	},
	getters: {
		get(state) {
			return state.items;
		}
	},
	mutations: {
		search(state, ip) {
			axios
				.get(
					"https://geo.ipify.org/api/v1?apiKey=at_EyuYKnxIAA75v7qtfK5mCZpPt4xRW&ipAddress=" +
					ip
				)
				.then(function (response) {
					const data = response.data;
					const location = data.location;
					state.items = [
						{ text: 'IP ADDRESS', value: data.ip },
						{ text: 'LOCATION', value: `${location.region}, ${location.country} ${location.postalCode}` },
						{ text: 'TIMEZONE', value: location.timezone },
						{ text: 'ISP', value: data.isp },
					]
				});
		},
	},
	actions: {
		search(context, item) {
			context.commit("search", item);
		},
	}
});