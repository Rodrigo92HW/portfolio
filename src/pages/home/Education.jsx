import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import EducationCard from "../../cards/EducationCard";
import CertificationsCard from "../../cards/CertificationsCard";


export default function Education() {
    const { education, certifications, extras } = useContext(LanguageContext)

    return (
        <div className="w-2/3 mx-auto mt-20">
            <h2 className="text-4xl font-bold">{extras.Study[0]}</h2>
            <p className="text-xl xl:w-3/5 mb-4">{extras.Study[1]}</p>
            <div className="grid grid-cols-1 gap-6">
                {education.map(i => (
                    <EducationCard key={i.Name} {...i} />
                ))}
            </div>
            <h2 className="text-4xl font-bold mt-10 mb-2">{extras.Study[2]}</h2>
            <p className="text-xl xl:w-3/5 mb-4">{extras.Study[3]}</p>
            <div className="grid 2xl:grid-cols-2 gap-6">
                {certifications.map(i => (
                    <CertificationsCard key={i.Name} {...i} />
                ))}
            </div>
        </div>
    )
}