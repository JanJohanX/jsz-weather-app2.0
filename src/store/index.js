import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		weatherData: null,
		loadingData: false,
		notif: {
			err: false,
			warn: false,
			success: false
		},
	},
	mutations: {
		setWeatherData(state, result) {
			state.weatherData = result.data;
			console.log(result.data);
		},
		loading(state) {
			state.loadingData = true;
		},
		loaded(state) {
			state.loadingData = false;
		},
		showNotif(state, log) {
			state.notif[log] = true;
		},
		hideNotif(state, log) {
			state.notif[log] = false
		},
		clear(state) {
			state.weatherData = null;
			state.loadingData = false;
		}
	},
	actions: {
		getBySearch({commit}, result) {
			commit('setWeatherData', result);
		},
		showLoading({commit}) {
			commit('loading');
		},
		hideLoading({commit}) {
			commit('loaded');
		},
		showNotif({commit}, log) {
			commit('showNotif', log);
		},
		hideNotif({commit}, log) {
			commit('hideNotif', log)
		},
		clearData({commit}) {
			commit('clear');
		}
	},
	modules: {
	}
})
