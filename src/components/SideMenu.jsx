import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const SideMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.pageYOffset;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleButton = () => {
    setToggle(!toggle);
    console.log("hello");
  };

  const makeFalse = () => {
    console.log(false);
  };

  return (
    <>
      <div className="lg:h-screen lg:bg-[#121212] min-[280px]:bg-[#121212] flex lg:flex-col min-[280px]:items-center min-[280px]:absolute min-[280px]:h-[60px] min-[280px]:w-[100vw] lg:w-[20vw] xl:w-[17vw] min-[280px]:top-0">
        <div>
          <img
            src="Images/pro.jpg"
            className="rounded-full lg:h-[100px] lg:w-[100px] xl:h-[135px] xl:w-[135px] mt-[70px] mb-[18px] min-[280px]:hidden lg:block"
          />
        </div>
        <div className="min-[280px]:flex min-[280px]:flex-row min-[280px]:justify-between lg:flex-col md:justify-evenly md:items-center">
          <h1 className="text-white font-semibold lg:text-[16px] xl:text-[20px] min-[280px]:ml-[10px] sm:ml-[30px] md:ml-[40px] lg:ml-0 md:mr-[120px] lg:mr-0">
            Mayar Mohamed
          </h1>
          <ul className="menu min-[280px]:flex-row lg:flex-col lg:gap-[8px] lg:mt-[60px] lg:mr-[70px] min-[180px]:hidden md:flex">
            <li
              className={`w-[30px] md:ml-[20px] lg:ml-0 ${
                activeSection === "home" ? "text-[#20c997]" : ""
              }`}
            >
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li
              className={`w-[30px] md:ml-[40px] lg:ml-0 ${
                activeSection === "about" ? "text-[#20c997]" : ""
              }`}
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li
              className={`w-[30px] md:ml-[40px] lg:ml-0 ${
                activeSection === "services" ? "text-[#20c997]" : ""
              }`}
            >
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
              >
                What I do
              </Link>
            </li>
            <li
              className={`w-[30px] md:ml-[70px] lg:ml-0 ${
                activeSection === "summary" ? "text-[#20c997]" : ""
              }`}
            >
              <Link
                to="summary"
                smooth={true}
                duration={500}
                className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
              >
                Resume
              </Link>
            </li>
            <li
              className={`w-[30px] md:ml-[50px] lg:ml-0 ${
                activeSection === "portfolio" ? "text-[#20c997]" : ""
              }`}
            >
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
              >
                Portfolio
              </Link>
            </li>
            {/* <li
            className={`w-[30px] md:ml-[20px] $ lg:ml-0 {
              activeSection === "contact" ? "text-[#20c997]" : ""
            }`}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
            >
              Contact
            </Link>
          </li> */}
          </ul>
          {toggle && (
            <ul className="absolute top-[60px] w-[100vw] h-[200px] bg-[#121212] text-[hsla(0,0%,100%,.7)]">
              <li
                className={`ml-[15px] mb-[10px] ${
                  activeSection === "home" ? "text-[#20c997]" : ""
                }`}
              >
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li
                className={`ml-[15px] mb-[10px] ${
                  activeSection === "about" ? "text-[#20c997]" : ""
                }`}
              >
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
                >
                  About
                </Link>
              </li>

              <li
                className={`ml-[15px] mb-[10px] ${
                  activeSection === "services" ? "text-[#20c997]" : ""
                }`}
              >
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
                >
                  What I do
                </Link>
              </li>
              <li
                className={`ml-[15px] mb-[10px] ${
                  activeSection === "summary" ? "text-[#20c997]" : ""
                }`}
              >
                <Link
                  to="summary"
                  smooth={true}
                  duration={500}
                  className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
                >
                  Resume
                </Link>
              </li>
              <li
                className={`ml-[15px] mb-[10px] ${
                  activeSection === "portfolio" ? "text-[#20c997]" : ""
                }`}
              >
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
                >
                  Portfolio
                </Link>
              </li>
              {/* <li
            className={`mb-[10px] {
              activeSection === "contact" ? "text-[#20c997]" : ""
            }`}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="font-semibold text-[18px] hover:text-[#20c997] hover:bg-transparent"
            >
              Contact
            </Link>
          </li> */}
            </ul>
          )}

          <button onClick={toggleButton}>
            <GiHamburgerMenu className="md:hidden text-2xl min-[280px]:ml-[115px] min-[320px]:ml-[145px] min-[370px]:ml-[185px] min-[420px]:ml-[290px] min-[480px]:ml-[300px] min-[600px]:ml-[420px] sm:ml-[500px] text-white" />
          </button>
        </div>
        <div className="items-center gap-4 sm:mt-0 lg:mt-20 xl:mt-44 min-[280px]:hidden lg:flex">
          <a href="mailto:mayarmohamed775@gmail.com" target="_blank">
            <MdEmail className="text-[#20c997] text-2xl cursor-pointer" />
          </a>
          <a href="https://github.com/Mayar103" target="_blank">
            <BsGithub className="text-[#20c997] text-lg cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/mayar-mohamed-362b99168/"
            target="_blank"
          >
            <BsLinkedin className="text-[#20c997] text-lg cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
