import {RouteRecordRaw} from "vue-router";

const CharacterListView = () => import(/* webpackChunkName: "search" */ '@/modules/Search/views/CharacterListView.vue')
const CharacterDetailsView = () => import(/* webpackChunkName: "search" */ '@/modules/Search/views/CharacterDetailsView.vue')

export const CHARACTER_LIST = "characterList";
export const CHARACTER_DETAILS = "characterDetails";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/characters',
        name: CHARACTER_LIST,
        component: CharacterListView
    },
    {
        path: '/characters/:id',
        name: CHARACTER_DETAILS,
        component: CharacterDetailsView,
        props: true
    }
]

export default routes
