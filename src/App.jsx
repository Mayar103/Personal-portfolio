import SideMenu from "./components/SideMenu";
import Section from "./Section";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Summary from "./sections/Summary";
// import Contact from "./sections/Contact";
import CopyRights from "./sections/CopyRights";
import { Element } from "react-scroll";
import { useState } from "react";
import ScrollToTopArrow from "./components/ScrollToTop";

function App() {
  const [arrow, setArrow] = useState(true);
  return (
    <>
      <div className="flex">
        <div className="lg:w-[20vw] xl:w-[17vw] sm:w-0 xl:block fixed z-10">
          <SideMenu />
        </div>
        <div className="lg:w-[80vw] xl:w-[83vw] min-[280px]:w-[100vw] lg:ml-[20vw] xl:ml-[17vw] z-2">
          <Element name="home">
            <Section id="home" title={<Welcome />} />
          </Element>

          <Element name="about">
            <Section id="about" title={<About />} />
          </Element>
          <Element name="services">
            <Section id="services" title={<Services />} />
          </Element>
          <Element name="summary">
            <Section id="summary" title={<Summary />} />
          </Element>
          <Element name="portfolio">
            <Section id="portfolio" title={<Portfolio />} />
          </Element>
          {/* <Element name="contact">
            <Section id="contact" title={<Contact />} />
          </Element> */}
          <Element>
            <Section title={<CopyRights />} />
          </Element>
        </div>
        <ScrollToTopArrow />
      </div>
    </>
  );
}

export default App;
