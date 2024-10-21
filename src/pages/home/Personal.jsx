import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";

export default function Personal() {
    const { personal } = useContext(LanguageContext);

    return (
        <div className="flex flex-row gap-28 lg:w-2/3 mx-auto">
            <div className="lg:basis-1/3">
                <img src={personal.Image} alt="profile image" />
            </div>
            <div className="lg:basis-1/2 flex-auto flex flex-col gap-6 place-content-center">
                <div className="text-5xl font-semibold">
                    {personal.Name}
                </div>
                <div className="text-xl text-center tracking-wide">
                    {personal.Intro}
                </div>
                <div className="text-base italic tracking-wide">
                    {personal.FullIntro}
                </div>
                <div className="flex justify-between text-sm font-semibold">
                    <div>
                        {personal.Born}
                    </div>
                    <div>
                        {personal.City}
                    </div>
                </div>
            </div>
        </div>
    )
}