import React, { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTopArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 text-lg rounded-full p-4 cursor-pointer bg-[#121212] hover:bg-[#20c997] text-white ${
        showArrow ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <SlArrowUp />
    </div>
  );
};

export default ScrollToTopArrow;
