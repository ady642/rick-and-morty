import {SearchModuleState} from "@/modules/Search/store/state";
import Characters from "@/modules/Search/models/Inputs/Characters";
import CharactersPaginator from "@/modules/Search/models/Query/CharactersPaginator";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";

export const SET_CHARACTERS = "SET_CHARACTERS";
export const SET_PAGINATOR = "SET_PAGINATOR";
export const SET_FILTERS = "SET_FILTERS";

export default {
    [SET_CHARACTERS]:(state: SearchModuleState, characters: Characters) => {
        state.characters = characters
    },
    [SET_PAGINATOR]:(state: SearchModuleState, paginator: CharactersPaginator) => {
        state.paginator = paginator
    },
    [SET_FILTERS]:(state: SearchModuleState, filters: CharactersFilters) => {
        state.filters = filters
    }
}
