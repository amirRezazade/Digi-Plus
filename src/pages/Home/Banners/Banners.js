import { Link } from "react-router-dom";
import laptopsImg from "../../../assets/images/laptops-banner.png";
import spoetsImg from "../../../assets/images/sports-banner.png";

export default function Banners() {
  return (
    <div className=" custom-container grid grid-cols-1  lg:grid-cols-2 justify-between items-center gap-5 xl:gap-8">
      <div className="  overflow-hidden  relative">
        <img className="object-cover w-full md:max-h-62 rounded-4xl" src={laptopsImg} alt="laptops-banner" />
        <div className="absolute w-1/2 h-full right-0 top-0 flex flex-col justify-center gap-2  md:gap-6 text-nowrap pr-5 md:pr-8  text-white">
          <h2 className="text-xl  sm:text-3xl md:text-4xl lg:text-xl xl:text-3xl font-bold ">چشم بهم بزنی رسیده!</h2>
          <p className="text-base sm:text-xl md:text-2xl lg:text-base xl:text-xl 2xl:text-2xl">لپـــــــتاپ با ارســـــــــال فــــــــــوری</p>
          <Link to={"/shop?categories=laptops"} className="flex items-center gap-1">
            <span>مشاهده محصولات</span>
            <span className="p-1.5 rounded-md bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="currentcolor">
                <path d="M3.91759 7.83007L0.192626 4.37528C0.057267 4.27073 2.96119e-07 4.13436 3.0198e-07 4.00025C3.07842e-07 3.86615 0.0569552 3.73024 0.170812 3.62523L3.91759 0.170443C4.15707 -0.0484354 4.55273 -0.057527 4.80262 0.149078C5.05512 0.356593 5.06293 0.703208 4.82605 0.920496L1.48634 4.00025L4.82865 7.08001C5.06537 7.29735 5.05642 7.64255 4.80425 7.85143C4.55273 8.05736 4.15707 8.04826 3.91759 7.83007Z"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
      <div className=" overflow-hidden relative">
        <img className="object-cover w-full md:max-h-62 rounded-4xl" src={spoetsImg} alt="sports-banner" />
        <div className="absolute w-1/2 h-full right-0 top-0 flex flex-col justify-center gap-2  md:gap-6 text-nowrap pr-5 md:pr-8  text-black">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-xl xl:text-3xl font-bold ">هــــوا، هــــوای ورزشـــــــه!</h2>
          <p className="text-base sm:text-xl md:text-2xl lg:text-base xl:text-xl 2xl:text-2xl">انـــــواع اسکـــیــــت و اسکـــــــوتــر</p>
          <Link to={"/shop?categories=sports-accessories"} className="flex items-center gap-1">
            <span>مشاهده محصولات</span>
            <span className="p-1.5 rounded-md bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="currentcolor">
                <path d="M3.91759 7.83007L0.192626 4.37528C0.057267 4.27073 2.96119e-07 4.13436 3.0198e-07 4.00025C3.07842e-07 3.86615 0.0569552 3.73024 0.170812 3.62523L3.91759 0.170443C4.15707 -0.0484354 4.55273 -0.057527 4.80262 0.149078C5.05512 0.356593 5.06293 0.703208 4.82605 0.920496L1.48634 4.00025L4.82865 7.08001C5.06537 7.29735 5.05642 7.64255 4.80425 7.85143C4.55273 8.05736 4.15707 8.04826 3.91759 7.83007Z"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
