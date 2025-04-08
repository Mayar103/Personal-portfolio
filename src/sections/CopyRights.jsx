import { Link } from "react-scroll";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function CopyRights() {
  return (
    <div className="bg-[#212529] flex min-[180px]:flex-col md:flex-row min-[180px]:justify-evenly md:justify-around md:gap-[200px] items-center text-white min-[180px]:h-[90px] md:h-[80px]">
      <div className="min-[180px]:text-[12px] md:text-[14px] lg:text-[16px]">
        <h1>
          Copyright © 2025{"  "}
          <Link to="home" smooth="true">
            <span className="text-[#20c997] cursor-pointer">Mayar</span>
          </Link>
          . All Rights Reserved.
        </h1>
      </div>
      <div className="items-center min-[180px]:gap-4 md:gap-4 sm:mt-0 lg:mt-20 xl:mt-44 min-[180px]:flex lg:hidden">
        <a href="mailto:mayarmohamed775@gmail.com" target="_blank" rel="noreferrer">
          <MdEmail className="text-[#20c997] text-2xl cursor-pointer" />
        </a>
        <a href="https://github.com/Mayar103" target="_blank" rel="noreferrer">
          <BsGithub className="text-[#20c997] text-lg cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/mayar-mohamed-362b99168/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="text-[#20c997] text-lg cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default CopyRights;
