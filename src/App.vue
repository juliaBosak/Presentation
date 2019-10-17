<template>
	<div
	          id="app">
		<transition name="slide-fade">
			<component v-if="currentPage.name === 'final'" :emotionsInformation="emotionsCount"
			           :is="currentPage"
			           @changePage="change"
			></component>
			<component :key="componentKey" v-else
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
			final,
		},
		data() {
			return {
				currentPageIndex: 0,
				currentPage: pages[0],
				emotionsCount: null,
				componentKey: 0
			}
		},
		watch: {
			currentPageIndex: function () {
				this.currentPage = pages[this.currentPageIndex];
			},

		},
		methods: {
			forceRerender() {
				this.componentKey += 1;
			},
			change(data) {
				if (data && ('nextIndex' in data)) {
					if (data.nextIndex === -1) this.forceRerender();
					 else this.currentPageIndex = data.nextIndex;
				}
				else {
					this.currentPageIndex++;
				}
				this.emotionsCount = data;
			}
		}
	}
</script>

