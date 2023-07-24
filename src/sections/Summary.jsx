import cv from "../../public/Images/Mayar Mohamed Meshabet.pdf";
import { FaDownload } from "react-icons/fa";

function Summary() {
  const education = [
    {
      id: 1,
      study: "Web Development & UI",
      uni: "ITI - Ismailia branch",
      year: "2022-2023",
      content:
        "Web and UI Development 9 months professional diploma, ITI, Ismailia Branch, Ministry of Communications and Information Technology.",
    },
    {
      id: 2,
      study: "Software Fundamentals",
      uni: "ITI - Fayed branch",
      year: "2022",
      content:
        "Software Fundamentals, Intensive Training Program, ITI, Fayed Branch, Ministry of Communications and Information Technology.",
    },
    {
      id: 3,
      study: "Alsun",
      uni: "Suez Canal University",
      year: "2017-2021",
      content:
        "BSc of Languages and Literature, English Dept., Faculty of Alsun, Suez Canal University.",
    },
  ];
  const progress = [
    {
      id: 1,
      name: "Web Design",
      value: "75",
    },
    {
      id: 2,
      name: "JavaScript",
      value: "90",
    },
    {
      id: 3,
      name: "HTML/CSS",
      value: "98",
    },
    {
      id: 4,
      name: "UI/UX",
      value: "88",
    },
    {
      id: 5,
      name: "React",
      value: "85",
    },
    {
      id: 6,
      name: "Angular",
      value: "90",
    },
    {
      id: 7,
      name: "Tailwind",
      value: "90",
    },
    {
      id: 8,
      name: "MaterialUI",
      value: "96",
    },
  ];

  return (
    <div className="bg-[#212529] flex flex-col h-[screen]">
      <div className="relative flex flex-col items-center">
        <h1 className="min-[280px]:text-5xl md:text-8xl font-bold flex justify-center mt-[80px] mb-[60px] text-[#6c757d] opacity-20">
          SUMMARY
        </h1>
        <h2 className="text-white min-[280px]:text-xl md:text-4xl flex justify-center font-bold absolute top-[47%] border-b border-b-[#20c997] border-b-4">
          Resume
        </h2>
      </div>
      <div className="flex min-[280px]:flex-col min-[280px]:m-auto sm:m-auto lg:flex-row justify-center gap-8">
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-6">My Education</h2>
          {education.map((edu) => (
            <div
              key={edu.id}
              className="min-[280px]:w-[270px] min-[450px]:w-[350px] sm:w-[500px] lg:w-[370px] xl:w-[480px] 2xl:w-[530px] min-[280px]:h-[300px] min-[450px]:h-[260px] sm:h-[220px] lg:h-[260px] xl:h-[230px] 2xl:h-[210px] bg-[#111418] flex flex-col justify-center rounded-[8px] mb-[25px]"
            >
              <p className="text-white bg-[#20c997] w-[90px] h-[25px] flex justify-center ml-5 rounded-[6px]">
                {edu.year}
              </p>
              <h2 className="mb-2 mt-2 w-[fit-content] text-white text-2xl ml-5 font-semibold">
                {edu.study}
              </h2>
              <h4 className="mb-3 text-[#20c997] w-[fit-content] ml-5 ">
                {edu.uni}
              </h4>
              <p className="xl:w-[485px] 2xl:w-[500px] ml-5">{edu.content}</p>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-6">My Experience</h2>
          {education.map((edu) => (
            <div
              key={edu.id}
              className="min-[280px]:w-[270px] min-[450px]:w-[350px] sm:w-[500px] lg:w-[370px] xl:w-[480px] 2xl:w-[530px] min-[280px]:h-[300px] min-[450px]:h-[260px] sm:h-[220px] lg:h-[260px] xl:h-[230px] 2xl:h-[210px] bg-[#111418] flex flex-col justify-center rounded-[8px] mb-[25px]"
            >
              <p className="text-white bg-[#20c997] w-[90px] h-[25px] flex justify-center ml-5 rounded-[6px]">
                {edu.year}
              </p>
              <h2 className="mb-2 mt-2 w-[fit-content] text-white text-2xl ml-5 font-semibold">
                {edu.study}
              </h2>
              <h4 className="mb-3 text-[#20c997] w-[fit-content] ml-5 ">
                {edu.uni}
              </h4>
              <p className="xl:w-[485px] 2xl:w-[500px] ml-5">{edu.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col items-start">
          <h2 className="text-white text-2xl font-bold mb-8">My Skills</h2>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {progress.map((prog) => (
              <div key={prog.id}>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg font-semibold">
                    {prog.name}
                  </h3>
                  <h3 className="text-white text-medium">{prog.value}%</h3>
                </div>
                <progress
                  className="progress progress-success min-[280px]:w-[260px] min-[450px]:w-[350px] sm:w-[500px] lg:w-[370px] xl:w-[480px] 2xl:w-[530px]"
                  value={prog.value}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="btn w-[220px] h-[55px] bg-[transparent] border-[#6c757d] rounded-full hover:bg-[#6c757d] hover:text-white m-auto mt-10 mb-16">
        <a href={cv} download className="text-white">
          Download CV
        </a>
        <FaDownload />
      </button>
    </div>
  );
}

export default Summary;
