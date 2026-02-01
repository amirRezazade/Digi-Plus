import { Link } from "react-router-dom";
import NewsCart from "./NewsCart";
import { getLocal } from "../../utils/funcs";

export default function Dashboard() {
  return (
    <>
      <div className="py-3 px-5 rounded-xl border border-light-gray/60">
        <div className="flex justify-between items-center pt-3 pb-4">
          <h3 className="relative px-3 title-style text-dark text-base xs:text-lg md:text-xl">
            سفارش های<span className="text-red"> من</span>
          </h3>
          <Link className="text-red" to={""}>
            مشاهده همه
          </Link>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4! gap-7 pb-3">
          <div className=" py-5 gray-shaddow border border-light-gray/40 flex flex-col gap-3 justify-center items-center rounded-xl">
            <span className="fill-org">
              <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
                <path d="M36.4001 28.1666H67.6002C82.3335 28.1666 83.8068 35.0566 84.8035 43.4633L88.7035 75.9633C89.9601 86.6233 86.6668 95.3333 71.5001 95.3333H32.5434C17.3334 95.3333 14.0401 86.6233 15.3401 75.9633L19.2401 43.4633C20.1935 35.0566 21.6668 28.1666 36.4001 28.1666Z" stroke="url(#paint0_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M34.666 34.6666V19.5C34.666 13 38.9993 8.66663 45.4993 8.66663H58.4993C64.9994 8.66663 69.3327 13 69.3327 19.5V34.6666" stroke="url(#paint1_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M88.4427 73.7966H34.666" stroke="url(#paint2_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <defs>
                  <linearGradient id="paint0_linear_2106_7207" x1="88.9471" y1="28.1666" x2="9.21524" y2="36.0581" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_2106_7207" x1="69.3327" y1="8.66663" x2="32.0824" y2="13.1367" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_2106_7207" x1="88.4427" y1="73.7966" x2="86.0428" y2="85.4119" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-dark">{getLocal("orderList")?.length || 0} سفارش</span>
            <span className="text-green-500">تکمیل شده</span>
          </div>
          <div className=" py-5 gray-shaddow border border-light-gray/40 flex flex-col gap-3 justify-center items-center rounded-xl">
            <span className="fill-org">
              <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
                <path d="M36.4001 28.1666H67.6002C82.3335 28.1666 83.8068 35.0566 84.8035 43.4633L88.7035 75.9633C89.9601 86.6233 86.6668 95.3333 71.5001 95.3333H32.5434C17.3334 95.3333 14.0401 86.6233 15.3401 75.9633L19.2401 43.4633C20.1935 35.0566 21.6668 28.1666 36.4001 28.1666Z" stroke="url(#paint0_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M34.666 34.6666V19.5C34.666 13 38.9993 8.66663 45.4993 8.66663H58.4993C64.9994 8.66663 69.3327 13 69.3327 19.5V34.6666" stroke="url(#paint1_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M88.4427 73.7966H34.666" stroke="url(#paint2_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <defs>
                  <linearGradient id="paint0_linear_2106_7207" x1="88.9471" y1="28.1666" x2="9.21524" y2="36.0581" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_2106_7207" x1="69.3327" y1="8.66663" x2="32.0824" y2="13.1367" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_2106_7207" x1="88.4427" y1="73.7966" x2="86.0428" y2="85.4119" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-dark">0 سفارش</span>
            <span className="text-red">جاری</span>
          </div>
          <div className=" py-5 gray-shaddow border border-light-gray/40 flex flex-col gap-3 justify-center items-center rounded-xl">
            <span className="fill-org">
              <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
                <path d="M36.4001 28.1666H67.6002C82.3335 28.1666 83.8068 35.0566 84.8035 43.4633L88.7035 75.9633C89.9601 86.6233 86.6668 95.3333 71.5001 95.3333H32.5434C17.3334 95.3333 14.0401 86.6233 15.3401 75.9633L19.2401 43.4633C20.1935 35.0566 21.6668 28.1666 36.4001 28.1666Z" stroke="url(#paint0_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M34.666 34.6666V19.5C34.666 13 38.9993 8.66663 45.4993 8.66663H58.4993C64.9994 8.66663 69.3327 13 69.3327 19.5V34.6666" stroke="url(#paint1_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M88.4427 73.7966H34.666" stroke="url(#paint2_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <defs>
                  <linearGradient id="paint0_linear_2106_7207" x1="88.9471" y1="28.1666" x2="9.21524" y2="36.0581" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_2106_7207" x1="69.3327" y1="8.66663" x2="32.0824" y2="13.1367" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_2106_7207" x1="88.4427" y1="73.7966" x2="86.0428" y2="85.4119" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-dark">0 سفارش</span>
            <span className="text-amber-500">مرجوعی</span>
          </div>
          <div className=" py-5 gray-shaddow border border-light-gray/40 flex flex-col gap-3 justify-center items-center rounded-xl">
            <span className="fill-org">
              <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
                <path d="M36.4001 28.1666H67.6002C82.3335 28.1666 83.8068 35.0566 84.8035 43.4633L88.7035 75.9633C89.9601 86.6233 86.6668 95.3333 71.5001 95.3333H32.5434C17.3334 95.3333 14.0401 86.6233 15.3401 75.9633L19.2401 43.4633C20.1935 35.0566 21.6668 28.1666 36.4001 28.1666Z" stroke="url(#paint0_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M34.666 34.6666V19.5C34.666 13 38.9993 8.66663 45.4993 8.66663H58.4993C64.9994 8.66663 69.3327 13 69.3327 19.5V34.6666" stroke="url(#paint1_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M88.4427 73.7966H34.666" stroke="url(#paint2_linear_2106_7207)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <defs>
                  <linearGradient id="paint0_linear_2106_7207" x1="88.9471" y1="28.1666" x2="9.21524" y2="36.0581" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_2106_7207" x1="69.3327" y1="8.66663" x2="32.0824" y2="13.1367" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_2106_7207" x1="88.4427" y1="73.7966" x2="86.0428" y2="85.4119" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DC2F02"></stop>
                    <stop offset="1" stopColor="#FF7B00"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-dark">0 سفارش</span>
            <span className="text-red-700">لغو شده</span>
          </div>
        </div>
      </div>
      <div className="py-3 px-2 sm:px-5! rounded-xl border border-light-gray/60 mt-6">
        <div className="flex justify-between items-center py-3">
          <h3 className="relative px-3  title-style text-dark text-base sm:text-lg md:text-xl ">
            اخبار و<span className="text-red"> اطلاعیه ها</span>
          </h3>
          <Link className="text-red" to={""}>
            مشاهده همه
          </Link>
        </div>
        <NewsCart title={"نگاهی به محصولات ۲۰۲۴ اپل"} date={"1هفته پیش"} link={""} linkText={"مشاهده‌ی محصولات"} message={"از یکم آذر تا یکم دی ماه 45٪ درصد تخفیف ویژه برای باشگاه مشتریان"} code={" qwer123"} />
        <NewsCart title={"جمعه‌ی سیاه"} date={"10 روز پیش"} link={""} linkText={"مشاهده‌ی مقاله"} message={"از یکم آذر تا یکم دی ماه ۳۵٪ درصد تخفیف ویژه"} code={"digi7575"} />
      </div>
    </>
  );
}
