import { Link } from "react-scroll";

function CopyRights() {
  return (
    <div className="bg-[#343a40] flex justify-around gap-[200px] items-center text-white h-[80px]">
      <div>
        <h1>
          Copyright © 2023{"  "}
          <Link to="home" smooth="true">
            <span className="text-[#20c997] cursor-pointer">Mayar</span>
          </Link>
          . All Rights Reserved.
        </h1>
      </div>
    </div>
  );
}

export default CopyRights;
