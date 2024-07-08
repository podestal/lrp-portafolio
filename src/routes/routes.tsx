import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout"
import ErrorPage from "../pages/ErrorPage"
import MainPage from "../pages/MainPage"

const router = createBrowserRouter([
    {   
        path: '/', 
        element: <Layout />, 
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <MainPage /> },
            // { path: 'islas', element: <IslasPage /> },
            // { path: 'bosque', element: <BosquePage /> },
            // { path: 'caleta', element: <CaletaPage /> },
        ]
    }
])

export default router