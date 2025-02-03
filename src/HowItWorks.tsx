import { BsPlayFill } from "react-icons/bs";

export default function HowItWorks() {
  return (
    <div className="px-4 ">
      <div className="h-64 sm:h-72 lg:h-80  w-full sm:w-[550px] grid place-content-center rounded-2xl mb-16 shadow-lg sm:mx-auto bg-[#C6C6C6] relative">
        <p className="lg:text-3xl text-xl font-semibold text-white uppercase">How it Works</p>
        <div className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 rounded-full absolute -bottom-2 -right-2 border-4 lg:border-8 grid place-content-center bg-black text-white border-white">
          <BsPlayFill className="text-3xl lg:text-5xl" />
        </div>
      </div>
    </div>
  );
}
