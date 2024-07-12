import { RiGithubFill, RiLinkedinFill, RiWhatsappLine } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { Link } from "react-router-dom"
import {HashLink} from 'react-router-hash-link'
import logo from '../../assets/imgs/logo-no-background.png'
import { navData } from "../../data/landing"
import useLanguageStore from "../../store/store"
import { contactData } from "../../data/landing"
import { heroData } from "../../data/landing"

const Footer = () => {

    const lan = useLanguageStore(s => s.lan)
    const contactDataLan = lan === 'ES' ? contactData['ES'] : contactData['EN']
    const heroDataLan = lan === 'ES' ? heroData['ES'] : heroData['EN']

  return (
    <footer className="w-full min-h-[160px] bg-black py-10 px-4">
        <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:max-w-[1280px] mx-auto">
            <div className="w-full h-full flex flex-col justify-start items-center gap-2">
                <Link to='/'><img className="py-4 cursor-pointer w-[80px]" src={logo} alt="" /></Link>
                <h3 className="lg:text-xl">{heroDataLan.title}</h3>
                <div className="flex gap-4">
                    <a href="#" target="_blank"><Icon icon={RiGithubFill}/></a>
                    <a href="#" target="_blank"><Icon icon={RiLinkedinFill}/></a>
                    <a href="#" target="_blank"><Icon icon={RiWhatsappLine}/></a>
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center gap-2">
                <h3 className="text-3xl">{lan === 'ES' ? 'Enlaces' : 'Links'}</h3>
                <ul>
                {navData.map((nav, idx) => (
                    <li key={idx} className="hover:text-slate-50 text-slate-400 lg:text-xl text-center lg:text-left mt-2"><Link to={nav.route}>{lan == 'ES' ? nav.titleEs : nav.titleEn}</Link></li>
                ))}
                </ul>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center lg:gap-6 gap-2">
                <h3 className="text-3xl">{contactDataLan.title}</h3>
                <p className="text-lg text-slate-400 text-center">{contactDataLan.subTitle}</p>
                {/* <Button color="blue"></Button> */}
                <HashLink to='/#contact-section' className="text-blue-500 font-poppins text-lg">Let's Go</HashLink>
            </div>
        </div>
    </footer>
  )
}

export default Footer