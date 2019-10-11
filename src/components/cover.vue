<template>
	<section class="cover">
		<div class="cover__ellipse bounceInLeft">
			<div class="cover__ellipse-content">
				<div class="cover__ellipse-subtitle">
					<p>
						Добро пожаловать в игру
					</p>
				</div>
				<div class="cover__ellipse-title">
					<h1>Помоги <span class="cover__big-title">Фармацевту</span></h1>
				</div>
				<div class="cover__ellipse-button">
					<button class="cover__button" @click="change()">Начать</button>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'cover',
	methods: {
			change() {
				this.$emit('changePage')
			}
	}
	}
</script>