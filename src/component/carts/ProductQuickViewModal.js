import { useEffect, useState } from "react";
import AddToShoppingCartLargeBtn from "../btns/AddToShoppingCartLargeBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

export default function ProductQuickViewModal({ productId, onQuickview }) {
  let [data, setData] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isReady, setIsReady] = useState(false);

  if (productId) {
    document.body.classList.add("body-lock");
  } else document.body.classList.remove("body-lock");

  useEffect(() => {
    setData(null);
    if (productId) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setTimeout(() => setIsReady(true), 300);
        });
    }
  }, [productId]);
  function closeModal() {
    setThumbsSwiper(null);
    setIsReady(false);
    setTimeout(() => {
      onQuickview(null);
    }, 200);
  }

  return (
    <div onMouseDown={(e) => e.target.classList.contains("modal-bg") && closeModal()} className={`modal-bg hidden-scrollbar transition-all duration-500 ${productId ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
      {data ? (
        <div className={`mx-auto xs:max-w-100 sm:max-w-full md:max-w-[750px] lg:max-w-[800px] xl:max-w-[930px] sm:max-h-[500px] mt-15 sm:mt-0 bg-white text-gray p-3 rounded-2xl flex flex-col sm:flex-row justify-center items-stretch gap-1 md:gap-3.5 relative  -rotate-y-100 opacity-0  invisible transition-all duration-500  ${isReady && "rotate-y-0!  opacity-100 visible"}`}>
          <button onClick={closeModal} className="absolute right-2 bottom-[102%] text-2xl border border-light-gray rounded-lg text-light-gray cursor-pointer size-9 ">
            ×
          </button>

          <div className="grow  sm:w-1/2 p-3 bg-light-gray/40 rounded-xl">
            <div className="bg-white w-full h-full p-1 md:p-5 rounded-lg flex flex-col justify-between select-none overflow-hidden">
              {data.images.length < 2 ? (
                <img className="w-full h-full" src={data.thumbnail} alt={data.title} />
              ) : (
                <>
                  <Swiper className="max-w-full max-h-full overflow-hidden" thumbs={{ swiper: thumbsSwiper }} modules={[Thumbs]}>
                    {data.images.map((img) => (
                      <SwiperSlide>
                        <img className="w-full h-full object-contain" src={img} alt={""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={data.images.length} watchSlidesProgress modules={[Thumbs]} className=" mt-3 w-full h-20 sm:h-28 overflow-hidden">
                    {data.images.map((src, i) => (
                      <SwiperSlide key={i} className="opacity-60 cursor-pointer">
                        <img src={src} className="w-full h-full object-contain rounded-lg " />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}
            </div>
          </div>
          <div className="grow sm:w-1/2 text-center flex flex-col justify-between">
            <h2 className="text-dark font-bold py-1 md:py-3 border-b border-light-gray text-lg">{data.title}</h2>
            <div className="grow lg:px-3 flex flex-col justify-between">
              <p dir="ltr" className=" text-start pt-2 md:pt-3.5 pb-2 text-sm md:text-base">
                {data.description}
              </p>
              <div className="text-end flex items-center ">
                <div dir="ltr" className="grow flex flex-col gap-1 sm:gap-0 md:gap-1 text-start text-sm md:text-base">
                  <span>{data.brand}</span>
                  <span>{data.category}</span>
                  <span>{data.stock}</span>
                  <span>{data.warrantyInformation}</span>
                  <span>{data.returnPolicy}</span>
                </div>
                <div className="flex flex-col gap-1 sm:gap-0 md:gap-2 text-sm w-25 md:w-33">
                  <span> :برند </span>
                  <span> :دسته بندی </span>
                  <span> :تعداد </span>
                  <span> :گارانتی </span>
                  <span> : بازگشت کالا </span>
                </div>
              </div>
              <div className="text-end ">
                <p className="flex items-start justify-end gap-1.5">
                  <span className="text-yellow-400 font-bold md:text-lg">{data.rating}</span>
                  <span className="fill-yellow-400">
                    <svg width="18" height="18" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.99774 0C7.22135 0 7.42552 0.123047 7.52274 0.316875L9.1901 3.62813L12.9161 4.16016C13.1349 4.19063 13.3148 4.33828 13.3852 4.53984C13.4533 4.74375 13.3974 4.96641 13.2418 5.11406L10.5391 7.69687L11.1783 11.3414C11.2148 11.5523 11.1248 11.768 10.9425 11.8922C10.7627 12.0164 10.5026 12.0328 10.3276 11.932L6.99774 10.2164L3.64844 11.932C3.47344 12.0328 3.23524 12.0164 3.05295 11.8922C2.87309 11.768 2.78316 11.5523 2.79774 11.3414L3.45642 7.69687L0.756318 5.11406C0.599304 4.96641 0.543644 4.74375 0.612672 4.53984C0.681457 4.33828 0.863019 4.19063 1.08153 4.16016L4.80538 3.62813L6.47274 0.316875C6.57239 0.123023 6.77413 0 6.99774 0ZM6.99774 1.85039L5.7217 4.3875C5.63663 4.55391 5.47135 4.67109 5.28177 4.69922L2.40594 5.10703L4.49427 7.10156C4.62795 7.23047 4.68871 7.41563 4.65712 7.59609L4.16614 10.3992L6.72309 9.08203C6.89566 8.99297 7.10225 8.99297 7.27239 9.08203L9.82934 10.3992L9.33837 7.59609C9.30677 7.41563 9.36996 7.23047 9.50364 7.10156L11.5915 5.10703L8.71614 4.69922C8.52413 4.67109 8.35885 4.55391 8.27621 4.3875L6.99774 1.85039Z"></path>
                      <path d="M4.49427 7.10156C4.62795 7.23047 4.68871 7.41563 4.65712 7.59609L4.16614 10.3992L6.72309 9.08203C6.89566 8.99297 7.10225 8.99297 7.27239 9.08203L9.82934 10.3992L9.33837 7.59609C9.30677 7.41563 9.36996 7.23047 9.50364 7.10156L11.5915 5.10703L8.71614 4.69922C8.52413 4.67109 8.35885 4.55391 8.27621 4.3875L6.99774 1.85039V6L4.49427 7.10156Z"></path>
                      <path d="M6.99774 1.85039L5.7217 4.3875C5.63663 4.55391 5.47135 4.67109 5.28177 4.69922L2.40594 5.10703L4.49427 7.10156L6.99774 6V1.85039Z"></path>
                    </svg>
                  </span>
                </p>
                <div className="">
                  <span className="text-sm px-1 sm-shaddow gradient rounded text-white">%{data.discountPercentage}</span>
                  <span className="text-gray/50 line-through  mx-2">${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}</span>
                </div>
                <p className="text-lg md:text-2xl lg:text-3xl text-red font-bold mt-0.5 md:mt-1.5">{data.price} $</p>
              </div>
            </div>
            <div className="md:mb-2">
              <AddToShoppingCartLargeBtn product={data} />
            </div>
          </div>
        </div>
      ) : (
        productId && (
          <span className="animate-spin ">
            <svg fill="#ffffff" width="64px" height="64px" viewBox="-1.5 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5.857 3.882v3.341a1.03 1.03 0 0 1-2.058 0v-.97a5.401 5.401 0 0 0-1.032 2.27 1.03 1.03 0 1 1-2.02-.395A7.462 7.462 0 0 1 2.235 4.91h-.748a1.03 1.03 0 1 1 0-2.058h3.34a1.03 1.03 0 0 1 1.03 1.03zm-3.25 9.237a1.028 1.028 0 0 1-1.358-.523 7.497 7.497 0 0 1-.37-1.036 1.03 1.03 0 1 1 1.983-.55 5.474 5.474 0 0 0 .269.751 1.029 1.029 0 0 1-.524 1.358zm2.905 2.439a1.028 1.028 0 0 1-1.42.322 7.522 7.522 0 0 1-.885-.652 1.03 1.03 0 0 1 1.34-1.563 5.435 5.435 0 0 0 .643.473 1.03 1.03 0 0 1 .322 1.42zm3.68.438a1.03 1.03 0 0 1-1.014 1.044h-.106a7.488 7.488 0 0 1-.811-.044 1.03 1.03 0 0 1 .224-2.046 5.41 5.41 0 0 0 .664.031h.014a1.03 1.03 0 0 1 1.03 1.015zm.034-12.847a1.03 1.03 0 0 1-1.029 1.01h-.033a1.03 1.03 0 0 1 .017-2.06h.017l.019.001a1.03 1.03 0 0 1 1.009 1.05zm3.236 11.25a1.029 1.029 0 0 1-.3 1.425 7.477 7.477 0 0 1-.797.453 1.03 1.03 0 1 1-.905-1.849 5.479 5.479 0 0 0 .578-.328 1.03 1.03 0 0 1 1.424.3zM10.475 3.504a1.029 1.029 0 0 1 1.41-.359l.018.011a1.03 1.03 0 1 1-1.06 1.764l-.01-.006a1.029 1.029 0 0 1-.358-1.41zm4.26 9.445a7.5 7.5 0 0 1-.315.56 1.03 1.03 0 1 1-1.749-1.086 5.01 5.01 0 0 0 .228-.405 1.03 1.03 0 1 1 1.836.93zm-1.959-6.052a1.03 1.03 0 0 1 1.79-1.016l.008.013a1.03 1.03 0 1 1-1.79 1.017zm2.764 2.487a9.327 9.327 0 0 1 0 .366 1.03 1.03 0 0 1-1.029 1.005h-.025A1.03 1.03 0 0 1 13.482 9.7a4.625 4.625 0 0 0 0-.266 1.03 1.03 0 0 1 1.003-1.055h.026a1.03 1.03 0 0 1 1.029 1.004z"></path>
              </g>
            </svg>
          </span>
        )
      )}
    </div>
  );
}
