import { FaPencilRuler } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";

function Services() {
  const services = [
    {
      id: 1,
      name: "UI/UX",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: <FaPencilRuler />,
    },
    {
      id: 2,
      name: "Web development",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: <CgScreen />,
    },
    {
      id: 3,
      name: "UI/UX",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: <FaPalette />,
    },
    {
      id: 4,
      name: "UI/UX",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: <FaPalette />,
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
        <div className="flex justify-evenly mt-[50px]">
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
