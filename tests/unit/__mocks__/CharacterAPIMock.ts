import {CharacterFromAPI} from "@/modules/Search/models/Inputs/Character";

const characterAPIMock: CharacterFromAPI = {
    "id": 443,
    "name": "Tank Top Jerry",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "unknown",
        "url": ""
    },
    "location": {
        "name": "Jerryboree",
        "url": "https://rickandmortyapi.com/api/location/44"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/443.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/13"
    ],
    "url": "https://rickandmortyapi.com/api/character/443",
    "created": "2018-05-01T12:23:37.165Z"
}

export const charactersAPIMock = {
    "info": {
        "count": 826,
        "pages": 42,
        "next": "https://rickandmortyapi.com/api/character/?page=2",
        "prev": null
    },
    "results": [
        characterAPIMock
    ]
}

export default characterAPIMock
