import cv from "../assets/cv.pdf";
import { FaDownload } from "react-icons/fa";

function Summary() {
  return (
    <div className="bg-[#212529] flex flex-col w-[82vw] h-[screen]">
      <div className="relative">
        <h1 className="text-9xl font-bold flex justify-center mt-[80px] mb-[60px] text-[#6c757d] opacity-20">
          SUMMARY
        </h1>
        <h2 className="text-white text-4xl flex justify-center font-bold absolute left-[46%] top-[47%] border-b border-b-[#20c997] border-b-4">
          Resume
        </h2>
      </div>
      <div className="flex justify-center gap-8">
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-6">My Education</h2>
          <div className="w-[530px] h-[210px] bg-[#111418] flex flex-col justify-center rounded-[8px]">
            <p className="text-white bg-[#20c997] w-[90px] h-[25px] flex justify-center ml-5 rounded-[6px]">
              2017-2021
            </p>
            <h2 className="mb-2 mt-2 w-[fit-content] text-white text-2xl ml-5 font-semibold">
              Computer Science
            </h2>
            <h4 className="mb-3 text-[#20c997] w-[fit-content] ml-5 ">
              International University
            </h4>
            <p className="w-[500px] ml-5">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className="w-[530px] h-[210px] bg-[#111418] flex flex-col justify-center rounded-[8px] mt-6">
            <p className="text-white bg-[#20c997] w-[90px] h-[25px] flex justify-center ml-5 rounded-[6px]">
              2017-2021
            </p>
            <h2 className="mb-2 mt-2 w-[fit-content] text-white text-2xl ml-5 font-semibold">
              Computer Science
            </h2>
            <h4 className="mb-3 text-[#20c997] w-[fit-content] ml-5 ">
              International University
            </h4>
            <p className="w-[500px] ml-5">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className="w-[530px] h-[210px] bg-[#111418] flex flex-col justify-center rounded-[8px] mt-6">
            <p className="text-white bg-[#20c997] w-[90px] h-[25px] flex justify-center ml-5 rounded-[6px]">
              2017-2021
            </p>
            <h2 className="mb-2 mt-2 w-[fit-content] text-white text-2xl ml-5 font-semibold">
              Computer Science
            </h2>
            <h4 className="mb-3 text-[#20c997] w-[fit-content] ml-5 ">
              International University
            </h4>
            <p className="w-[500px] ml-5">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-6">My Exprience</h2>
          <div className="w-[530px] h-[210px] bg-[#111418] flex flex-col justify-center rounded-[8px]">
            <p className="text-white bg-[#20c997] w-[90px] h-[25px] flex justify-center ml-5 rounded-[6px]">
              2017-2021
            </p>
            <h2 className="mb-2 mt-2 w-[fit-content] text-white text-2xl ml-5 font-semibold">
              Computer Science
            </h2>
            <h4 className="mb-3 text-[#20c997] w-[fit-content] ml-5 ">
              International University
            </h4>
            <p className="w-[500px] ml-5">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className="w-[530px] h-[210px] bg-[#111418] flex flex-col justify-center rounded-[8px] mt-6">
            <p className="text-white bg-[#20c997] w-[90px] h-[25px] flex justify-center ml-5 rounded-[6px]">
              2017-2021
            </p>
            <h2 className="mb-2 mt-2 w-[fit-content] text-white text-2xl ml-5 font-semibold">
              Computer Science
            </h2>
            <h4 className="mb-3 text-[#20c997] w-[fit-content] ml-5 ">
              International University
            </h4>
            <p className="w-[500px] ml-5">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className="w-[530px] h-[210px] bg-[#111418] flex flex-col justify-center rounded-[8px] mt-6">
            <p className="text-white bg-[#20c997] w-[90px] h-[25px] flex justify-center ml-5 rounded-[6px]">
              2017-2021
            </p>
            <h2 className="mb-2 mt-2 w-[fit-content] text-white text-2xl ml-5 font-semibold">
              Computer Science
            </h2>
            <h4 className="mb-3 text-[#20c997] w-[fit-content] ml-5 ">
              International University
            </h4>
            <p className="w-[500px] ml-5">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col items-start">
          <h2 className="text-white text-2xl font-bold mb-8">My Skills</h2>

          <div className="flex justify-center gap-[30px]">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg font-semibold ">
                  Web Design
                </h3>
                <h3 className="text-white text-medium ">60%</h3>
              </div>

              <progress
                className="progress progress-success w-[530px] mb-6"
                value="60"
                max="100"
              ></progress>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg font-semibold ">
                  JavaScript
                </h3>
                <h3 className="text-white text-medium ">80%</h3>
              </div>
              <progress
                className="progress progress-success w-[530px] mb-6"
                value="80"
                max="100"
              ></progress>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg font-semibold ">HTML/CSS</h3>
                <h3 className="text-white text-medium ">96%</h3>
              </div>
              <progress
                className="progress progress-success w-[530px] mb-6"
                value="96"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg font-semibold ">React JS</h3>
                <h3 className="text-white text-medium ">80%</h3>
              </div>
              <progress
                className="progress progress-success w-[530px] mb-6"
                value="80"
                max="100"
              ></progress>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg font-semibold ">Bootstrap</h3>
                <h3 className="text-white text-medium ">70%</h3>
              </div>
              <progress
                className="progress progress-success w-[530px] mb-6"
                value="70"
                max="100"
              ></progress>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg font-semibold ">Tailwind</h3>
                <h3 className="text-white text-medium ">80%</h3>
              </div>
              <progress
                className="progress progress-success w-[530px] mb-6"
                value="80"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
      <button className="btn w-[220px] h-[55px] bg-[transparent] border-[#6c757d] rounded-full hover:bg-[#6c757d] hover:text-white m-auto mt-10 mb-6">
        <a href={cv} download className="text-white">
          Download CV
        </a>
        <FaDownload />
      </button>
    </div>
  );
}

export default Summary;
