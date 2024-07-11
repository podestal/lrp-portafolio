import { ProjectDetails } from "../../data/projects"

interface Props{
    details?: ProjectDetails
}

const Project = ({ details }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-12">
        <div className="lg:w-[70%] w-full max-lg:px-6 flex flex-col justify-center items-center lg:items-start overflow-hidden">
            <h4 className="lg:text-5xl my-6 text-3xl ">{details?.overviewTitle}</h4>
            <p className="lg:text-lg text-xl max-lg:leading-8 pl-4">{details?.overview}</p>
            <h4 className="lg:text-5xl my-6 text-3xl">{details?.featuresTitle}</h4>
            <ul className="flex flex-col gap-2">
                {details?.features.map((feature, idx) => (
                    <li className="pl-4 lg:text-lg text-xl" key={idx}>{feature}</li>
                ))}
            </ul>
            <h4 className="lg:text-5xl text-3xl my-6">{details?.techTitle}</h4>
            <ul className="grid lg:grid-cols-10 gap-4 lg:gap-10 pl-4">
                {details?.tech.map((t, idx) => (
                    <li className="text-center" key={idx}>{t}</li>
                ))}
            </ul>
            
        </div>
    </div>
  )
}

export default Project