import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import shoes from "../../../assets/images/main-header/shoes.jpg";
import laptop from "../../../assets/images/main-header/laptop.jpg";
import watch from "../../../assets/images/main-header/watch.jpg";
import sofa from "../../../assets/images/main-header/sofa.png";
import { Link } from "react-router-dom";
export default function HomeMainSlider() {
  return (
    <div className=" xl:max-w-7/10 2xl:max-w-[75%] min-h-auto relative mb-5 sm:mb-10 xl:mb-0">
      <Swiper
        className="max-w-full h-30 xs:h-45 sm:h-55 md:h-65 lg:h-80 rounded-2xl"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".my-next",
          prevEl: ".my-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".my-pagination",
          clickable: true,
        }}
        spaceBetween={50}
        speed={700}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide className="">
          <Link to="/product/12">
            <img className="w-full object-cover h-full rounded-2xl" src={sofa} alt="sofa" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link to="/product/91">
            <img className="w-full object-cover h-full rounded-2xl" src={shoes} alt="shoes" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link to="/product/94">
            <img className="w-full object-cover h-full rounded-2xl" src={watch} alt="watch" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link to="/product/82">
            <img className="w-full object-cover h-full rounded-2xl" src={laptop} alt="laptop" />
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className=" size-18 hidden sm:inline-block  absolute top-1/2 -right-5 -translate-y-1/2  z-1 -rotate-180 ">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 rotate-90">
          <path d="M 0,700 L 0,700 C 248,463.5 496,227 736,227 C 976,227 1208,463.5 1440,700 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="#ffffff" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0 "></path>
        </svg>
        <button className="my-prev py-3 absolute top-1/2 right-1/2 -translate-y-1/2 rotate-180 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
            <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
          </svg>
        </button>
      </div>
      <div className=" size-18 hidden sm:inline-block fill-gray absolute top-1/2 -left-5 -translate-y-1/2  z-1">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 rotate-90">
          <path d="M 0,700 L 0,700 C 248,463.5 496,227 736,227 C 976,227 1208,463.5 1440,700 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="#ffffff" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0 "></path>
        </svg>
        <button className="my-next py-3 absolute top-1/2 right-1/2 -translate-y-1/2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
            <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
          </svg>
        </button>
      </div>
      <div className="my-pagination hidden sm:inline-block absolute -bottom-5! z-1 h-4!"></div>
    </div>
  );
}
