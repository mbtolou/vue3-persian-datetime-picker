import { clone } from './utils.js'

/**
 * @deprecated Prefer Composition API / defineModel in Vue 3.4+
 * Kept for any external consumers.
 */
export const modelMixin = {
  props: {
    modelValue: { type: [String, Number, Array, Object, Boolean], default: '' }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      selfValue: ''
    }
  },
  watch: {
    modelValue: {
      handler(val) {
        if (this.selfValue !== val) this.selfValue = val
      },
      immediate: true,
      deep: true
    },
    selfValue(val) {
      if (val !== this.modelValue) this.$emit('update:modelValue', val)
    }
  }
}

/**
 * @deprecated Use usePopupRoute composable instead.
 */
export const popupRouteChanger = {
  data() {
    return {
      routerQueryName: null
    }
  },
  mounted() {
    this.initRouter()
  },
  methods: {
    initRouter() {
      if (typeof window === 'undefined') return

      const isSet = (prop) => prop || typeof prop === 'string'
      const useRouter = this.useRouter

      if (!isSet(useRouter) || this.isPopover || this.inline || !this.$router)
        return

      this.$watch('visible', this.onVisibleChange)
      this.$watch(() => this.$route.query, this.onRouteChange, {
        deep: true,
        immediate: true
      })

      this.routerQueryName =
        typeof useRouter === 'string' && useRouter ? useRouter : this.id
    },
    onVisibleChange(visible) {
      if (!this.$router || !this.$route) return
      const currentRoute = this.$route
      const query = clone(currentRoute.query || {})
      if (visible) {
        query[this.routerQueryName] = 'active'
        this.$router.push({ query })
      } else if (query[this.routerQueryName]) {
        this.$router.back()
      }
    },
    onRouteChange() {
      if (!this.$route) return
      const visible = !!this.$route.query[this.routerQueryName]
      if (visible && this.disabled) return
      this.visible = visible
    }
  }
}
