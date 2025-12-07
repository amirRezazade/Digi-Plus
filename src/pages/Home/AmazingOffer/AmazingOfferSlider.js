import { memo, useEffect, useState } from "react";
import ProductCart from "../../../component/carts/ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
export default memo(function AmazingOfferSlider({ onQuickview }) {
  let productsId = [80, 124, 12, 89, 106, 193];
  let [products, setProducts] = useState([]);
  useEffect(() => {
    Promise.all(productsId.map((id) => fetch(`https://dummyjson.com/products/${id}?select=thumbnail,rating,discountPercentage,title,price,stock`).then((r) => r.json()))).then((data) => setProducts(data));
  }, []);
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
