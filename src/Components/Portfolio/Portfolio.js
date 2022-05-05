import PortfolioSwipe from "./PortfolioSwipe";

const Portfolio = () => {
  return (
    <div id="Portfolio" className=" bg-gray-800 pb-5 pt-10 ">
      <div className=" pl-10 relative">
        <div className="h-2 w-20 mt-10 mb-4 absolute bg-[#45c0c4]"></div>
        <h1 className="text-5xl text-gray-300 font-bold pt-[70px]">
          My Portfolio
        </h1>
        <p className="text-2xl text-gray-300 pt-5 ">
          Take a beautiful look at some of My works
        </p>
      </div>

      <PortfolioSwipe />
      <div className="text-center flex justify-center md:justify-end md:mr-20 ">
        <button className="text-white text-xl font-semibold border-4 mt-[30px] mb-5 border-[#45c0c4] py-1 px-3 rounded hover:bg-[#45c0c4] hover:scale-[1.1]   transition ease-in-out duration-300">
          See More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
