function SideMenu() {
  return (
    <>
      <div className="h-screen bg-[#121212] w-[18vw] flex flex-col">
        <div>
          <img
            src="../src/assets/img.jpg"
            className="rounded-full h-26 w-26 mt-[50px] mb-[18px]"
          />
          <h1 className="text-white font-semibold text-[18px]">
            Mayar Mohamed
          </h1>
        </div>
        <ul className="menu flex flex-col gap-[8px] mt-[40px]">
          <li className="w-[30px]">
            <a className="font-semibold text-[16px] hover:text-[#20c997] focus:text-[#20c997]">
              Home
            </a>
          </li>
          <li>
            <a className="font-semibold text-[16px] hover:text-[#20c997]">
              About me
            </a>
          </li>
          <li>
            <a className=" font-semibold text-[16px] hover:text-[#20c997]">
              What I do
            </a>
          </li>
          <li>
            <a className="font-semibold text-[16px] hover:text-[#20c997]">
              Resume
            </a>
          </li>
          <li>
            <a className="font-semibold text-[16px] hover:text-[#20c997]">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
