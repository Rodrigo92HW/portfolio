import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import SkillsCard from "../../cards/SkillsCard";

export default function Skills() {
    const { skills, extras } = useContext(LanguageContext);

    return (
        <div className="w-2/3 mx-auto mt-20">
        <h2 className="text-3xl">{extras.Skill[0]}</h2>
        <p className="text-xl xl:w-3/5 mb-4">{extras.Skill[1]}</p>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 gap-x-12">
            {skills.map(i => (
                <SkillsCard key={i.Name} {...i} />
            ))}
        </div>
        </div>
    )
}