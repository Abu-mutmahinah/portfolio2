const ServiceCard = () => {
  return (
    <div className=" mb-20 lg:my-20  flex flex-col lg:flex-row items-center  md:gap-5 justify-center">
      <div className=" bg-sky-100 rounded-lg text-gray-600 flex gap-5  mt-20 py-20 items-center flex-col text-center w-[300px] pb-10 transition-all duration-500 ease-out hover:bg-[#45c0c4] hover:shadow-xl ">
        <h1 className="text-2xl t uppercase font-bold mb-5">Branding</h1>
        <div className=" text-xl font-semibold flex flex-col gap-5 ">
          <p> Logo Design </p>
          <p>Brand Logo</p>
        </div>
      </div>

      <div className=" bg-sky-100 rounded-lg text-gray-600 flex gap-5  mt-5  pt-[50px] pb-[150px] items-center flex-col text-center w-[300px] pb-10 transition-all duration-500 ease-out hover:bg-[#45c0c4] hover:shadow-xl ">
        <h1 className="text-2xl  uppercase font-bold mb-5">Web Development</h1>
        <div className=" text-xl font-semibold flex flex-col gap-5 ">
          <p> Blog Website </p>
          <p>E-commerce Website</p>
          <p>Portfolio Website</p>
          <p>Responsive website</p>
        </div>
      </div>

      <div className=" text-gray-600 rounded-lg bg-sky-100 flex gap-5 mt-5 md:mt-20 py-20 items-center flex-col text-center w-[300px] pb-10 transition-all duration-500 ease-out hover:bg-[#45c0c4] hover:shadow-xl ">
        <h1 className="text-2xl  uppercase font-bold mb-5">Graphics</h1>
        <div className=" text-xl font-semibold flex flex-col gap-5 ">
          <p> Flyer Design </p>
          <p>Banner Design</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
