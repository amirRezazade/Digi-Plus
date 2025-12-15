import { Link } from "react-router-dom";
import footerBanner from "../../assets/images/footer-instagram.png";
import "swiper/css";
import "swiper/css/free-mode";

import textLogo from "../../assets/images/footer/digiplusft.png";
import logo from "../../assets/images/footer/footerlogo1.png";
import zarinPal from "../../assets/images/footer/zarinpal.png";
import mellat from "../../assets/images/footer/beh.png";
import enemad from "../../assets/images/footer/enamad.png";

import instagram from "../../assets/images/footer/instagram.svg";
import whatsap from "../../assets/images/footer/whatsapp.svg";
import youtube from "../../assets/images/footer/youtube.svg";
import aparat from "../../assets/images/footer/aparat.svg";
import FooterSlider from "./FooterSlider";
export default function Footer() {
  return (
    <>
      <div className="hidden xs:block mb-10 md:mb-15">
        <img src={footerBanner} alt="instagram-banner" />
      </div>
      <div className="custom-container">
        <div className=" grid grid-cols-1 lg:grid-cols-9 justify-between items-center gap-6 lg:gap-0 md:items-start sm:w-3/4 md:w-full mx-auto md:border-b-2 border-light-gray">
          <div className="lg:col-span-6 flex flex-col md:flex-row justify-between xl:justify-around">
            <div className="w-full md:w-auto text-center lg:text-start">
              <h2 className="inline-block font-bold text-black md:px-3 py-3 md:py-0.5 text-xl xs:text-2xl relative before:absolute before:w-full before:h-1 md:before:w-1 md:before:h-full before:rounded-full before:bottom-0 before:right-0 before:bg-linear-264 before:from-red before:to-[#ff7b00] before:shadow-[-2px_0px_8px_0_#dc2f0233]  ">
                فروشگاه
                <span className="text-red"> دیجی پلاس </span>
              </h2>
              <ul className="grid grid-cols-2 gap-5 md:gap-3.5 md:grid-cols-1 text-gray text-sm  py-4 md:text-start">
                <li>
                  <Link to="/shop" className="footer-link">
                    فروشگاه
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="footer-link">
                    وبلاگ
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="footer-link">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    سوالات متداول
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto text-center lg:text-start">
              <h2 className="inline-block font-bold text-black md:px-3 py-3 md:py-0.5 text-xl xs:text-2xl relative before:absolute before:w-full before:h-1 md:before:w-1 md:before:h-full before:rounded-full before:bottom-0 before:right-0 before:bg-linear-264 before:from-red before:to-[#ff7b00] before:shadow-[-2px_0px_8px_0_#dc2f0233]  ">
                راهنمای
                <span className="text-red"> خرید</span>
              </h2>
              <ul className="grid grid-cols-2 gap-5 md:gap-3.5 md:grid-cols-1 text-gray text-sm  py-4 md:text-start">
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    راهنمای خرید آنلاین
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    روش‌های ارسال کالا
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    شرایط گارانتی
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    شرایط مرجوع کالا
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    فروش سازمانی
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    پیگیری سفارشات
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto text-center lg:text-start">
              <h2 className="inline-block font-bold text-black md:px-3 py-3 md:py-0.5 text-xl xs:text-2xl relative before:absolute before:w-full before:h-1 md:before:w-1 md:before:h-full before:rounded-full before:bottom-0 before:right-0 before:bg-linear-264 before:from-red before:to-[#ff7b00] before:shadow-[-2px_0px_8px_0_#dc2f0233]  ">
                پیوندهای
                <span className="text-red"> مفید</span>
              </h2>
              <ul className="grid grid-cols-2 gap-5 md:gap-3.5 md:grid-cols-1 text-gray text-sm  py-4 md:text-start">
                <li>
                  <Link to="/my-account" className="footer-link">
                    حساب کاربری
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    فروش ویژه
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    کارکرده و استوک
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    گردونه شانس
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    تالار گفتمان
                  </Link>
                </li>
                <li>
                  <Link to="/contanct-us" className="footer-link">
                    استخدام
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3 w-full lg:w-auto md:max-w-145 mx-auto">
            <div className="flex justify-center items-center gap-5 py-6 gradient w-full rounded-4xl sm-shaddow ">
              <div className="text-white">
                <p className="text-2xl font-bold tracking-[2px]">
                  <span className="opacity-85">021</span>
                  22334455
                </p>
                <p className="text-xs">پاسخگوی پرسش‌های شما هستیم...</p>
              </div>
              <div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2111_5259)">
                    <path
                      d="M47.5406 37.9408L47.9237 36.2814C48.2429 34.9043 47.5293 33.498 46.2249 32.9261L36.0563 28.5658C34.8581 28.0562 33.4603 28.3995 32.6372 29.4072L31.0453 31.3403L47.5406 37.9408ZM1.38232e-08 5.10956C-0.000131236 28.7533 19.2375 48.0002 42.8906 48.0002C44.2641 48.0002 45.4416 47.0656 45.7463 45.7296L46.6254 41.9177L28.5036 34.4524C22.0125 31.2658 16.7344 25.9877 13.5469 19.4158L6.0825 1.3755L2.27062 2.25488C0.934406 2.56144 -0.000131236 3.73425 1.38232e-08 5.10956ZM18.5906 15.3658C19.6012 14.5514 19.9509 13.1468 19.4325 11.9486L15.075 1.77394C14.5125 0.470533 13.0875 -0.24056 11.6344 0.0756396L10.0594 0.458065L16.65 16.9502L18.5906 15.3658Z"
                      fill="url(#paint0_linear_2111_5259)"
                    ></path>
                    <path d="M46.6214 41.9155L47.5388 37.9396L31.1232 31.3396L28.5826 34.4502L46.6214 41.9155ZM13.5464 19.4155L16.6495 16.9499L10.0589 0.457764L6.08203 1.3752L13.5464 19.4155Z" fill="white" fillOpacity="0.3"></path>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_2111_5259" x1="23.9997" y1="0.000976563" x2="23.9997" y2="48.0002" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"></stop>
                      <stop offset="1" stopColor="white" stopOpacity="0.75"></stop>
                    </linearGradient>
                    <clipPath id="clip0_2111_5259">
                      <rect width="48" height="48" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="w-full  p-3 rounded-2xl my-8 lg:my-4 bg-light lg:bg-white border lg:border-0 border-org/40">
              <div className="title-style before:h-full! relative pr-3">
                <h2 className="font-bold text-black md:px-3 md:py-0.5 text-xl xs:text-2xl">
                  پیگیری <span className="text-red">سفارشات</span>
                </h2>
                <p className="text-xs text-gray">جهت مشاهده اطلاعات سفارش خود کد پیگیری سفارش را وارد نمایید</p>
              </div>
              <form className=" relative flex items-center max-w-90 rounded-xl bg-white my-9 md:my-4 border border-light-gray">
                <input className=" p-2 text-end border-0 outline-0 text-sm text-dark placeholder:text-xs placeholder:opacity-85" type="tel" required placeholder="...شماره سفارش یا موبایل" />
                <button className="gradient absolute top-0 left-0 text-sm h-full px-5 rounded-xl text-white sm-shaddow hover:px-6 transition-[padding] duration-400 cursor-pointer" type="submit">
                  پیگیری سفارش
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center justify-between gap-5 2xl:gap-8 py-8">
          <div className="w-full md:grid grid-cols-10 items-center justify-between max-w-full text-center">
            <h2 className="col-span-2 lg:col-span-3 xl:col-span-2 text-start inline-block font-bold text-black text-nowrap md:px-3 py-3 md:py-0.5 text-xl xs:text-2xl md:text-xl lg:text-2xl relative before:absolute before:w-full before:h-1 md:before:w-1 md:before:h-full before:rounded-full before:bottom-0 before:right-0 before:bg-linear-264 before:from-red before:to-[#ff7b00] before:shadow-[-2px_0px_8px_0_#dc2f0233]  ">
              بیشترین
              <span className="text-red "> بازدید</span>
            </h2>
            <div className="col-span-8 lg:col-span-7 xl:col-span-8">
              <FooterSlider />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mt-5 lg:mt-0">
            <div className="flex items-center justify-center size-24 p-6 bg-light-gray/40 rounded-2xl">
              <img src={zarinPal} className="object-contain" alt="zarrinPal" />
            </div>
            <div className="flex items-center justify-center size-24 p-4 bg-light-gray/40 rounded-2xl">
              <img src={mellat} className="object-contain" alt="bankMellat" />
            </div>
            <div className="flex items-center justify-center size-24 p-4 bg-light-gray/40 rounded-2xl">
              <img src={enemad} className="object-contain" alt="Enemad" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-xs sm:text-sm text-gray my-5">
          <div className="flex divide-x divide-light-gray">
            <Link to="/contact-us" className="px-4 py-1 transition-colors duration-300 hover:text-org">
              قوانین و شرایط استفاده
            </Link>
            <Link to="/contact-us" className="px-4 py-1 transition-colors duration-300 hover:text-org">
              مجوزها و نمادها
            </Link>
            <Link to="/contact-us" className="px-4 py-1 transition-colors duration-300 hover:text-org">
              تاریخچه تغییرات
            </Link>
          </div>
          <div dir="ltr" className="flex items-center gap-4">
            <Link to="https://www.aparat.com/" target="_blank" className="flex items-center gap-3 max-w-7 transition-[max-width] duration-300 hover:max-w-25 overflow-hidden">
              <img src={aparat} alt="aparat" />
              <span>aparat</span>
            </Link>
            <Link to="https://www.youtube.com/" target="_blank" className="flex items-center gap-3 max-w-7 transition-[max-width] duration-300 hover:max-w-25 overflow-hidden">
              <img src={youtube} alt="youtube" />
              <span>youtube</span>
            </Link>
            <Link to="http://whatsapp.com/" target="_blank" className="flex items-center gap-3 max-w-7 transition-[max-width] duration-300 hover:max-w-25 overflow-hidden">
              <img src={whatsap} alt="whatsap" />
              <span>whatsap</span>
            </Link>
            <Link to="https://www.instagram.com/" target="_blank" className="flex items-center gap-3 max-w-7 transition-[max-width] duration-300 hover:max-w-25 overflow-hidden">
              <img src={instagram} alt="instagram" />
              <span>instagram</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3  text-sm text-gray py-5 border-t-2 border-light-gray">
          <div className="flex flex-col lg:flex-row items-center text-nowrap">
            <div className="mb-3 lg:mb-0 lg:me-4">
              <img src={logo} alt="logo" />
            </div>
            <span>تمام حقوق برای </span>
            <Link to="/" className="text-red">
              فروشگاه اینترنتی دیجی پلاس
            </Link>
            <span>محفوظ بوده و هر گونه کپی‌برداری از تصاویر، محتوا و قالب پیگرد قانونی دارد.</span>
          </div>
          <Link to="/">
            <img src={textLogo} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
