type Status = 'alive' | 'dead' | undefined

export type CharactersFiltersParams = {
    status: Status
}

export default class CharactersFilters {
    status: Status

    constructor({ status } = {} as CharactersFiltersParams) {
        this.status = status
    }

    transformForAPI() {
        return {
            status: this.status
        }
    }
}
