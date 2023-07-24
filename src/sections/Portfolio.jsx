import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";

function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    {
      id: 0,
      title: "All",
    },
    {
      id: 1,
      title: "Angular",
    },
    {
      id: 2,
      title: "React",
    },
    {
      id: 3,
      title: "UI",
    },
  ]);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Greentopia",
      img: "Images/greentopia.PNG",
      cat: "environmental",
      time: "March 2023",
      technologies: "HTML, CSS, React",
      tab: 2,
      content:
        "Greentopia is a blog website concerned with activities for saving environment.",
      github: "https://github.com/Mayar103/Blog-Page",
    },
    {
      id: 2,
      name: "Dawini",
      img: "Images/dawini.PNG",
      cat: "medical",
      time: "Feb 2023",
      technologies: "HTML, Angular, SCSS",
      tab: 1,
      content:
        "A medical website concerned with selling previously used medicin.",
      github: "https://github.com/Med-org-ITI",
    },
    {
      id: 3,
      name: "Yoga",
      img: "Images/yoga.PNG",
      cat: "template",
      time: "April 2023",
      technologies: "HTML, React, Material UI",
      tab: 2,
      content: "A website that is concerned with showing some yoga activities.",
      github: "https://github.com/Mayar103/MUI-",
    },
    {
      id: 4,
      name: "Furnival",
      img: "Images/Cap.PNG",
      cat: "Furniture",
      time: "June 2023",
      technologies: "HTML, React, Material UI, TailwindCSS",
      tab: 2,
      content:
        "An ecommerce website for selling appealing furniture for affordable prices.",
      github: "https://github.com/Graduation-Proj-ITI",
    },
    {
      id: 5,
      name: "Portfolio",
      img: "Images/portfolio.PNG",
      cat: "personal",
      time: "July 2023",
      technologies: "HTML, React, TailwindCSS",
      tab: 2,
      content:
        "A personal portfolio to show previous works and contact info for further works.",
      github: "https://github.com/Mayar103/Portfolio",
    },
    {
      id: 6,
      name: "Furnival",
      img: "Images/f.PNG",
      cat: "design",
      tab: 3,
      technologies: "Figma",
      time: "May 2023",
      content:
        "A UI design for an ecommerce website for selling appealing furniture for affordable prices.",
      figma:
        "https://www.figma.com/proto/VsjfnYy0ZpEcOceGwcD0Av/VD---ITI43?node-id=947-9776&starting-point-node-id=947%3A9776&scaling=scale-down&show-proto-sidebar=1&t=4AEvTsV6fFx4auqs-1",
    },
  ]);

  //Filter
  const dataToRender =
    activeTab === 0 ? items : items.filter((item) => item.tab === activeTab);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const showDetails = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div className="bg-[#343a40] flex flex-col h-[screen]">
      <div className="relative flex flex-col items-center">
        <h1 className="min-[280px]:text-5xl md:text-8xl font-bold flex justify-center mt-[80px] mb-[60px] text-[#6c757d] opacity-20">
          PORFOLIO
        </h1>
        <h2 className="text-white min-[280px]:text-xl md:text-4xl flex justify-center font-bold absolute top-[47%] border-b border-b-[#20c997] border-b-4">
          My Work
        </h2>
      </div>
      <div className="flex justify-center gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`text-lg font-semibold tab-btn ${
              tab.id === activeTab
                ? "text-[#20c997] font-bold border-b border-b-[#20c997] border-b-2"
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className=" tab-content mt-10 mb-16 grid sm:grid-cols-2 2xl:grid-cols-3 gap-6 m-auto">
        {dataToRender.map((tab) => (
          <div key={tab.id}>
            <div className="thisGrid" onClick={() => showDetails(tab)}>
              <div className="hover:opacity-60 ">
                <img
                  src={tab.img}
                  className="relative min-[450px]:w-[350px] min-[450px]:h-[350px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[350px] 2xl:h-[380px] rounded-[10px] cursor-pointer min-[280px]:w-[275px]"
                />
              </div>

              <div className="thisEffect">
                <div className="mt-[50%] text-center text-lg capitalize text-white">
                  <h6 className="text-2xl font-medium">{tab.name}</h6>
                  <p className="text-sm font-small">{tab.cat}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-60">
          <div className="bg-[#343a40] rounded-lg p-6 min-[280px]:w-[270px] min-[280px]:h-[565px] sm:w-[580px] md:w-[600px] md:h-[420px] lg:w-[800px] h-[440px] flex flex-col">
            <div className="flex">
              <h2 className="text-2xl font-semibold min-[280px]:mb-2 md:mb-8 text-white m-auto">
                {selectedItem.name}
              </h2>
              <button
                className="text-white rounded min-[280px]:mb-4 md:mb-12"
                onClick={() => setShowModal(false)}
              >
                <AiOutlineCloseCircle className="text-3xl" />
              </button>
            </div>
            <div className="flex min-[280px]:flex-col md:flex-row justify-evenly items-center gap-8 mt-2">
              <img
                src={selectedItem.img}
                className="min-[280px]:w-[180px] min-[280px]:h-[140px] sm:w-[280px] md:w-[250px] md:h-[260px] lg:w-[350px] h-[290px]"
              />
              <div className="flex flex-col">
                <h3 className="min-[280px]:text-md md:text-lg font-semibold mb-2 text-white">
                  Project info:
                </h3>
                <p className="text-hsla(0,0%,100%)">{selectedItem.content}</p>
                <h3 className="min-[280px]:text-md md:text-lg font-semibold mb-2 mt-4 text-white">
                  Project details:
                </h3>
                <p>
                  <span className="text-white mt-2">Technologies:</span>{" "}
                  {selectedItem.technologies}
                </p>
                <div className="divider mt-1 mb-1"></div>
                <p>
                  <span className="text-white">Time:</span> {selectedItem.time}
                </p>
                <div className="divider mt-1 mb-1"></div>
                <div className="flex items-center gap-2">
                  {selectedItem.id === 6 ? (
                    <div className="flex items-center gap-2">
                      <span className="text-white">Figma:</span>
                      <a href={selectedItem.figma} target="_blank">
                        <FiFigma className="text-[#20c997] text-lg cursor-pointer" />
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-white">Github:</span>{" "}
                      <a href={selectedItem.github} target="_blank">
                        <BsGithub className="text-[#20c997] text-lg cursor-pointer" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
