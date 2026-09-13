<template>
  <div class="vpd-time-column" :class="classFastCounter">
    <btn
      class="vpd-up-arrow-btn"
      @update="update(1)"
      @fastUpdate="fastUpdateCounter"
    >
      <arrow width="20" direction="up" />
    </btn>
    <div
      class="vpd-counter"
      :class="[directionClass, { 'vpd-is-focused': isInputFocused }]"
      @mousewheel.stop.prevent="wheelUpdate($event)"
      @DOMMouseScroll.stop.prevent="wheelUpdate($event)"
    >
      <input
        ref="input"
        v-model="inputValue"
        type="tel"
        :maxlength="selfValue.length"
        :class="{ 'is-empty': !inputValue.length }"
        @input="onInputChange"
        @focus="isInputFocused = true"
        @blur="isInputFocused = false"
        @keydown.up.prevent="update(1)"
        @keydown.down.prevent="update(-1)"
        @keydown.enter.prevent="onInputSubmit"
      />
      <div
        v-for="(item, i) in modelValue.toString().split('')"
        :key="`h__${i}`"
        class="vpd-counter-item"
        v-bind="attributes"
      >
        <Transition name="slideY">
          <span
            :key="`${item}__${i}_h`"
            :style="{
              transition: 'all ' + transitionSpeed + 'ms ease-in-out'
            }"
            v-text="formatter(item)"
          />
        </Transition>
      </div>
    </div>
    <btn
      class="vpd-down-arrow-btn"
      @update="update(-1)"
      @fastUpdate="fastUpdateCounter"
    >
      <arrow width="20" direction="down" />
    </btn>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import Btn from '../Btn.vue'
import Arrow from '../Arrow.vue'

const modelValue = defineModel({ type: [String, Number], default: '' })
const props = defineProps({
  jump: { type: Number, default: 1 },
  formatter: { type: Function, default: (v) => v },
  attributes: { type: Object, default: () => ({}) }
})
const emit = defineEmits(['filled'])

const directionClass = ref('direction-next')
const classFastCounter = ref('')
const transitionSpeed = ref(300)
const timeoutId = ref(null)
const lastUpdate = ref(Date.now())
const isInputFocused = ref(false)
const inputValue = ref('')
const input = ref(null)
const selfValue = ref(String(modelValue.value ?? ''))

watch(
  modelValue,
  (val) => {
    const str = String(val ?? '')
    if (str !== selfValue.value) selfValue.value = str
  },
  { immediate: true }
)

watch(
  selfValue,
  (val, old) => {
    if (old !== undefined && old !== '') setDirection(val, old)
    inputValue.value = String(val)
    nextTick(() => {
      if (String(modelValue.value) !== String(selfValue.value)) {
        modelValue.value = selfValue.value
      }
    })
  },
  { immediate: true }
)

watch(isInputFocused, (focused) => {
  if (focused) {
    inputValue.value = String(selfValue.value)
    nextTick(() => input.value?.select?.())
  } else if (inputValue.value) {
    onInputSubmit()
  }
})

function setDirection(val, old) {
  if (+val === +old) return
  directionClass.value = +val > +old ? 'direction-next' : 'direction-prev'
}

function update(value) {
  selfValue.value = String(+selfValue.value + value * props.jump)
  const now = Date.now()
  const def = now - lastUpdate.value
  if (20 < def && def < 300) transitionSpeed.value = def
  lastUpdate.value = now
  if (typeof window !== 'undefined') {
    window.clearTimeout(timeoutId.value)
    timeoutId.value = window.setTimeout(() => {
      transitionSpeed.value = 300
    }, 300)
  }
}

function wheelUpdate(e) {
  const delta = props.jump
  const goUp = (e.wheelDeltaY || -e.detail) > 0
  update(goUp ? delta : -delta)
}

function fastUpdateCounter(e) {
  if (!e) transitionSpeed.value = 300
  classFastCounter.value = e ? 'fast-updating' : ''
}

function onInputSubmit() {
  selfValue.value = inputValue.value
  transitionSpeed.value = 0
}

function onInputChange(event) {
  if (event.target.value.length >= String(selfValue.value).length) {
    emit('filled')
  }
}
</script>
