import {useStore} from "vuex";
import getterHelpers, {getterHelpersType} from "@/modules/Search/store/helpers/getterHelpers";
import dispatchHelpers, {dispatchHelpersType} from "@/modules/Search/store/helpers/dispatchHelpers";

type useSearchStoreHelpersType = getterHelpersType & dispatchHelpersType

const useSearchStore = (): useSearchStoreHelpersType => {
    const store = useStore()

    return {
        ...getterHelpers(store),
        ...dispatchHelpers(store)
    }
}

export default useSearchStore
