import { TfiClose } from "react-icons/tfi";

function CopyRights() {
  return (
    <div className="bg-[#343a40] flex justify-around gap-[200px] items-center text-white h-[70px]">
      <div>
        <h1>
          Copyright © 2023{"  "}
          <span className="text-[#20c997] cursor-pointer">Mayar</span>. All
          Rights Reserved.
        </h1>
      </div>
      <div className="flex gap-4">
        <h2
          className="hover:text-[#20c997] cursor-pointer bg-none"
          onClick={() => window.my_modal_1.showModal()}
        >
          Terms & Policy
        </h2>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg"> Terms & Policy</h3>
              <div className="modal-action">
                <button className="btn bg-transparent hover:bg-transparent border-none">
                  <TfiClose className="text-white" />
                </button>
              </div>
            </div>
            <div className="divider mt-[0.1rem] mb-[0.2rem]"></div>
            <p className="py-4">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <p className="py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </form>
        </dialog>
        <h2
          className="hover:text-[#20c997] cursor-pointer bg-none"
          onClick={() => window.my_modal_2.showModal()}
        >
          Disclaimer
        </h2>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg"> Disclaimer</h3>
              <div className="modal-action">
                <button className="btn bg-transparent hover:bg-transparent border-none">
                  <TfiClose className="text-white" />
                </button>
              </div>
            </div>
            <div className="divider mt-[0.1rem] mb-[0.2rem]"></div>
            <p className="py-4">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <p className="py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </form>
        </dialog>
      </div>
    </div>
  );
}

export default CopyRights;
