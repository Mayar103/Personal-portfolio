import cv from "../assets/cv.pdf";

function About() {
  return (
    <>
      <div className="bg-[#212529] flex flex-col h-[screen]">
        <div className="relative">
          <h1 className="text-9xl font-bold flex justify-center mt-[80px] mb-[60px] text-[#6c757d] opacity-20">
            ABOUT ME
          </h1>
          <h2 className="text-white text-4xl flex justify-center font-bold absolute left-[42%] top-[47%] border-b border-b-[#20c997] border-b-4">
            Know Me More
          </h2>
        </div>
        <div className="flex justify-evenly gap-[50px] mt-[50px]">
          <div className="w-[48vw]">
            <h2 className="mb-[15px] text-white text-2xl font-bold">
              I'm <span className="text-[#20c997]">Mayar Mohamed</span>, a Web
              Developer
            </h2>
            <p className="mb-[18px] leading-8 text-lg">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="leading-8 text-lg">
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
          <div className="w-[20vw]">
            <div className="flex gap-[5px]">
              <h3 className="text-white text-base font-semibold">Name:</h3>
              <p>Mayar Mohamed</p>
            </div>
            <div className="divider mt-[0.5rem] mb-[0.5rem]"></div>
            <div className="flex gap-[5px]">
              <h3 className="text-white text-base font-semibold">Email:</h3>
              <a
                className="text-[#20c997] cursor-pointer hover:text-[#1baa80]"
                href="mailto:mayarmohamed775@gmail.com"
              >
                mayarmohamed775@gmail.com
              </a>
            </div>
            <div className="divider mt-[0.5rem] mb-[0.5rem]"></div>
            <div className="flex gap-[5px]">
              <h3 className="text-white text-base font-semibold">Age:</h3>
              <p>24</p>
            </div>
            <div className="divider mt-[0.5rem] mb-[0.5rem]"></div>
            <div className="flex gap-[5px] mb-[28px]">
              <h3 className="text-white text-base font-semibold">From:</h3>
              <p>Ismailia, Egypt</p>
            </div>
            <div>
              <button className="btn bg-[#20c997] w-[12vw] h-[7.5vh] rounded-full hover:bg-[#1baa80]">
                <a href={cv} download className="text-white">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly gap-18 mt-14 mb-24">
          <div className="w-[120px]">
            <h1 className="text-5xl font-semibold mb-3">10+</h1>
            <p className="text-[#dee3e4]">Years Experiance</p>
          </div>
          <div className="w-[120px]">
            <h1 className="text-5xl font-semibold mb-3">250+</h1>
            <p className="text-[#dee3e4]">Happy Clients</p>
          </div>
          <div className="w-[120px]">
            <h1 className="text-5xl font-semibold mb-3">650+</h1>
            <p className="text-[#dee3e4]">Projects Done</p>
          </div>
          <div className="w-[120px]">
            <h1 className="text-5xl font-semibold mb-3">650+</h1>
            <p className="text-[#dee3e4]">Projects Done</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;