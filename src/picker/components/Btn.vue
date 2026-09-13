<template>
  <div @mousedown="down" @touchstart="down" @mouseup="click">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['update', 'fastUpdate'])

const interval = ref(null)
const timeout = ref(null)
const intervalDelay = ref(150)

const up = () => {
  if (typeof window === 'undefined') return
  window.clearTimeout(timeout.value)
  window.clearInterval(interval.value)
  emit('fastUpdate', false)
  timeout.value = null
  interval.value = null
  intervalDelay.value = 150
}

const onDocMouseUp = () => {
  if (timeout.value || interval.value) up()
}

onMounted(() => {
  if (typeof document === 'undefined') return
  document.addEventListener('mouseup', onDocMouseUp)
  document.addEventListener('touchend', onDocMouseUp)
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.removeEventListener('mouseup', onDocMouseUp)
  document.removeEventListener('touchend', onDocMouseUp)
  up()
})

const click = () => {
  if (!interval.value) emit('update', 1)
}

const intervalFn = () => {
  if (typeof window === 'undefined') return
  interval.value = window.setTimeout(() => {
    emit('update', 1)
    emit('fastUpdate', true)
    intervalFn()
    if (intervalDelay.value > 30) intervalDelay.value -= 3
  }, intervalDelay.value)
}

const down = () => {
  if (typeof window === 'undefined') return
  window.clearTimeout(timeout.value)
  window.clearInterval(interval.value)
  interval.value = null
  timeout.value = window.setTimeout(() => intervalFn(), 600)
}
</script>
