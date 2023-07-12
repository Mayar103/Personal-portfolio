import { FaPencilRuler } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";

function Services() {
  return (
    <>
      <div className="bg-[#343a40] flex flex-col w-[82vw] h-[screen]">
      <div className="relative">
        <h1 className="text-9xl font-bold flex justify-center mt-[80px] mb-[60px] text-[#6c757d] opacity-20">
          SERVICES
        </h1>
        <h2 className="text-white text-4xl flex justify-center font-bold absolute left-[43%] top-[47%] border-b border-b-[#20c997] border-b-4">
          What I Do?
        </h2>
      </div>
        <div className="flex justify-evenly gap-[50px] mt-[50px]">
          <div className="grid grid-rows-3 grid-flow-col mb-12">
            <div className="w-[420px] flex">
              <div>
                <FaPalette className="text-[#20c997] text-4xl mr-5" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Graphic Design
                </h3>
                <p className="leading-6 text-lg">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
            <div className="w-[420px] flex mb-8">
              <div>
                <CgScreen className="text-[#20c997] text-3xl mr-5" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Web Development
                </h3>
                <p className="leading-6 text-lg">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
            <div className="w-[420px] flex">
              <div>
                <FaPencilRuler className="text-[#20c997] text-3xl mr-5" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  UI&UX Design
                </h3>
                <p className="leading-6 text-lg">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
            <div className="w-[420px] flex">
              <div>
                <FaPalette className="text-[#20c997] text-3xl mr-5" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Graphic Design
                </h3>
                <p className="leading-6 text-lg">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
            <div className="w-[420px] flex">
              <div>
                <FaPalette className="text-[#20c997] text-3xl mr-5" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Graphic Design
                </h3>
                <p className="leading-6 text-lg">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
            <div className="w-[420px] flex">
              <div>
                <FaPalette className="text-[#20c997] text-3xl mr-5" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Graphic Design
                </h3>
                <p className="leading-6 text-lg">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
