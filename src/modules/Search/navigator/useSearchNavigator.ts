import {useRouter} from "vue-router";
import {CHARACTER_DETAILS, CHARACTER_LIST} from "@/modules/Search/routes/searchRoutes";

const useSearchNavigator = () => {
    const router = useRouter()

    const goToCharacterDetailsView = async (characterId: number) => {
        await router.push({ name: CHARACTER_DETAILS, params: { id: characterId } })
    }

    const goToCharacterListView = async () => {
        await router.push({ name: CHARACTER_LIST })
    }

    return {
        goToCharacterDetailsView,
        goToCharacterListView
    }
}

export default useSearchNavigator
