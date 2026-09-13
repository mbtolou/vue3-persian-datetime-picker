<template>
  <ul>
    <li @click="$emit('change', activeItem)" v-text="label" />
  </ul>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  locales: { type: Array, default: () => [] },
  core: { type: Object, default: () => ({}) },
  localeData: { type: Object, default: () => ({}) }
})

defineEmits(['change'])

const activeItem = computed(() => {
  let activeIndex = props.locales.indexOf(props.localeData.name) + 1
  if (activeIndex === props.locales.length) activeIndex = 0
  return String(props.locales[activeIndex])
})

const label = computed(() => {
  return (
    props.core.localesConfig?.[activeItem.value]?.lang?.label ||
    activeItem.value.toUpperCase()
  )
})
</script>
