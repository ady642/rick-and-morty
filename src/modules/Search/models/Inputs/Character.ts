export interface CharacterFromAPI {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginOrLocation;
    location: OriginOrLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface OriginOrLocation {
    name: string;
    url: string;
}

export default class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    //origin: OriginOrLocation;
    location: string;
    avatar: string;
    episodeCount: number;
    //url: string;
    //created: string;

    constructor(charactersFromAPI: CharacterFromAPI) {
        this.id = charactersFromAPI.id
        this.name = charactersFromAPI.name
        this.status = charactersFromAPI.status
        this.species = charactersFromAPI.species
        this.type = charactersFromAPI.type
        this.gender = charactersFromAPI.gender
        this.avatar = charactersFromAPI.image
        this.location = charactersFromAPI.location.name
        this.episodeCount = charactersFromAPI.episode?.length
    }
}
