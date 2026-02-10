import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import mobile from "../../../assets/images/categories/mobile.png";
import laptop from "../../../assets/images/categories/laptop.png";
import headphone from "../../../assets/images/categories/headphone.png";
import furniture from "../../../assets/images/categories/furniture.png";
import kitchen from "../../../assets/images/categories/kitchen.webp";
import mans from "../../../assets/images/categories/mans.png";
import tops from "../../../assets/images/categories/tops.webp";
import whatch from "../../../assets/images/categories/whatch.png";
import beauty from "../../../assets/images/categories/beauty.webp";
import fragrances from "../../../assets/images/categories/fragrances.png";
import sport from "../../../assets/images/categories/sport.webp";
import morotCycle from "../../../assets/images/categories/motor-cycle.webp";

export default function HomeCategorySlider() {
  const categories = [
    {
      img: mobile,
      name: "موبایل",
      id: "smartphones",
    },
    {
      img: laptop,
      name: "لپتاپ",
      id: "laptops",
    },
    {
      img: headphone,
      name: "لوازم جانبی ",
      id: "mobile-accessories",
    },
    {
      img: furniture,
      name: "مبلمان",
      id: "furniture",
    },
    {
      img: kitchen,
      name: "لوزام آشپزخانه",
      id: "kitchen-accessories",
    },
    {
      img: mans,
      name: "مردانه",
      id: "mens-shirts,mens-shoes",
    },
    {
      img: tops,
      name: "زنانه",
      id: "womens-dresses,womens-bags,tops",
    },
    {
      img: whatch,
      name: "ساعت",
      id: "womens-watches,mens-watches",
    },
    {
      img: beauty,
      name: "آرایشی و بهداشتی",
      id: "skin-care,beauty",
    },
    {
      img: fragrances,
      name: "عطر",
      id: "fragrances",
    },
    {
      img: sport,
      name: "لوازم ورزشی",
      id: "sports-accessories",
    },

    {
      img: morotCycle,
      name: "موتور سیکلت",
      id: "motorcycle",
    },
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  if (isMobile)
    return (
      <div className="max-w-full grid grid-cols-3 xs:grid-cols-4  gap-3 justify-center">
        {categories.map((cat) => (
          <Link key={cat.id} to={`/shop?categories=${cat.id}`} className="mx-auto hover:text-red group">
            <div className="gray-shaddow size-24 xs:size-25 rounded-2xl border border-light-gray group-hover:border-red transition-colors duration-300 flex items-center justify-center">
              <img src={cat.img} alt={cat.id} />
            </div>
            <h3 className="mt-1 block truncate transition-colors duration-300">{cat.name}</h3>
          </Link>
        ))}
      </div>
    );
  else
    return (
      <Swiper className="max-w-full" modules={[]} spaceBetween={20} speed={700} slidesPerView={"auto"}>
        {categories.map((cat) => (
          <SwiperSlide key={cat.id} className="w-24! hover:text-red group">
            <Link to={`/shop?categories=${cat.id}`}>
              <div className="gray-shaddow size-24 rounded-2xl border border-light-gray group-hover:border-red transition-colors duration-300 flex items-center justify-center">
                <img className="" src={cat.img} alt={cat.id} />
              </div>
              <h3 className="mt-2 block truncate transition-colors duration-300">{cat.name}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
}
