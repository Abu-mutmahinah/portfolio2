import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { PortfolioList } from "./PortfolioList";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, EffectFade } from "swiper";

const PortfolioSwipe = () => {
  return (
    <div className="  ">
      <div>
        <Swiper
          spaceBetween={50}
          modules={[Navigation, EffectFade, Pagination, Autoplay]}
          affect={"fade"}
          autoplay={true}
          speed={800}
          slidesPerView={3}
          loop={Infinity}
          pagination={{ clickable: true }}
          className="flex justify-center w-[100%] lg:w-[95%] lg:h-[55vh] h-[30vh] px-32  mt-10 hidden lg:block"
        >
          <div className="py-10 flex flex-col md:flex-row  gap-10 px-10 mt-10 justify-center ">
            {PortfolioList.map((items) => {
              return (
                <SwiperSlide className="flex justify-center">
                  <div className="">
                    <div key={items.id}>
                      <img src={items.Img} alt="" className={items.style} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>

        <div className="py-10 flex flex-col gap-10  mt-10 justify-center items-center block lg:hidden">
          {PortfolioList.map((items) => {
            return (
              <div className="z-30">
                <div key={items.id}>
                  <img src={items.Img} alt="" className={items.style} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSwipe;
