import cv from "../../public/Images/Mayar Hassan's resume.pdf";

function About() {
  return (
    <>
      <div className="bg-[#212529] flex flex-col h-[screen]">
        <div className="relative flex flex-col items-center">
          <h1 className="min-[280px]:text-5xl md:text-8xl md:text-9xl font-bold flex justify-center mt-[80px] mb-[60px] text-[#6c757d] opacity-20">
            ABOUT ME
          </h1>
          <h2 className="text-white min-[280px]:text-xl md:text-4xl flex justify-center font-bold absolute top-[47%] border-b border-b-[#20c997] border-b-4">
            Know Me More
          </h2>
        </div>
        <div className="flex min-[280px]:flex-col lg:flex-row xl:justify-evenly xl:gap-[50px] mt-[50px] mb-[80px]">
          <div className="min-[280px]:w-[270px] min-[450px]:w-[350px] sm:w-[80vw] lg:w-[40vw] min-[280px]:m-auto min-[280px]:text-center lg:text-left">
            <h2 className="mb-[15px] text-white text-2xl font-bold">
              I am <span className="text-[#20c997]">Mayar Hassan</span>, a Web
              Developer
            </h2>
            <p className="mb-[18px] leading-8 min-[280px]:text:md text-[hsla(0,0%,100%,.7)]">
              I specialize in building custom websites at affordable prices, offering full flexibility on the features you want to implement. Whether you are looking for a specific template or have a unique vision for your project, I can bring it to life. I also provide the option to choose major colors, images, and overall design elements to align with your brand or personal style.
            </p>
            <p className="leading-8 min-[280px]:text:md text-[hsla(0,0%,100%,.7)]">
            I am passionate about creating visually appealing user interfaces that reflect modern design trends and new techniques. My focus is on creating websites that are not only functional but also visually engaging and user-friendly. 
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 min-[280px]:w-[270px] min-[450px]:w-[350px] sm:w-[40vw] min-[280px]:m-auto md:w-[70vw] lg:w-[20vw] lg:mr-[90px] min-[280px]:mt-[60px] lg:mt-0">
            <div className="flex gap-[5px] md:mb-[1rem] lg:mb-0">
              <h3 className="text-white text-base font-semibold">Name:</h3>
              <p className="text-[hsla(0,0%,100%,.7)]">Mayar Hassan</p>
            </div>
            <div className="divider mb-[0.5rem] md:hidden lg:flex"></div>
            <div className="flex gap-[5px]">
              <h3 className="text-white text-base font-semibold">Email:</h3>
              <a
                className="text-[#20c997] cursor-pointer hover:text-[#1baa80]"
                href="mailto:mayarmohamed775@gmail.com"
              >
                mayarmohamed775@gmail.com
              </a>
            </div>
            <div className="divider mt-[0.5rem] mb-[0.5rem] md:hidden lg:flex"></div>
            <div className="flex gap-[5px]">
              <h3 className="text-white text-base font-semibold">Age:</h3>
              <p className="text-[hsla(0,0%,100%,.7)]">26</p>
            </div>
            <div className="divider mt-[0.5rem] mb-[0.5rem] md:hidden lg:flex"></div>
            <div className="flex gap-[5px] mb-[28px]">
              <h3 className="text-white text-base font-semibold">From:</h3>
              <p className="text-[hsla(0,0%,100%,.7)]">Ismailia, Egypt</p>
            </div>
            <div>
              <button className="btn bg-[#20c997] min-[280px]:w-[180px] sm:w-[22vw] lg:w-[200px] xl:w-[180px] lg:h-[5vh] rounded-full hover:bg-[#1baa80] md:m-auto">
                <a href={cv} download className="text-white">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-evenly gap-18 mt-14 mb-24">
          <div className="w-[120px]">
            <h1 className="text-5xl font-semibold mb-3">1+</h1>
            <p className="text-[#dee3e4]">Years Experiance</p>
          </div>
          <div className="w-[120px]">
            <h1 className="text-5xl font-semibold mb-3">250+</h1>
            <p className="text-[#dee3e4]">good deedback</p>
          </div>
          <div className="w-[120px]">
            <h1 className="text-5xl font-semibold mb-3">6+</h1>
            <p className="text-[#dee3e4]">Projects Done</p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default About;
