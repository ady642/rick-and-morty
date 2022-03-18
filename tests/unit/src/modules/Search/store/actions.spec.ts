import SearchActions from '@/modules/Search/store/actions'
import Characters from "@/modules/Search/models/Inputs/Characters";
import CharactersPaginator from "@/modules/Search/models/Query/CharactersPaginator";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";
import CharactersServices from '@/modules/Search/services'
import {SearchModuleState} from "@/modules/Search/store/state";
import {charactersAPIMock} from "../../../../__mocks__/CharacterAPIMock";

const state: SearchModuleState = {
    characters: Characters.loading(),
    paginator: new CharactersPaginator(),
    filters: new CharactersFilters()
}

let commit = jest.fn()

describe('SearchActions', () => {
    beforeEach(() => {
        commit = jest.fn()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('fetchCharacters', () => {
        it('should call the fetchCharacters services and WHEN RESOLVED commit the result', async () => {
            jest.spyOn(CharactersServices, 'fetchCharacters').mockReturnValue({
                data: charactersAPIMock
            } as never)

            await SearchActions.fetchCharacters({
                commit,
                state
            })

            expect(CharactersServices.fetchCharacters).toHaveBeenCalledWith(
                {
                    "filters": {"name": undefined, "status": undefined},
                    "paginator": {"currentPage": undefined, "itemsPerPage": 20, "totalCharacters": 826}
                }
            )
            expect(commit).toHaveBeenNthCalledWith(1, 'SET_CHARACTERS', {
                collection: [],
                state: 'loading'
            })
            expect(commit).toHaveBeenNthCalledWith(2, 'SET_CHARACTERS', {
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
                        "type": ""
                    }
                ],
                state: 'loaded'
            })
            expect(commit).toHaveBeenNthCalledWith(3, 'SET_PAGINATOR', {
                "currentPage": undefined,
                "itemsPerPage": 20,
                "totalCharacters": 826,
            })
        })

        it('should call the fetchFolders services and WHEN there is an exception commit errored result', async () => {
            jest.spyOn(CharactersServices, 'fetchCharacters').mockRejectedValue(
                'special one'
            )

            await SearchActions.fetchCharacters({
                commit,
                state
            })

            expect(CharactersServices.fetchCharacters).toHaveBeenCalledWith(
                {
                    "filters": {"name": undefined, "status": undefined},
                    "paginator": {"currentPage": undefined, "itemsPerPage": 20, "totalCharacters": 826}
                }
            )
            expect(commit).toHaveBeenNthCalledWith(1, 'SET_CHARACTERS', {
                collection: [],
                state: 'loading'
            })
            expect(commit).toHaveBeenNthCalledWith(2, 'SET_CHARACTERS', {
                collection: [],
                state: 'errored'
            })
        })
    })
})
