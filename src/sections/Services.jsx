import { FaPencilRuler } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { TbWritingSign } from "react-icons/tb";
import { AiOutlineTranslation } from "react-icons/ai";

function Services() {
  const services = [
    {
      id: 1,
      name: "UI/UX",
      description:
        "It involves designing layouts, color schemes, icons, typography, buttons, and other visual elements to create the look and feel of the product. ",
      icon: <FaPencilRuler />,
    },
    {
      id: 2,
      name: "Web development",
      description:
        "It involves technical skills to build interactive and functional online experiences through various programming languages and frameworks. ",
      icon: <CgScreen />,
    },
    {
      id: 3,
      name: "Writing",
      description:
        "Content writers are skilled in crafting engaging, informative, and persuasive content that resonates with the target audience and fulfills specific objectives.",
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
      <div className="bg-[#343a40] flex flex-col h-[85vh]">
        <div className="relative">
          <h1 className="text-9xl font-bold flex justify-center mt-[80px] mb-[60px] text-[#6c757d] opacity-20">
            SERVICES
          </h1>
          <h2 className="text-white text-4xl flex justify-center font-bold absolute left-[43%] top-[47%] border-b border-b-[#20c997] border-b-4">
            What I Do?
          </h2>
        </div>
        <div className="flex justify-evenly mt-[40px]">
          <div className="grid grid-rows-2 grid-flow-col">
            {services.map((service) => (
              <div key={service.id} className="w-[500px] flex mb-14">
                <div className="text-[#20c997] text-4xl mr-5">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {service.name}
                  </h3>
                  <p className="leading-6 text-lg">{service.description}</p>
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
