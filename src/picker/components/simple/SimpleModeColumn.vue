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

<script>
import { scrollIntoCenter } from '../../modules/utils.js'

export default {
  name: 'SimpleModeColumn',
  props: {
    label: { type: String, default: null },
    locale: { type: String, default: null },
    value: { type: [String, Number], default: null }
  },
  data() {
    return {
      isMounted: false
    }
  },
  watch: {
    value() {
      this.scrollIntoView(200)
    },
    locale() {
      this.scrollIntoView(200)
    }
  },
  mounted() {
    this.scrollIntoView(0)
  },
  methods: {
    scrollIntoView(duration) {
      try {
        this.isMounted = false
        this.$nextTick(() => {
          const activeElement =
            this.$refs.content.querySelector('.vpd-selected') ||
            this.$refs.content.querySelector(
              '.vpd-addon-list-item:not([disabled])'
            )
          if (activeElement)
            scrollIntoCenter(activeElement, duration, () => {
              this.isMounted = true
            })
        })
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
</script>
