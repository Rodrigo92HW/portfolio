import { useState } from "react";
import ProjectHeader from "../components/ProjectHeader";
import ProjectText from "../components/ProjectText";

export default function ProjectCard({
  Name,
  FullInfo,
  Guide,
  Link,
  Github,
  Image,
  extras,
}) {
  const [visibility, setVisibility] = useState("info");

  return (
    <div className="grid grid-cols-10 bg-zinc-900">
      <div className="col-span-4 hidden w-full h-full xl:flex aspect-square">
        <img src={Image[0]} alt={Name} />
      </div>
      <div className="h-full col-span-10 xl:col-span-6 p-2">
        <ProjectHeader Name={Name} Link={Link} Github={Github} />
        <div className="flex text-xl font-semibold mt-2">
          <button
            className={`grow ${
              visibility == "info" ? "bg-zinc-800" : "bg-zinc-400 opacity-20"
            }`}
            onClick={() => setVisibility("info")}
          >
            {extras.ProjectPage[1]}
          </button>
          <button
            className={`grow ${
              visibility == "guide" ? "bg-zinc-800" : "bg-zinc-400 opacity-20"
            }`}
            onClick={() => setVisibility("guide")}
          >
            {extras.ProjectPage[2]}
          </button>
        </div>
        <div
          className={`overflow-auto bg-zinc-800 ${
            visibility == "info" ? "hidden" : ""
          }`}
        >
          <ProjectText element={Guide} />
        </div>
        <div
          className={`overflow-auto bg-zinc-800 ${
            visibility == "guide" ? "hidden" : ""
          }`}
        >
          <ProjectText element={FullInfo} />
        </div>
      </div>
    </div>
  );
}
