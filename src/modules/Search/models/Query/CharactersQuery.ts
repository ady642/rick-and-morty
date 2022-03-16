import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";
import CharactersPaginator from "@/modules/Search/models/Query/CharactersPaginator";

export default class CharactersQuery {
    private filters: CharactersFilters
    private paginator: CharactersPaginator

    constructor({
        filters = new CharactersFilters(),
        paginator = new CharactersPaginator()
    }) {
        this.filters = filters
        this.paginator = paginator
    }

    transformForAPI() {
        return {
            ...this.filters.transformForAPI(),
            ...this.paginator.transformForAPI()
        }
    }
}
