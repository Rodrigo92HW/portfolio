import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageProvider";

const es = 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg';
const en = 'https://i.imgur.com/SKJcskO.png';

function Header() {
    const navLinkStyles = "grow content-center";
    const { changeLanguage, extras } = useContext(LanguageContext);
    const [language, setLanguage] = useState(es);

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        changeLanguage(selectedLanguage);
        setLanguage(selectedLanguage === 'es' ? es : en);
    };

    return (
        <>
            <div className="header w-100 flex text-center font-bold h-20 text-3xl bg-zinc-900">
                <NavLink to="/" className={({ isActive }) => isActive ? navLinkStyles + 'grow content-center border-b-8 border-zinc-600' : navLinkStyles}>{extras.Header[0]}</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? navLinkStyles + ' border-b-8 border-zinc-600' : navLinkStyles}>{extras.Header[1]}</NavLink>
                <div className="flex h-8 self-center mr-10">
                    <img src={language} alt={language} className="w-12 ml-2 aspect-video hidden sm:flex"/>
                    <select className="text-base ml-4 bg-zinc-900" onChange={handleLanguageChange}>
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        </>
    )
}
export default Header