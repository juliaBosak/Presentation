<template>
	<v-touch class="final"
	         v-on:swipeleft="change(0)"
             v-on:swiperight="change(1)">
		<div class="final__button-wrap">
			<button class="round-button final__button" @click="change(0)">
			</button>
		</div>
		<div class="final__img pulse"></div>
		<div class="final__content">
			<div class="final__percent-counters">
				<div class="final__percent-counter">
					<p class="final__percent">{{emotionsInformation.sad}}%</p>
					<p class="final__preparation">Препарат 1</p>
				</div>
				<div class="final__percent-counter">
					<p class="final__percent">{{emotionsInformation.happy}}%</p>
					<p class="final__preparation">Препарат 2</p>
				</div>
				<div class="final__percent-counter">
					<p class="final__percent">{{emotionsInformation.heart}}%</p>
					<p class="final__preparation">Препарат 3</p>
				</div>
			</div>
			<div class="final__result">
				<div class="final__result-title">
					<h3>
						<span class="small-title">Ваш результат:</span>
						<br>
						«Что я здесь делаю?»
					</h3>
				</div>
				<div class="final__result-text">
					<p>Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.</p>
				</div>
			</div>
			<button class="more__button" @click="change(1)">Попробовать еще</button>
		</div>
	</v-touch>
</template>
<script>
	export default {
		name: 'final',
		data() {
			return {}
		},
		props: {
			emotionsInformation: Object
		},
		methods: {
			change(number) {
				this.$emit('changePage', {nextIndex: number});
			}
		}
	}
</script>