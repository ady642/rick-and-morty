import Characters from "@/modules/Search/models/Inputs/Characters";
import characterAPIMock from "../../../../../../__mocks__/CharacterAPIMock";

describe('Characters', () => {
    test('mapping value with parameters', () => {
        const characters = Characters.loaded([])

        expect(characters.collection).toEqual([])
        expect(characters.state).toEqual('loaded')
        expect(characters.areLoaded).toBe(true)
    })
    test('mapping value with parameters', () => {
        const characters = Characters.loading()

        expect(characters.collection).toEqual([])
        expect(characters.state).toEqual('loading')
        expect(characters.isLoading).toBe(true)
    })
    test('mapping value with parameters', () => {
        const characters = Characters.errored()

        expect(characters.collection).toEqual([])
        expect(characters.state).toEqual('errored')
    })
    test('findByID', () => {
        const characters = Characters.loaded([characterAPIMock])
        expect(characters.findByID(443)?.id).toBe(443)
    })
})
