import {Store} from "vuex";
import {searchModuleName} from "@/modules/Search/store";
import {RootState} from "@/Common/store";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";

export type dispatchHelpersType = {
    fetchCharacters: () => Promise<void>
    setFilters: (filters: CharactersFilters) => Promise<void>
    setCurrentPage: (page: number) => Promise<void>
}

const dispatchHelpers = (store: Store<RootState>): dispatchHelpersType => ({
    fetchCharacters: async () => {
        await store.dispatch(searchModuleName('fetchCharacters'))
    },
    setFilters: async (filters: CharactersFilters) => {
        await store.dispatch(searchModuleName('setFilters'), filters)
    },
    setCurrentPage: async (page: number) => {
        const paginator = store.getters[searchModuleName('paginator')].setCurrentPage(page)
        await store.dispatch(searchModuleName('setPaginator'), paginator)
    }
})

export default dispatchHelpers
