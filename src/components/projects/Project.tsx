import { ProjectDetails } from "../../data/projects"

interface Props{
    details?: ProjectDetails
}

const Project = ({ details }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-12">
        <div className="lg:w-[70%] w-full flex flex-col justify-center items-start">
            <h4 className="lg:text-5xl my-6">{details?.featuresTitle}</h4>
            <ul className="flex flex-col gap-2">
                {details?.features.map((feature, idx) => (
                    <li className="pl-4 text-lg" key={idx}>{feature}</li>
                ))}
            </ul>
            <h4 className="lg:text-5xl my-6">{details?.techTitle}</h4>
            <ul className="grid lg:grid-cols-10 gap-10 pl-4">
                {details?.tech.map((t, idx) => (
                    <li className="text-center" key={idx}>{t}</li>
                ))}
            </ul>
            
        </div>
    </div>
  )
}

export default Project