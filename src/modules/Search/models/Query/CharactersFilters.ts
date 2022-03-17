export const Status = {
    alive: 'alive',
    dead: 'dead',
    unknown: 'unknown'
}

export type StatusType = keyof typeof Status

export type CharactersFiltersParams = {
    status: StatusType
    name: string
}

export default class CharactersFilters {
    status: StatusType
    name: string

    constructor({ status, name } = {} as CharactersFiltersParams) {
        this.status = status
        this.name = name
    }

    transformForAPI() {
        return {
            status: this.status,
            name: this.name
        }
    }
}
