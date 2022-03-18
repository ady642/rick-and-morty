import mutations, {SET_CHARACTERS} from '@/modules/Search/store/mutations'
import {SearchModuleState} from "@/modules/Search/store/state";
import Characters from "@/modules/Search/models/Inputs/Characters";
import characterAPIMock from "../../../../__mocks__/CharacterAPIMock";

describe('Documents mutations', () => {
    it('SET_DOCUMENTS', () => {
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
})
