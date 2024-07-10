import { useLocation } from "react-router-dom"
import { projects } from "../data/projects"

const DetailProject = () => {

    const location = useLocation()
    const projectId = parseInt(location.pathname.split('/')[location.pathname.split('/').length - 1])
    const currentProject = projects.find( project => project.id === projectId)

  return (
    <div className="min-h-screen w-full">
        <h3>{currentProject?.title}</h3>
    </div>
  )
}

export default DetailProject

