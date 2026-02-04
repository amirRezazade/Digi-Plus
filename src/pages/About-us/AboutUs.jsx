import { Link } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import SupportChat from "../../component/SupportChat/SupportCat";

import bgRounded from "../../assets/images/bg-images/bg-round.png";
import AboutUsItems from "./AboutUsItems";
import Team from "./Team";
import Comment from "./Comments";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className=" text-gray text-sm">
        <div className="custom-container flex items-center gap-3 text-gray text-sm text-nowrap overflow-auto hidden-scrollbar my-5 lg:my-9 px-4">
          <Link className="stroke-gray hover:stroke-org fill-white" to="/">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="style=linear" clipPath="url(#clip0_1_129)">
                  <g id="home-door">
                    <path id="vector" d="M19 23H5C3.34315 23 2 21.6569 2 20V11.563C2 10.4094 2.49808 9.31192 3.36639 8.55236L10.0248 2.72784C11.1558 1.7385 12.8442 1.73851 13.9752 2.72784L20.6336 8.55236C21.5019 9.31192 22 10.4094 22 11.563V20C22 21.6569 20.6569 23 19 23Z" strokeWidth="1.5" strokeLinecap="round"></path> <path id="vector_2" d="M12 16L12 19" strokeWidth="1.5" strokeLinecap="round"></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_129">
                    <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)"></rect>
                  </clipPath>
                </defs>
              </g>
            </svg>
          </Link>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
              <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"></path>
            </svg>
          </span>
          <span className="text-dark">درباره ما</span>
        </div>
        <div className="relative">
          <img className="hidden lg:inline-block absolute right-0 top-0 -z-2" src={bgRounded} alt="" />
          <div className="custom-container text-dark lg:px-16 xl:px-12!">
            <p className="sm:text-base  lg:text-[17px]! leading-8">
              دیجی پلاس یک فروشگاه اینترنتی جامع است که با ارائه محصولات متنوع از لوازم الکترونیکی تا پوشاک، تجربه خرید آنلاین را آسان و مطمئن می‌کند. یکی از مزایای رقابتی دیجی پلاس، ارسال سریع و رایگان برای سفارشات بالای یک مبلغ معین است که باعث صرفه‌جویی در هزینه‌ها برای مشتریان می‌شود. همچنین، پشتیبانی 24/7 این فروشگاه باعث شده که کاربران هر زمان که نیاز داشته باشند، به کمک دسترسی داشته باشند. تضمین بازگشت وجه در صورت نارضایتی و تخفیف‌های دوره‌ای جذاب نیز از دیگر عوامل جذب مشتریان به این
              فروشگاه است. دیجی پلاس با ارائه قیمت‌های رقابتی و خدمات مشتری محور، خود را به یکی از برترین فروشگاه‌های اینترنتی در بازار تبدیل کرده است.
            </p>
            <br />
            <p className="sm:text-base lg:text-[17px]! leading-8">
              دیجی پلاس همچنین با داشتن یک سیستم جستجوی پیشرفته، به کاربران کمک می‌کند تا به‌راحتی و در کوتاه‌ترین زمان ممکن محصول مورد نظر خود را پیدا کنند. این فروشگاه با ارائه تخفیف‌های منظم و پیشنهادات ویژه، تجربه خریدی اقتصادی‌تر را برای مشتریان فراهم می‌سازد. امکان پیگیری آسان سفارشات و مشاهده وضعیت آن‌ها به‌صورت آنلاین نیز از دیگر مزایای دیجی پلاس است. همچنین، تنوع بالا در دسته‌بندی محصولات به کاربران اجازه می‌دهد تا انتخاب‌های گسترده‌ای داشته باشند. دیجی پلاس با طراحی رابط کاربری ساده و
              مدرن، خرید آنلاین را برای همه سنین لذت‌بخش و بدون دردسر کرده است.
            </p>
          </div>
          <img className="hidden lg:inline-block absolute left-0 top-1/10 rotate-180 -z-2" src={bgRounded} alt="" />
        </div>
        <AboutUsItems />
        <Team />
        <Comment />
      </main>
      <SupportChat />
      <Footer />
    </>
  );
}
