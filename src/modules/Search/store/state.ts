import Characters from "@/modules/Search/models/Inputs/Characters";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";
import CharactersPaginator from "@/modules/Search/models/Query/CharactersPaginator";

export type SearchModuleState = {
    characters: Characters,
    filters: CharactersFilters,
    paginator: CharactersPaginator
}

const state: SearchModuleState = {
    characters: Characters.loaded([]),
    filters: new CharactersFilters(),
    paginator: new CharactersPaginator()
}

export default state
