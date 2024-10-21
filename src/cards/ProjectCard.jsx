import { useEffect, useState } from "react";
import ProjectHeader from "../components/ProjectHeader";

export default function ProjectCard({ Name, FullInfo, Guide, Link, Github, Image, extras }) {
    const [imageCounter, setImageCounter] = useState(0);
    const [visibility, setVisibility] = useState('info');

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     setImageCounter((prevCounter) => (prevCounter + 1) % Image.length);
        // }, 3000);
        // return () => clearTimeout(timer);
    }, [imageCounter])

    return (
        <div className="grid grid-cols-8 bg-zinc-900">
            <div className="col-span-3">
                <img className="w-full h-full" src={Image[imageCounter]} alt={Name} />
            </div>
            <div className="col-span-5 p-2">
                <ProjectHeader Name={Name} Link={Link} Github={Github} />
                <div className="flex text-xl font-semibold mt-2">
                    <button className={`grow ${(visibility == 'info' ? 'bg-zinc-800' : 'bg-zinc-400 opacity-20')}`} onClick={() => setVisibility('info')}>{extras.ProjectPage[1]}</button>
                    <button className={`grow ${(visibility == 'guide' ? 'bg-zinc-800' : 'bg-zinc-400 opacity-20')}`} onClick={() => setVisibility('guide')}>{extras.ProjectPage[2]}</button>
                </div> 
                <div className={`bg-zinc-800 ${(visibility == 'info' ? 'hidden' : '')}`}>{Guide}</div>
                <div className={`bg-zinc-800 ${(visibility == 'guide' ? 'hidden' : '')}`}>{FullInfo}</div>
            </div>
        </div>
    )
}