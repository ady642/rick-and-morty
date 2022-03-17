export const Status = {
    alive: 'alive',
    dead: 'dead',
    unknown: 'unknown'
}

export type StatusType = keyof typeof Status

export type GenderType = 'female' | 'male' | 'genderless' | 'unknown'

export interface CharacterFromAPI {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
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
    status: StatusType;
    species: string;
    type: string;
    gender: GenderType;
    //origin: OriginOrLocation;
    location: string;
    avatar: string;
    episodeCount: number;
    //url: string;
    //created: string;

    constructor(charactersFromAPI: CharacterFromAPI) {
        this.id = charactersFromAPI.id
        this.name = charactersFromAPI.name
        this.status = charactersFromAPI.status?.toLowerCase() as StatusType
        this.species = charactersFromAPI.species
        this.type = charactersFromAPI.type
        this.gender = charactersFromAPI.gender.toLowerCase() as GenderType
        this.avatar = charactersFromAPI.image
        this.location = charactersFromAPI.location.name
        this.episodeCount = charactersFromAPI.episode?.length
    }
}
