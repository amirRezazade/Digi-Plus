import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeMainSlider() {
  let products = [1, 2, 3, 4];
  return (
    <div className="  xl:col-span-9 min-h-auto relative rounded-xl md:rounded-4xl overflow-hidden">
      <Swiper
        className="max-w-full "
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".my-next",
          prevEl: ".my-prev",
        }}
        pagination={{
          el: ".my-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        speed={700}
        loop={true}
        slidesPerView={1}
      >
        {products.map((product) => (
          <SwiperSlide className="">
            <img className="w-full min-h-[150px]" src="https://digiplus.aet-web.ir/wp-content/uploads/2025/03/slider-img2.png" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="my-prev hidden xs:inline-block fill-gray absolute top-1/2 -right-1 -translate-y-1/2 cursor-pointer z-1 -rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
          <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
        </svg>
      </button>
      <button className="my-next hidden xs:inline-block fill-gray absolute top-[50%] -left-1 -translate-y-1/2 cursor-pointer z-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
          <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
        </svg>
      </button>
      <div className="my-pagination hidden sm:inline-block absolute bottom-0! z-1 h-4!"></div>
    </div>
  );
}
