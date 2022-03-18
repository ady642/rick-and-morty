import Character from "@/modules/Search/models/Inputs/Character";
import characterAPIMock from "../../../../../../__mocks__/CharacterAPIMock";

let character = new Character(characterAPIMock)

describe('Character', () => {
    test('mapping value with parameters', () => {
        character = new Character(characterAPIMock)

        expect(character).toEqual({
            "avatar": "https://rickandmortyapi.com/api/character/avatar/443.jpeg",
            "episodeCount": 1,
            "gender": "male",
            "id": 443,
            "location": "Jerryboree",
            "name": "Tank Top Jerry",
            "species": "Human",
            "status": "alive",
            "type": "",
        })
    })
})
