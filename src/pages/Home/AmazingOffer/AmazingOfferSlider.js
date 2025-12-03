import { memo } from "react";
import ProductCart from "../../../component/carts/ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
export default memo(function AmazingOfferSlider({ onQuickview }) {
  let products = [
    {
      id: 98,
      img: "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
      price: 13999.99,
      Discount: 5.05,
    },
    {
      id: 79,
      img: "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp",
      price: 1799.99,
      Discount: 11.14,
    },
    {
      id: 127,
      img: "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/2.webp",
      price: 299.99,
      Discount: 18.29,
    },
    {
      id: 115,
      img: "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/1.webp",
      price: 14999.99,
      Discount: 6.92,
    },
    {
      id: 98,
      img: "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
      price: 13999.99,
      Discount: 5.05,
    },
    {
      id: 79,
      img: "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp",
      price: 1799.99,
      Discount: 11.14,
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
