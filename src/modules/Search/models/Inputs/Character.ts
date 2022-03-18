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
    location: string;
    avatar: string;
    episodeCount: number;

    constructor(characterFromAPI: CharacterFromAPI) {
        this.id = characterFromAPI.id
        this.name = characterFromAPI.name
        this.status = characterFromAPI.status?.toLowerCase() as StatusType
        this.species = characterFromAPI.species
        this.type = characterFromAPI.type
        this.gender = characterFromAPI.gender.toLowerCase() as GenderType
        this.avatar = characterFromAPI.image
        this.location = characterFromAPI.location.name
        this.episodeCount = characterFromAPI.episode?.length
    }
}
