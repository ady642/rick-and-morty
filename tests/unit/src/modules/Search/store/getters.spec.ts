import getters from '@/modules/Search/store/getters'
import {SearchModuleState} from "@/modules/Search/store/state";
import Characters from "@/modules/Search/models/Inputs/Characters";
import characterAPIMock from "../../../../__mocks__/CharacterAPIMock";
import CharactersPaginator from "@/modules/Search/models/Query/CharactersPaginator";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";

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
    it('should return paginator when I called paginator getter', () => {
        state = {
            paginator: new CharactersPaginator({
                count: 20,
                pageNumber: 2
            })
        } as SearchModuleState

        const paginator = getters.paginator(state)

        expect(paginator).toEqual({
            currentPage: 2,
            itemsPerPage: 20,
            totalCharacters: 20,
        })
    })
    it('should return characters when I called characters getter', () => {
        state = {
            filters: new CharactersFilters({
                name: 'ricky',
                status: 'alive'
            })
        } as SearchModuleState

        const filters = getters.filters(state)

        expect(filters).toEqual({
            name: 'ricky',
            status: 'alive'
        })
    })
    it('should return areCharactersLoaded when I called areCharactersLoaded getter', () => {
        state = {
            characters: Characters.loaded([characterAPIMock])
        } as SearchModuleState

        const areCharactersLoaded = getters.areCharactersLoaded(state)

        expect(areCharactersLoaded).toEqual(true)
    })
    it('should return areCharactersLoading when I called areCharactersLoading getter', () => {
            state = {
                characters: Characters.loading()
            } as SearchModuleState

            const areCharactersLoading = getters.areCharactersLoading(state)

            expect(areCharactersLoading).toEqual(true)
        })
})
