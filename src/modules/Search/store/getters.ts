import {SearchModuleState} from "@/modules/Search/store/state";
import Characters from "@/modules/Search/models/Inputs/Characters";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";
import CharactersPaginator from "@/modules/Search/models/Query/CharactersPaginator";

const characters = (state: SearchModuleState): Characters => state.characters
const areCharactersLoading = (state: SearchModuleState): boolean => state.characters.isLoading
const areCharactersLoaded = (state: SearchModuleState): boolean => state.characters.areLoaded
const characterTotalCount = (state: SearchModuleState) => state.paginator.totalCharacters
const filters = (state: SearchModuleState): CharactersFilters => state.filters
const paginator = (state: SearchModuleState): CharactersPaginator => state.paginator

export default {
    characters,
    areCharactersLoading,
    areCharactersLoaded,
    filters,
    paginator,
    characterTotalCount
}
