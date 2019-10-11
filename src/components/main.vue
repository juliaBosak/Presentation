<template>
	<div
			class="main_page"
			>
		<nav class="sidebar">
			<div class="sidebar__icons">
				<button @click="change(0)" class="round-button round-button__home">
				</button>
				<button class="round-button round-button__retry"></button>
			</div>
			<div class="sidebar__params">
				<div class="sidebar__params-title">
					<p>Параметри:</p>
				</div>
				<div class="sidebar__counters">
					<div class="emotion-counter">
						<div class="emotion-counter__icon">
							<img src="../assets/img/main/sad_icon.svg" alt="sad_icon">
						</div>
						<div class="emotion-counter__count">
							<p>{{sadCounter}}</p>
						</div>
					</div>
					<div class="emotion-counter">
						<div class="emotion-counter__icon">
							<img src="../assets/img/main/happy_icon.svg" alt="happy_icon">
						</div>
						<div class="emotion-counter__count">{{happyCounter}}</div>
					</div>
					<div class="emotion-counter ml-110">
						<div class="emotion-counter__icon">
							<img src="../assets/img/main/heart_icon.svg" alt="happy_icon">
						</div>
						<div class="emotion-counter__count">{{heartCounter}}</div>
					</div>
				</div>
			</div>
			<div class="sidebar__queue">
				<p>
					<span>Осталось в очереди:</span> <br>
					<span class="current-item">{{currentCardIndex}}</span>
					/
					<span class="all-items">{{cardsContent.length}}</span>
				</p>
			</div>
		</nav>
		<div class="main__content">
			<v-touch class="card main__card"
			         v-on:swipeleft="swipeLeftHandler"
			         v-on:swiperight="swipeRightHandler"
			         v-on:swipeup="swipeUpHandler"
			         :class="{zoomIn: allowSwipe, rotateOutUpLeft: allowSwipeLeft, rotateOutUpRight: allowSwipeRight, rotateOutUp: allowSwipeUp}"
			>
				<img v-bind:src="currentCard.img" alt="" class="card__img">
				<div class="card__description">
					<p class="card__description-title">
						{{currentCard.title}}
					</p>
					<p class="card__description-text">
						{{currentCard.text}}
					</p>
					<div v-if="selectedPreparation" :class="installedPreparation.classes" class="preparation zoomInLeft">
						<p class="preparation__title">
							{{installedPreparation.title}}
						</p>
					</div>
				</div>
			</v-touch>
			<div class="main__buttons">
				<button class="main__button custom-button violet-button" :disabled="buttonDisabled" @click="swipeLeftHandler()">
					Препарат 1
				</button>
				<button class="main__button custom-button blue-button" :disabled="buttonDisabled" @click="swipeUpHandler()">
					Препарат 2
				</button>
				<button class="main__button custom-button yellow-button" :disabled="buttonDisabled" @click="swipeRightHandler()">
					Препарат 3
				</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'main-page',
		data() {
			return {
				sadCounter: 0,
				happyCounter: 0,
				heartCounter: 0,
				cardsContent: [
					{
						title: 'Марія, 19 років',
						img: require('../assets/img/main/card1.png'),
						text: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.'
					},
					{
						title: 'Степан, 61 рік',
						img: require('../assets/img/main/card2.png'),
						text: 'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?'
					},
					{
						title: 'Любов, 58 років',
						img: require('../assets/img/main/card3.png'),
						text: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.'
					},
					{
						title: 'Олександр, 20 років',
						img: require('../assets/img/main/card4.png'),
						text: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.'
					},
					{
						title: 'Ірина, 55 років',
						img: require('../assets/img/main/card5.png'),
						text: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.'
					}
				],
				currentCardIndex: 1,
				currentCard: null,
				selectedPreparation: null,
				installedPreparation: null,
				preparation: {
					1: {
						title: 'Препарат 1',
						classes: 'preparation1'
					},
					2: {
						title: 'Препарат 2',
						classes: 'preparation2'
					},
					3: {
						title: 'Препарат 3',
						classes: 'preparation3'
					}
				},
				allowSwipe: true,
				allowSwipeLeft: false,
				allowSwipeRight: false,
				allowSwipeUp: false,
				buttonDisabled: false
			}
		},
		created() {
			this.currentCard = this.cardsContent[0];
		},
		methods: {
			changeCard() {
				let self = this;
				return new Promise((resolve) => {
					setTimeout(function () {
						self.selectedPreparation = null;
						if (self.currentCardIndex >= self.cardsContent.length) {
							self.currentCardIndex = 1;
							let all = self.cardsContent.length;
							self.$emit('changePage', {
								sad: Math.round(((self.sadCounter/all)*100)),
								happy: Math.round((self.happyCounter/all*100)),
								heart:Math.round((self.heartCounter/all*100)),
							});
						} else {
							self.currentCardIndex++;
						}
						self.currentCard = self.cardsContent[self.currentCardIndex - 1];
						self.allowSwipe = true;
						resolve();
					}, 1110)
				});

			},
			selectPreparation(number) {
				this.selectedPreparation = number;
				this.installedPreparation = this.preparation[number];
			},
			swipeLeftHandler() {
				this.buttonDisabled = true;
				this.allowSwipe = false;
				let self = this;
				if (this.checkAllow()) {
					this.sadCounter++;
					this.selectPreparation('1');
					this.allowSwipeLeft = true;
					setTimeout(() => {
						self.allowSwipeLeft = false;
					}, 1200);
					this.changeCard('left').then(
						() => { this.buttonDisabled = false;
						}
					);
				}
			},
			swipeRightHandler() {
				this.buttonDisabled = true;
				this.allowSwipe = false;
				let self = this;
				if (this.checkAllow()) {
					this.heartCounter++;
					this.selectPreparation('3');
					this.allowSwipeRight = true;
					setTimeout(() => {
						self.allowSwipeRight = false;
					}, 1200);
					this.changeCard('right').then(
						() => { this.buttonDisabled = false;
						}
					);
				}
			},
			swipeUpHandler() {
				this.buttonDisabled = true;
				this.allowSwipe = false;
				if (this.checkAllow()) {
					let self = this;
					this.happyCounter++;
					this.allowSwipeUp = true;
					this.selectPreparation('2');
					setTimeout(() => {
						self.allowSwipeUp = false;
					}, 1200);
					this.changeCard('Up').then(
							() => { this.buttonDisabled = false;
							}
						);
				}
			},
			checkAllow() {
				 return this.sadCounter+this.happyCounter+this.heartCounter < this.cardsContent.length
			},
			change(number) {
				this.$emit('changePage', {nextIndex: number});
			}
		}
	}

</script>