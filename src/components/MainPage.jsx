import About from "../sections/About";
import Contact from "../sections/Contact";
import CopyRights from "../sections/CopyRights";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import Summary from "../sections/Summary";
import Welcome from "../sections/Welcome";

function MainPage() {
  return (
    <>
      <Welcome />
      <About />
      <Services />
      <Summary />
      <Portfolio />
      <Contact />
      <CopyRights />
    </>
  );
}

export default MainPage;
