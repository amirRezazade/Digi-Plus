import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomeCategorySlider() {
  const categories = [
    {
      img: "https://digiplus.aet-web.ir/wp-content/uploads/2025/01/Rectangle-96-1.png",
      name: "موبایل",
      id: "smartphones",
    },
    {
      img: "https://digiplus.aet-web.ir/wp-content/uploads/2025/01/Rectangle-91.png",
      name: "لپتاپ",
      id: "laptops",
    },
    {
      img: "https://digiplus.aet-web.ir/wp-content/uploads/2025/01/Rectangle-92.png",
      name: "لوازم جانبی ",
      id: "mobile-accessories",
    },
    {
      img: "https://digiplus.aet-web.ir/wp-content/uploads/2025/01/Rectangle-93.png",
      name: "مبلمان",
      id: "furniture",
    },
    {
      img: "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/1.webp",
      name: "لوزام آشپزخانه",
      id: "kitchen-accessories",
    },
    {
      img: "https://digiplus.aet-web.ir/wp-content/uploads/2025/01/Rectangle-96.png",
      name: "مردانه",
      id: "mens-shirts,mens-shoes",
    },
    {
      img: "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp",
      name: "زنانه",
      id: "womens-dresses,womens-bags,tops",
    },
    {
      img: "https://digiplus.aet-web.ir/wp-content/uploads/2025/01/Rectangle-95.png",
      name: "ساعت",
      id: "womens-watches,mens-watches",
    },
    {
      img: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
      name: "آرایشی و بهداشتی",
      id: "skin-care,beauty",
    },
    {
      img: "https://digiplus.aet-web.ir/wp-content/uploads/2025/01/Rectangle-98.png",
      name: "عطر",
      id: "fragrances",
    },
    {
      img: "https://cdn.dummyjson.com/product-images/sports-accessories/football/1.webp",
      name: "لوازم ورزشی",
      id: "sports-accessories",
    },

    {
      img: "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/1.webp",
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
