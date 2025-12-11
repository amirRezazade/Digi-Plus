import { Link } from "react-router-dom";
import AmazingOfferSlider from "./AmazingOfferSlider";
import { useEffect, useState } from "react";
export default function AmazingOffers({ onQuickview }) {
  let [second, setSecond] = useState(15);
  let [min, setMin] = useState(23);

  useEffect(() => {
    let time = setTimeout(() => {
      if (second === 0) {
        setSecond(59);
        setMin((prev) => prev - 1);
      } else setSecond((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(time);
  });

  return (
    <div className="custom-container sm:flex items-center gap-3  relative bg-no-repeat  bg-center sm:bg-right  overflow-hidden bg-[url(../src/assets/images/bg-images/bg-line-vertical.png)] sm:bg-[url(../src/assets/images/bg-images/bg-line.png)] md:before:absolute md:before:w-15 md:before:h-full before:pointer-events-none md:before:left-0 md:before:top-0 md:before:bg-linear-90 md:before:from-white md:before:to-[rgba(255, 255, 255, 0)] md:before:z-10">
      <div className="shrink-0 sm:min-w-[235px]  text-white flex flex-col justify-between gap-3 sm:gap-2 px-9 py-2 border-l border-white border-dashed ">
        <h4 className="text-3xl md:text-3xl pb-3 text-center border-b border-dashed border-white sm:border-0">
          پیشنهاد
          <br /> شگفت انگیز!
        </h4>
        <div>
          <div className="flex gap-5 sm:gap-0 items-start justify-center sm:justify-between ">
            <div className="text-center">
              <span>{second < 10 ? "0" + second : second}</span>
              <h5 className="text-[10px]">ثانیه</h5>
            </div>
            :
            <div className="text-center">
              <span>{min < 10 ? "0" + min : min}</span>
              <h5 className="text-[10px]">دقیقه</h5>
            </div>
            :
            <div className="text-center">
              <span>09</span>
              <h5 className="text-[10px]">ساعت</h5>
            </div>
            :
            <div className="text-center">
              <span>03</span>
              <h5 className="text-[10px]">روز</h5>
            </div>
          </div>
        </div>
        <Link to="/shop" className="hidden sm:inline-block text-red bg-white px-4 py-1.5 rounded-2xl text-center text-sm">
          مشاهده محصولات
        </Link>
      </div>
      <AmazingOfferSlider onQuickview={onQuickview} />
      <div className="text-center py-5 sm:hidden">
        <Link
          to="/shop"
          className=" text-red bg-white px-4 py-1.5 rounded-2xl text-center text-sm
        "
        >
          مشاهده محصولات
        </Link>
      </div>
    </div>
  );
}
