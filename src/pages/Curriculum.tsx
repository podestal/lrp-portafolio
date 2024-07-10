import { resumeData } from "../data/resume"
import useLanguageStore from "../store/store"

const Curriculum = () => {

  const lan = useLanguageStore(s => s.lan)
  const data = lan === 'ES' ? resumeData['ES'] : resumeData['EN']

  return (
    <div className="w-full min-h-screen ">
      <div className="bg-slate-900 lg:max-w-[1280px] h-full mx-auto lg:my-20 font-poppins py-10 px-4">
        <div className="border-t-2 border-b-2 py-6 flex flex-col gap-6">
          <h2 className="font-montserrat lg:text-7xl font-bold">{data.name}</h2>
          <h2 className="font-montserrat lg:text-7xl font-bold">{data.lastName}</h2>
          <p className="text-2xl ">{data.title}</p>
        </div>
        <p className="text-lg w-[60%] py-4">{data.intro}</p>
        <div className="w-full flex flex-col justify-start items-start gap-10 mt-10">
          <h3 className="lg:text-5xl">{data.experienceTitle}</h3>
          {data.experience.map( item => (
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-center">
                <p className="text-xl">{item.company} - {item.title}</p>
                <div className="flex w-[300px] justify-center items-center gap-6">
                  <p className="text-right">{item.dateStart}</p>
                  <span>-</span>
                  <p className="text-left">{item.dateEnd}</p>
                </div>
              </div>
              <div className="w-[60%]">
                <p>{item.description}</p>
              </div>
              <div>
                {item.responsabilities.map( resp => (
                  <div className="flex flex-col"> 
                    <p className="my-2 px-4 text-md"> - {resp}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>  
      
    </div>
  )
}

export default Curriculum