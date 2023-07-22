import SideMenu from "./components/SideMenu";
import Section from "./Section";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Summary from "./sections/Summary";
import Contact from "./sections/Contact";
import CopyRights from "./sections/CopyRights";
import { Element } from "react-scroll";
import ContactForm from "./sections/Connect";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-[17vw] fixed">
          <SideMenu />
        </div>
        <div className="w-[83vw] ml-[17vw]">
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
          <Element name="contact">
            <Section id="contact" title={<Contact />} />
            {/* <Section id="contact" title={<ContactForm />} /> */}
          </Element>
          <Element>
            <Section title={<CopyRights />} />
          </Element>
        </div>
      </div>
    </>
  );
}

export default App;
