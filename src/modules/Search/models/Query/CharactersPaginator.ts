export type InfoFromAPI = {
   count: number,
   pages: number,
   next: string | null,
   prev: string | null
}

type PaginatorParams = Pick<InfoFromAPI, 'count'> & { pageNumber: number}

export default class CharactersPaginator {
    currentPage: number
    totalCharacters: number
    itemsPerPage: 20

    constructor({ count, pageNumber  } = {} as PaginatorParams) {
        this.currentPage = pageNumber
        this.totalCharacters = count
        this.itemsPerPage = 20
    }

    setTotalCharacters(totalCharacters: number): this {
        this.totalCharacters = totalCharacters
        return this
    }

    setCurrentPage(page: number): this {
        this.currentPage = page
        return this
    }

    transformForAPI() {
        return {
            page: this.currentPage
        }
    }
}
