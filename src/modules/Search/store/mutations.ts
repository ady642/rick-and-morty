import {SearchModuleState} from "@/modules/Search/store/state";
import Characters from "@/modules/Search/models/Inputs/Characters";

export const SET_CHARACTERS = "SET_CHARACTERS";

export default {
    [SET_CHARACTERS]:(state: SearchModuleState, characters: Characters) => {
        state.characters = characters
    }
}
