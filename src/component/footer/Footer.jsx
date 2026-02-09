import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";

import footerBanner from "../../assets/images/footer/footer-instagram.png";
import footerMobileBanner from "../../assets/images/footer/footer-banner-mobile.png";
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
      <div className=" mb-7 md:mb-15">
        <img className="hidden xs:inline-block" src={footerBanner} alt="instagram-banner" />
        <img className="xs:hidden" src={footerMobileBanner} alt="instagram-banner" />
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
                  <Link to="/" className="footer-link">
                    وبلاگ
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="footer-link">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
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
                  <Link to="/contact-us" className="footer-link">
                    راهنمای خرید آنلاین
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
                    روش‌های ارسال کالا
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
                    شرایط گارانتی
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
                    شرایط مرجوع کالا
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
                    فروش سازمانی
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
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
                  <Link to="/my-account/dashboard" className="footer-link">
                    حساب کاربری
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
                    فروش ویژه
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
                    کارکرده و استوک
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
                    گردونه شانس
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
                    تالار گفتمان
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-link">
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
            <div className="w-full  p-3 rounded-2xl mt-8 md:my-8 lg:my-4 lg:mb-0 bg-light lg:bg-white border lg:border-0 border-org/40">
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
        <div className="lg:flex items-center justify-between gap-5 2xl:gap-8 py-4">
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
          <div className="flex flex-col lg:flex-row items-center text-center xs:text-nowrap">
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
        <div className="flex items-center justify-center gap-2 text-gray pt-2 pb-12 xs:pb-2!  border-t-2 border-light-gray">
          <p className="text-xs">«طراحی و توسعه توسط امیر رضازاده — 2026»</p>
          <a href="https://github.com/amirRezazade" target="-blank" className="px-2 py-1">
            <svg width="25px" height="25px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-github">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
