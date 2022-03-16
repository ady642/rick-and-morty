import {Store} from "vuex";
import { searchModuleName } from "@/modules/Search/store";
import {RootState} from "@/Common/store";

export type getterHelpersType = {
    characters: () => string
}

const getterHelpers = (store: Store<RootState>): getterHelpersType => ({
    characters: () => store.getters[searchModuleName('characters')]
})

export default getterHelpers

