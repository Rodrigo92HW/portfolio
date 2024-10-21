import { useContext } from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { LanguageContext } from "../context/LanguageProvider";


function Footer() {
  const { extras } = useContext(LanguageContext);

  return (
    <div className="flex justify-around grow bg-zinc-900 content-center p-4 border-t-4 border-zinc-600">
      <div className="text-4xl font-bold">{extras.Footer[0]}</div>
      <div className="text-lg place-self-center hidden sm:flex">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" alt="Argentina" className="h-7 aspect-video mr-2" />
        {extras.Footer[1]}
      </div>
      <div><a href={extras.Footer[2]} className="text-4xl"><BiLogoGmail /></a></div>
      <div><a href={extras.Footer[3]} className="text-4xl"><AiFillGithub /></a></div>
      <div><a href={extras.Footer[4]} className="text-4xl"><FaLinkedin /></a></div>
    </div>
  )
}
export default Footer