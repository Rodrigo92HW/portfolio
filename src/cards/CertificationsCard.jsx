import { BsBoxArrowUpRight } from "react-icons/bs";

function CertificationsCard({ Name, Image, Link }) {
    return (
        <div className="border-4 border-zinc-800">
            <div className="text-2xl text-gray-400 m-2 flex font-semibold">
                {Name}
                <div className="text-base self-center ml-2">
                    <a href={Link} target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight /></a>
                </div>
            </div>
            <div>
                <img className="aspect-video w-full h-full" src={Image} alt={Name} />
            </div>
        </div>
    )
}
export default CertificationsCard