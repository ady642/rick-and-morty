import state from '@/modules/Search/store/state'
import getters from '@/modules/Search/store/getters'
import mutations from '@/modules/Search/store/mutations'
import actions from '@/modules/Search/store/actions'

export const searchModuleName = (name: string): string => {
  return `search/${name}`
}

const searchStoreModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default searchStoreModule
