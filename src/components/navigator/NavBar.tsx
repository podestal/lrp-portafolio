import { Link } from "react-router-dom"
import { RiMenu2Fill, RiCloseLine} from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const NavBar = () => {

    const [show, setShow] = useState(false)

  return (
    <header className="w-full fixed top-0 z-10">
        <nav className="lg:max-w-[1280px] md:max-w-[1024px] mx-auto flex justify-between items-start">
            <Link to='/'><p className="max-lg:hidden py-4 cursor-pointer">LRP</p></Link>
            <AnimatePresence>
                <div className="w-full flex flex-col justify-center items-end py-4">
                    <Icon onClick={() => setShow(true)} className="bg-transparent cursor-pointer" icon={RiMenu2Fill}/>
                    {show 
                    && 
                    <motion.ul 
                        initial={{opacity: 0, translateX: 200}}
                        whileInView={{opacity: 1, translateX: 0}}
                        exit={{opacity: 0, translateX: 200}}
                        transition={{duration: 1}}
                        className="lg:w-[30%] w-full h-full fixed top-0 right-0 flex flex-col justify-start items-center py-4 backdrop-blur-xl bg-slate-950/60 gap-12">
                        <Icon onClick={() => setShow(false)} className="cursor-pointer" icon={RiCloseLine}/>
                        <p className="lg:hidden py-4 cursor-pointer">Logo</p>
                        <li className="hover:text-slate-400"><Link to='/resume'>Experiencia</Link></li>
                        <li className="hover:text-slate-400"><Link to='/experience'>Proyectos</Link></li>
                        <li className="hover:text-slate-400"><Link to='/projects'>Curriculum</Link></li>
                    </motion.ul>  
                    }
                </div>
            </AnimatePresence>
            
        </nav>
    </header>
  )
}

export default NavBar