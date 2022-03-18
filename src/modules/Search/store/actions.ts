import {SET_CHARACTERS, SET_FILTERS, SET_PAGINATOR} from "@/modules/Search/store/mutations";
import Characters from "@/modules/Search/models/Inputs/Characters";
import CharactersServices from '@/modules/Search/services/index'
import CharactersQuery from "@/modules/Search/models/Query/CharactersQuery";
import {ActionContext} from "vuex";
import {SearchModuleState} from "@/modules/Search/store/state";
import {RootState} from "@/Common/store";
import CharactersPaginator from "@/modules/Search/models/Query/CharactersPaginator";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";

const fetchCharacters = async ({
    commit, state: { paginator, filters }
}: Omit<ActionContext<SearchModuleState, RootState>, 'dispatch' | 'getters' | 'rootState' | 'rootGetters'>) => {
    commit(SET_CHARACTERS, Characters.loading())

    try {
        const charactersQuery = new CharactersQuery({
            filters, paginator
        })

        const { data } = await CharactersServices.fetchCharacters(charactersQuery)

        commit(SET_CHARACTERS, Characters.loaded(data.results))
        commit(SET_PAGINATOR, paginator.setTotalCharacters(data.info.count))
    } catch (e) {
        commit(SET_CHARACTERS, Characters.errored())
    }
}

const fetchCharacter = async ({
    commit
}: Omit<ActionContext<SearchModuleState, RootState>, 'dispatch' | 'getters' | 'rootState' | 'rootGetters'>,
characterId: number) => {
    commit(SET_CHARACTERS, Characters.loading())

    try {
        const { data } = await CharactersServices.fetchCharacter(characterId)

        commit(SET_CHARACTERS, Characters.loaded([data]))
    } catch (e) {
        commit(SET_CHARACTERS, Characters.errored())
    }
}

const setFilters = ({ commit }: Omit<ActionContext<SearchModuleState, RootState>,
    'state' | 'dispatch' | 'getters' | 'rootState' | 'rootGetters'>, filters: CharactersFilters
) => {
    commit(SET_FILTERS, filters)
}

const setPaginator = ({ commit }: Omit<ActionContext<SearchModuleState, RootState>,
    'state' | 'dispatch' | 'getters' | 'rootState' | 'rootGetters'>, paginator: CharactersPaginator
) => {
    commit(SET_PAGINATOR, paginator)
}

export default {
    fetchCharacters,
    fetchCharacter,
    setFilters,
    setPaginator
}
