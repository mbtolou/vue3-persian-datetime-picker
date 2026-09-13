import { ref, watch, onMounted, getCurrentInstance } from 'vue'
import { clone } from '../modules/utils.js'

/**
 * Sync picker visibility with Vue Router query (optional).
 */
export function usePopupRoute({ visible, disabled, inline, isPopover, useRouter, id }) {
  const routerQueryName = ref(null)
  const instance = getCurrentInstance()

  function initRouter() {
    if (typeof window === 'undefined') return
    const proxy = instance?.proxy
    const router = proxy?.$router
    const route = proxy?.$route
    if (!router || !route) return

    const isSet = (prop) => prop || typeof prop === 'string'
    if (!isSet(useRouter.value) || isPopover.value || inline.value) return

    routerQueryName.value =
      typeof useRouter.value === 'string' && useRouter.value
        ? useRouter.value
        : id.value

    watch(visible, (v) => {
      const query = clone(route.query || {})
      if (v) {
        query[routerQueryName.value] = 'active'
        router.push({ query })
      } else if (query[routerQueryName.value]) {
        router.back()
      }
    })

    watch(
      () => route.query,
      () => {
        const v = !!route.query[routerQueryName.value]
        if (v && disabled.value) return
        visible.value = v
      },
      { deep: true, immediate: true }
    )
  }

  onMounted(initRouter)

  return { routerQueryName }
}
