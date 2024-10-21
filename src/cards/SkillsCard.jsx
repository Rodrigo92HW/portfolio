export default function SkillsCard({ Name, Image, Info }) {
    return (
        <div className="grid grid-flow-row-dense grid-cols-4 gap-12 max-w-80 min-w-80 p-4 pl-6">
            <div className="aspect-square min-w-16">
                <img className="size-16" src={Image} alt="Skill IMG"/>
            </div>
            <div className="col-span-3">
                <div className="text-xl font-semibold">
                    {Name}
                </div>
                <div className="text-sm italic">
                    {Info}
                </div>
            </div>
        </div>
    )
}