import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div id="Service" className="bg-gray-800 pt-10 relative pb-10  ">
      <div className="text-center mt-10 text-[#F3F4F6]">
        <h1 className=" text-6xl font-bold pt-5 ">My Services</h1>
        <p className="mt-5 text-xl font-semibold text-gray-300 mx-5">
          I am a person of consistent mindset for growth and innovation. <br />{" "}
          I Can provide the impeccable services below to clients across the
          globe.
        </p>
      </div>

      <ServiceCard className="" />
      <div className="flex justify-center ">
        <div className="h-20 w-[6px] mt-0 bg-[#45c0c4] absolute z-[1]   "></div>
      </div>
    </div>
  );
};

export default Service;
