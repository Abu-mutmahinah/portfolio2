import one from "../Images/MyLogo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="About" className="bg-gray-900 pt-10 pb-32 relative">
      <div className="lg:grid grid-cols-2 px-10 lg:px-20 pt-5">
        <div className="text-gray-100 ">
          <div className="h-2 w-20 mt-10 bg-[#45c0c4]"></div>
          <h1 className="text-5xl lg:text-6xl font-bold pt-5 ">About Me</h1>
          <div
            data-aos="zoom-in"
            className="text-xl flex flex-col gap-10 mt-10 pb-10 pr-10 "
          >
            <p>
              I'm a Junior Frontend developer. I am here to help you build
              unique website for your small, medium sized and large businesses,
              with the most innovative tools in the market
            </p>
            <p>
              I offer creative web designs, e-commerce website solutions, which
              are highly responsive, user friendly and well optimised for search
              engines.
            </p>
            <p>
              My mode of conduct is to always give My customers unforgettable
              and best services possible.
            </p>
            <p>
              However, My goal is to be able to serve and help clients succeed
              all over the world.
            </p>
          </div>
        </div>
        <div className="z-30 hover:scale-[1.1]  transition-all duration-300 ease-out cursor-pointer lg:h-[500px] lg:w-[450px] lg:ml-10 flex justify-center lg:mt-20">
          <img
            data-aos="zoom-out"
            src={one}
            alt=""
            className="opacity-[0.8]  "
          />
        </div>
      </div>
      <div className="text-center ">
        <button className="text-white text-xl font-semibold border-4 mt-[60px] mb-5 border-[#45c0c4] py-1 px-3 rounded hover:bg-[#45c0c4] hover:scale-[1.1]   transition ease-in-out duration-300">
          View My CV
        </button>
      </div>
      <div className="flex justify-center ">
        <div className="h-20 w-[6px] mt-20 bg-[#45c0c4] absolute z-[1]   "></div>
      </div>
    </div>
  );
};

export default About;
