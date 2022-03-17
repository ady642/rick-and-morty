import { useI18n } from 'vue-i18n'
import messages from "@/Common/messages";

const useTranslation = () => {
    const { t } = useI18n({
        messages,
        locale: 'fr'
    })

    return {
        t
    }
}

export default useTranslation
