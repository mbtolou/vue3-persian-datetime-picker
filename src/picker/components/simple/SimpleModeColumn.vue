<template>
  <div
    class="vpd-column"
    :class="{ 'vpd-is-mounted': isMounted }"
    @mousewheel.stop
  >
    <div v-if="label" class="vpd-column-header" v-text="label" />
    <div ref="content" class="vpd-column-content"><slot /></div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'
import { scrollIntoCenter } from '../../modules/utils.js'

const props = defineProps({
  label: { type: String, default: null },
  locale: { type: String, default: null },
  value: { type: [String, Number], default: null }
})

const isMounted = ref(false)
const content = ref(null)

function scrollIntoView(duration) {
  try {
    isMounted.value = false
    nextTick(() => {
      const el = content.value
      if (!el) return
      const activeElement =
        el.querySelector('.vpd-selected') ||
        el.querySelector('.vpd-addon-list-item:not([disabled])')
      if (activeElement) {
        scrollIntoCenter(activeElement, duration, () => {
          isMounted.value = true
        })
      }
    })
  } catch (e) {
    console.warn(e)
  }
}

watch(() => props.value, () => scrollIntoView(200))
watch(() => props.locale, () => scrollIntoView(200))
onMounted(() => scrollIntoView(0))
</script>
