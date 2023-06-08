import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProjectSection from "../components/ProjectSection"
import TechStack from "../components/TechStack"
import Contact from "../components/Contact"



/* border-2 border-solid border-black */
export default function Home() {
    return (<main className='text-center mx-auto max-w-5xl px-4 sn:px-6 md:max-w-6x'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Contact/>
      

    </main>

    )
}