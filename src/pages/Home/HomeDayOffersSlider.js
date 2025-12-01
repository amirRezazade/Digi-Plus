import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AddToShoppingCartBtn from "../../component/btns/AddToShoppingCartBtn";
import "swiper/css";
import "swiper/css/pagination";
export default function HomeDayOffersSlider(params) {
  let [second, setSecond] = useState(15);
  let [minute, setMinute] = useState(11);

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
  ];

  useEffect(() => {
    let test = setTimeout(() => {
      if (second == 0) {
        setSecond(59);
        setMinute((prev) => prev - 1);
      } else {
        setSecond((prev) => prev - 1);
      }
      if (minute == 0) setMinute(59);
    }, 1000);

    return () => clearTimeout(test);
  }, [second]);

  return (
    <div className="my-4 md:my-8 xl:my-0 mx-auto xl:mx-0 max-w-90 md:max-w-100 xl:col-span-2 aspect-square h-full fill-white relative overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 320 322" class="dp-single-carousel-bg-lg-svg">
        <mask id="path-1-inside-1_2097_14060">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M320 24C320 10.7452 309.255 0 296 0H24C10.7452 0 0 10.7452 0 24V298C0 311.255 10.7452 322 24 322H296C309.255 322 320 311.255 320 298V249.4C320 236.145 304.965 223.756 304.04 210.534C304.013 210.159 304 209.781 304 209.4V112.6C304 112.219 304.013 111.841 304.04 111.466C304.965 98.2436 320 85.8549 320 72.6V24Z"></path>
        </mask>
        <path class="dp-single-carousel-bg-color" fill-rule="evenodd" clip-rule="evenodd" d="M320 24C320 10.7452 309.255 0 296 0H24C10.7452 0 0 10.7452 0 24V298C0 311.255 10.7452 322 24 322H296C309.255 322 320 311.255 320 298V249.4C320 236.145 304.965 223.756 304.04 210.534C304.013 210.159 304 209.781 304 209.4V112.6C304 112.219 304.013 111.841 304.04 111.466C304.965 98.2436 320 85.8549 320 72.6V24Z"></path>
        <path
          class="dp-single-carousel-bg-bcolor fill-light-gray"
          d="M24 1H296V-1H24V1ZM1 298V24H-1V298H1ZM296 321H24V323H296V321ZM319 249.4V298H321V249.4H319ZM305.037 210.464C305.013 210.113 305 209.758 305 209.4H303C303 209.805 303.014 210.206 303.042 210.604L305.037 210.464ZM305 209.4V112.6H303V209.4H305ZM305 112.6C305 112.242 305.013 111.887 305.037 111.536L303.042 111.396C303.014 111.794 303 112.195 303 112.6H305ZM319 24V72.6H321V24H319ZM305.037 111.536C305.479 105.218 309.305 99.0416 313.223 92.5627C317.063 86.212 321 79.5565 321 72.6H319C319 78.8984 315.42 85.0647 311.511 91.5277C307.68 97.8624 303.525 104.492 303.042 111.396L305.037 111.536ZM321 249.4C321 242.444 317.063 235.788 313.223 229.437C309.305 222.958 305.48 216.782 305.037 210.464L303.042 210.604C303.525 217.508 307.68 224.138 311.511 230.472C315.42 236.935 319 243.102 319 249.4H321ZM296 323C309.807 323 321 311.807 321 298H319C319 310.703 308.703 321 296 321V323ZM-1 298C-1 311.807 10.1929 323 24 323V321C11.2974 321 1 310.703 1 298H-1ZM296 1C308.703 1 319 11.2975 319 24H321C321 10.1929 309.807 -1 296 -1V1ZM24 -1C10.1929 -1 -1 10.1929 -1 24H1C1 11.2975 11.2975 1 24 1V-1Z"
          mask="url(#path-1-inside-1_2097_14060)"
        ></path>
      </svg>
      <div className="absolute top-0 left-5 w-[90%] h-full flex flex-col">
        <div className=" pt-4 pb-1 px-2 flex justify-between">
          <span className="text-gray">پیشنهادات امروز</span>
          <div className="flex items-center gap-2 sm-shaddow gradient rounded-full h-6">
            <span className="text-sm text-white pr-2 h-6 inline-block leading-6">
              {second < 10 ? "0" + second : second} : {minute < 10 ? "0" + minute : minute} : 15
            </span>

            <div className="h-9 w-9 flex justify-center items-center rounded-full bg-white ">
              <span className="rounded-full gradient w-6 h-6 flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="white">
                  <path d="M5.4375 2.8125C5.4375 2.50078 5.68828 2.25 6 2.25C6.31172 2.25 6.5625 2.50078 6.5625 2.8125V5.7L8.56172 7.03125C8.81953 7.20469 8.88984 7.55391 8.69766 7.81172C8.54531 8.06953 8.19609 8.13984 7.93828 7.94766L5.68828 6.44766C5.53125 6.36328 5.4375 6.1875 5.4375 5.97891V2.8125ZM6 0C9.31406 0 12 2.68594 12 6C12 9.31406 9.31406 12 6 12C2.68594 12 0 9.31406 0 6C0 2.68594 2.68594 0 6 0ZM1.125 6C1.125 8.69297 3.30703 10.875 6 10.875C8.69297 10.875 10.875 8.69297 10.875 6C10.875 3.30703 8.69297 1.125 6 1.125C3.30703 1.125 1.125 3.30703 1.125 6Z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <Swiper
          className="max-h-full grow w-full"
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".day-offers-pagination",
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 4000, // هر 3 ثانیه اسلاید بعد
            disableOnInteraction: false, // کاربر لمس کرد، از کار نیفته
          }}
          spaceBetween={30}
          direction="vertical"
          slidesPerView={1}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex! flex-col items-center justify-center gap-2 p-3">
              <Link to={`/product/${product.id}`} className=" flex justify-center items-center h-8/10 w-full">
                <img className=" h-full mx-auto" src={product.img} alt="product" />
              </Link>
              <div className="h-2/10 flex justify-between items-center  w-full">
                <AddToShoppingCartBtn id={product.id} />
                <div className="">
                  <div className="">
                    <span className="text-xs px-1 sm-shaddow gradient rounded text-white">%{product.Discount}</span>
                    <span className="text-gray/80 line-through text-sm mx-2">${(product.price / (1 - product.Discount / 100)).toFixed(2)}</span>
                  </div>
                  <p className="text-lg lg:text-xl  text-red font-bold mt-0.5">{product.price} $</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="day-offers-pagination absolute top-1/2! right-0! z-1 min-h-15! transform! -translate-y-1/2!"></div>
    </div>
  );
}
