export default function EducationCard({ Name, Image, Title, GPA, Entry, Exit, Info, Link }) {

    return (
        <div className="education rounded-md grid grid-cols-8 bg-zinc-900">
            <div className="col-span-8 lg:col-span-6 grid p-4 pt-2">
                <div className="row-span-1">
                    <div>
                        <a href={Link} target="_blank" rel="noopener noreferrer"
                            className="text-2xl font-semibold underline underline-offset-4 decoration-2">
                            {Name}
                        </a>
                    </div>
                    <div className="text-sm italic">
                        ({Title})
                    </div>
                </div>
                <div className="row-span-1 flex justify-between h-full text-xl">
                    <div>
                        <b className="font-semibold">GPA:</b> {GPA}
                    </div>
                    <div>
                        {Entry} / {Exit}
                    </div>
                </div>
                <div className="education-info overflow-auto max-h-40 bg-zinc-800 row-span-3 text-base text-justify border border-black p-3 italic mt-1 indent-4">
                    {Info}
                </div>
            </div>
            <div className="education-image col-span-2 h-full hidden lg:flex aspect-square border-2 border-black content-center">
                <img className="bg-red-500 h-full" src={Image} alt="School" />
            </div>
        </div>
    )
}