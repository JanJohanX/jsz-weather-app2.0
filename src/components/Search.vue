<template>
	<div>
		<input type="text" name="" id="" v-model="bySearch" @keypress="getBySearch">
		<button @click="getBySearch">Search</button>
		<button @click="getByLocation">Place</button>
		<button @click="clearData">Clear</button>
	</div>
</template>

<script>
export default {
	name: 'Search',
	data() {
		return {
			apiKey: 'd2a9887d08726ec158f84a1205d0b8f3',
			urlBase: 'https://api.openweathermap.org/data/2.5/',
			bySearch: '',
		}
	},
	methods: {
		getBySearch() {
			if (event.key === 'Enter' || event.type === 'click') {
				this.$store.dispatch('showLoading');
				// this.$store.dispatch('Cl')
				this.$store.dispatch('hideNotif', 'err');

				const url = `${this.urlBase}weather?q=${this.bySearch}&&units=metric&appid=${this.apiKey}`;
				this.$http.get(url)
					.then(this.searchResult, this.loading = false)
					.catch(this.catchedErr);
			}
		},
		getByLocation() {
			if (navigator.geolocation) {
				this.$store.dispatch('showLoading');
				this.$store.dispatch('hideNotif', 'err');

				navigator.geolocation.getCurrentPosition(position => {
					let lat = position.coords.latitude;
					let long = position.coords.longitude;
					const url = `${this.urlBase}weather?lat=${lat}&lon=${long}&units=metric&appid=${this.apiKey}`;
					
					this.$http.get(url)
						.then(this.searchResult)
						.catch(this.catchedErr);
				})
			}
		},
		searchResult(result) {
			if (result.status === 200) {
				this.$store.dispatch('getBySearch', result);
				this.$store.dispatch('hideLoading');
			}
		},
		catchedErr(err) {
			if (err.response.status === 400 || err.response.status === 404) {
				this.$store.dispatch('hideLoading');
				this.$store.dispatch('showNotif', 'err');
			}
		},
		clearData() {
			this.bySearch = ''
			this.$store.dispatch('clearData');
		}
	}
}
</script>