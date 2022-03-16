export type InfoFromAPI = {
   count: number,
   pages: number,
   next: string | null,
   prev: string | null
}

type PaginatorParams = Pick<InfoFromAPI, 'count'> & { pageNumber: number}

export default class CharactersPaginator {
    pageNumber: number
    totalCharacters: number

    constructor({ count, pageNumber  } = {} as PaginatorParams) {
        this.pageNumber = pageNumber
        this.totalCharacters = count
    }

    setTotalCharacters(totalCharacters: number) {
        this.totalCharacters = totalCharacters
    }

    transformForAPI() {
        return {
            page: this.pageNumber
        }
    }
}
