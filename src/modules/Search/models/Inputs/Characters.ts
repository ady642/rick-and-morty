import Character, { CharacterFromAPI } from "@/modules/Search/models/Inputs/Character";

type State = 'loaded' | 'loading' | 'errored'

type CharactersParams = {
    state: State
    charactersFromAPI: CharacterFromAPI[]
}

export default class Characters {
    state: State
    collection: Character[]

    constructor({ state, charactersFromAPI }: CharactersParams) {
        this.state = state
        this.collection = charactersFromAPI.length > 0 ? charactersFromAPI.map((character: CharacterFromAPI) =>
            new Character(character)
        ) : []
    }

    static loaded(charactersFromAPI: CharacterFromAPI[]): Characters {
        return new Characters({ state: 'loaded', charactersFromAPI })
    }

    static loading(): Characters {
        return new Characters({ state: 'loading', charactersFromAPI: [] })
    }

    static errored(): Characters {
        return new Characters({ state: 'errored', charactersFromAPI: [] })
    }
}
