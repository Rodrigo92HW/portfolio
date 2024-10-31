import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import ProjectShortCard from "../../cards/ProjectShortCard";

export default function ProjectHome() {
    const { projects, extras } = useContext(LanguageContext)

    return (
        <div className="w-2/3 mx-auto mt-20">
            <h2 className="text-3xl">{extras.Project[0]}</h2>
            <p className="text-xl xl:w-3/5 mb-4">{extras.Project[1]}</p>
            <div className="grid  gap-4 gap-x-12 2xl:grid-cols-2">
                {projects.map(i => (
                    <ProjectShortCard key={i.Name} {...i} />
                ))}
            </div>
        </div>
    )
}