type Status = 'alive' | 'dead' | undefined

export type CharactersFiltersParams = {
    status: Status
    name: string
}

export default class CharactersFilters {
    status: Status
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
