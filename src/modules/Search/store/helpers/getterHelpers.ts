import {Store} from "vuex";
import { searchModuleName } from "@/modules/Search/store";
import {RootState} from "@/Common/store";
import Characters from "@/modules/Search/models/Inputs/Characters";
import CharactersPaginator from "@/modules/Search/models/Query/CharactersPaginator";

export type getterHelpersType = {
    characters: () => Characters,
    areCharactersLoading: () => boolean
    areCharactersLoaded: () => boolean
    characterTotalCount: () => number
    paginator: () => CharactersPaginator
}

const getterHelpers = (store: Store<RootState>): getterHelpersType => ({
    characters: () => store.getters[searchModuleName('characters')],
    areCharactersLoading: () => store.getters[searchModuleName('areCharactersLoading')],
    areCharactersLoaded: () => store.getters[searchModuleName('areCharactersLoaded')],
    characterTotalCount: () => store.getters[searchModuleName('characterTotalCount')],
    paginator: () => store.getters[searchModuleName('paginator')]
})

export default getterHelpers

