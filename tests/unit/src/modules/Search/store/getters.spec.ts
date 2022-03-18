import getters from '@/modules/Search/store/getters'
import {SearchModuleState} from "@/modules/Search/store/state";
import Characters from "@/modules/Search/models/Inputs/Characters";
import characterAPIMock from "../../../../__mocks__/CharacterAPIMock";

let state = {} as SearchModuleState

describe('Search getters', () => {
    it('should return characters when I called characters getter', () => {
        state = {
            characters: Characters.loaded([characterAPIMock])
        } as SearchModuleState

        const characters = getters.characters(state)

        expect(characters).toEqual({
            state: 'loaded',
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
            ]
        })
    })
})
