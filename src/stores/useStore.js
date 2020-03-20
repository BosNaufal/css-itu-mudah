import { inject } from '@vue/composition-api'
import { computed } from '@vue/composition-api'

export const useStore = (defaultValue = null) => {
  return inject("store", defaultValue)
}

export const useDispatch = () => {
  const store = inject("store")
  return store.dispatch
}

export const useGetter = (getterName) => {
  const store = inject("store")
  return computed(() => store.getters[getterName])
}


