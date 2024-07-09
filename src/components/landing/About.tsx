import useLanguageStore from "../../store/store"
import { aboutData } from "../../data/landing"
import profilePic from '../../assets/imgs/developer-pic.png'

const About = () => {

    const lan = useLanguageStore(s => s.lan)
    const data = lan == 'ES' ? aboutData['ES'] : aboutData['EN']

  return (
    <section className="max-lg:flex-col min-h-screen flex justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-start items-center gap-6">
            <h2 className="text-5xl lg:text-8xl text-center py-6">{data.title}</h2>
            <img src={profilePic} alt="" />
        </div>
        <div className="w-full flex flex-col justify-center items-center min-h-screen bg-slate-900 gap-6 font-montserrat">
            <h3 className="lg:text-7xl text-4xl">{data.aboutTitle}</h3>
            <p className="text-slate-50 lg:leading-8 lg:text-xl font-poppins text-left w-[60%]">{data.description}</p>
        </div>
    </section>
  )
}

export default About