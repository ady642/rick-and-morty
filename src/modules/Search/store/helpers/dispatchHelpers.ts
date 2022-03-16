import {Store} from "vuex";
import {searchModuleName} from "@/modules/Search/store";
import {RootState} from "@/Common/store";

export type dispatchHelpersType = {
    fetchCharacters: () => Promise<void>
}

const dispatchHelpers = (store: Store<RootState>): dispatchHelpersType => ({
    fetchCharacters: async () => {
        await store.dispatch(searchModuleName('fetchCharacters'))
    }
})

export default dispatchHelpers
