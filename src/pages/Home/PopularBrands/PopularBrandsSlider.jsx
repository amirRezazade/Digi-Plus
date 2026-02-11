import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bgImg from "../../../assets/images/bg-images/popular-brand-bg.png";
import { Link } from "react-router-dom";

import apple from "../../../assets/images/brands/apple.png";
import oppo from "../../../assets/images/brands/oppo.png";
import realme from "../../../assets/images/brands/realme.png";
import vivo from "../../../assets/images/brands/vivo.png";
import dodge from "../../../assets/images/brands/dodge.png";
import samsung from "../../../assets/images/brands/samsung.png";
import rolex from "../../../assets/images/brands/rolex.png";
import nike from "../../../assets/images/brands/nike.png";
import chrysler from "../../../assets/images/brands/chrysler.png";
import chanel from "../../../assets/images/brands/chanel.png";
import gucci from "../../../assets/images/brands/gucci.png";
import kalvinKlein from "../../../assets/images/brands/calvin-klein.png";
import annibaleColombo from "../../../assets/images/brands/annibale-colombo.png";

export default function PopularBrandsSlider() {
  let brands = [
    {
      name: "Apple",
      img: apple,
    },

    {
      name: "Oppo",
      img: oppo,
    },
    {
      name: "Realme",
      img: realme,
    },
    {
      name: "Vivo",
      img: vivo,
    },
    {
      name: "Dodge",
      img: dodge,
    },
    {
      name: "Calvin Klein",
      img: kalvinKlein,
    },
    {
      name: "Samsung",
      img: samsung,
    },
    {
      name: "Annibale Colombos",
      img: annibaleColombo,
    },
    {
      name: "Rolex",
      img: rolex,
    },
    {
      name: "Nike",
      img: nike,
    },
    {
      name: "Chrysler",
      img: chrysler,
    },
    {
      name: "Chanel",
      img: chanel,
    },
    {
      name: "Gucci",
      img: gucci,
    },
  ];
  return (
    <div className="flex items-center justify-center px-7 md:px-10 py-1 lg:mt-5 h-24 relative">
      <img className="absolute top-0 left-0 w-full h-full -z-10" src={bgImg} alt="" />
      <button className="brands-prev  fill-white absolute top-1/2 right-0 md:right-2 -translate-y-1/2 cursor-pointer py-5 px-1 z-1 -rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
          <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
        </svg>
      </button>
      <div className="w-full h-full bg-white rounded-sm">
        <Swiper
          className="h-full py-2!"
          modules={[Navigation]}
          navigation={{
            nextEl: ".brands-next",
            prevEl: ".brands-prev",
          }}
          breakpoints={{
            450: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          speed={400}
          freeMode={true}
          loop={true}
          slidesPerView={3}
        >
          {brands.map((brand) => (
            <SwiperSlide className="lg:hover:scale-105 ">
              <Link to={`/shop?brand=${brand.name}`}>
                <img className="w-full h-full object-contain" src={brand.img} alt={brand.name} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="brands-next  fill-white absolute top-[50%] left-0 md:left-2 -translate-y-1/2 cursor-pointer py-5 px-1 z-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
          <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
        </svg>
      </button>
    </div>
  );
}
