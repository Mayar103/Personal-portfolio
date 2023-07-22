import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";

function Welcome() {
  const [texts, setTexts] = useState([
    "Mayar Mohamed",
    "a Web Developer",
    "a UI/UX Developer",
  ]);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const delay = isRemoving ? 80 : 120;
    const timer = setTimeout(() => {
      const length = displayText.length;

      if (!isRemoving) {
        if (length < text.length) {
          setDisplayText((prevDisplayText) => prevDisplayText + text[length]);
        } else {
          setIsRemoving(true);
        }
      } else {
        if (length > 0) {
          setDisplayText((prevDisplayText) =>
            prevDisplayText.slice(0, length - 1)
          );
        } else {
          setIsRemoving(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isRemoving, currentTextIndex, texts]);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://harnishdesign.net/demo/react/simone/demo/images/intro-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h3 className="text-white font-semibold text-3xl mb-8">Welcome</h3>
          <h1 className="text-white font-bold text-5xl mb-8">
            I'm {displayText}
          </h1>
          <h2 className="text-[#dee3e4] text-2xl mb-8">
            based in Ismailia, Egypt.
          </h2>
          <Link to="contact" smooth="true" duration={600}>
            <button className="btn border-[#20c997] bg-transparent text-[#20c997] rounded-full w-[140px] hover:bg-[#20c997] hover:text-white">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
      <div className="cursor-pointer ">
        <Link to="about" smooth="true" duration={500}>
          <IoIosArrowDown className="animate-bounce text-3xl absolute bottom-3 hover:text-[#20c997]" />
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
