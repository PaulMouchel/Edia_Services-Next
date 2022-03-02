import Hero from "./Hero";
import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import News from "./News";
import Partners from "./Partners";
import Contact from "./Contact";

const Content = ({ intro, news, partners }) => {
    return (
        <main className="overflow-x-hidden">
            <Hero/>
            <Intro intro={intro}/>
            <About/>
            <Services/>
            <News news={news}/>
            <Partners partners={partners}/>
            <Contact/>
      </main>
    )
}

export default Content;