import React, { useState, useEffect } from "react";
import axios from "axios";

function Portfolio() {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tabs")
      .then((response) => {
        setTabs(response.data);
        setActiveTab(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-[#343a40] flex flex-col h-[screen]">
      <div className="relative">
        <h1 className="text-9xl font-bold flex justify-center mt-[80px] mb-[60px] text-[#6c757d] opacity-20">
          PORFOLIO
        </h1>
        <h2 className="text-white text-4xl flex justify-center font-bold absolute left-[43%] top-[47%] border-b border-b-[#20c997] border-b-4">
          My Work
        </h2>
      </div>
      <div className="flex justify-center gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`text-lg font-semibold tab-btn ${
              activeTab && activeTab.id === tab.id
                ? "text-[#20c997] font-bold border-b border-b-[#20c997] border-b-2"
                : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {activeTab && (
        <div className="tab-content mt-12 mb-16 grid grid-cols-3 gap-6 m-auto ">
          {/* <p>{activeTab.content}</p> */}
          <img
            src={activeTab.img[0]}
            className="w-[340px] rounded-[10px] cursor-pointer"
            onClick={() => window.my_modal_3.showModal()}
          />
          <img
            src={activeTab.img[1]}
            className="w-[340px] rounded-[10px] cursor-pointer"
          />
          <img
            src={activeTab.img[2]}
            className="w-[340px] rounded-[10px] cursor-pointer"
          />
          <dialog id="my_modal_3" className="modal ">
            <form method="dialog" className="modal-box">
              <div className="flex gap-5">
                <div className="carousel carousel-center w-[800px] p-4 space-x-4 rounded-box">
                  <div className="carousel-item">
                    <img
                      src={activeTab.img[0]}
                      className="rounded-box w-[250px] h-[280px] rounded-[10px] cursor-pointer"
                    />
                  </div>
                </div>
                <div className="w-[800px]">
                  <p>
                    Quidam lisque persius interesset his et, in quot quidam
                    persequeris vim, ad mea essent possim iriure. Lisque persius
                    interesset his et, in quot quidam persequeris vim, ad mea
                    essent possim iriure.
                  </p>
                </div>
              </div>
              <button className="btn bg-transparent hover:bg-transparent border-none">
                close
              </button>
            </form>
          </dialog>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
