import Hero from "./Hero";
import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import News from "./News";
import Partners from "./Partners";
import Contact from "./Contact";

const Content = () => {
    return (
        <main className="overflow-x-hidden">
            <Hero/>
            <Intro/>
            <About/>
            <Services/>
            <News/>
            <Partners/>
            <Contact/>
      </main>
    )
}

export default Content;