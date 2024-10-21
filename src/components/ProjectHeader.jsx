import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

function ProjectHeader({ Name, Link, Github }) {
    return (
        <div className="flex self-center pr-4 pl-4">
            <div className="flex text-2xl grow font-semibold">
                {Name}
                {Link &&
                    <div className="text-base self-center ml-2">
                        <a href={Link} target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight /></a>
                    </div>
                }
            </div>
            <div className="text-2xl self-center">
                <a href={Github} target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            </div>
        </div>

    )
}
export default ProjectHeader