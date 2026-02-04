import { useState } from "react";

export default function FAQ() {
  let [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="rounded-2xl border border-light-gray/40 gray-shaddow p-5 mt-10 mb-5 custom-container">
      <h2 className="text-red text-base xs:text-xl! md:text-2xl!">سوالات متداول</h2>
      <ul className="flex flex-col divide-y divide-light-gray/80 pt-5">
        <li className={` max-h-14 overflow-hidden ${openIndex === 0 && "max-h-25"} transition-[max_hight] duration-300`}>
          <button onClick={() => setOpenIndex(openIndex === 0 ? null : 0)} className="h-14  w-full flex justify-between items-center gap-2 text-start cursor-pointer text-dark text-sm sm:text-base!">
            <span>چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟</span>
            <span className={`transition-[rotate_fill] duration-300 ${openIndex === 0 && "rotate-180 fill-red"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path d="M14.9336 6.81665H9.74194H5.06695C4.26695 6.81665 3.86695 7.78332 4.43361 8.34998L8.75028 12.6667C9.44195 13.3583 10.5669 13.3583 11.2586 12.6667L12.9003 11.025L15.5753 8.34998C16.1336 7.78332 15.7336 6.81665 14.9336 6.81665Z"></path>
              </svg>
            </span>
          </button>
          <p className="pb-3 pt-1">برای پیگیری وضعیت سفارش، کافی است وارد حساب کاربری خود شده و از بخش "سفارشات من" جزئیات و وضعیت سفارش خود را مشاهده کنید</p>
        </li>
        <li className={` max-h-14 overflow-hidden ${openIndex === 1 && "max-h-25"} transition-[max_hight] duration-300`}>
          <button onClick={() => setOpenIndex(openIndex === 1 ? null : 1)} className="h-14  w-full flex justify-between items-center gap-2 text-start cursor-pointer text-dark text-sm sm:text-base!">
            <span>آیا تمام محصولات دیجی پلاس دارای تضمین اصالت هستند؟</span>
            <span className={`transition-[rotate_fill] duration-300 ${openIndex === 1 && "rotate-180 fill-red"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path d="M14.9336 6.81665H9.74194H5.06695C4.26695 6.81665 3.86695 7.78332 4.43361 8.34998L8.75028 12.6667C9.44195 13.3583 10.5669 13.3583 11.2586 12.6667L12.9003 11.025L15.5753 8.34998C16.1336 7.78332 15.7336 6.81665 14.9336 6.81665Z"></path>
              </svg>
            </span>
          </button>
          <p className="pb-3 pt-1">برای پیگیری وضعیت سفارش، کافی است وارد حساب کاربری خود شده و از بخش "سفارشات من" جزئیات و وضعیت سفارش خود را مشاهده کنید</p>
        </li>
        <li className={` max-h-14 overflow-hidden ${openIndex === 2 && "max-h-25"} transition-[max_hight] duration-300`}>
          <button onClick={() => setOpenIndex(openIndex === 2 ? null : 2)} className="h-14  w-full flex justify-between items-center gap-2 text-start cursor-pointer text-dark text-sm sm:text-base!">
            <span>چگونه می‌توانم با پشتیبانی 24 ساعته ارتباط برقرار کنم؟</span>
            <span className={`transition-[rotate_fill] duration-300 ${openIndex === 2 && "rotate-180 fill-red"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path d="M14.9336 6.81665H9.74194H5.06695C4.26695 6.81665 3.86695 7.78332 4.43361 8.34998L8.75028 12.6667C9.44195 13.3583 10.5669 13.3583 11.2586 12.6667L12.9003 11.025L15.5753 8.34998C16.1336 7.78332 15.7336 6.81665 14.9336 6.81665Z"></path>
              </svg>
            </span>
          </button>
          <p className="pb-3 pt-1">برای پیگیری وضعیت سفارش، کافی است وارد حساب کاربری خود شده و از بخش "سفارشات من" جزئیات و وضعیت سفارش خود را مشاهده کنید</p>
        </li>
      </ul>
    </section>
  );
}
