import { Outlet, useLocation } from "react-router-dom"
import NavBar from "../components/navigator/NavBar"
import Footer from "../components/navigator/Footer"
import { useEffect } from "react"
import Lenis from "lenis"
import useLanguageStore from "../store/store"

const Layout = () => {

  const location = useLocation()
  const {select} = useLanguageStore()

    useEffect(() => {

        if (location.search === '?lan=EN') {
          select('EN')
        }

        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
      
          requestAnimationFrame(raf)
    }, [])

  return (
    <div className="text-slate-50">
        <>{console.log('location', location)}</>
        <NavBar />

        <Outlet />

        <Footer />
    </div>
  )
}

export default Layout