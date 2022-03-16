import {Store} from "vuex";
import { searchModuleName } from "@/modules/Search/store";
import {RootState} from "@/Common/store";
import Characters from "@/modules/Search/models/Inputs/Characters";

export type getterHelpersType = {
    characters: () => Characters
}

const getterHelpers = (store: Store<RootState>): getterHelpersType => ({
    characters: () => store.getters[searchModuleName('characters')]
})

export default getterHelpers

