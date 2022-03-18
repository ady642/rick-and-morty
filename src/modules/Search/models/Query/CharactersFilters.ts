import {StatusType} from "@/modules/Search/models/Inputs/Character";

export type CharactersFiltersParams = {
    status: StatusType
    name: string
}

export default class CharactersFilters {
    status: StatusType
    name: string

    constructor({ status, name} = {} as CharactersFiltersParams) {
        this.status = status
        this.name = name
    }

    transformForAPI() {
        return {
            status: this.status ? this.status: undefined,
            name: this.name ? this.name : undefined
        }
    }
}
