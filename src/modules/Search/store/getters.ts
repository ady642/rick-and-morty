import {SearchModuleState} from "@/modules/Search/store/state";

const characters = (state: SearchModuleState) => state.characters
const characterTotalCount = (state: SearchModuleState) => state.paginator.totalCharacters
const filters = (state: SearchModuleState) => state.filters
const paginator = (state: SearchModuleState) => state.paginator

export default {
    characters,
    filters,
    paginator,
    characterTotalCount
}
