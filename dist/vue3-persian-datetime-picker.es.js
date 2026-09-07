import { Fragment, Transition, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, guardReactiveProps, mergeProps, normalizeClass, normalizeProps, normalizeStyle, openBlock, renderList, renderSlot, resolveComponent, toDisplayString, vModelText, vShow, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import momentBase from "moment";
import moment from "moment-jalaali";
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region src/picker/components/Arrow.vue
var _sfc_main$9 = {
	props: {
		fill: {
			type: String,
			default: "#a2a2a2"
		},
		direction: {
			type: String,
			default: "up"
		}
	},
	computed: { rotation() {
		return {
			up: 90,
			left: 0,
			right: 180,
			down: -90
		}[this.direction];
	} }
};
var _hoisted_1$8 = ["fill"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("svg", {
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 129 129",
		width: "30",
		height: "30",
		perspectiveAspectRato: "none",
		style: normalizeStyle({ transform: `rotate(${$options.rotation}deg)` })
	}, [createElementVNode("path", {
		fill: $props.fill,
		d: "M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54\n      53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"
	}, null, 8, _hoisted_1$8)], 4);
}
var Arrow_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$9, [["render", _sfc_render$9]]);
//#endregion
//#region src/picker/components/TimeIcon.vue
var _sfc_main$8 = { props: { fill: {
	type: String,
	default: "#f9f9f9"
} } };
var _hoisted_1$7 = ["fill"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("svg", {
		version: "1.1",
		role: "presentation",
		width: "16",
		height: "16",
		fill: $props.fill,
		viewBox: "0 0 512 512"
	}, [..._cache[0] || (_cache[0] = [createElementVNode("path", { d: "M256 8C119 8 8 119 8 256S119 504 256 504 504 393 504 256 393 8 256 8zM313.1 358.1L224.9 294C221.8 291.7 220\n      288.1 220 284.3V116C220 109.4 225.4 104 232 104H280C286.6 104 292 109.4 292 116V253.7L355.5 299.9C360.9 303.8\n      362 311.3 358.1 316.7L329.9 355.5C326 360.8 318.5 362 313.1 358.1z" }, null, -1)])], 8, _hoisted_1$7);
}
var TimeIcon_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$8, [["render", _sfc_render$8]]);
//#endregion
//#region src/picker/components/CalendarIcon.vue
var _sfc_main$7 = { props: { fill: {
	type: String,
	default: "#f9f9f9"
} } };
var _hoisted_1$6 = ["fill"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("svg", {
		version: "1.1",
		width: "14",
		height: "16",
		viewBox: "0 0 448 512",
		xmlns: "http://www.w3.org/2000/svg",
		fill: $props.fill
	}, [..._cache[0] || (_cache[0] = [createElementVNode("path", { d: "M436 160H12C5.4 160 0 154.6 0 148V112C0 85.5 21.5 64 48 64H96V12C96 5.4 101.4 0 108 0H148C154.6 0 160 5.4 160\n      12V64H288V12C288 5.4 293.4 0 300 0H340C346.6 0 352 5.4 352 12V64H400C426.5 64 448 85.5 448 112V148C448 154.6\n      442.6 160 436 160zM12 192H436C442.6 192 448 197.4 448 204V464C448 490.5 426.5 512 400 512H48C21.5 512 0 490.5 0\n      464V204C0 197.4 5.4 192 12 192zM128 396C128 389.4 122.6 384 116 384H76C69.4 384 64 389.4 64 396V436C64 442.6 69.4\n      448 76 448H116C122.6 448 128 442.6 128 436V396zM128 268C128 261.4 122.6 256 116 256H76C69.4 256 64 261.4 64\n      268V308C64 314.6 69.4 320 76 320H116C122.6 320 128 314.6 128 308V268zM256 396C256 389.4 250.6 384 244\n      384H204C197.4 384 192 389.4 192 396V436C192 442.6 197.4 448 204 448H244C250.6 448 256 442.6 256 436V396zM256\n      268C256 261.4 250.6 256 244 256H204C197.4 256 192 261.4 192 268V308C192 314.6 197.4 320 204 320H244C250.6 320 256\n      314.6 256 308V268zM384 396C384 389.4 378.6 384 372 384H332C325.4 384 320 389.4 320 396V436C320 442.6 325.4 448\n      332 448H372C378.6 448 384 442.6 384 436V396zM384 268C384 261.4 378.6 256 372 256H332C325.4 256 320 261.4 320\n      268V308C320 314.6 325.4 320 332 320H372C378.6 320 384 314.6 384 308V268z" }, null, -1)])], 8, _hoisted_1$6);
}
var CalendarIcon_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$7, [["render", _sfc_render$7]]);
//#endregion
//#region src/picker/components/LocaleChange.vue
var _sfc_main$6 = {
	name: "LocaleChange",
	props: {
		locales: {
			type: Array,
			default: () => []
		},
		core: {
			type: Object,
			default: () => ({})
		},
		localeData: {
			type: Object,
			default: () => ({})
		}
	},
	emits: ["change"],
	computed: {
		activeItem() {
			let activeIndex = this.locales.indexOf(this.localeData.name) + 1;
			if (activeIndex === this.locales.length) activeIndex = 0;
			return String(this.locales[activeIndex]);
		},
		label() {
			return this.core.localesConfig[this.activeItem].lang.label || this.activeItem.toUpperCase();
		}
	}
};
var _hoisted_1$5 = ["textContent"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("ul", null, [createElementVNode("li", {
		onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("change", $options.activeItem)),
		textContent: toDisplayString($options.label)
	}, null, 8, _hoisted_1$5)]);
}
var LocaleChange_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$6, [["render", _sfc_render$6]]);
//#endregion
//#region src/picker/components/Btn.vue
var _sfc_main$5 = {
	name: "Btn",
	emits: ["update", "fastUpdate"],
	data() {
		return {
			interval: false,
			timeout: false,
			intervalDelay: 150
		};
	},
	mounted() {
		document.addEventListener("mouseup", () => {
			if (this.timeout || this.interval) this.up();
		});
		document.addEventListener("touchend", () => {
			if (this.timeout || this.interval) this.up();
		});
	},
	methods: {
		click() {
			if (!this.interval) this.$emit("update", 1);
		},
		down() {
			window.clearTimeout(this.timeout);
			window.clearInterval(this.interval);
			this.interval = false;
			this.timeout = window.setTimeout(() => {
				this.intervalFn();
			}, 600);
		},
		up() {
			window.clearTimeout(this.timeout);
			window.clearInterval(this.interval);
			this.$emit("fastUpdate", false);
			this.timeout = false;
			this.interval = false;
			this.intervalDelay = 150;
		},
		intervalFn() {
			this.interval = window.setTimeout(() => {
				this.$emit("update", 1);
				this.$emit("fastUpdate", true);
				this.intervalFn();
				if (this.intervalDelay > 30) this.intervalDelay -= 3;
			}, this.intervalDelay);
		}
	}
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", {
		onMousedown: _cache[0] || (_cache[0] = (...args) => $options.down && $options.down(...args)),
		onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.down && $options.down(...args)),
		onMouseup: _cache[2] || (_cache[2] = (...args) => $options.click && $options.click(...args))
	}, [renderSlot(_ctx.$slots, "default")], 32);
}
var Btn_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$5, [["render", _sfc_render$5]]);
//#endregion
//#region src/picker/modules/utils.js
var toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var tools = {
	isFunction: function(obj) {
		return toString.call(obj) === "[object Function]";
	},
	isArray: function(obj) {
		return toString.call(obj) === "[object Array]";
	},
	isPlainObject: function(obj) {
		if (!obj || toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval) return false;
		if (obj.constructor && !hasOwnProperty.call(obj, "constructor") && !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")) return false;
		var key;
		for (key in obj);
		return key === void 0 || hasOwnProperty.call(obj, key);
	}
};
var extend = function() {
	var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
	if (typeof target === "boolean") {
		deep = target;
		target = arguments[1] || {};
		i = 2;
	}
	if (typeof target !== "object" && !tools.isFunction(target)) target = {};
	if (length === i) {
		target = this;
		--i;
	}
	for (; i < length; i++) if ((options = arguments[i]) !== null) for (name in options) {
		src = target[name];
		copy = options[name];
		if (target === copy) continue;
		if (deep && copy && (tools.isPlainObject(copy) || (copyIsArray = tools.isArray(copy)))) {
			if (copyIsArray) {
				copyIsArray = false;
				clone = src && tools.isArray(src) ? src : [];
			} else clone = src && tools.isPlainObject(src) ? src : {};
			target[name] = extend(deep, clone, copy);
		} else if (copy !== void 0) target[name] = copy;
	}
	return target;
};
var cloneDates = (arr) => arr.map((d) => d.clone());
var isSameDay = (a, b) => {
	a = a.clone().set({
		h: 12,
		m: 0
	});
	return Math.abs(a.diff(b, "hours")) < 20;
};
var clone = (obj) => JSON.parse(JSON.stringify(obj));
var scrollIntoCenter = function(element, duration = 200, callback) {
	const parent = element.parentNode;
	let startingTop = parent.scrollTop;
	let parentCenter = parent.offsetHeight / 2;
	let elementCenter = element.offsetHeight / 2;
	let distance = element.offsetTop - startingTop - parentCenter + elementCenter;
	let start;
	const done = () => {
		if (typeof callback === "function") callback();
	};
	if (!duration) {
		parent.scrollTo(0, startingTop + distance);
		done();
		return;
	}
	window.requestAnimationFrame(function step(timestamp) {
		if (!start) start = timestamp;
		let time = timestamp - start;
		let percent = Math.min(time / duration, 1);
		parent.scrollTo(0, startingTop + distance * percent);
		if (time < duration) window.requestAnimationFrame(step);
		else done();
	});
};
var addEventListener = function(el, type, handler) {
	if (typeof el === "string") el = document.querySelector(el);
	if (!el) throw new Error("Cant find custom element: " + el);
	if (el.addEventListener) el.addEventListener(type, handler, true);
	else el.attachEvent("on" + type, handler, true);
};
var addLiveEvent = function(selector, event, callback, context) {
	addEventListener(context || document, event, function(e) {
		if (e.target.closest(selector)) callback.call(e.target, e);
	});
};
var utils_default = {
	extend,
	clone
};
//#endregion
//#region src/picker/modules/mixins.js
/**
* Model Mixin
*/
var modelMixin = {
	props: { modelValue: {
		type: [
			String,
			Number,
			Array,
			Object,
			Boolean
		],
		default: ""
	} },
	emits: ["update:modelValue"],
	data() {
		return { selfValue: "" };
	},
	watch: {
		modelValue: {
			handler(val) {
				if (this.selfValue !== val) this.selfValue = val;
			},
			immediate: true,
			deep: true
		},
		selfValue(val) {
			if (val !== this.modelValue) this.$emit("update:modelValue", val);
		}
	}
};
/**
* Change route when visible changes
* @type Object
*/
var popupRouteChanger = {
	data() {
		return { routerQueryName: null };
	},
	mounted() {
		this.initRouter();
	},
	methods: {
		initRouter() {
			const isSet = (prop) => prop || typeof prop === "string";
			const useRouter = this.useRouter;
			if (!isSet(useRouter) || this.isPopover || this.inline || !this.$router) return;
			this.$watch("visible", this.onVisibleChange);
			this.$watch(() => this.$route.query, this.onRouteChange, {
				deep: true,
				immediate: true
			});
			this.routerQueryName = typeof useRouter === "string" && useRouter ? useRouter : this.id;
		},
		onVisibleChange(visible) {
			let currentRoute = this.$route;
			let query = clone(currentRoute.query || {});
			if (visible) {
				query[this.routerQueryName] = "active";
				this.$router.push({ query });
			} else if (query[this.routerQueryName]) this.$router.back();
		},
		onRouteChange() {
			let visible = !!this.$route.query[this.routerQueryName];
			if (visible && this.disabled) return;
			this.visible = visible;
		}
	}
};
//#endregion
//#region src/picker/components/time/TimeColumn.vue
var _sfc_main$4 = {
	name: "TimeColumn",
	components: {
		Btn: Btn_default,
		Arrow: Arrow_default
	},
	mixins: [modelMixin],
	props: {
		jump: {
			type: Number,
			default: 1
		},
		formatter: {
			type: Function,
			default: null
		},
		attributes: {
			type: Object,
			default: () => ({})
		}
	},
	emits: ["filled"],
	data() {
		return {
			directionClass: "direction-next",
			classFastCounter: "",
			transitionSpeed: 300,
			timeout: false,
			lastUpdate: (/* @__PURE__ */ new Date()).getTime(),
			isInputFocused: false,
			inputValue: ""
		};
	},
	watch: {
		selfValue: {
			handler(val, old) {
				if (old) this.setDirection(val, old);
				this.inputValue = this.selfValue;
				this.$nextTick(() => {
					if (this.modelValue.toString() !== this.selfValue.toString()) this.selfValue = this.modelValue;
				});
			},
			immediate: true
		},
		isInputFocused(focused) {
			if (focused) {
				this.inputValue = this.selfValue;
				this.$nextTick(() => {
					this.$refs.input.select();
				});
			} else if (this.inputValue) this.onInputSubmit();
		}
	},
	methods: {
		update(value) {
			this.selfValue = +this.selfValue + value * this.jump;
			let now = (/* @__PURE__ */ new Date()).getTime(), def = now - this.lastUpdate;
			if (20 < def && def < 300) this.transitionSpeed = def;
			this.lastUpdate = now;
			window.clearTimeout(this.timeout);
			this.timeout = window.setTimeout(() => {
				this.transitionSpeed = 300;
			}, 300);
		},
		wheelUpdate(e) {
			const delta = this.jump;
			const goUp = (e.wheelDeltaY || -e.detail) > 0;
			this.update(goUp ? delta : -delta);
		},
		fastUpdateCounter(e) {
			if (!e) this.transitionSpeed = 300;
			this.classFastCounter = e ? "fast-updating" : "";
		},
		setDirection(val, old) {
			if (val * 1 === old * 1) return;
			this.directionClass = val > old ? "direction-next" : "direction-prev";
		},
		onInputSubmit() {
			this.selfValue = this.inputValue;
			this.transitionSpeed = 0;
		},
		onInputChange(event) {
			if (event.target.value.length >= this.selfValue.length) this.$emit("filled");
		}
	}
};
var _hoisted_1$4 = ["maxlength"];
var _hoisted_2$3 = ["textContent"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_arrow = resolveComponent("arrow");
	const _component_btn = resolveComponent("btn");
	return openBlock(), createElementBlock("div", { class: normalizeClass(["vpd-time-column", $data.classFastCounter]) }, [
		createVNode(_component_btn, {
			class: "vpd-up-arrow-btn",
			onUpdate: _cache[0] || (_cache[0] = ($event) => $options.update(1)),
			onFastUpdate: $options.fastUpdateCounter
		}, {
			default: withCtx(() => [createVNode(_component_arrow, {
				width: "20",
				direction: "up"
			})]),
			_: 1
		}, 8, ["onFastUpdate"]),
		createElementVNode("div", {
			class: normalizeClass(["vpd-counter", [$data.directionClass, { "vpd-is-focused": $data.isInputFocused }]]),
			onMousewheel: _cache[8] || (_cache[8] = withModifiers(($event) => $options.wheelUpdate($event), ["stop", "prevent"])),
			"on:DOMMouseScroll": _cache[9] || (_cache[9] = withModifiers(($event) => $options.wheelUpdate($event), ["stop", "prevent"]))
		}, [withDirectives(createElementVNode("input", {
			ref: "input",
			"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.inputValue = $event),
			type: "tel",
			maxlength: _ctx.selfValue.length,
			class: normalizeClass({ "is-empty": !$data.inputValue.length }),
			onInput: _cache[2] || (_cache[2] = (...args) => $options.onInputChange && $options.onInputChange(...args)),
			onFocus: _cache[3] || (_cache[3] = ($event) => $data.isInputFocused = true),
			onBlur: _cache[4] || (_cache[4] = ($event) => $data.isInputFocused = false),
			onKeydown: [
				_cache[5] || (_cache[5] = withKeys(withModifiers(($event) => $options.update(1), ["prevent"]), ["up"])),
				_cache[6] || (_cache[6] = withKeys(withModifiers(($event) => $options.update(-1), ["prevent"]), ["down"])),
				_cache[7] || (_cache[7] = withKeys(withModifiers((...args) => $options.onInputSubmit && $options.onInputSubmit(...args), ["prevent"]), ["enter"]))
			]
		}, null, 42, _hoisted_1$4), [[vModelText, $data.inputValue]]), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.modelValue.toString().split(""), (item, i) => {
			return openBlock(), createElementBlock("div", mergeProps({
				key: `h__${i}`,
				class: "vpd-counter-item"
			}, { ref_for: true }, $props.attributes), [createVNode(Transition, { name: "slideY" }, {
				default: withCtx(() => [(openBlock(), createElementBlock("span", {
					key: `${item}__${i}_h`,
					style: normalizeStyle({ transition: "all " + $data.transitionSpeed + "ms ease-in-out" }),
					textContent: toDisplayString($props.formatter(item))
				}, null, 12, _hoisted_2$3))]),
				_: 2
			}, 1024)], 16);
		}), 128))], 34),
		createVNode(_component_btn, {
			class: "vpd-down-arrow-btn",
			onUpdate: _cache[10] || (_cache[10] = ($event) => $options.update(-1)),
			onFastUpdate: $options.fastUpdateCounter
		}, {
			default: withCtx(() => [createVNode(_component_arrow, {
				width: "20",
				direction: "down"
			})]),
			_: 1
		}, 8, ["onFastUpdate"])
	], 2);
}
//#endregion
//#region src/picker/components/time/TimeSection.vue
var _sfc_main$3 = {
	name: "TimeSection",
	components: { TimeColumn: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$4, [["render", _sfc_render$4]]) },
	props: {
		date: {
			type: Object,
			default: () => ({})
		},
		time: {
			type: Object,
			default: () => ({})
		},
		jumpMinute: {
			type: Number,
			default: 1
		},
		roundMinute: {
			type: Boolean,
			default: false
		},
		isDisableTime: {
			type: Boolean,
			default: false
		},
		getHighlights: {
			type: Function,
			default: null
		},
		isMore: {
			type: Function,
			default: null
		},
		isLower: {
			type: Function,
			default: null
		},
		minDate: {
			type: [Object, Boolean],
			default: false
		},
		maxDate: {
			type: [Object, Boolean],
			default: false
		},
		selectedDates: {
			type: Array,
			default: () => []
		},
		convertToLocaleNumber: {
			type: Function,
			default: null
		}
	},
	emits: ["update:date", "update:time"],
	computed: {
		timeAttributes() {
			return this.getHighlights("t", this.time);
		},
		hourModel: {
			get() {
				return this.time.format("HH");
			},
			set(val) {
				this.setTime(val, "hours");
			}
		},
		minuteModel: {
			get() {
				return this.time.format("mm");
			},
			set(val) {
				this.setTime(val, "minutes");
			}
		}
	},
	watch: { time: {
		handler() {
			if (this.roundMinute) {
				let time = this.time.clone();
				let jm = this.jumpMinute;
				let m = (jm - time.minute() % jm) % jm;
				time.add({ m });
				if (time.valueOf() !== this.time.valueOf()) {
					this.$emit("update:time", time);
					this.selectedDates.forEach((d) => d.set({ m: time.minute() }));
				}
			}
		},
		immediate: true
	} },
	methods: {
		setTime(v, k) {
			let time = this.time.clone();
			time.set(k, v);
			if (this.type !== "time") {
				let date = this.date.clone();
				time.set({
					year: date.year(),
					month: date.month(),
					date: date.date()
				});
				date.set({
					hour: time.hour(),
					minute: time.minute()
				});
				this.$emit("update:date", date);
			}
			if (this.isLower(time)) time = this.minDate.clone();
			if (this.isMore(time)) time = this.maxDate.clone();
			this.$emit("update:time", time);
		},
		focusNext() {
			this.$refs.minute.$el.querySelector("input").focus();
		}
	}
};
var _hoisted_1$3 = { class: "vpd-addon-list-content" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_time_column = resolveComponent("time-column");
	return openBlock(), createElementBlock("div", { class: normalizeClass(["vpd-addon-list vpd-time", { "vpd-disabled": $props.isDisableTime }]) }, [createElementVNode("div", _hoisted_1$3, [createVNode(_component_time_column, {
		ref: "hour",
		modelValue: $options.hourModel,
		"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.hourModel = $event),
		class: "vpd-time-h",
		attributes: $options.timeAttributes,
		formatter: $props.convertToLocaleNumber,
		onFilled: $options.focusNext
	}, null, 8, [
		"modelValue",
		"attributes",
		"formatter",
		"onFilled"
	]), createVNode(_component_time_column, {
		ref: "minute",
		modelValue: $options.minuteModel,
		"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.minuteModel = $event),
		class: "vpd-time-m",
		jump: $props.jumpMinute,
		attributes: $options.timeAttributes,
		formatter: $props.convertToLocaleNumber
	}, null, 8, [
		"modelValue",
		"jump",
		"attributes",
		"formatter"
	])])], 2);
}
var TimeSection_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$3, [["render", _sfc_render$3]]);
//#endregion
//#region src/picker/components/simple/SimpleModeColumn.vue
var _sfc_main$2 = {
	name: "SimpleModeColumn",
	props: {
		label: {
			type: String,
			default: null
		},
		locale: {
			type: String,
			default: null
		},
		value: {
			type: [String, Number],
			default: null
		}
	},
	data() {
		return { isMounted: false };
	},
	watch: {
		value() {
			this.scrollIntoView(200);
		},
		locale() {
			this.scrollIntoView(200);
		}
	},
	mounted() {
		this.scrollIntoView(0);
	},
	methods: { scrollIntoView(duration) {
		try {
			this.isMounted = false;
			this.$nextTick(() => {
				const activeElement = this.$refs.content.querySelector(".vpd-selected") || this.$refs.content.querySelector(".vpd-addon-list-item:not([disabled])");
				if (activeElement) scrollIntoCenter(activeElement, duration, () => {
					this.isMounted = true;
				});
			});
		} catch (e) {
			console.warn(e);
		}
	} }
};
var _hoisted_1$2 = ["textContent"];
var _hoisted_2$2 = {
	ref: "content",
	class: "vpd-column-content"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", {
		class: normalizeClass(["vpd-column", { "vpd-is-mounted": $data.isMounted }]),
		onMousewheel: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
	}, [$props.label ? (openBlock(), createElementBlock("div", {
		key: 0,
		class: "vpd-column-header",
		textContent: toDisplayString($props.label)
	}, null, 8, _hoisted_1$2)) : createCommentVNode("", true), createElementVNode("div", _hoisted_2$2, [renderSlot(_ctx.$slots, "default")], 512)], 34);
}
//#endregion
//#region src/picker/components/simple/SimpleMode.vue
var _sfc_main$1 = {
	name: "SimpleMode",
	components: {
		LocaleChange: LocaleChange_default,
		SimpleModeColumn: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$2, [["render", _sfc_render$2]])
	},
	props: {
		visible: {
			type: Boolean,
			default: false
		},
		multiple: {
			type: Boolean,
			default: false
		},
		range: {
			type: Boolean,
			default: false
		},
		lang: {
			type: Object,
			default: null
		},
		color: {
			type: String,
			default: null
		},
		hasStep: {
			type: Function,
			default: null
		},
		years: {
			type: Array,
			default: () => []
		},
		months: {
			type: Array,
			default: () => []
		},
		monthDays: {
			type: Array,
			default: () => []
		},
		selectedDates: {
			type: Array,
			default: () => []
		},
		formattedDate: {
			type: String,
			default: null
		},
		hoveredItem: {
			type: Date,
			default: null
		},
		locales: {
			type: Array,
			default: () => []
		},
		core: {
			type: Object,
			default: null
		},
		setLocale: {
			type: Function,
			default: null
		},
		convertToLocaleNumber: {
			type: Function,
			default: null
		}
	},
	emits: [
		"select-day",
		"update:hovered-item",
		"select-month",
		"select-year"
	],
	data() {
		return { vm: this };
	},
	computed: {
		days() {
			let days = [];
			this.monthDays.forEach((week) => {
				week.forEach((day) => {
					if (day.date) days.push(day);
				});
			});
			return days;
		},
		selectedYear() {
			let year = this.years.find((year) => year.selected);
			return year ? year.xFormat("YYYY") : "";
		},
		selectedMonth() {
			let month = this.months.find((month) => month.selected);
			return month ? month.xFormat("MM") : "";
		},
		selectedDay() {
			let day = this.days.find((day) => day.selected) || {};
			return day && day.date ? day.date.getDate() : "";
		},
		showHeader() {
			const selectedDatesLength = this.selectedDates.length;
			return this.locales.length > 1 || selectedDatesLength > 1 || this.range && selectedDatesLength || this.multiple && selectedDatesLength;
		}
	}
};
var _hoisted_1$1 = { class: "vpd-simple-body" };
var _hoisted_2$1 = ["disabled", "onClick"];
var _hoisted_3$1 = ["disabled", "onClick"];
var _hoisted_4$1 = [
	"disabled",
	"onClick",
	"onMouseover"
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_locale_change = resolveComponent("locale-change");
	const _component_simple_mode_column = resolveComponent("simple-mode-column");
	return openBlock(), createElementBlock("div", _hoisted_1$1, [$options.showHeader ? (openBlock(), createElementBlock("div", {
		key: 0,
		class: "vpd-header",
		style: normalizeStyle({ "background-color": $props.color })
	}, [createElementVNode("div", null, [renderSlot(_ctx.$slots, "header-date", normalizeProps(guardReactiveProps({
		vm: $data.vm,
		formattedDate: $props.formattedDate
	})), () => [createTextVNode(toDisplayString($props.convertToLocaleNumber($props.formattedDate)), 1)])]), $props.locales.length > 1 ? renderSlot(_ctx.$slots, "locales", normalizeProps(guardReactiveProps({
		vm: $data.vm,
		locales: $props.locales,
		setLocale: $props.setLocale
	})), () => [createVNode(_component_locale_change, {
		"locale-data": $props.core.locale,
		core: $props.core,
		locales: $props.locales,
		class: "vpd-locales",
		onChange: $props.setLocale
	}, null, 8, [
		"locale-data",
		"core",
		"locales",
		"onChange"
	])], void 0, 0) : createCommentVNode("", true)], 4)) : createCommentVNode("", true), createElementVNode("div", {
		class: "vpd-simple-content",
		onMouseleave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:hovered-item", null))
	}, [
		$props.hasStep("y") ? (openBlock(), createBlock(_component_simple_mode_column, {
			key: 0,
			label: $props.lang.year,
			value: $options.selectedYear,
			locale: $props.core.locale.name
		}, {
			default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList($props.years, (year, yi) => {
				return openBlock(), createElementBlock("div", mergeProps({ key: yi }, { ref_for: true }, year.attributes, {
					class: [
						"vpd-addon-list-item",
						{ "vpd-selected": year.selected },
						year.attributes.class
					],
					style: [{ color: year.selected ? $props.color : "" }, year.attributes.style],
					disabled: year.disabled,
					onClick: ($event) => _ctx.$emit("select-year", year)
				}), [renderSlot(_ctx.$slots, "year-item", mergeProps({ ref_for: true }, {
					vm: $data.vm,
					year,
					color: $props.color
				}), () => [createTextVNode(toDisplayString($props.convertToLocaleNumber(year.xFormat("jYYYY"))), 1)])], 16, _hoisted_2$1);
			}), 128))]),
			_: 3
		}, 8, [
			"label",
			"value",
			"locale"
		])) : createCommentVNode("", true),
		$props.hasStep("m") ? (openBlock(), createBlock(_component_simple_mode_column, {
			key: 1,
			label: $props.lang.month,
			value: $options.selectedMonth,
			locale: $props.core.locale.name
		}, {
			default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList($props.months, (month, mi) => {
				return openBlock(), createElementBlock("div", mergeProps({ key: mi }, { ref_for: true }, month.attributes, {
					class: [
						"vpd-addon-list-item",
						{ "vpd-selected": month.selected },
						month.attributes.class
					],
					disabled: month.disabled,
					style: [{ color: month.selected ? $props.color : "" }, month.attributes.style],
					onClick: ($event) => _ctx.$emit("select-month", month)
				}), [renderSlot(_ctx.$slots, "month-item", mergeProps({ ref_for: true }, {
					vm: $data.vm,
					monthItem: month,
					color: $props.color
				}), () => [createTextVNode(toDisplayString(month.xFormat("jMMMM")), 1)])], 16, _hoisted_3$1);
			}), 128))]),
			_: 3
		}, 8, [
			"label",
			"value",
			"locale"
		])) : createCommentVNode("", true),
		$props.hasStep("d") ? (openBlock(), createBlock(_component_simple_mode_column, {
			key: 2,
			label: $props.lang.day,
			value: $options.selectedDay,
			locale: $props.core.locale.name
		}, {
			default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList($options.days, (day, di) => {
				return openBlock(), createElementBlock("div", mergeProps({
					key: di,
					class: [
						"vpd-addon-list-item",
						{
							"vpd-selected": day.selected,
							"vpd-empty": day.date == null,
							"vpd-range-first": day.isFirst,
							"vpd-range-last": day.isLast,
							"vpd-range-between": day.isBetween,
							"vpd-range-hover": $props.hoveredItem && day.isHover
						},
						day.attributes.class
					]
				}, { ref_for: true }, day.attributes, {
					style: [{ color: day.selected || day.isBetween ? $props.color : "" }, day.attributes.style],
					disabled: day.disabled,
					onClick: ($event) => _ctx.$emit("select-day", day),
					onMouseover: ($event) => _ctx.$emit("update:hovered-item", day.date)
				}), [day.date != null ? renderSlot(_ctx.$slots, "day-item", mergeProps({ ref_for: true }, {
					vm: $data.vm,
					day,
					color: $props.color
				}), () => [createTextVNode(toDisplayString($props.convertToLocaleNumber(day.formatted)), 1)], void 0, 0) : createCommentVNode("", true)], 16, _hoisted_4$1);
			}), 128))]),
			_: 3
		}, 8, [
			"label",
			"value",
			"locale"
		])) : createCommentVNode("", true)
	], 32)]);
}
var SimpleMode_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1]]);
//#endregion
//#region src/picker/modules/moment.locale.fa.js
//! moment.js locale configuration
var symbolMap = {
	"1": "۱",
	"2": "۲",
	"3": "۳",
	"4": "۴",
	"5": "۵",
	"6": "۶",
	"7": "۷",
	"8": "۸",
	"9": "۹",
	"0": "۰"
};
var numberMap = {
	"۱": "1",
	"۲": "2",
	"۳": "3",
	"۴": "4",
	"۵": "5",
	"۶": "6",
	"۷": "7",
	"۸": "8",
	"۹": "9",
	"۰": "0"
};
var moment_locale_fa_default = {
	months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
	monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
	weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
	weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
	weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
	weekdaysParseExact: true,
	longDateFormat: {
		LT: "HH:mm",
		LTS: "HH:mm:ss",
		L: "DD/MM/YYYY",
		LL: "D MMMM YYYY",
		LLL: "D MMMM YYYY HH:mm",
		LLLL: "dddd, D MMMM YYYY HH:mm"
	},
	meridiemParse: /قبل از ظهر|بعد از ظهر/,
	isPM: function(input) {
		return /بعد از ظهر/.test(input);
	},
	meridiem: function(hour) {
		if (hour < 12) return "قبل از ظهر";
		else return "بعد از ظهر";
	},
	calendar: {
		sameDay: "[امروز ساعت] LT",
		nextDay: "[فردا ساعت] LT",
		nextWeek: "dddd [ساعت] LT",
		lastDay: "[دیروز ساعت] LT",
		lastWeek: "dddd [پیش] [ساعت] LT",
		sameElse: "L"
	},
	relativeTime: {
		future: "در %s",
		past: "%s پیش",
		s: "چند ثانیه",
		ss: "ثانیه d%",
		m: "یک دقیقه",
		mm: "%d دقیقه",
		h: "یک ساعت",
		hh: "%d ساعت",
		d: "یک روز",
		dd: "%d روز",
		M: "یک ماه",
		MM: "%d ماه",
		y: "یک سال",
		yy: "%d سال"
	},
	preparse: function(string) {
		return string.replace(/[۰-۹]/g, function(match) {
			return numberMap[match];
		}).replace(/،/g, ",");
	},
	postformat: function(string) {
		return string.replace(/\d/g, function(match) {
			return symbolMap[match];
		}).replace(/,/g, "،");
	},
	dayOfMonthOrdinalParse: /\d{1,2}م/,
	ordinal: "%dم",
	week: {
		dow: 6,
		doy: 12
	}
};
//#endregion
//#region src/picker/modules/core.js
moment.updateLocale("en", { weekdaysMin: "S_M_T_W_T_F_S".split("_") });
moment.updateLocale("fa", moment_locale_fa_default);
moment.loadPersian({ dialect: "persian-modern" });
moment.daysInMonth = function(year, month) {
	return moment({
		year,
		month
	}).daysInMonth();
};
var localMethods = {
	fa: {
		daysInMonth: "jDaysInMonth",
		year: "jYear",
		month: "jMonth",
		date: "jDate",
		day: "day"
	},
	en: {
		daysInMonth: "daysInMonth",
		year: "year",
		month: "month",
		date: "date",
		day: "day"
	}
};
var localesConfig = {
	fa: {
		dow: 6,
		dir: "rtl",
		displayFormat: null,
		lang: {
			label: "شمسی",
			submit: "تایید",
			cancel: "انصراف",
			now: "اکنون",
			nextMonth: "ماه بعد",
			prevMonth: "ماه قبل",
			year: "سال",
			month: "ماه",
			day: "روز"
		}
	},
	en: {
		dow: 0,
		dir: "ltr",
		displayFormat: null,
		lang: {
			label: "میلادی",
			submit: "Select",
			cancel: "Cancel",
			now: "Now",
			nextMonth: "Next month",
			prevMonth: "Previous month",
			year: "Year",
			month: "Month",
			day: "Day"
		}
	}
};
var Core = function(defaultLocaleName, defaultOptions) {
	"use strict";
	const Instance = {
		moment,
		momentBase,
		locale: {
			name: "fa",
			config: {}
		},
		localesConfig: {},
		setLocalesConfig: null,
		changeLocale: null,
		getWeekArray: null,
		getYearsList: null,
		getMonthsList: null
	};
	let xDaysInMonth;
	Instance.changeLocale = function changeLocale(localeName = "fa", options = {}) {
		let locale = this.locale;
		let config = utils_default.clone(localesConfig[localeName] || localesConfig.en);
		let methods = localMethods[localeName] || localMethods.en;
		options = options[localeName] || {};
		if (!localesConfig[localeName]) options = utils_default.extend(true, {}, utils_default.clone(localesConfig.en), options);
		locale.name = localeName;
		locale.config = utils_default.extend(true, config, options);
		xDaysInMonth = moment[methods.daysInMonth];
		function addMethods(date) {
			if (date === void 0) return;
			const nameInLocale = (name) => {
				if (locale.name !== "fa") name = name.replace(/j/g, "");
				return name;
			};
			date.xYear = moment.fn[methods.year];
			date.xMonth = moment.fn[methods.month];
			date.xDate = moment.fn[methods.date];
			date.xFormat = function(format) {
				return this.format(nameInLocale(format));
			};
			date.xStartOf = function(value) {
				return this.startOf(methods[value]);
			};
			date.xEndOf = function(value) {
				return this.endOf(methods[value]);
			};
			date.xAdd = function(amount, key) {
				return this.add(amount, methods[key]);
			};
			date.clone = function() {
				return Instance.moment(this.toDate());
			};
		}
		this.moment = function() {
			let date = moment.apply(null, arguments);
			date.locale(locale.name);
			addMethods(date);
			return date;
		};
	};
	Instance.setLocalesConfig = function(config) {
		let defaults = utils_default.clone(localesConfig);
		for (let key in config) if (config.hasOwnProperty(key) && defaults[key] === void 0) defaults[key] = utils_default.extend(true, {}, utils_default.clone(defaults.en), { lang: { label: key } }, config[key]);
		this.localesConfig = utils_default.extend(true, defaults, config);
	};
	Instance.getWeekArray = function getWeekArray(date) {
		function addWeek(weekArray, week) {
			let emptyDays = 7 - week.length;
			for (let i = 0; i < emptyDays; ++i) week[weekArray.length ? "push" : "unshift"](null);
			weekArray.push(week);
		}
		date.set({
			h: 12,
			m: 0
		});
		let daysInMonth = xDaysInMonth(date.xYear(), date.xMonth());
		let day = date.clone().xDate(1);
		let dayArray = [day.toDate()];
		for (let i = 2; i <= daysInMonth; i++) dayArray.push(day.xAdd(1, "day").toDate());
		let weekArray = [];
		let week = [];
		dayArray.forEach((day) => {
			if (week.length > 0 && day.getDay() === this.locale.config.dow) {
				addWeek(weekArray, week);
				week = [];
			}
			week.push(day);
			if (dayArray.indexOf(day) === dayArray.length - 1) addWeek(weekArray, week);
		});
		return weekArray;
	};
	Instance.getYearsList = function getYearsList(from, to, range = false, date) {
		let years = [];
		if (range) {
			let year = getYear(date);
			from = year - range;
			to = year + range;
		}
		for (let i = from; i <= to; i++) years.push(i);
		return years;
	};
	Instance.getMonthsList = function getMonthsList(minDate, maxDate, date) {
		let list = [], min = minDate ? minDate.clone().xStartOf("month") : -Infinity, max = maxDate ? maxDate.clone().xEndOf("month") : Infinity;
		for (let i = 0; i < 12; i++) {
			let month = date.clone().xMonth(i);
			let start = month.clone().xStartOf("month");
			let end = month.clone().xEndOf("month");
			month.disabled = start < min || end > max;
			list.push(month);
		}
		return list;
	};
	Instance.changeLocale(defaultLocaleName, defaultOptions);
	return Instance;
};
//#endregion
//#region src/picker/Vue3PersianDatetimePicker.vue
var _sfc_main = {
	name: "Vue3PersianDatetimePicker",
	components: {
		SimpleMode: SimpleMode_default,
		TimeSection: TimeSection_default,
		LocaleChange: LocaleChange_default,
		Arrow: Arrow_default,
		CalendarIcon: CalendarIcon_default,
		TimeIcon: TimeIcon_default
	},
	mixins: [popupRouteChanger],
	props: {
		modelValue: {
			type: [
				Number,
				String,
				Date,
				Array
			],
			default: ""
		},
		initialValue: {
			type: [Number, String],
			default: ""
		},
		inputFormat: {
			type: String,
			default: ""
		},
		displayFormat: {
			type: String,
			default: ""
		},
		format: {
			type: String,
			default: ""
		},
		view: {
			type: String,
			default: "day"
		},
		type: {
			type: String,
			default: "date"
		},
		min: {
			type: [String],
			default: ""
		},
		max: {
			type: [String],
			default: ""
		},
		editable: {
			type: Boolean,
			default: false
		},
		element: {
			type: String,
			default: void 0
		},
		customInput: {
			type: String,
			default: void 0
		},
		name: {
			type: String,
			default: void 0
		},
		inputClass: {
			type: String,
			default: "form-control"
		},
		placeholder: {
			type: String,
			default: ""
		},
		altName: {
			type: String,
			default: ""
		},
		altFormat: {
			type: String,
			default: ""
		},
		show: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: "#417df4"
		},
		autoSubmit: {
			type: Boolean,
			default: false
		},
		wrapperSubmit: {
			type: Boolean,
			default: false
		},
		appendTo: {
			type: String,
			default: null
		},
		disabled: {
			type: Boolean,
			default: false
		},
		disable: {
			type: [
				Array,
				String,
				Function,
				RegExp
			],
			default: void 0
		},
		label: {
			type: String,
			default: ""
		},
		highlight: {
			type: Function,
			default: null
		},
		jumpMinute: {
			type: Number,
			default: 1
		},
		roundMinute: {
			type: Boolean,
			default: false
		},
		clearable: {
			type: Boolean,
			default: false
		},
		inline: {
			type: Boolean,
			default: false
		},
		locale: {
			type: String,
			default: "fa"
		},
		localeConfig: {
			type: Object,
			default: () => ({})
		},
		timezone: {
			type: [
				Boolean,
				String,
				Function
			],
			default: false
		},
		showNowBtn: {
			type: Boolean,
			default: true
		},
		convertNumbers: {
			type: Boolean,
			default: false
		},
		compactTime: {
			type: Boolean,
			default: false
		},
		range: {
			type: Boolean,
			default: false
		},
		multiple: {
			type: Boolean,
			default: false
		},
		popover: {
			type: [Boolean, String],
			default: false
		},
		useRouter: {
			type: [Boolean, String],
			default: false
		},
		simple: {
			type: Boolean,
			default: false
		},
		inputAttrs: {
			type: Object,
			default: null
		}
	},
	emits: [
		"update:modelValue",
		"locale-change",
		"change",
		"open",
		"close",
		"year-change",
		"month-change",
		"next-month",
		"prev-month"
	],
	data() {
		let defaultLocale = this.locale.split(",")[0];
		let coreModule = new Core(defaultLocale, this.localeConfig);
		return {
			core: coreModule,
			now: coreModule.moment(),
			date: {},
			selectedDates: [],
			hoveredItem: null,
			visible: false,
			directionClass: "",
			directionClassDate: "",
			steps: [
				"y",
				"m",
				"d",
				"t"
			],
			step: 0,
			shortCodes: {
				year: "y",
				month: "m",
				day: "d",
				time: "t"
			},
			time: {},
			minDate: false,
			maxDate: false,
			output: [],
			updateNowInterval: null,
			locales: ["fa"],
			localeData: coreModule.locale,
			windowWidth: window.innerWidth,
			popoverPlace: "bottom-right"
		};
	},
	computed: {
		vm() {
			return this;
		},
		id() {
			let randId = Math.round(Math.random() * 1e6);
			return `vpd-${this.$attrs.id || randId}`;
		},
		currentStep() {
			return this.steps[this.step];
		},
		selectedDate() {
			let dates = this.selectedDates;
			return dates.length ? dates[dates.length - 1] : this.date;
		},
		formattedDate() {
			let format = "";
			if (this.hasStep("y")) format = "jYYYY";
			if (this.hasStep("m")) format += " jMMMM ";
			if (this.hasStep("d")) format = this.isDataArray ? "jD jMMMM jYYYY" : "ddd jD jMMMM";
			if (this.hasStep("t")) format += " HH:mm ";
			if (!format) return "";
			let separator = this.multiple ? " | " : " ~ ";
			return this.selectedDates.map((d) => d.xFormat(format)).join(separator);
		},
		month() {
			if (!this.hasStep("d")) return [];
			let min = this.minDate ? this.minDate.clone().startOf("day") : -Infinity;
			let max = this.maxDate ? this.maxDate.clone().endOf("day") : Infinity;
			return this.core.getWeekArray(this.date.clone()).map((weekItem) => {
				return weekItem.map((day) => {
					let data = {
						date: day,
						formatted: "",
						selected: false,
						disabled: false,
						attributes: {}
					};
					if (!day) return data;
					let dayMoment = this.core.moment(day);
					data.formatted = dayMoment.xDate();
					data.selected = this.selectedDates.find((item) => isSameDay(item, day));
					data.disabled = this.minDate && dayMoment.clone().startOf("day") < min || this.maxDate && dayMoment.clone().endOf("day") > max || this.checkDisable("d", dayMoment);
					if (this.range && !data.disabled) {
						let [start, end] = this.selectedDates;
						data.isFirst = data.selected && start && isSameDay(start, day);
						data.isLast = data.selected && end && isSameDay(end, day);
						data.isBetween = !data.selected && start && end && day > start && day < end;
					}
					data.attributes = this.getHighlights("d", dayMoment);
					return data;
				});
			});
		},
		monthDays() {
			if (!this.range || this.selectedDates.length !== 1 || !this.hoveredItem) return this.month;
			let dates = [this.hoveredItem, this.selectedDates[0]];
			dates.sort((a, b) => a - b);
			let [start, end] = dates;
			return this.month.map((weekItem) => {
				return weekItem.map((data) => {
					if (!data.date) return data;
					if (this.range && !data.disabled) {
						let day = data.date;
						data.isHover = !data.selected && day > start && day < end;
					}
					return data;
				});
			});
		},
		years() {
			const isYearSectionVisible = this.currentStep === "y" || this.simple;
			if (!this.hasStep("y") || !isYearSectionVisible) return [];
			let moment = this.core.moment;
			let min = this.minDate ? this.minDate : moment("1300", "jYYYY");
			let max = this.maxDate ? this.maxDate : min.clone().add(150, "year");
			let cy = this.date.xYear();
			return this.core.getYearsList(min.xYear(), max.xYear()).reverse().map((item) => {
				let year = moment().xYear(item);
				year.selected = cy === item;
				year.disabled = this.checkDisable("y", item);
				year.attributes = this.getHighlights("y", item);
				return year;
			});
		},
		months() {
			if (this.hasStep("m")) {
				let date = this.date.clone().xStartOf("month");
				let months = this.core.getMonthsList(this.minDate, this.maxDate, date);
				months.forEach((m) => {
					m.selected = this.date.xMonth() === m.xMonth();
					m.disabled = m.disabled || this.checkDisable("m", m);
					m.attributes = this.getHighlights("m", m);
				});
				return months;
			}
			return [];
		},
		prevMonthDisabled() {
			return this.hasStep("d") && this.minDate && this.minDate.clone().xStartOf("month") >= this.date.clone().xStartOf("month");
		},
		nextMonthDisabled() {
			return this.hasStep("d") && this.maxDate && this.maxDate.clone().xStartOf("month") <= this.date.clone().xStartOf("month");
		},
		canGoToday() {
			if (!this.minDate && !this.maxDate) return true;
			let now = this.now, min = this.minDate && this.minDate <= now, max = this.maxDate && now <= this.maxDate;
			if (this.type === "time") {
				if (this.minDate) {
					min = now.clone().hour(this.minDate.hour()).minute(this.minDate.minute());
					min = min <= now;
				}
				if (this.maxDate) {
					max = this.now.clone().hour(this.maxDate.hour()).minute(this.maxDate.minute());
					max = now <= max;
				}
			}
			if (this.minDate && this.maxDate) return min && max;
			if (this.minDate) return min;
			if (this.maxDate) return max;
			return false;
		},
		altFormatted() {
			let format = this.altFormat;
			if (format === "" || format === void 0) switch (this.type) {
				case "time":
					format = "HH:mm:ss [GMT]ZZ";
					break;
				case "datetime":
					format = "YYYY-MM-DD HH:mm:ss [GMT]ZZ";
					break;
				case "date":
					format = "YYYY-MM-DD";
					break;
				case "year":
					format = "YYYY";
					break;
				case "month":
					format = "MM";
					break;
				case "year-month": format = "YYYY-MM";
			}
			return this.output.map((d) => d.format(format)).join(" ~ ");
		},
		selfFormat() {
			let format = this.format;
			if ([
				"",
				void 0,
				"date"
			].indexOf(format) !== -1) switch (this.type) {
				case "time":
					format = "HH:mm";
					break;
				case "datetime":
					format = "jYYYY/jMM/jDD HH:mm";
					break;
				case "date":
					format = "jYYYY/jMM/jDD";
					break;
				case "year":
					format = "jYYYY";
					break;
				case "month":
					format = "jMM";
					break;
				case "year-month": format = "jYYYY/jMM";
			}
			return format;
		},
		selfInputFormat() {
			return this.inputFormat === "" || this.inputFormat === void 0 ? this.selfFormat : this.inputFormat;
		},
		outputValue() {
			let output = cloneDates(this.output);
			let format = this.selfFormat;
			let isDate = this.modelValue instanceof Date || this.format === "date";
			return output.map((item) => {
				/j\w/.test(format) && item.locale("fa");
				this.setTimezone(item, "out");
				return isDate ? item.toDate() : item.format(format);
			});
		},
		selfDisplayFormat() {
			let format = this.displayFormat || this.selfFormat;
			let localeFormat = this.localeData.config.displayFormat;
			if (localeFormat) return typeof localeFormat === "function" ? localeFormat(this) : localeFormat;
			if (this.localeData.name !== "fa") format = format.replace(/j/g, "");
			return format;
		},
		displayValue() {
			let format = this.selfDisplayFormat;
			return this.output.map((item) => {
				let output = item.clone();
				/j\w/.test(format) && output.locale("fa");
				return this.convertToLocaleNumber(output.format(format));
			}).join(" ~ ");
		},
		isDisableTime() {
			return this.hasStep("t") && this.checkDisable("t", this.time);
		},
		canSubmit() {
			if (!this.disable) return true;
			let can = true;
			if (this.hasStep("t")) can = !this.isDisableTime;
			if (can && this.type !== "time") can = !this.checkDisable("d", this.date);
			return can;
		},
		weekDays() {
			let names = JSON.parse(JSON.stringify(this.core.moment().localeData().weekdaysMin()));
			let dow = this.core.locale.config.dow;
			while (dow > 0) {
				names.push(names.shift());
				dow--;
			}
			return names;
		},
		lang() {
			return this.localeData.config.lang;
		},
		isPopover() {
			return (this.popover === "" || this.popover) && this.windowWidth > 480;
		},
		isDataArray() {
			return this.range || this.multiple;
		},
		isCompactTime() {
			return this.compactTime || this.type === "datetime" && this.simple;
		},
		customInputElement() {
			if (this.element) return `#${this.element}`;
			return this.customInput;
		}
	},
	watch: {
		type: {
			handler: "setType",
			immediate: true
		},
		view: {
			handler: "setView",
			immediate: true
		},
		modelValue: {
			handler: "updateDates",
			immediate: true
		},
		min: {
			handler: "setMinMax",
			immediate: true
		},
		max: {
			handler: "setMinMax",
			immediate: true
		},
		timezone: { handler: "updateDates" },
		inline: {
			handler(val) {
				if (!this.disabled) this.visible = !!val;
			},
			immediate: true
		},
		disabled: {
			handler(val) {
				if (val) this.visible = false;
				else if (this.inline) this.visible = true;
			},
			immediate: true
		},
		selectedDate(val, old) {
			this.setDirection("directionClass", val, old);
		},
		date(val, old) {
			this.setDirection("directionClassDate", val, old);
			if (this.isLower(this.date)) this.date = this.minDate.clone();
			if (this.isMore(this.date)) this.date = this.maxDate.clone();
		},
		visible(val) {
			if (val) {
				if (this.disabled) return this.visible = false;
				if (this.type === "datetime" && this.view === "day") this.goStep("d");
				if (this.view !== "day") this.goStep(this.shortCodes[this.view] || "d");
				this.$nextTick(() => {
					if (this.appendTo) try {
						document.querySelector(this.appendTo).appendChild(this.$refs.picker);
					} catch (er) {
						console.warn(`Cannot append picker to "${this.appendTo}"!`);
					}
				});
				this.checkScroll();
				this.setPlacement();
				this.$emit("open", this);
			} else {
				if (this.inline && !this.disabled) return this.visible = true;
				this.$emit("close", this);
			}
		},
		show(val) {
			this.visible = val;
		},
		locale: {
			immediate: true,
			handler(val) {
				let locales = val.toString().split(",");
				this.locales = locales.length ? locales : ["fa"];
				if (this.core.locale.name !== this.locales[0]) this.setLocale(this.locales[0]);
			}
		},
		localeConfig: {
			deep: true,
			immediate: true,
			handler(config) {
				this.core.setLocalesConfig(config);
				this.setLocale(this.localeData.name);
			}
		},
		"localeData.name"() {
			this.$emit("locale-change", this.localeData);
			this.setMinMax();
		},
		displayValue: {
			immediate: true,
			handler: function(displayValue) {
				if (!this.customInput) return;
				const customInput = document.querySelector(this.customInput);
				if (customInput) customInput.value = displayValue;
			}
		}
	},
	created() {
		this.updateNowInterval = setInterval(() => {
			this.now = this.core.moment();
		}, 1e3);
	},
	mounted() {
		this.$nextTick(() => {
			if (this.customInputElement && !this.editable) addLiveEvent(this.customInputElement, "click", this.focus);
			if (this.customInput && this.editable) addLiveEvent(this.customInput, "blur", this.setOutput);
		});
		document.body.addEventListener("keydown", (e) => {
			e = e || event;
			let code = e.keyCode;
			if ((code === 9 || code === 27) && this.visible) this.visible = false;
		});
		window.addEventListener("resize", this.onWindowResize, true);
		window.addEventListener("mousedown", this.onWindowClick, true);
	},
	beforeUnmount() {
		window.clearInterval(this.updateNowInterval);
		window.removeEventListener("resize", this.onWindowResize, true);
		window.removeEventListener("mousedown", this.onWindowClick, true);
		let picker = this.$refs.picker;
		if (this.appendTo && picker && picker.$el && picker.$el.parentNode) picker.$el.parentNode.removeChild(picker.$el);
	},
	methods: {
		nextStep(fromStep) {
			const checkAndSubmit = () => {
				let minLengthToSubmit = this.range ? 2 : this.multiple ? 0 : 1;
				let passSelected = this.selectedDates.length >= minLengthToSubmit;
				if ((this.autoSubmit || this.inline) && passSelected) this.submit(!this.multiple);
			};
			if (this.simple) {
				if (this.type === "date" && fromStep === "day" || this.type === "year-month" && fromStep === "month" || this.type === "year" || this.type === "month") checkAndSubmit();
				return;
			}
			let step = this.step + 1;
			if (this.isCompactTime && this.type === "datetime") step += 1;
			if (this.steps.length <= step) checkAndSubmit();
			else {
				this.step++;
				this.goStep(this.step);
			}
		},
		goStep(i) {
			this.step = typeof i === "number" ? i : this.steps.indexOf(i);
			this.checkScroll();
		},
		checkScroll() {
			let step = this.currentStep;
			if (step === "y" || step === "m" && this.visible) setTimeout(() => {
				let container = this.$refs[{
					y: "year",
					m: "month"
				}[step]];
				if (container) {
					let selected = container.querySelector(".vpd-selected");
					if (selected && "scrollIntoView" in selected) try {
						selected.scrollIntoView({ block: "center" });
					} catch (er) {
						selected.scrollIntoView();
					}
				}
			}, 100);
		},
		nextMonth() {
			this.date = this.date.clone().xAdd(1, "month");
			this.$emit("next-month", this.date.clone());
		},
		prevMonth() {
			this.date = this.date.clone().xAdd(-1, "month");
			this.$emit("prev-month", this.date.clone());
		},
		selectDay(day) {
			if (!day.date || day.disabled) return;
			let date = this.core.moment(day.date);
			date.set({
				hour: this.time.hour(),
				minute: this.time.minute(),
				second: 0
			});
			this.date = date.clone();
			this.time = date.clone();
			if (this.range) {
				let length = this.selectedDates.length;
				if (!length || length > 1) this.selectedDates = [date.clone()];
				else {
					this.selectedDates.push(date.clone());
					this.selectedDates.sort((a, b) => a - b);
				}
			} else if (this.multiple) {
				let exists = this.selectedDates.findIndex((d) => d.valueOf() === date.valueOf());
				if (exists > -1) this.selectedDates.splice(exists, 1);
				else this.selectedDates.push(date.clone());
			} else this.selectedDates = [date.clone()];
			this.nextStep("day");
		},
		selectYear(year) {
			if (year.disabled) return;
			this.date = this.date.clone().xYear(year.xYear());
			if (["year", "year-month"].indexOf(this.type) !== -1) this.selectedDates = [this.date.clone()];
			this.$emit("year-change", year);
			this.nextStep("year");
		},
		selectMonth(month) {
			if (month.disabled) return;
			this.date = this.date.clone().xMonth(month.xMonth());
			if (["month", "year-month"].indexOf(this.type) !== -1) this.selectedDates = [this.date.clone()];
			this.$emit("month-change", month);
			this.nextStep("month");
		},
		submit(close = true) {
			let steps = this.steps.length - 1;
			let selected = this.selectedDates;
			if (this.isCompactTime && this.type === "datetime") steps -= 1;
			if (this.step < steps && !this.simple) return this.nextStep();
			if (this.hasStep("t")) {
				let t = {
					hour: this.time.hour(),
					minute: this.time.minute()
				};
				this.date = this.date.set(t).clone();
				this.selectedDates = selected.map((d) => d.set(t).clone());
			}
			if ([
				"year",
				"month",
				"year-month"
			].indexOf(this.type) !== -1) this.selectedDates = selected.map(() => this.date.clone());
			if (this.range && selected.length > 1) {
				selected[0].xStartOf("day");
				selected[1].xEndOf("day");
			}
			this.output = cloneDates(selected);
			if (close) this.visible = false;
			if (this.isDataArray) {
				this.$emit("update:modelValue", this.outputValue);
				this.$emit("change", cloneDates(selected));
			} else {
				this.$emit("update:modelValue", this.outputValue[0]);
				this.$emit("change", selected[0].clone());
			}
		},
		updateDates(payload) {
			if (!payload) payload = this.isDataArray ? [] : "";
			if (this.date.clone && payload.toString() === this.outputValue.toString()) return;
			const payloadIsArray = payload instanceof Array;
			const getDate = (input, index = 0) => {
				let date;
				let startValue = this.modelValue instanceof Array ? this.modelValue[index] : this.modelValue;
				try {
					let isObject = typeof input === "object";
					if (input instanceof Date) date = this.getMoment(input);
					else if (input && isObject && "clone" in input) date = input.clone();
					else if (null === input || !isObject) date = this.getMoment(input || startValue || this.initialValue);
					date = date.isValid() ? date : this.core.moment();
				} catch (e) {
					date = this.core.moment();
				}
				this.setTimezone(date, "in");
				return date;
			};
			if (payloadIsArray) {
				this.date = getDate(payload[0]);
				this.selectedDates = payload.map(getDate);
			} else this.date = getDate(payload);
			if (!this.hasStep("t")) this.date.set({
				hour: 0,
				minute: 0,
				second: 0
			});
			if (this.isLower(this.date)) this.date = this.minDate.clone();
			else if (this.isMore(this.date)) this.date = this.maxDate.clone();
			if (!payloadIsArray) this.selectedDates = [this.date.clone()];
			this.time = this.date.clone();
			if (this.modelValue !== "" && this.modelValue !== null && this.modelValue.length) this.output = cloneDates(this.selectedDates);
			else this.output = [];
		},
		goToday() {
			let now = this.core.moment();
			if (!this.hasStep("t")) now.set({
				hour: 0,
				minute: 0,
				second: 0
			});
			this.date = now.clone();
			this.time = now.clone();
			this.selectedDates = [now.clone()];
		},
		setType() {
			switch (this.type) {
				case "date":
					this.steps = [
						"y",
						"m",
						"d"
					];
					this.goStep("d");
					break;
				case "datetime":
					this.steps = [
						"y",
						"m",
						"d",
						"t"
					];
					this.goStep("d");
					break;
				case "year":
					this.steps = ["y"];
					this.goStep("y");
					break;
				case "month":
					this.steps = ["m"];
					this.goStep("m");
					break;
				case "time":
					this.steps = ["t"];
					this.goStep("t");
					break;
				case "year-month":
					this.steps = ["y", "m"];
					this.goStep("y");
			}
		},
		setView() {
			let s = this.shortCodes[this.view];
			if (this.hasStep(s)) this.goStep(s);
		},
		setDirection(prop, val, old) {
			this[prop] = val > old ? "direction-next" : "direction-prev";
		},
		setMinMax() {
			let min = this.getMoment(this.min), max = this.getMoment(this.max);
			this.minDate = this.min && min.isValid() ? min : false;
			this.maxDate = this.max && max.isValid() ? max : false;
		},
		getMoment(date) {
			let d, moment = this.core.moment;
			if (date instanceof Date) return moment(date);
			if (this.selfInputFormat === "x" || this.selfInputFormat === "unix") d = moment(date.toString().length === 10 ? date * 1e3 : date * 1);
			else try {
				if (date) {
					let a = moment(date, this.selfInputFormat);
					let b = moment(date, this.selfFormat);
					let now = moment(), year = now.xYear();
					if (this.type === "month") {
						a.xYear(year);
						b.xYear(year);
					} else if (this.type === "time") {
						a = now.clone().set({
							h: a.hour(),
							m: a.minute(),
							s: 0
						});
						b = a.clone();
					}
					if (a.year() !== b.year() && a.year() < 1900) d = b.clone();
					else d = a.clone();
				} else d = moment();
			} catch (er) {
				d = moment();
			}
			return d;
		},
		focus(e) {
			if (this.editable) {
				if (this.$refs.input) this.$refs.input.focus();
			} else {
				if (e) {
					e.preventDefault();
					e.stopPropagation();
					e.target.blur();
					this.visible = !this.visible;
				} else this.visible = true;
				return false;
			}
		},
		hasStep(step) {
			return this.steps.indexOf(step) !== -1;
		},
		setOutput(e) {
			if (!this.editable) return;
			let output = e.target.value.split("~").map((item) => {
				item = `${item}`.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
				if (item === "") return null;
				try {
					let date = this.core.moment(item, this.selfDisplayFormat);
					return date.isValid() ? date : null;
				} catch (er) {
					return null;
				}
			});
			this.output = output.filter((d) => d);
			this.output.sort((a, b) => a - b);
			if (this.output.length) {
				this.updateDates(cloneDates(this.output));
				this.submit();
			} else {
				this.$emit("update:modelValue", this.isDataArray ? [] : null);
				this.$emit("change", this.isDataArray ? [] : null);
			}
		},
		wrapperClick() {
			this.visible = false;
			if (this.wrapperSubmit && this.canSubmit) this.submit();
		},
		applyDevFn(fn, k) {
			let result = false;
			let args = Array.prototype.splice.call(arguments, 2);
			try {
				args.push({
					y: "year",
					m: "month",
					d: "day",
					t: "time"
				}[k]);
				result = fn.apply(null, args);
			} catch (er) {
				console.error(er);
			}
			return result;
		},
		checkDisable(item, value) {
			let thisDisable = this.disable;
			if (!thisDisable) return false;
			let type = typeof thisDisable;
			let checkString = (filter, str, date) => {
				if (filter instanceof RegExp) return filter.test(str);
				if (filter === str) return true;
				if (item === "d") {
					let length = filter.length;
					return str.substr(0, length) === filter || date.clone().locale("en").format("dddd") === filter;
				}
				return false;
			};
			let check = (date, dateFormatted) => {
				let matches = false;
				if (type === "function") return this.applyDevFn(thisDisable, item, dateFormatted, date.clone());
				else if (Object.prototype.toString.call(thisDisable) === "[object Array]") {
					let ii = thisDisable.length;
					for (let i = 0; i < ii; i++) {
						matches = checkString(thisDisable[i], dateFormatted, date);
						if (matches) break;
					}
					return matches;
				} else if (type === "string" || thisDisable instanceof RegExp) return checkString(thisDisable, dateFormatted, date);
				return false;
			};
			let format = this.selfFormat;
			if (item === "y") value = this.core.moment(value, "jYYYY");
			else if (item === "d") format = format.replace(/(H(H?))|(h(h?))?(:?)m(m?)(:?)(s(s?))?/g, "");
			return check(value, value.format(format));
		},
		getHighlights(item, value) {
			let highlight = this.highlight;
			if (!highlight || typeof highlight !== "function") return {};
			if (item === "y") value = this.core.moment(value, "jYYYY");
			return this.applyDevFn(highlight, item, value.format(this.selfFormat), value.clone()) || {};
		},
		isLower(date) {
			return this.minDate && date < this.minDate;
		},
		isMore(date) {
			return this.maxDate && date > this.maxDate;
		},
		clearValue() {
			if (this.disabled) return;
			this.output = [];
			this.$emit("update:modelValue", this.isDataArray ? [] : "");
			this.$emit("change", this.isDataArray ? [] : null);
		},
		setLocale(locale) {
			this.core.changeLocale(locale, this.localeConfig);
			this.date = this.date.clone();
			this.selectedDates = this.selectedDates.map((d) => d.clone());
		},
		setTimezone(date, mode) {
			let tz = this.timezone;
			if (tz) {
				let r = mode === "in" ? 1 : -1;
				let moment = this.core.momentBase;
				if (typeof tz === "string") {
					let t = moment().utc().format("YYYY-MM-DDTHH:mm:ss") + tz;
					date.add(moment.parseZone(t).utcOffset() * r, "minutes");
				} else if (typeof tz === "boolean" && tz) date.subtract(new Date(date).getTimezoneOffset() * r, "minutes");
				else if (typeof tz === "function") date = tz(date, mode, this);
			}
			return date.clone();
		},
		convertToLocaleNumber(value) {
			if (this.convertNumbers && this.locale === "fa") return `${value}`.replace(/\d+/g, function(digit) {
				let ret = "";
				for (let i = 0, len = digit.length; i < len; i++) ret += String.fromCharCode(digit.charCodeAt(i) + 1728);
				return ret;
			});
			return value;
		},
		onWindowResize() {
			this.windowWidth = window.innerWidth;
		},
		onWindowClick(event) {
			if (this.isPopover && this.$refs.picker && this.$refs.inputGroup) {
				let isOnPicker = this.$refs.picker.contains(event.target);
				let isOnInput = this.$refs.inputGroup.contains(event.target);
				if (isOnPicker) event.preventDefault();
				if (!isOnPicker && !isOnInput) setTimeout(() => this.visible = false, this.editable ? 500 : 0);
			}
		},
		setPlacement() {
			if (!this.isPopover) return;
			if ([
				"top-left",
				"top-right",
				"bottom-right",
				"bottom-left",
				"left-top",
				"left-bottom",
				"right-top",
				"right-bottom"
			].indexOf(this.popover) !== -1) return this.popoverPlace = this.popover;
			this.popoverPlace = "bottom-right";
			this.$nextTick(() => {
				let placement = ["bottom", "right"];
				let rect = this.$refs.container.getBoundingClientRect();
				let left = rect.left;
				if (window.innerHeight - rect.bottom <= 0) placement[0] = "top";
				if (left <= 0) placement[1] = "left";
				this.popoverPlace = placement.join("-");
			});
		}
	},
	install(Vue, options) {
		let component = this;
		options = extend({
			name: "data-picker",
			props: {}
		}, options);
		for (let k in options.props) if (component.props.hasOwnProperty(k)) component.props[k].default = options.props[k];
		Vue.component(options.name, component);
	}
};
var _hoisted_1 = [
	"data-type",
	"data-placement",
	"data-locale",
	"data-locale-dir"
];
var _hoisted_2 = ["for"];
var _hoisted_3 = ["textContent"];
var _hoisted_4 = [
	"id",
	"name",
	"placeholder",
	"value",
	"disabled"
];
var _hoisted_5 = ["name", "value"];
var _hoisted_6 = ["name", "value"];
var _hoisted_7 = ["data-type"];
var _hoisted_8 = {
	ref: "container",
	class: "vpd-container"
};
var _hoisted_9 = { class: "vpd-content" };
var _hoisted_10 = { class: "vpd-body" };
var _hoisted_11 = ["title", "disabled"];
var _hoisted_12 = ["title", "disabled"];
var _hoisted_13 = ["textContent"];
var _hoisted_14 = { class: "vpd-clearfix vpd-week" };
var _hoisted_15 = [
	"disabled",
	"onClick",
	"onMouseover"
];
var _hoisted_16 = ["textContent"];
var _hoisted_17 = {
	key: 1,
	style: { "height": "250px" }
};
var _hoisted_18 = { class: "vpd-addon-list-content" };
var _hoisted_19 = ["disabled", "onClick"];
var _hoisted_20 = { class: "vpd-addon-list-content" };
var _hoisted_21 = ["disabled", "onClick"];
var _hoisted_22 = { key: 0 };
var _hoisted_23 = {
	key: 3,
	class: "vpd-actions"
};
var _hoisted_24 = ["disabled", "textContent"];
var _hoisted_25 = ["textContent"];
var _hoisted_26 = ["textContent"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_time_icon = resolveComponent("time-icon");
	const _component_calendar_icon = resolveComponent("calendar-icon");
	const _component_locale_change = resolveComponent("locale-change");
	const _component_simple_mode = resolveComponent("simple-mode");
	const _component_arrow = resolveComponent("arrow");
	const _component_time_section = resolveComponent("time-section");
	return openBlock(), createElementBlock("span", {
		class: normalizeClass(["vpd-main", { "vpd-is-popover": $options.isPopover }]),
		"data-type": $props.type,
		"data-placement": $data.popoverPlace,
		"data-locale": $data.localeData.name,
		"data-locale-dir": $data.localeData.config.dir
	}, [!$options.customInputElement ? (openBlock(), createElementBlock("span", {
		key: 0,
		ref: "inputGroup",
		class: normalizeClass(["vpd-input-group", { "vpd-disabled": $props.disabled }])
	}, [
		createElementVNode("label", {
			for: $options.id,
			class: "vpd-icon-btn",
			style: normalizeStyle({ "background-color": $props.color }),
			onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $data.visible = !$data.visible, ["prevent", "stop"]))
		}, [renderSlot(_ctx.$slots, "label", {}, () => [$props.type === "time" ? (openBlock(), createBlock(_component_time_icon, {
			key: 0,
			width: "16px",
			height: "16px"
		})) : (openBlock(), createBlock(_component_calendar_icon, {
			key: 1,
			width: "16px",
			height: "16px"
		})), $props.label ? (openBlock(), createElementBlock("span", {
			key: 2,
			textContent: toDisplayString($props.label)
		}, null, 8, _hoisted_3)) : createCommentVNode("", true)])], 12, _hoisted_2),
		createElementVNode("input", mergeProps({
			id: $options.id,
			ref: "input",
			type: "text",
			name: $props.name,
			class: [$props.inputClass, { "vpd-is-editable": $props.editable }],
			placeholder: $props.placeholder,
			value: $options.displayValue,
			disabled: $props.disabled
		}, $props.inputAttrs, {
			onFocus: _cache[1] || (_cache[1] = (...args) => $options.focus && $options.focus(...args)),
			onBlur: _cache[2] || (_cache[2] = (...args) => $options.setOutput && $options.setOutput(...args)),
			onKeydown: _cache[3] || (_cache[3] = withKeys((...args) => $options.setOutput && $options.setOutput(...args), ["enter"]))
		}), null, 16, _hoisted_4),
		$props.altName ? (openBlock(), createElementBlock("input", {
			key: 0,
			type: "hidden",
			name: $props.altName,
			value: $options.altFormatted
		}, null, 8, _hoisted_5)) : createCommentVNode("", true),
		$props.clearable && !$props.disabled && $options.displayValue ? (openBlock(), createElementBlock("i", {
			key: 1,
			class: "vpd-clear-btn",
			onClick: _cache[4] || (_cache[4] = (...args) => $options.clearValue && $options.clearValue(...args))
		}, [renderSlot(_ctx.$slots, "clear-btn", normalizeProps(guardReactiveProps({ vm: $options.vm })), () => [_cache[17] || (_cache[17] = createTextVNode("x", -1))])])) : createCommentVNode("", true)
	], 2)) : $props.altName ? (openBlock(), createElementBlock("input", {
		key: 1,
		type: "hidden",
		name: $props.altName,
		value: $options.altFormatted
	}, null, 8, _hoisted_6)) : createCommentVNode("", true), createVNode(Transition, { name: $options.isPopover ? "" : "vpd-fade-scale" }, {
		default: withCtx(() => [$data.visible ? (openBlock(), createElementBlock("div", {
			key: 0,
			ref: "picker",
			class: normalizeClass([
				"vpd-wrapper",
				`vpd-dir-${$data.localeData.config.dir}`,
				{
					"vpd-is-range": $props.range,
					"vpd-is-inline": $props.inline,
					"vpd-is-multiple": $props.multiple,
					"vpd-compact-time": $options.isCompactTime,
					"vpd-no-footer": $props.autoSubmit && !$options.hasStep("t")
				}
			]),
			"data-type": $props.type,
			onClick: _cache[16] || (_cache[16] = withModifiers((...args) => $options.wrapperClick && $options.wrapperClick(...args), ["self"]))
		}, [createElementVNode("div", _hoisted_8, [createElementVNode("div", _hoisted_9, [!$props.simple ? (openBlock(), createElementBlock("div", {
			key: 0,
			class: "vpd-header",
			style: normalizeStyle({ "background-color": $props.color })
		}, [
			[
				"date",
				"datetime",
				"year-month"
			].indexOf($props.type) !== -1 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(["vpd-year-label", $data.directionClass]),
				onClick: _cache[5] || (_cache[5] = ($event) => $options.goStep("y"))
			}, [createVNode(Transition, { name: "slideY" }, {
				default: withCtx(() => [(openBlock(), createElementBlock("span", { key: $options.selectedDate.xYear() }, [renderSlot(_ctx.$slots, "header-year", normalizeProps(guardReactiveProps({
					vm: $options.vm,
					selectedDate: $options.selectedDate
				})), () => [createTextVNode(toDisplayString($options.convertToLocaleNumber($options.selectedDate.xYear())), 1)])]))]),
				_: 3
			})], 2)) : createCommentVNode("", true),
			$props.type !== "year-month" ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(["vpd-date", $data.directionClass])
			}, [createVNode(Transition, { name: "slideY" }, {
				default: withCtx(() => [(openBlock(), createElementBlock("span", { key: $options.formattedDate }, [renderSlot(_ctx.$slots, "header-date", normalizeProps(guardReactiveProps({
					vm: $options.vm,
					formattedDate: $options.formattedDate
				})), () => [createTextVNode(toDisplayString($options.convertToLocaleNumber($options.formattedDate)), 1)])]))]),
				_: 3
			})], 2)) : createCommentVNode("", true),
			$data.locales.length > 1 ? renderSlot(_ctx.$slots, "locales", normalizeProps(guardReactiveProps({
				vm: $options.vm,
				locales: $data.locales,
				setLocale: $options.setLocale
			})), () => [createVNode(_component_locale_change, {
				"locale-data": $data.localeData,
				core: $data.core,
				locales: $data.locales,
				class: "vpd-locales",
				onChange: $options.setLocale
			}, null, 8, [
				"locale-data",
				"core",
				"locales",
				"onChange"
			])], void 0, 2) : createCommentVNode("", true)
		], 4)) : createCommentVNode("", true), createElementVNode("div", _hoisted_10, [
			$props.simple ? (openBlock(), createBlock(_component_simple_mode, {
				key: 0,
				lang: $options.lang,
				core: $data.core,
				range: $props.range,
				color: $props.color,
				locales: $data.locales,
				visible: $data.visible,
				multiple: $props.multiple,
				years: $options.years,
				months: $options.months,
				"month-days": $options.monthDays,
				"has-step": $options.hasStep,
				"selected-dates": $data.selectedDates,
				"formatted-date": $options.formattedDate,
				"set-locale": $options.setLocale,
				"convert-to-locale-number": $options.convertToLocaleNumber,
				onSelectYear: $options.selectYear,
				onSelectMonth: $options.selectMonth,
				onSelectDay: $options.selectDay
			}, {
				"header-date": withCtx((slotData) => [renderSlot(_ctx.$slots, "header-date", normalizeProps(guardReactiveProps(slotData)))]),
				locales: withCtx((slotData) => [renderSlot(_ctx.$slots, "locales", normalizeProps(guardReactiveProps(slotData)))]),
				"year-item": withCtx((slotData) => [renderSlot(_ctx.$slots, "year-item", normalizeProps(guardReactiveProps(slotData)))]),
				"month-item": withCtx((slotData) => [renderSlot(_ctx.$slots, "month-item", normalizeProps(guardReactiveProps(slotData)))]),
				"day-item": withCtx((slotData) => [renderSlot(_ctx.$slots, "day-item", normalizeProps(guardReactiveProps(slotData)))]),
				_: 3
			}, 8, [
				"lang",
				"core",
				"range",
				"color",
				"locales",
				"visible",
				"multiple",
				"years",
				"months",
				"month-days",
				"has-step",
				"selected-dates",
				"formatted-date",
				"set-locale",
				"convert-to-locale-number",
				"onSelectYear",
				"onSelectMonth",
				"onSelectDay"
			])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				$options.hasStep("d") ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createElementVNode("div", { class: normalizeClass(["vpd-controls", $data.directionClassDate]) }, [
					createElementVNode("button", {
						type: "button",
						class: "vpd-next",
						title: $options.lang.nextMonth,
						disabled: $options.nextMonthDisabled,
						onClick: _cache[6] || (_cache[6] = (...args) => $options.nextMonth && $options.nextMonth(...args))
					}, [renderSlot(_ctx.$slots, "next-month", {}, () => [createVNode(_component_arrow, {
						width: "10",
						fill: "#000",
						direction: "right",
						style: { "vertical-align": "middle" }
					})])], 8, _hoisted_11),
					createElementVNode("button", {
						type: "button",
						class: "vpd-prev",
						title: $options.lang.prevMonth,
						disabled: $options.prevMonthDisabled,
						onClick: _cache[7] || (_cache[7] = (...args) => $options.prevMonth && $options.prevMonth(...args))
					}, [renderSlot(_ctx.$slots, "prev-month", {}, () => [createVNode(_component_arrow, {
						width: "10",
						fill: "#000",
						direction: "left",
						style: { "vertical-align": "middle" }
					})])], 8, _hoisted_12),
					createVNode(Transition, { name: "slideX" }, {
						default: withCtx(() => [(openBlock(), createElementBlock("div", {
							key: $data.date.xMonth(),
							class: "vpd-month-label",
							onClick: _cache[8] || (_cache[8] = ($event) => $options.goStep("m"))
						}, [renderSlot(_ctx.$slots, "month-name", normalizeProps(guardReactiveProps({
							vm: $options.vm,
							date: $data.date,
							color: $props.color
						})), () => [createElementVNode("span", {
							style: normalizeStyle({
								"border-color": $props.color,
								color: $props.color
							}),
							textContent: toDisplayString($options.convertToLocaleNumber($data.date.xFormat("jMMMM jYYYY")))
						}, null, 12, _hoisted_13)])]))]),
						_: 3
					})
				], 2), createElementVNode("div", { class: normalizeClass(["vpd-clearfix", ["vpd-month", $data.directionClassDate]]) }, [createElementVNode("div", _hoisted_14, [(openBlock(true), createElementBlock(Fragment, null, renderList($options.weekDays, (day, i) => {
					return openBlock(), createElementBlock("div", {
						key: `${i}-${day}`,
						class: "vpd-weekday"
					}, [renderSlot(_ctx.$slots, "weekday", mergeProps({ ref_for: true }, {
						vm: $options.vm,
						day
					}), () => [createTextVNode(toDisplayString(day), 1)])]);
				}), 128))]), createElementVNode("div", {
					class: "vpd-days",
					style: normalizeStyle({ height: $options.month.length * 40 + "px" }),
					onMouseleave: _cache[9] || (_cache[9] = ($event) => $data.hoveredItem = null)
				}, [createVNode(Transition, {
					name: "slideX",
					class: normalizeClass($data.directionClassDate)
				}, {
					default: withCtx(() => [(openBlock(), createElementBlock("div", { key: $data.date.xMonth() }, [(openBlock(true), createElementBlock(Fragment, null, renderList($options.monthDays, (m, mi) => {
						return openBlock(), createElementBlock("div", {
							key: mi,
							class: "vpd-clearfix"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(m, (day, di) => {
							return openBlock(), createElementBlock("div", mergeProps({
								key: di,
								class: [
									"vpd-day",
									{
										"vpd-selected": day.selected,
										"vpd-empty": day.date == null,
										"vpd-range-first": day.isFirst,
										"vpd-range-last": day.isLast,
										"vpd-range-between": day.isBetween,
										"vpd-range-hover": $data.hoveredItem && day.isHover
									},
									day.attributes.class
								]
							}, { ref_for: true }, day.attributes, {
								disabled: day.disabled,
								onClick: ($event) => $options.selectDay(day),
								onMouseover: ($event) => $data.hoveredItem = day.date
							}), [day.date != null ? renderSlot(_ctx.$slots, "day-item", mergeProps({ ref_for: true }, {
								vm: $options.vm,
								day,
								color: $props.color
							}), () => [createElementVNode("span", {
								class: "vpd-day-effect",
								style: normalizeStyle({ "background-color": $props.color })
							}, null, 4), createElementVNode("span", {
								class: "vpd-day-text",
								textContent: toDisplayString($options.convertToLocaleNumber(day.formatted))
							}, null, 8, _hoisted_16)], void 0, 0) : createCommentVNode("", true)], 16, _hoisted_15);
						}), 128))]);
					}), 128))]))]),
					_: 3
				}, 8, ["class"])], 36)], 2)], 64)) : (openBlock(), createElementBlock("div", _hoisted_17)),
				createVNode(Transition, { name: "fade" }, {
					default: withCtx(() => [$options.hasStep("y") ? withDirectives((openBlock(), createElementBlock("div", {
						key: 0,
						ref: "year",
						class: normalizeClass(["vpd-addon-list", { "vpd-can-close": $data.steps.length > 1 }])
					}, [createElementVNode("div", _hoisted_18, [(openBlock(true), createElementBlock(Fragment, null, renderList($options.years, (year, yi) => {
						return openBlock(), createElementBlock("div", mergeProps({ key: yi }, { ref_for: true }, year.attributes, {
							class: [
								"vpd-addon-list-item",
								{ "vpd-selected": year.selected },
								year.attributes.class
							],
							style: [{ color: year.selected ? $props.color : "" }, year.attributes.style],
							disabled: year.disabled,
							onClick: ($event) => $options.selectYear(year)
						}), [renderSlot(_ctx.$slots, "year-item", mergeProps({ ref_for: true }, {
							vm: $options.vm,
							year,
							color: $props.color
						}), () => [createTextVNode(toDisplayString($options.convertToLocaleNumber(year.xFormat("jYYYY"))), 1)])], 16, _hoisted_19);
					}), 128))])], 2)), [[vShow, $options.currentStep === "y"]]) : createCommentVNode("", true)]),
					_: 3
				}),
				createVNode(Transition, { name: "fade" }, {
					default: withCtx(() => [$options.hasStep("m") ? withDirectives((openBlock(), createElementBlock("div", {
						key: 0,
						ref: "month",
						class: normalizeClass(["vpd-addon-list vpd-month-list", { "vpd-can-close": $data.steps.length > 1 }])
					}, [createElementVNode("div", _hoisted_20, [(openBlock(true), createElementBlock(Fragment, null, renderList($options.months, (monthItem, mi) => {
						return openBlock(), createElementBlock("div", mergeProps({ key: mi }, { ref_for: true }, monthItem.attributes, {
							class: [
								"vpd-addon-list-item",
								{ "vpd-selected": monthItem.selected },
								monthItem.attributes.class
							],
							disabled: monthItem.disabled,
							style: [{ color: monthItem.selected ? $props.color : "" }, monthItem.attributes.style],
							onClick: ($event) => $options.selectMonth(monthItem)
						}), [renderSlot(_ctx.$slots, "month-item", mergeProps({ ref_for: true }, {
							vm: $options.vm,
							monthItem,
							color: $props.color
						}), () => [createTextVNode(toDisplayString(monthItem.xFormat("jMMMM")), 1)])], 16, _hoisted_21);
					}), 128))])], 2)), [[vShow, $options.currentStep === "m"]]) : createCommentVNode("", true)]),
					_: 3
				}),
				createVNode(Transition, { name: "fade" }, {
					default: withCtx(() => [$data.steps.length > 1 && $options.currentStep !== "d" && $options.hasStep("d") ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: "vpd-close-addon",
						onClick: _cache[10] || (_cache[10] = ($event) => $options.goStep("d"))
					}, [renderSlot(_ctx.$slots, "close-btn", normalizeProps(guardReactiveProps({ vm: $options.vm })), () => [_cache[18] || (_cache[18] = createTextVNode("x", -1))])])) : createCommentVNode("", true)]),
					_: 3
				})
			], 64)),
			createVNode(Transition, { name: "fade" }, {
				default: withCtx(() => [$options.hasStep("t") ? withDirectives((openBlock(), createBlock(_component_time_section, {
					key: 0,
					ref: "time",
					date: $data.date,
					"onUpdate:date": _cache[11] || (_cache[11] = ($event) => $data.date = $event),
					time: $data.time,
					"onUpdate:time": _cache[12] || (_cache[12] = ($event) => $data.time = $event),
					"is-more": $options.isMore,
					"is-lower": $options.isLower,
					"min-date": $data.minDate,
					"max-date": $data.maxDate,
					"jump-minute": $props.jumpMinute,
					"round-minute": $props.roundMinute,
					"get-highlights": $options.getHighlights,
					"selected-dates": $data.selectedDates,
					"convert-to-locale-number": $options.convertToLocaleNumber
				}, null, 8, [
					"date",
					"time",
					"is-more",
					"is-lower",
					"min-date",
					"max-date",
					"jump-minute",
					"round-minute",
					"get-highlights",
					"selected-dates",
					"convert-to-locale-number"
				])), [[vShow, $options.currentStep === "t"]]) : createCommentVNode("", true)]),
				_: 1
			}),
			$props.autoSubmit && !$options.hasStep("t") ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [!$props.simple ? (openBlock(), createElementBlock("br", _hoisted_22)) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock("div", _hoisted_23, [
				renderSlot(_ctx.$slots, "submit-btn", normalizeProps(guardReactiveProps({
					vm: $options.vm,
					canSubmit: $options.canSubmit,
					color: $props.color,
					submit: $options.submit,
					lang: $options.lang
				})), () => [createElementVNode("button", {
					type: "button",
					disabled: !$options.canSubmit,
					style: normalizeStyle({ color: $props.color }),
					onClick: _cache[13] || (_cache[13] = (...args) => $options.submit && $options.submit(...args)),
					textContent: toDisplayString($options.lang.submit)
				}, null, 12, _hoisted_24)]),
				!$props.inline ? renderSlot(_ctx.$slots, "cancel-btn", normalizeProps(guardReactiveProps({
					vm: $options.vm,
					color: $props.color,
					lang: $options.lang
				})), () => [createElementVNode("button", {
					type: "button",
					style: normalizeStyle({ color: $props.color }),
					onClick: _cache[14] || (_cache[14] = ($event) => $data.visible = false),
					textContent: toDisplayString($options.lang.cancel)
				}, null, 12, _hoisted_25)], void 0, 0) : createCommentVNode("", true),
				$props.showNowBtn && $options.canGoToday ? renderSlot(_ctx.$slots, "now-btn", normalizeProps(guardReactiveProps({
					vm: $options.vm,
					color: $props.color,
					goToday: $options.goToday,
					lang: $options.lang
				})), () => [createElementVNode("button", {
					type: "button",
					style: normalizeStyle({ color: $props.color }),
					onClick: _cache[15] || (_cache[15] = (...args) => $options.goToday && $options.goToday(...args)),
					textContent: toDisplayString($options.lang.now)
				}, null, 12, _hoisted_26)], void 0, 1) : createCommentVNode("", true)
			]))
		])])], 512)], 10, _hoisted_7)) : createCommentVNode("", true)]),
		_: 3
	}, 8, ["name"])], 10, _hoisted_1);
}
var Vue3PersianDatetimePicker_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { Vue3PersianDatetimePicker_default as default };
