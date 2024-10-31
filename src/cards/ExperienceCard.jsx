export default function ExperienceCard({ Position, WorkPlace, Entry, Exit, Content, Image }) {

    // {
    //     "Position": "Junior Developer",
    //     "WorkPlace": "Noni Games - Capital Federal",
    //     "Entry": "January 2022",
    //     "Exit": "January 2024",
    //     "Content": [
    //         "Acted as a Unity developer and assisted my team in creating 3D models in Blender and their subsequent integration into the project.",
    //         "Participated in the creation of a game that received significant praise and mentions at the Córdoba Programming Festival.",
    //         "Acted as a Unity developer and assisted in the creative process, as well as in developing ideas for the level design of this project.",
    //         "Participated in events in the city of Buenos Aires and contests alongside the rest of my team."
    //     ],
    //     "Image": ""
    // },
    return (
        <div className="education rounded-md grid bg-zinc-900">
            <div className="col grid p-4 pt-2">
                <div className="row-span-1">
                    <div>
                        <p className="text-2xl font-semibold underline underline-offset-4 decoration-2">
                            {Position}
                        </p>
                    </div>
                    <div className="text-sm italic">
                        ({WorkPlace})
                    </div>
                </div>
                <div className="row-span-1 flex justify-between h-full text-xl">
                    <div>
                        {Entry} / {Exit}
                    </div>
                </div>
                <div className="project-text 2xl:row-span-4 p-4 pt-0 text-justify text-lg max-h-64 overflow-auto">
                    <p className="italic indent-1">- {Content[0]}</p>
                    <p className="italic indent-1">- {Content[1]}</p>
                    <p className="italic indent-1">- {Content[2]}</p>
                </div>
            </div>
        </div>
    )
}