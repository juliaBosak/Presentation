(function (t) {
	function e(e) {
		for (var a, r, o = e[0], c = e[1], l = e[2], p = 0, d = []; p < o.length; p++) r = o[p], Object.prototype.hasOwnProperty.call(i, r) && i[r] && d.push(i[r][0]), i[r] = 0;
		for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
		u && u(e);
		while (d.length) d.shift()();
		return s.push.apply(s, l || []), n()
	}

	function n() {
		for (var t, e = 0; e < s.length; e++) {
			for (var n = s[e], a = !0, o = 1; o < n.length; o++) {
				var c = n[o];
				0 !== i[c] && (a = !1)
			}
			a && (s.splice(e--, 1), t = r(r.s = n[0]))
		}
		return t
	}

	var a = {}, i = {app: 0}, s = [];

	function r(e) {
		if (a[e]) return a[e].exports;
		var n = a[e] = {i: e, l: !1, exports: {}};
		return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports
	}

	r.m = t, r.c = a, r.d = function (t, e, n) {
		r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
	}, r.r = function (t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
	}, r.t = function (t, e) {
		if (1 & e && (t = r(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (r.r(n), Object.defineProperty(n, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t) for (var a in t) r.d(n, a, function (e) {
			return t[e]
		}.bind(null, a));
		return n
	}, r.n = function (t) {
		var e = t && t.__esModule ? function () {
			return t["default"]
		} : function () {
			return t
		};
		return r.d(e, "a", e), e
	}, r.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, r.p = "";
	var o = window["webpackJsonp"] = window["webpackJsonp"] || [], c = o.push.bind(o);
	o.push = e, o = o.slice();
	for (var l = 0; l < o.length; l++) e(o[l]);
	var u = c;
	s.push([0, "chunk-vendors"]), n()
})({
	0: function (t, e, n) {
		t.exports = n("56d7")
	}, 1236: function (t, e, n) {
	}, "21ad": function (t, e, n) {
		t.exports = n.p + "img/card1.62a4133f.png"
	}, "244e": function (t, e, n) {
		t.exports = n.p + "img/happy_icon.431369b0.svg"
	}, "33c9": function (t, e, n) {
		t.exports = n.p + "img/card5.a7b82a78.png"
	}, 5016: function (t, e, n) {
		t.exports = n.p + "img/heart_icon.d16da2ff.svg"
	}, "56d7": function (t, e, n) {
		"use strict";
		n.r(e);
		n("cadf"), n("551c"), n("f751"), n("097d");
		var a = n("2b0e"), i = function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("div", {attrs: {id: "app"}}, [n("transition", {attrs: {name: "slide-fade"}}, ["final" === t.currentPage.name ? n(t.currentPage, {
					tag: "component",
					attrs: {emotionsInformation: t.emotionsCount},
					on: {changePage: t.change}
				}) : n(t.currentPage, {tag: "component", on: {changePage: t.change}})], 1)], 1)
			}, s = [], r = function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("v-touch", {
					staticClass: "cover",
					on: {swipeleft: t.change}
				}, [n("div", {staticClass: "cover__ellipse bounceInLeft"}, [n("div", {staticClass: "cover__ellipse-content"}, [n("div", {staticClass: "cover__ellipse-subtitle"}, [n("p", [t._v("\n\t\t\t\t\tДобро пожаловать в игру\n\t\t\t\t")])]), n("div", {staticClass: "cover__ellipse-title"}, [n("h1", [t._v("Помоги "), n("span", {staticClass: "cover__big-title"}, [t._v("Фармацевту")])])]), n("div", {staticClass: "cover__ellipse-button"}, [n("button", {
					staticClass: "cover__button",
					on: {
						click: function (e) {
							return t.change()
						}
					}
				}, [t._v("Начать")])])])])])
			}, o = [], c = {
				name: "cover", methods: {
					change: function () {
						this.$emit("changePage")
					}
				}
			}, l = c, u = n("2877"), p = Object(u["a"])(l, r, o, !1, null, null, null), d = p.exports, _ = function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("div", {staticClass: "main_page"}, [n("nav", {staticClass: "sidebar"}, [n("div", {staticClass: "sidebar__icons"}, [n("button", {
					staticClass: "round-button round-button__home",
					on: {
						click: function (e) {
							return t.change(0)
						}
					}
				}), n("button", {staticClass: "round-button round-button__retry"})]), n("div", {staticClass: "sidebar__params"}, [t._m(0), n("div", {staticClass: "sidebar__counters"}, [n("div", {staticClass: "emotion-counter"}, [t._m(1), n("div", {staticClass: "emotion-counter__count"}, [n("p", [t._v(t._s(t.sadCounter))])])]), n("div", {staticClass: "emotion-counter"}, [t._m(2), n("div", {staticClass: "emotion-counter__count"}, [t._v(t._s(t.happyCounter))])]), n("div", {staticClass: "emotion-counter ml-110"}, [t._m(3), n("div", {staticClass: "emotion-counter__count"}, [t._v(t._s(t.heartCounter))])])])]), n("div", {staticClass: "sidebar__queue"}, [n("p", [n("span", [t._v("Осталось в очереди:")]), n("br"), n("span", {staticClass: "current-item"}, [t._v(t._s(t.currentCardIndex))]), t._v("\n\t\t\t\t/\n\t\t\t\t"), n("span", {staticClass: "all-items"}, [t._v(t._s(t.cardsContent.length))])])])]), n("div", {staticClass: "main__content"}, [n("v-touch", {
					staticClass: "card main__card",
					class: {
						zoomIn: t.allowSwipe,
						rotateOutUpLeft: t.allowSwipeLeft,
						rotateOutUpRight: t.allowSwipeRight,
						rotateOutUp: t.allowSwipeUp
					},
					on: {swipeleft: t.swipeLeftHandler, swiperight: t.swipeRightHandler, swipeup: t.swipeUpHandler}
				}, [n("img", {
					staticClass: "card__img",
					attrs: {src: t.currentCard.img, alt: ""}
				}), t._l(t.cardsContent, (function (t) {
					return n("image-preloader", {key: t.title, attrs: {src: t.img}})
				})), n("div", {staticClass: "card__description"}, [n("p", {staticClass: "card__description-title"}, [t._v("\n\t\t\t\t\t" + t._s(t.currentCard.title) + "\n\t\t\t\t")]), n("p", {staticClass: "card__description-text"}, [t._v("\n\t\t\t\t\t" + t._s(t.currentCard.text) + "\n\t\t\t\t")]), t.selectedPreparation ? n("div", {
					staticClass: "preparation zoomInLeft",
					class: t.installedPreparation.classes
				}, [n("p", {staticClass: "preparation__title"}, [t._v("\n\t\t\t\t\t\t" + t._s(t.installedPreparation.title) + "\n\t\t\t\t\t")])]) : t._e()])], 2), n("div", {staticClass: "main__buttons"}, [n("button", {
					staticClass: "main__button custom-button violet-button",
					attrs: {disabled: t.buttonDisabled},
					on: {
						click: function (e) {
							return t.swipeLeftHandler()
						}
					}
				}, [t._v("\n\t\t\t\tПрепарат 1\n\t\t\t")]), n("button", {
					staticClass: "main__button custom-button blue-button",
					attrs: {disabled: t.buttonDisabled},
					on: {
						click: function (e) {
							return t.swipeUpHandler()
						}
					}
				}, [t._v("\n\t\t\t\tПрепарат 2\n\t\t\t")]), n("button", {
					staticClass: "main__button custom-button yellow-button",
					attrs: {disabled: t.buttonDisabled},
					on: {
						click: function (e) {
							return t.swipeRightHandler()
						}
					}
				}, [t._v("\n\t\t\t\tПрепарат 3\n\t\t\t")])])], 1)])
			}, f = [function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("div", {staticClass: "sidebar__params-title"}, [n("p", [t._v("Параметри:")])])
			}, function () {
				var t = this, e = t.$createElement, a = t._self._c || e;
				return a("div", {staticClass: "emotion-counter__icon"}, [a("img", {
					attrs: {
						src: n("fd35"),
						alt: "sad_icon"
					}
				})])
			}, function () {
				var t = this, e = t.$createElement, a = t._self._c || e;
				return a("div", {staticClass: "emotion-counter__icon"}, [a("img", {
					attrs: {
						src: n("244e"),
						alt: "happy_icon"
					}
				})])
			}, function () {
				var t = this, e = t.$createElement, a = t._self._c || e;
				return a("div", {staticClass: "emotion-counter__icon"}, [a("img", {
					attrs: {
						src: n("5016"),
						alt: "happy_icon"
					}
				})])
			}], h = {
				name: "main-page", data: function () {
					return {
						sadCounter: 0,
						happyCounter: 0,
						heartCounter: 0,
						cardsContent: [{
							title: "Марія, 19 років",
							img: n("21ad"),
							text: "Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд."
						}, {
							title: "Степан, 61 рік",
							img: n("bcb6"),
							text: "Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?"
						}, {
							title: "Любов, 58 років",
							img: n("d0db"),
							text: "Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною."
						}, {
							title: "Олександр, 20 років",
							img: n("6624"),
							text: "Порекомендуйте ефективний препарат від болю в горлі за розумну ціну."
						}, {
							title: "Ірина, 55 років",
							img: n("33c9"),
							text: "У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною."
						}],
						currentCardIndex: 1,
						currentCard: null,
						selectedPreparation: null,
						installedPreparation: null,
						preparation: {
							1: {title: "Препарат 1", classes: "preparation1"},
							2: {title: "Препарат 2", classes: "preparation2"},
							3: {title: "Препарат 3", classes: "preparation3"}
						},
						allowSwipe: !0,
						allowSwipeLeft: !1,
						allowSwipeRight: !1,
						allowSwipeUp: !1,
						buttonDisabled: !1
					}
				}, created: function () {
					this.currentCard = this.cardsContent[0]
				}, methods: {
					changeCard: function () {
						var t = this;
						return new Promise((function (e) {
							setTimeout((function () {
								if (t.selectedPreparation = null, t.currentCardIndex >= t.cardsContent.length) {
									t.currentCardIndex = 1;
									var n = t.cardsContent.length;
									t.$emit("changePage", {
										sad: Math.round(t.sadCounter / n * 100),
										happy: Math.round(t.happyCounter / n * 100),
										heart: Math.round(t.heartCounter / n * 100)
									})
								} else t.currentCardIndex++, t.currentCard = t.cardsContent[t.currentCardIndex - 1], t.allowSwipe = !0;
								e()
							}), 950)
						}))
					}, selectPreparation: function (t) {
						this.selectedPreparation = t, this.installedPreparation = this.preparation[t]
					}, swipeLeftHandler: function () {
						var t = this;
						this.buttonDisabled = !0, this.allowSwipe = !1;
						var e = this;
						this.checkAllow() && (this.sadCounter++, this.selectPreparation("1"), this.allowSwipeLeft = !0, setTimeout((function () {
							e.allowSwipeLeft = !1
						}), 1200), this.changeCard("left").then((function () {
							t.buttonDisabled = !1
						})))
					}, swipeRightHandler: function () {
						var t = this;
						this.buttonDisabled = !0, this.allowSwipe = !1;
						var e = this;
						this.checkAllow() && (this.heartCounter++, this.selectPreparation("3"), this.allowSwipeRight = !0, setTimeout((function () {
							e.allowSwipeRight = !1
						}), 1200), this.changeCard("right").then((function () {
							return t.buttonDisabled = !1
						})))
					}, swipeUpHandler: function () {
						var t = this;
						if (this.buttonDisabled = !0, this.allowSwipe = !1, this.checkAllow()) {
							var e = this;
							this.happyCounter++, this.allowSwipeUp = !0, this.selectPreparation("2"), setTimeout((function () {
								e.allowSwipeUp = !1
							}), 1200), this.changeCard("Up").then((function () {
								t.buttonDisabled = !1
							}))
						}
					}, checkAllow: function () {
						return this.sadCounter + this.happyCounter + this.heartCounter < this.cardsContent.length
					}, change: function (t) {
						this.$emit("changePage", {nextIndex: t})
					}
				}
			}, v = h, m = Object(u["a"])(v, _, f, !1, null, null, null), g = m.exports, C = function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("v-touch", {
					staticClass: "final", on: {
						swipeleft: function (e) {
							return t.change(0)
						}, swiperight: function (e) {
							return t.change(1)
						}
					}
				}, [n("div", {staticClass: "final__button-wrap"}, [n("button", {
					staticClass: "round-button final__button",
					on: {
						click: function (e) {
							return t.change(0)
						}
					}
				})]), n("div", {staticClass: "final__img pulse"}), n("div", {staticClass: "final__content"}, [n("div", {staticClass: "final__percent-counters"}, [n("div", {staticClass: "final__percent-counter"}, [n("p", {staticClass: "final__percent"}, [t._v(t._s(t.emotionsInformation.sad) + "%")]), n("p", {staticClass: "final__preparation"}, [t._v("Препарат 1")])]), n("div", {staticClass: "final__percent-counter"}, [n("p", {staticClass: "final__percent"}, [t._v(t._s(t.emotionsInformation.happy) + "%")]), n("p", {staticClass: "final__preparation"}, [t._v("Препарат 2")])]), n("div", {staticClass: "final__percent-counter"}, [n("p", {staticClass: "final__percent"}, [t._v(t._s(t.emotionsInformation.heart) + "%")]), n("p", {staticClass: "final__preparation"}, [t._v("Препарат 3")])])]), n("div", {staticClass: "final__result"}, [n("div", {staticClass: "final__result-title"}, [n("h3", [n("span", {staticClass: "small-title"}, [t._v("Ваш результат:")]), n("br"), t._v("\n\t\t\t\t\t\t«Что я здесь делаю?»\n\t\t\t\t\t")])]), n("div", {staticClass: "final__result-text"}, [n("p", [t._v("Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.")])])]), n("button", {
					staticClass: "more__button",
					on: {
						click: function (e) {
							return t.change(1)
						}
					}
				}, [t._v("Попробовать еще")])])])
			}, b = [], w = {
				name: "final", data: function () {
					return {}
				}, props: {emotionsInformation: Object}, methods: {
					change: function (t) {
						this.$emit("changePage", {nextIndex: t})
					}
				}
			}, x = w, P = Object(u["a"])(x, C, b, !1, null, null, null), y = P.exports, I = [d, g, y], S = {
				name: "app", components: {cover: d, mainPage: g, final: y}, data: function () {
					return {currentPageIndex: 0, currentPage: I[0], emotionsCount: null}
				}, watch: {
					currentPageIndex: function () {
						this.currentPage = I[this.currentPageIndex]
					}
				}, methods: {
					change: function (t) {
						t && "nextIndex" in t ? this.currentPageIndex = t.nextIndex : this.currentPageIndex++, this.emotionsCount = t
					}
				}
			}, O = S, k = (n("fe4c"), Object(u["a"])(O, i, s, !1, null, null, null)), j = k.exports, $ = n("5ef5"),
			U = n("ca95");
		a["a"].use(U, {name: "v-touch"}), U.config.swipe = {threshold: 200}, a["a"].use($["a"]), new a["a"]({
			render: function (t) {
				return t(j)
			}
		}).$mount("#app"), a["a"].directive("img", (function (t) {
			var e = new Image;
			e.src = t, e.onload = function () {
				this.el.src = t
			}.bind(this)
		}))
	}, 6624: function (t, e, n) {
		t.exports = n.p + "img/card4.0b310d4a.png"
	}, bcb6: function (t, e, n) {
		t.exports = n.p + "img/card2.2ed4701c.png"
	}, d0db: function (t, e, n) {
		t.exports = n.p + "img/card3.27755e7f.png"
	}, fd35: function (t, e, n) {
		t.exports = n.p + "img/sad_icon.16b06ce6.svg"
	}, fe4c: function (t, e, n) {
		"use strict";
		var a = n("1236"), i = n.n(a);
		i.a
	}
});
//# sourceMappingURL=app.44c8f7ad.js.map