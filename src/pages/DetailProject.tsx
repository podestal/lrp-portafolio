import { useLocation } from "react-router-dom"
import { projects } from "../data/projects"
import Contact from "../components/landing/Contact"
import Project from "../components/projects/Project"
import useLanguageStore from "../store/store"
import ImgCarousel from "../components/projects/ImgCarousel"

const DetailProject = () => {

    const location = useLocation()
    const projectId = parseInt(location.pathname.split('/')[location.pathname.split('/').length - 1])
    const currentProject = projects.find( project => project.id === projectId)
    const lan = useLanguageStore(s => s.lan)
    const projectDetailData = lan === 'ES' ? currentProject?.details['ES'] : currentProject?.details['EN']

  return (
    <div className="min-h-screen w-full mt-24 flex flex-col justify-center items-center">
        <div className="w-[1280px] mx-auto">
            <h3 className="lg:text-7xl font-montserrat text-center">{currentProject?.title}</h3>
            <ImgCarousel />
            <Project 
                details={projectDetailData}
            />
        </div>
        <Contact />
    </div>
  )
}

export default DetailProject

