import { AuthContext } from "../context/context";

import pt_br from './Languages/pt_br.json'
import en_us from './Languages/en_us.json'

export const i18n = (key, lang) => {
    switch (lang) {
        case 'pt_br':
            return pt_br[key]
        default:
            return en_us[key]
    }
}

export const LangList = [
    {
        lang: "en_us",
        name: 'English',
    },
    {
        lang: "pt_br",
        name: 'Português',
    }
]