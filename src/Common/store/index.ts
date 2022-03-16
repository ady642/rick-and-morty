import { createStore } from 'vuex'
import search from "@/modules/Search/store";
import {SearchModuleState} from "@/modules/Search/store/state";

export type RootState = {
  search: SearchModuleState
}

export default createStore<RootState>({
  modules: {
    search
  }
})
