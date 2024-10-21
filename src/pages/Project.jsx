import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import ProjectCard from "../cards/ProjectCard";
import ProjectHeader from "../components/ProjectHeader";

export default function Project() {
    const { projects, practiceProjects, extras } = useContext(LanguageContext);

    return (
        <div className="divide-y-2 divide-slate-400/25">
            <section className="project section flex flex-col my-10 gap-y-6 lg:w-2/3 mx-auto">
                <h2 className="text-3xl font-semibold">{extras.ProjectPage[0]}</h2>
                {projects.map(i => (
                    <ProjectCard key={i.Name} extras={extras} {...i} />
                ))}
            </section>
            <section>
                <h2 className="text-3xl text-center mt-10">{extras.ProjectPage[3]}</h2>
                <p className="text-xl xl:w-3/5 m-auto">{extras.ProjectPage[4]}</p>
                <div className="practice project section grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 w-2/3 mx-auto mt-10 mb-20">
                    {practiceProjects.map(i => (
                        <div className="border-4 border-gray-900 p-2">
                            <ProjectHeader key={i.Name} extras={extras} {...i} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}