import { Outlet } from "react-router-dom"
import NavBar from "../components/navigator/NavBar"
import Footer from "../components/navigator/Footer"
import { useEffect } from "react"
import Lenis from "lenis"

const Layout = () => {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
      
          requestAnimationFrame(raf)
    }, [])

  return (
    <div className="text-slate-50">
        <NavBar />

        <Outlet />

        <Footer />
    </div>
  )
}

export default Layout