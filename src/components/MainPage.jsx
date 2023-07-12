import backgroundImg from "../assets/bg.jpg";
import About from "../sections/About";
import Services from "../sections/Services";
import Summary from "../sections/Summary";

function MainPage() {
  return (
    <>
      {/* <div
        className="h-[screen] w-[82vw]"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        based in Ismailia, Egypt
      </div> */}
      <About/>
      <Services/>
      <Summary/>
    </>
  );
}

export default MainPage;
