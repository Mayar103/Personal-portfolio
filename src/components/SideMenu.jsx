import { NavLink } from "react-router-dom";

function SideMenu() {
  return (
    <>
      <div className="h-screen bg-[#121212] flex flex-col items-center">
        <div>
          <img
            src="../src/assets/img.jpg"
            className="rounded-full h-[125px] w-[125px] mt-[70px] mb-[18px]"
          />
          <h1 className="text-white font-semibold text-[18px]">
            Mayar Mohamed
          </h1>
        </div>
        <ul className="menu flex flex-col gap-[8px] mt-[40px]">
          <li className="w-[30px]">
            <a className="font-semibold text-[16px] hover:text-[#20c997] hover:bg-transparent focus:text-[#20c997]">
              Home
            </a>
          </li>
          <li>
            <a className="font-semibold text-[16px] hover:text-[#20c997] hover:bg-transparent">
              About me
            </a>
          </li>
          <li>
            <a className=" font-semibold text-[16px] hover:text-[#20c997] hover:bg-transparent">
              What I do
            </a>
          </li>
          <li>
            <a className="font-semibold text-[16px] hover:text-[#20c997] hover:bg-transparent">
              Resume
            </a>
          </li>
          <li>
            <a className="font-semibold text-[16px] hover:text-[#20c997] hover:bg-transparent">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
