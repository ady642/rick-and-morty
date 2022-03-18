import CharactersServices from '@/modules/Search/services'
import CharactersQuery from "@/modules/Search/models/Query/CharactersQuery";
import CharactersPaginator from "@/modules/Search/models/Query/CharactersPaginator";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";
import client from "@/Common/services/client";

describe('CharactersServices', () => {
  beforeEach(() => {
    jest.spyOn(client, 'get').mockResolvedValue({})
  })

  it('should call client.get with characters get API when I call the the fetchCharacters service', () => {
    const charactersQuery = new CharactersQuery({
      paginator: new CharactersPaginator({
        pageNumber: 2,
        count: 20
      }),
      filters: new CharactersFilters({
        name: 'test',
        status: 'alive'
      }),
    })

    CharactersServices.fetchCharacters(charactersQuery)

    expect(client.get).toHaveBeenCalledWith('/character', {
      params: {
        page: 2,
        name: 'test',
        status: 'alive'
      }
    })
  })
})
