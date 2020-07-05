<template>
	<div class="jsz-notif jsz-err-notif">
		Sorry, we couldn't find your request, please try again.

		<button class="jsz-close-notif" @click="closeNotif"><i class="fas fa-times"></i></button>
	</div>
</template>

<script>
export default {
	name: 'ErrorNotif',
	methods: {
		closeNotif() {
			this.$store.dispatch('hideNotif', 'err');
		}
	},
	mounted() {
		// setTimeout(()=>{
		// 	this.$store.dispatch('hideNotif', 'err');
		// }, 4000)
	}
}
</script>