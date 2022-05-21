import mutations, {SET_CHARACTERS, SET_FILTERS, SET_PAGINATOR} from '@/modules/Search/store/mutations'
import {SearchModuleState} from "@/modules/Search/store/state";
import Characters from "@/modules/Search/models/Inputs/Characters";
import characterAPIMock from "../../../../__mocks__/CharacterAPIMock";
import CharactersPaginator from "@/modules/Search/models/Query/CharactersPaginator";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";

describe('Characters mutations', () => {
    it('SET_CHARACTERS', () => {
        const state = {
            characters: Characters.loading()
        } as SearchModuleState

        mutations[SET_CHARACTERS](state, Characters.loaded([characterAPIMock]))

        expect(state.characters).toEqual({
            collection: [
                {
                    "avatar": "https://rickandmortyapi.com/api/character/avatar/443.jpeg",
                    "episodeCount": 1,
                    "gender": "male",
                    "id": 443,
                    "location": "Jerryboree",
                    "name": "Tank Top Jerry",
                    "species": "Human",
                    "status": "alive",
                    "type": "",
                }
            ],
            state: 'loaded'
        })
    })

    it('SET_FILTERS', () => {
        const state = {
            filters: new CharactersFilters()
        } as SearchModuleState

        mutations[SET_FILTERS](state, new CharactersFilters({ name: 'ricky', status: 'alive' }))

        expect(state.filters).toEqual(new CharactersFilters({ name: 'ricky', status: 'alive' }))
    })

    it('SET_PAGINATOR', () => {
        const state = {
            paginator: new CharactersPaginator()
        } as SearchModuleState

        mutations[SET_PAGINATOR](state, new CharactersPaginator({ count: 33, pageNumber: 3 }))

        expect(state.paginator).toEqual(new CharactersPaginator({ count: 33, pageNumber: 3 }))
    })
})
