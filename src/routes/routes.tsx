import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout"
import ErrorPage from "../pages/ErrorPage"
import MainPage from "../pages/MainPage"
import Curriculum from "../pages/Curriculum"
import Experience from "../pages/Experience"
import Proyectos from "../pages/Proyectos"
import DetailProject from "../pages/DetailProject"

const router = createBrowserRouter([
    {   
        path: '/', 
        element: <Layout />, 
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <MainPage /> },
            { path: 'resume', element: <Curriculum /> },
            { path: 'experience', element: <Experience /> },
            { path: 'projects', element: <Proyectos /> },
            { path: 'projects/:id', element: <DetailProject /> },
        ]
    }
])

export default router