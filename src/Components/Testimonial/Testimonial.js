import TestimonialSwipe from "./TestimonialSwipe";

const Testimonial = () => {
  return (
    <div className="bg-gray-900 flex flex-col justify-center items-center">
      <div className="text-center flex flex-col items-center mx-5 ">
        <div className="h-[6px] w-[70px] mt-10 mb-5  bg-[#45c0c4]"></div>
        <h1 className="text-5xl font-bold text-gray-300 pt-2">
          What People say About Me
        </h1>
        <p className="text-xl text-gray-300 mt-2">
          I don't just say it, I have it proven. Here are testimonials from some
          of my noble Coleague
        </p>
      </div>

      <div>
        <TestimonialSwipe />
      </div>
      <div className="flex items-center gap-2 mt-5 mb-10">
        <div className="h-5 w-5 bg-sky-400 rounded-full hover:scale-[1.4] transition-all duration-500 ease-out  cursor-pointer"></div>
        <div className="h-7 w-7 bg-sky-900 rounded-full  hover:scale-[1.4] transition-all duration-500 ease-out  cursor-pointer"></div>
        <div className="h-5 w-5 bg-sky-400 rounded-full hover:scale-[1.4] transition-all duration-500 ease-out  cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Testimonial;
