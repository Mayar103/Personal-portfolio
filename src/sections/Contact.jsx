import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div className="bg-[#212529] flex flex-col h-[screen]">
      <div className="relative">
        <h1 className="text-9xl font-bold flex justify-center mt-[80px] mb-[60px] text-[#6c757d] opacity-20">
          CONTACT
        </h1>
        <h2 className="text-white text-4xl flex justify-center font-bold absolute left-[43%] top-[47%] border-b border-b-[#20c997] border-b-4">
          Get in Touch
        </h2>
      </div>
      <div className="flex justify-evenly gap-3">
        <div>
          <div className="w-[170px] text-white">
            <h1 className="text-xl font-semibold mb-3">ADDRESS</h1>
            <p className="leading-7 mb-6 font-xl text-[#dee3e4]">
              4th Floor, Plot No.22, 145 Murphy Canyon Rd. San Diego CA 2028
            </p>
          </div>
          <div>
            <div className="flex gap-3 items-center mb-3 text-[#dee3e4]">
              <BsFillTelephoneFill className="text-[#20c997] text-xl" />
              [+20]1273246115
            </div>
            <div className="flex gap-3 items-center text-[#dee3e4]">
              <MdEmail className="text-[#20c997] text-xl" />
              mayarmohamed775@gmail.com
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold mt-9 mb-2 text-white">
              FOLLOW ME
            </h1>
            <div className="flex gap-4">
              <a href="https://github.com/Mayar103" target="_blank">
                <BsGithub className="text-[#20c997] text-xl cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/mayar-mohamed-362b99168/"
                target="_blank"
              >
                <BsLinkedin className="text-[#20c997] text-xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <form>
          <h2 className="text-xl font-semibold mb-3 text-white">
            SEND ME A NOTE
          </h2>
          <div className="flex gap-[20px]">
            <input
              type="text"
              placeholder="Name"
              className="input w-[400px]  bg-[#232a31] focus:outline-[#20c997]"
            />
            <input
              type="text"
              placeholder="Email"
              className="input w-[400px]  bg-[#232a31] focus:outline-[#20c997]"
            />
          </div>
          <div>
            <textarea
              placeholder="Tell me more about your needs..."
              className="input w-[820px] h-[140px] bg-[#232a31] mt-4 p-3 focus:outline-[#20c997]"
            ></textarea>
          </div>
          <button className="btn bg-[#20c997] w-[12vw] h-[7.2vh] rounded-full hover:bg-[#1baa80] text-white font-semibold mt-5 mb-12 m-auto">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;