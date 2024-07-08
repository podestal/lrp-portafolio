import { Outlet } from "react-router-dom"
import NavBar from "../components/navigator/NavBar"
import Footer from "../components/navigator/Footer"

const Layout = () => {
  return (
    <div className="text-slate-50">
        <NavBar />
        <div className="lg:max-w-[1280px]">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout