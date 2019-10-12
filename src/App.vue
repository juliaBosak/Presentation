<template>
	<div
	          id="app">
		<transition name="slide-fade">
			<component v-if="currentPage.name === 'final'" :emotionsInformation="emotionsCount"
			           :is="currentPage"
			           @changePage="change"
			></component>
			<component v-else
					:is="currentPage"
					@changePage="change"
			></component>
		</transition>
	</div>
</template>
<style lang="scss" src="./scss/style.scss">

</style>
<script>

	import cover from './components/cover.vue'
	import mainPage from './components/main.vue'
	import final from './components/final.vue'
	let pages = [cover, mainPage, final];

	export default {
		name: 'app',
		components: {
			cover,
			mainPage,
			final
		},
		data() {
			return {
				currentPageIndex: 0,
				currentPage: pages[0],
				emotionsCount: null
			}
		},
		watch: {
			currentPageIndex: function () {
				this.currentPage = pages[this.currentPageIndex];
			},

		},
		methods: {
			change(data) {
				if (data && ('nextIndex' in data)) {
					this.currentPageIndex = data.nextIndex;
				}
				else {
					this.currentPageIndex++;
				}
				this.emotionsCount = data;
			}
		}
	}
</script>

