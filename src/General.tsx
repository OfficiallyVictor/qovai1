import { BsStarFill } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";

export default function General() {
  const ddd = ["Avatar1.png", "Avatar2.png", "Avatar3.png", "Avatar4.png"];
  return (
    <div className="" style={{ fontFamily: "Clash-Display, sans-serif" }}>
      <div className="relative w-fit mx-auto">
        <div className="flex mt-20 px-10 justify-end">
          <div className="h-[40px] pl-10 w-[50px] lg:h-[58px] lg:w-[61px] bg-[#D793E7]"></div>
        </div>
        <div className="backdrop-blur-3xl text-2xl px-4 sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-title capitalize text-center mt-14 pb-4 flex flex-col gap-1 lg:gap-2 ">
          <p className="">generate posts for your </p>
          <p className="">social media using AI</p>
        </div>
        <div className="pb-20 relative overflow-hidden">
          <img src="img1.svg" className="absolute top-0 left-0" alt="" />
          <p  className="max-w-md lg:max-w-xl mx-auto text-xs font-light md:text-sm lg:text-[15px] px-4 text-center mt-3 text-gray-600">
            Automate your business social media post workflow using Ai agent and
            convert your audience into customers. Trusted by businesses.
          </p>
          <div className="">
            <div className="flex mt-5 justify-center items-center gap-1">
              <p className="lg:h-12 h-10 pb-0.5 text-sm bg-black px-8 grid place-content-center rounded-full relative text-white">
                Start your FREE Trial
                <span className="h-5 w-8 bg-black absolute top-1/2 -translate-y-1/2 -right-5"></span>
              </p>
              <div className="h-10 w-10 lg:h-12 lg:w-12  text-white grid place-content-center bg-black rounded-full">
                <FaArrowUpLong className="rotate-45" />
              </div>
            </div>
            <div className="flex flex-col -translate-x-2 sm:-translate-x-6  sm:flex-row items-center sm:items-stretch gap-5 mt-8 font-medium justify-center">
              <div className="flex translate-x-[61px] sm:translate-x-20">
                {ddd.map((el, key) => (
                  <div
                    className={`h-10 w-11  
            ${key === 0 && "z-0 "}
            ${key === 1 && "-translate-x-[50px] z-10"}
            ${key === 2 && "-translate-x-[60px] z-20 "}
            ${key === 3 && "-translate-x-[80px] z-30 "}
             border-black -translate-x-8 rounded-lg shadow-md`}
                  >
                    <img src={el} alt="" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(() => (
                    <BsStarFill className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-400">From 200+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
