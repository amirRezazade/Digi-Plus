import { useState } from "react";
import { Link } from "react-router-dom";

export default function Address() {
  let [editing, setEditing] = useState(false);

  return !editing ? (
    <div>
      <h3 class="relative  pt-3 pb-4 px-3 title-style text-dark text-base xs:text-lg md:text-xl">
        اطلاعات ‌<span class="text-red">حساب کاربری</span>
      </h3>
      <p className="text-sm ">آدرس‌های زیر برای ارسال فاکتور و صورت حساب استفاده خواهند شد.</p>
      <div className="rounded-2xl p-3 border border-light-gray mt-4">
        <div className="flex flex-wrap xs:flex-nowrap gap-2 items-center justify-between pb-2 border-b border-light-gray">
          <h2 className="text-sm sm:text-lg">آدرس صورتحساب</h2>
          <button onClick={() => setEditing(true)} className="flex items-center gap-2 gradient text-white py-2 px-3 xs:px-5! rounded-lg sm-shaddow cursor-pointer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentcolor">
                <path d="M11.25 17.0625H6.75C2.6775 17.0625 0.9375 15.3225 0.9375 11.25V6.75C0.9375 2.6775 2.6775 0.9375 6.75 0.9375H8.25C8.5575 0.9375 8.8125 1.1925 8.8125 1.5C8.8125 1.8075 8.5575 2.0625 8.25 2.0625H6.75C3.2925 2.0625 2.0625 3.2925 2.0625 6.75V11.25C2.0625 14.7075 3.2925 15.9375 6.75 15.9375H11.25C14.7075 15.9375 15.9375 14.7075 15.9375 11.25V9.75C15.9375 9.4425 16.1925 9.1875 16.5 9.1875C16.8075 9.1875 17.0625 9.4425 17.0625 9.75V11.25C17.0625 15.3225 15.3225 17.0625 11.25 17.0625Z"></path>
                <path d="M6.37549 13.2674C5.91799 13.2674 5.49799 13.1024 5.19049 12.8024C4.82299 12.4349 4.66549 11.9024 4.74799 11.3399L5.07049 9.08242C5.13049 8.64742 5.41549 8.08492 5.72299 7.77742L11.633 1.86742C13.1255 0.374922 14.6405 0.374922 16.133 1.86742C16.9505 2.68492 17.318 3.51742 17.243 4.34992C17.1755 5.02492 16.8155 5.68492 16.133 6.35992L10.223 12.2699C9.91549 12.5774 9.35299 12.8624 8.91799 12.9224L6.66049 13.2449C6.56299 13.2674 6.46549 13.2674 6.37549 13.2674ZM12.428 2.66242L6.51799 8.57242C6.37549 8.71492 6.21049 9.04492 6.18049 9.23992L5.85799 11.4974C5.82799 11.7149 5.87299 11.8949 5.98549 12.0074C6.09799 12.1199 6.27799 12.1649 6.49549 12.1349L8.75299 11.8124C8.94799 11.7824 9.28549 11.6174 9.42049 11.4749L15.3305 5.56492C15.818 5.07742 16.073 4.64242 16.1105 4.23742C16.1555 3.74992 15.9005 3.23242 15.3305 2.65492C14.1305 1.45492 13.3055 1.79242 12.428 2.66242Z"></path>
                <path d="M14.8867 7.37246C14.8342 7.37246 14.7817 7.36496 14.7367 7.34996C12.7642 6.79496 11.1967 5.22746 10.6417 3.25496C10.5592 2.95496 10.7317 2.64746 11.0317 2.55746C11.3317 2.47496 11.6392 2.64746 11.7217 2.94746C12.1717 4.54496 13.4392 5.81246 15.0367 6.26246C15.3367 6.34496 15.5092 6.65996 15.4267 6.95996C15.3592 7.21496 15.1342 7.37246 14.8867 7.37246Z"></path>
              </svg>
            </span>
            <span>افزودن آدرس</span>
          </button>
        </div>
        <p className=" pt-4 pb-2">شما هنوز آدرسی ثبت نکرده اید.</p>
      </div>
      <div className="rounded-2xl p-3 border border-light-gray mt-4">
        <div className="flex flex-wrap xs:flex-nowrap gap-2 items-center justify-between pb-2 border-b border-light-gray">
          <h2 className="text-sm sm:text-lg">آدرس برای ارسال بار</h2>
          <button onClick={() => setEditing(true)} className="flex items-center gap-2 gradient text-white py-2 px-3 xs:px-5! rounded-lg sm-shaddow cursor-pointer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentcolor">
                <path d="M11.25 17.0625H6.75C2.6775 17.0625 0.9375 15.3225 0.9375 11.25V6.75C0.9375 2.6775 2.6775 0.9375 6.75 0.9375H8.25C8.5575 0.9375 8.8125 1.1925 8.8125 1.5C8.8125 1.8075 8.5575 2.0625 8.25 2.0625H6.75C3.2925 2.0625 2.0625 3.2925 2.0625 6.75V11.25C2.0625 14.7075 3.2925 15.9375 6.75 15.9375H11.25C14.7075 15.9375 15.9375 14.7075 15.9375 11.25V9.75C15.9375 9.4425 16.1925 9.1875 16.5 9.1875C16.8075 9.1875 17.0625 9.4425 17.0625 9.75V11.25C17.0625 15.3225 15.3225 17.0625 11.25 17.0625Z"></path>
                <path d="M6.37549 13.2674C5.91799 13.2674 5.49799 13.1024 5.19049 12.8024C4.82299 12.4349 4.66549 11.9024 4.74799 11.3399L5.07049 9.08242C5.13049 8.64742 5.41549 8.08492 5.72299 7.77742L11.633 1.86742C13.1255 0.374922 14.6405 0.374922 16.133 1.86742C16.9505 2.68492 17.318 3.51742 17.243 4.34992C17.1755 5.02492 16.8155 5.68492 16.133 6.35992L10.223 12.2699C9.91549 12.5774 9.35299 12.8624 8.91799 12.9224L6.66049 13.2449C6.56299 13.2674 6.46549 13.2674 6.37549 13.2674ZM12.428 2.66242L6.51799 8.57242C6.37549 8.71492 6.21049 9.04492 6.18049 9.23992L5.85799 11.4974C5.82799 11.7149 5.87299 11.8949 5.98549 12.0074C6.09799 12.1199 6.27799 12.1649 6.49549 12.1349L8.75299 11.8124C8.94799 11.7824 9.28549 11.6174 9.42049 11.4749L15.3305 5.56492C15.818 5.07742 16.073 4.64242 16.1105 4.23742C16.1555 3.74992 15.9005 3.23242 15.3305 2.65492C14.1305 1.45492 13.3055 1.79242 12.428 2.66242Z"></path>
                <path d="M14.8867 7.37246C14.8342 7.37246 14.7817 7.36496 14.7367 7.34996C12.7642 6.79496 11.1967 5.22746 10.6417 3.25496C10.5592 2.95496 10.7317 2.64746 11.0317 2.55746C11.3317 2.47496 11.6392 2.64746 11.7217 2.94746C12.1717 4.54496 13.4392 5.81246 15.0367 6.26246C15.3367 6.34496 15.5092 6.65996 15.4267 6.95996C15.3592 7.21496 15.1342 7.37246 14.8867 7.37246Z"></path>
              </svg>
            </span>
            <span>افزودن آدرس</span>
          </button>
        </div>
        <p className=" pt-4 pb-2">شما هنوز آدرسی ثبت نکرده اید.</p>
      </div>
    </div>
  ) : (
    <div>
      <div class="flex justify-between items-center pt-3 pb-4">
        <h3 class="relative px-3 title-style text-dark text-base xs:text-lg md:text-xl">
          افزودن <span class="text-red"> آدرس</span>
        </h3>
        <button onClick={() => setEditing(false)} className="text-org text-xs px-1 xs:px-3! py-2 flex items-center gap-1 bg-yel border border-org/30 rounded-lg cursor-pointer hover:text-red">
          <span>بازگشت به صفحه‌ی قبل</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="currentcolor">
              <path d="M5.94952 9.38783L9.86241 5.4295C10.0046 5.30971 10.0648 5.15346 10.0648 4.99981C10.0648 4.84616 10.0049 4.69044 9.88533 4.57012L5.94952 0.61179C5.69796 0.361009 5.28233 0.350592 5.01983 0.587311C4.7546 0.825071 4.7464 1.22221 4.99523 1.47117L8.50343 4.99981L4.99249 8.52846C4.74383 8.77747 4.75323 9.17299 5.01813 9.41231C5.28233 9.64825 5.69796 9.63783 5.94952 9.38783Z"></path>
            </svg>
          </span>
        </button>
      </div>
      <p className="text-xs">آدرس های زیر بصورت پیش فرض در صفحه ی پرداخت مورد استفاده قرار میگیرند.</p>
      <div className="p-3 xs:p-5! gray-shaddow border border-light-gray/40 rounded-2xl my-4">
        <h2 className="pb-3 text-lg border-b border-light-gray">آدرس صورتحساب</h2>
        <form onSubmit={() => setEditing(false)}>
          <div className="grid! grid-cols-1 sm:grid-cols-2! gap-1 sm:gap-3! pt-5">
            <div className="">
              <label htmlFor="name" className="text-dark">
                نام <span className="text-red">*</span>
              </label>
              <input type="text" id="name" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" required minLength={3} />
            </div>
            <div className="">
              <label htmlFor="last-name" className="text-dark">
                نام خانوادگی <span className="text-red">*</span>
              </label>
              <input type="text" id="last-name" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" required minLength={3} />
            </div>
            <div className="">
              <label htmlFor="postal-code" className="text-dark">
                کد پستی <span className="text-red">*</span>
              </label>
              <input type="number" id="postal-code" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" required minLength={5} />
            </div>
            <div className="">
              <label htmlFor="phone" className="text-dark">
                تلفن <span className="text-red">*</span>
              </label>
              <input type="number" id="phone" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" required minLength={11} />
            </div>
            <div className="">
              <label htmlFor="ostan" className="text-dark">
                استان<span className="text-red">*</span>
              </label>
              <input type="text" id="ostan" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" required minLength={3} />
            </div>
            <div className="">
              <label htmlFor="city" className="text-dark">
                شهر<span className="text-red">*</span>
              </label>
              <input type="text" id="city" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" required minLength={3} />
            </div>
            <div className=" sm:col-span-2">
              <label htmlFor="street" className="text-dark">
                خیابان<span className="text-red">*</span>
              </label>
              <input type="text" id="street" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" required minLength={3} />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <button type="submit" className="gradient py-2.5 px-7  cursor-pointer text-white rounded-lg">
                ذخیره آدرس
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
