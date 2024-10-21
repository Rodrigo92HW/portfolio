import spanishJSON from "../json/spanish.json";
import englishJSON from "../json/english.json";
import { createContext, useState } from "react";

export const LanguageContext = createContext({});

const languages = {
    es: spanishJSON,
    en: englishJSON,
};

const spanish = {
    extras: spanishJSON.Extras,
    personal: spanishJSON.Personal,
    education: spanishJSON.Education,
    skills: spanishJSON.Skills,
    certifications: spanishJSON.Certifications,
    projects: spanishJSON.Projects,
    practiceProjects: spanishJSON.PracticeProjects
}

export default function LanguageProvider({children}) {
    const [language, setLanguage] = useState('es');

    const value = languages[language];

    const changeLanguage = (l) => {
        setLanguage(l);
    };

    return (
        <LanguageContext.Provider value={{...value, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}