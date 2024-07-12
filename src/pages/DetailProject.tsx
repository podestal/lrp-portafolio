import { useLocation } from "react-router-dom"
import { projects } from "../data/projects"
import Contact from "../components/landing/Contact"
import Project from "../components/projects/Project"
import useLanguageStore from "../store/store"
import ImgCarousel from "../components/projects/ImgCarousel"
import { useEffect } from "react"

const DetailProject = () => {

    const location = useLocation()
    const projectId = parseInt(location.pathname.split('/')[location.pathname.split('/').length - 1])
    const currentProject = projects.find( project => project.id === projectId)
    const lan = useLanguageStore(s => s.lan)
    const projectDetailData = lan === 'ES' ? currentProject?.details['ES'] : currentProject?.details['EN']

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

  return (
    <div className="min-h-screen w-full mt-24 flex flex-col justify-center items-center">
        <div className="lg:w-[1280px] mx-auto">
            <h3 className="lg:text-7xl px-4 text-5xl font-montserrat text-center">{currentProject?.title}</h3>
            <ImgCarousel 
                imgs={currentProject?.imgs}
                imgsL={currentProject?.imgsL}
            />
            <Project 
                details={projectDetailData}
            />
        </div>
        <Contact />
    </div>
  )
}

export default DetailProject

