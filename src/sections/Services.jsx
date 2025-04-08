import { FaPencilRuler } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { TbWritingSign } from "react-icons/tb";
import { AiOutlineTranslation } from "react-icons/ai";

function Services() {
  const services = [
    {
      id: 1,
      name: "Web development",
      description:
        "It involves technical skills to build interactive and functional online experiences through various programming languages and frameworks. ",
      icon: <CgScreen />,
    },
    {
      id: 2,
      name: "UI/UX",
      description:
        "It involves designing layouts, color schemes, icons, typography, buttons, and other visual elements to create the look and feel of the product. ",
      icon: <FaPencilRuler />,
    },
    {
      id: 3,
      name: "Content writing",
      description:
        "Content writers are skilled in crafting engaging, informative, and persuasive content that resonates with the target audience and fulfills their objectives.",
      icon: <TbWritingSign />,
    },
    {
      id: 4,
      name: "Translation",
      description:
        "Translation allows us to bridge the gap between different linguistic and cultural communities, enabling effective communication across borders.",
      icon: <AiOutlineTranslation />,
    },
  ];
  return (
    <>
      <div className="bg-[#343a40] flex flex-col h-[screen]">
        <div className="relative flex flex-col items-center">
          <h1 className="min-[280px]:text-5xl md:text-8xl font-bold flex justify-center mt-[80px] mb-[60px] text-[#6c757d] opacity-20">
            SERVICES
          </h1>
          <h2 className="text-white min-[280px]:text-xl md:text-4xl flex justify-center font-bold absolute top-[47%] border-b border-b-[#20c997] border-b-4">
            What I Do?
          </h2>
        </div>
        <div className="flex justify-evenly mt-[40px] lg:mb-[20px]">
          <div className="grid min-[280px]:grid-rows-4 md:gap-2 xl:gap-1 lg:grid-rows-2 grid-flow-col">
            {services.map((service) => (
              <div
                key={service.id}
                className="min-[280px]:w-[270px] min-[450px]:w-[350px] sm:w-[500px] md:w-[540px] lg:w-[410px] xl:w-[470px] flex mb-14"
              >
                <div className="text-[#20c997] min-[280px]:text-3xl lg:text-4xl mr-5">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-white min-[280px]:text-2xl lg:text-xl font-semibold mb-3">
                    {service.name}
                  </h3>
                  <p className="leading-6 min-[280px]:text-xl lg:text-lg text-[hsla(0,0%,100%,.7)]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
