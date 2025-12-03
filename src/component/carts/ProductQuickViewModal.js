import { useEffect, useState } from "react";
import AddToShoppingCartLargeBtn from "../btns/AddToShoppingCartLargeBtn";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductQuickViewModal({ productId, onQuickview }) {
  let [data, setData] = useState(null);
  if (productId) {
    document.body.classList.add("body-lock");
  } else document.body.classList.remove("body-lock");

  useEffect(() => {
    setData(null); // برای حالت loading
    if (productId) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
    }
  }, [productId]);

  return (
    <div onMouseDown={(e) => (e.target.classList.contains("modal-bg") ? onQuickview(null) : "")} className={`modal-bg hidden-scrollbar transition-all duration-500 ${productId ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
      {data && (
        <div className="mx-auto xs:max-w-100 sm:max-w-[1000px] mt-15 sm:mt-0 bg-white p-3 rounded-2xl flex flex-col sm:flex-row justify-center items-stretch gap-3.5 relative">
          <button onClick={() => onQuickview(null)} className="absolute right-2 bottom-[102%] text-2xl border border-light-gray rounded-lg text-light-gray cursor-pointer size-9 ">
            ×
          </button>

          <div className="grow sm:w-1/2 p-3 bg-light-gray/40 rounded-xl">
            <div className="bg-white w-full h-full p-5 rounded-lg">
              {data.images.length < 2 ? (
                <img className="w-full h-full" src={data.thumbnail} alt={data.title} />
              ) : (
                <Swiper>
                  {data.images.map((img) => (
                    <SwiperSlide>
                      <img className="w-full h-full" src={img} alt={""} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
          <div className="grow sm:w-1/2 text-center flex flex-col justify-between">
            <h2 className="text-dark py-3 border-b border-light-gray text-lg">{data.title}</h2>
            <div className="grow p-3 ">
              <p className=" text-gray py-2 ">{data.description}</p>
              <div className="text-end ">
                <div class="">
                  <span class="text-sm px-1 sm-shaddow gradient rounded text-white">%{data.discountPercentage}</span>
                  <span class="text-gray/50 line-through  mx-2">${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}</span>
                </div>
                <p class="text-lg md:text-2xl lg:text-3xl mt-2 text-red font-bold mt-0.5">{data.price} $</p>
              </div>
            </div>
            <div className="my-4">
              <AddToShoppingCartLargeBtn />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
