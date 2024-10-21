import ProjectHeader from "../components/ProjectHeader";

export default function ProjectShortCard({ Name, Info, Link, Github, Image }) {

    return (
        <div className={`project-home grid 2xl:grid-rows-11 bg-zinc-800`}>
            <div className="2xl:row-span-6 text-center border-b-2 border-zinc-700">
                <img className="h-full w-full" src={Image[0]} alt={Name} />
            </div>
            <ProjectHeader Name={Name} Link={Link} Github={Github} />
            <div className="project-text 2xl:row-span-4 p-4 pt-0 text-justify text-lg max-h-64 overflow-auto">
                <p className="text-xl font-semibold">{Info[0]}</p>
                <p className="indent-4">{Info[1]}</p>
                <p className="text-xl font-semibold">{Info[2]}</p>
                <p className="indent-4">{Info[3]}</p>
                <p className="text-xl font-semibold">{Info[4]}</p>
                <p className="indent-4">{Info[5]}</p>
            </div>
        </div>
    )
}