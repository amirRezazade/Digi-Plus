import { memo } from "react";
import ProductCart from "../../../component/carts/ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
export default memo(function AmazingOfferSlider({ onQuickview }) {
  let products = [
    {
      id: 80,
      img: "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp",
      price: 1399.99,
      Discount: 9.38,
    },
    {
      id: 124,
      img: "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/2.webp",
      price: 899.99,
      Discount: 19.59,
    },
    {
      id: 12,
      img: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp",
      price: 2499.99,
      Discount: 14.4,
    },
    {
      id: 89,
      img: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/2.webp",
      price: 79.99,
      Discount: 18.04,
    },
    {
      id: 106,
      img: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp",
      price: 349.99,
      Discount: 12.02,
    },
    {
      id: 193,
      img: "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/1.webp",
      price: 799.99,
      Discount: 18.34,
    },
  ];
  return (
    <div className="ms-8 select-none sm:max-w-max overflow-hidden my-5 sm:my-0">
      <Swiper
        className="max-w-full"
        spaceBetween={15}
        speed={700}
        slidesPerView={"auto"}
        freeMode={false}
        centeredSlides={true}
        breakpoints={{
          450: {
            initialSlide: 2,
          },
          950: {
            centeredSlides: false,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide className="min-w-55 max-w-55">
            <ProductCart product={product} onQuickview={onQuickview} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
