import logo from "../Images/crop one.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { NavList } from "./NavList";
import { useState } from "react";
import { ImWhatsapp } from "react-icons/im";
const NavBar = () => {
  let [open, setOpen] = useState(true);
  return (
    <div className="bg-gray-800 flex items-center justify-between px-10 lg:px-20 py-2 fixed w-[100%] z-40 shadow-xl ">
      <a href="#Home">
        <div>
          <img
            src={logo}
            alt=""
            className="h-[50px]  transition ease-in duration-200 hover:scale-[1.1]"
          />
        </div>
      </a>

      <div className="text-white flex  gap-10 text-xl   ">
        <div
          className={` text-2xl flex flex-col  gap-10 mt-6 p-10  font-semibold absolute left-0 top-10  bg-gray-800   transition-all duration-500 ease-in ${
            open ? " left-[-490px] w-[300px] h-[100vh]" : "w-[300px] h-[100vh] "
          }   `}
        >
          {NavList.map((items) => {
            return (
              <div key={items.id}>
                <a href={items.link} className={items.style}>
                  {items.name}
                </a>
              </div>
            );
          })}
          <a href="#Contact">
            <h1 className="border-4 border-[#45c0c4]  lg:hidden py-1 px-3 uppercase  hover:bg-[#45c0c4]  transition ease-in-out duration-300 ">
              Contact Me
            </h1>
          </a>
        </div>
        <div className="hover:scale-[1.1] transition-all duration-300 ease-out">
          <a href="https://wa.me/2349121488365? text=Hello+Abu-Mutmahina+Web-Development">
            <ImWhatsapp className=" text-[#45c0c4] text-3xl" />
          </a>
        </div>

        <a href="#Contact">
          <div className="">
            <h1 className="border-4 border-[#45c0c4] py-1 px-4 uppercase  hover:bg-[#45c0c4] hidden lg:inline transition ease-in-out duration-300 ">
              Contact Me
            </h1>
          </div>
        </a>
        <div
          onClick={() => setOpen(!open)}
          className=" text-4xl text-[#45c0c4] transition ease-in duration-200 hover:scale-[1.1]"
        >
          {open ? <FiMenu /> : <IoClose />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
