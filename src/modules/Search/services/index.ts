import client, {ApiResponse} from "@/Common/services/client";
import CharactersQuery from "@/modules/Search/models/Query/CharactersQuery";
import {CharacterFromAPI} from "@/modules/Search/models/Inputs/Character";
import {InfoFromAPI} from "@/modules/Search/models/Query/CharactersPaginator";

interface InfoAndResults {
    info: InfoFromAPI,
    results: CharacterFromAPI[]
}

const fetchCharacters = async(charactersQuery: CharactersQuery): Promise<ApiResponse<InfoAndResults>> => {
    return await client.get('/character', { params: charactersQuery.transformForAPI() })
}

const fetchCharacter = async(characterId: number): Promise<ApiResponse<CharacterFromAPI>> => {
    return await client.get(`/character/${characterId}`)
}

export default {
    fetchCharacters,
    fetchCharacter
}
