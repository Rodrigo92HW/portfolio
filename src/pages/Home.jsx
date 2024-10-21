import Education from "./home/Education";
import Personal from "./home/Personal";
import ProjectHome from "./home/ProjectHomeCard";
import Skills from "./home/Skills";

export default function Home() {

    return (
        <div className="flex flex-col my-20 gap-y-20 divide-y-2 divide-slate-400/25">
            <section className="personal section">
                <Personal />
            </section>
            <section className="education section">
                <Education />
            </section>  
            <section className="skills section">
                <Skills />
            </section>
            <section className="project home section">
                <ProjectHome />
            </section>
        </div>
    )
}