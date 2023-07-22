import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const SideMenu = () => {
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

  return (
    <>
      <div className="h-screen bg-[#121212] flex flex-col items-center">
        <div>
          <img
            src="Images/pro.jpg"
            className="rounded-full h-[135px] w-[135px] mt-[70px] mb-[18px]"
          />
        </div>
        <h1 className="text-white font-semibold text-[20px]">Mayar Mohamed</h1>
        <ul className="menu flex flex-col gap-[8px] mt-[60px] mr-[70px]">
          <li
            className={`w-[30px] ${
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
            className={`w-[30px] ${
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
            className={`w-[30px] ${
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
            className={`w-[30px] ${
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
            className={`w-[30px] ${
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
            className={`w-[30px] ${
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
        <div className="flex items-center gap-4 mt-40">
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
