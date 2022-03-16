import {Store} from "vuex";
import getterHelpers, {getterHelpersType} from "@/modules/Search/store/helpers/getterHelpers";
import dispatchHelpers, {dispatchHelpersType} from "@/modules/Search/store/helpers/dispatchHelpers";
import {RootState} from "@/Common/store";

type useSearchStoreHelpersType = getterHelpersType & dispatchHelpersType

const useSearchStore = (store: Store<RootState>): useSearchStoreHelpersType => ({
    ...getterHelpers(store),
    ...dispatchHelpers(store)
})

export default useSearchStore
