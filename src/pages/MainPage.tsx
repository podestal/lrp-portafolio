import Hero from "../components/landing/Hero"
import Skills from "../components/landing/Skills"
import About from "../components/landing/About"
import Developer from "../components/landing/Developer"
import Contact from "../components/landing/Contact"

const MainPage = () => {
  return (
    <div>
        <div className="h-200vh relative">
            <div className="sticky top-0">
                <Hero />
            </div>
            <div className="relative min-h-screen bg-slate-950">
              <About />
              <Skills />
              <div id="contact-section"/>
              <Contact />
              <Developer />
            </div>
        </div>
        {/*  */}
    </div>
  )
}

export default MainPage