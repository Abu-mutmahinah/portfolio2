import CountUp from "react-countup";

const Fact = () => {
  return (
    <div className="bg-gray-900">
      <div className="py-32 ">
        <div className=" mt-5 text-center mx-10 ">
          <h1 className="text-6xl font-bold text-gray-300">
            Some Cool Fact About Me{" "}
          </h1>
          <p className="text-xl font-semibold text-gray-400 mt-2">
            Over Months I have done many things that Am proud of. <br />
            This motivates Me to continue looking for new challenges in order to
            improve My services.
          </p>
        </div>

        <div className=" text-center flex flex-col gap-20 md:flex-row md:gap-0    justify-around mt-20 ">
          <div>
            <h1 className="text-2xl font-bold uppercase text-gray-300 pb-10 sm:pb-20">
              Projects
            </h1>
            <CountUp
              delay={1}
              end={7}
              suffix={"+"}
              duration={20}
              className="text-6xl text-[#45c0c4] font-bold "
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold uppercase text-gray-300 pb-10 sm:pb-20">
              Code Lines
            </h1>
            <CountUp
              delay={1}
              end={2000}
              suffix={"+"}
              duration={20}
              className="text-6xl text-[#45c0c4] font-bold "
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold uppercase text-gray-300 pb-10 sm:pb-20">
              Hours of work
            </h1>
            <CountUp
              delay={1}
              end={24}
              suffix={"Hrs"}
              duration={20}
              className="text-6xl text-[#45c0c4] font-bold "
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold uppercase text-gray-300 pb-10 sm:pb-20">
              Audience
            </h1>
            <CountUp
              delay={1}
              end={100}
              suffix={"+"}
              duration={20}
              className="text-6xl text-[#45c0c4] font-bold "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fact;
