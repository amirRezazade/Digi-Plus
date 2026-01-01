import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bgImg from "../../../assets/images/bg-images/popular-brand-bg.png";
import { Link } from "react-router-dom";

export default function PopularBrandsSlider() {
  let brands = [
    {
      name: "Apple",
      img: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
    },

    {
      name: "Oppo",
      img: "https://www.freepnglogos.com/uploads/oppo-logo-png/oppo-green-png-logo-11.png",
    },
    {
      name: "Realme",
      img: "https://crystalpng.com/wp-content/uploads/2025/05/realme-logo-600x600.png",
    },
    {
      name: "Vivo",
      img: "https://crystalpng.com/wp-content/uploads/2025/05/vivo-logo-1024x1024.png",
    },
    {
      name: "Dodge",
      img: "https://crystalpng.com/wp-content/uploads/2025/07/DODGE-1024x1024.png",
    },
    {
      name: "Calvin Klein",
      img: "https://logoeps.com/wp-content/uploads/2013/01/calvin-klein-.eps-logo-vector-200x200.png",
    },
    {
      name: "Samsung",
      img: "https://www.freepnglogos.com/uploads/samsung-simple-logo-transparent-png-25.png",
    },
    {
      name: "Annibale Colombos",
      img: "https://annibalecolombo.com/Themes/default/img/logo.png",
    },
    {
      name: "Rolex",
      img: "https://www.freepnglogos.com/uploads/rolex-png-logo/rolex-company-png-logo-14.png",
    },
    {
      name: "Nike",
      img: "https://crystalpng.com/wp-content/uploads/2024/08/Nike-blue-logo-png.png",
    },
    {
      name: "Chrysler",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3w6L1C-awU6wxXdc0c0uqhZSd7_lp8GiXZx6isqGnnPoFRx2fSB1aUQ&s",
    },
    {
      name: "Chanel",
      img: "https://crystalpng.com/wp-content/uploads/2025/02/chanel-logo-02-1024x1024.png",
    },
    {
      name: "Gucci",
      img: "https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/14215/1706236904_MR-cricutbundlesvg-lg231223t216-261202494122.jpeg&width=800&height=800&quality=90&format=auto&fit=pad",
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
          className="h-full"
          modules={[Navigation, Autoplay]}
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
