import {SET_CHARACTERS} from "@/modules/Search/store/mutations";
import Characters from "@/modules/Search/models/Inputs/Characters";
import CharactersServices from '@/modules/Search/services/index'
import CharactersQuery from "@/modules/Search/models/Query/CharactersQuery";
import {ActionContext} from "vuex";
import {SearchModuleState} from "@/modules/Search/store/state";
import {RootState} from "@/Common/store";

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
    } catch (e) {
        commit(SET_CHARACTERS, Characters.errored())
    }
}

export default {
    fetchCharacters
}
