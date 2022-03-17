import {Store} from "vuex";
import { searchModuleName } from "@/modules/Search/store";
import {RootState} from "@/Common/store";
import Characters from "@/modules/Search/models/Inputs/Characters";

export type getterHelpersType = {
    characters: () => Characters,
    characterTotalCount: () => number
}

const getterHelpers = (store: Store<RootState>): getterHelpersType => ({
    characters: () => store.getters[searchModuleName('characters')],
    characterTotalCount: () => store.getters[searchModuleName('characterTotalCount')],
})

export default getterHelpers

