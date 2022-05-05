import Typical from "react-typical";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../Images/one.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div
      id="Home"
      className=" h-[700px] bg-black flex items-center justify-center text-center relative  "
    >
      <img
        src={logo}
        alt=""
        className="absolute opacity-[0.1] h-[700px] w-screen object-cover z-10  "
      />
      <div className=" z-20 ">
        <h1
          data-aos="zoom-in"
          className="text-[#45c0c4]  text-5xl lg:text-7xl font-bold uppercase "
        >
          Jamiu Babatunde
        </h1>
        <p className="text-gray-200 font-semibold text-2xl lg:text-4xl mt-10 mx-3">
          I'm a
          <Typical
            loop={Infinity}
            wrapper={"b"}
            steps={[
              "  Web Developer",
              4000,
              "  Graphic Designer",
              4000,
              "  Freelancer",
              4000,
            ]}
          />
        </p>
        <a href="#Contact">
          <button className=" btn text-white text-2xl font-semibold border-4 mt-20 border-[#45c0c4] py-1 px-3 rounded hover:bg-[#45c0c4] hover:scale-[1.1]   transition ease-in-out duration-300  z-[1]  ">
            Hire Me
          </button>
        </a>
      </div>
      <a
        href="#About"
        className="text-[#45c0c4] absolute bottom-20 text-5xl z-10 hover:scale-[1.2] transition-all ease-in-out duration-500 "
      >
        <IoIosArrowDown />
      </a>
    </div>
  );
};

export default Home;
