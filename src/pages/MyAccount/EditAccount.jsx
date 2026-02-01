import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getLocal, setLocal } from "../../utils/funcs";

export default function EditAccount() {
  let [user, setUser] = useState(getLocal("user") || []);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const userNameRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const repeatNewPasswordRef = useRef(null);
  const alertRef = useRef(null);

  function submit(e) {
    e.preventDefault();
    alertRef.current.style.color = "#dc2f02";
    // if (passwordRef.current.value.trim() !== user.password) return (alertRef.current.textContent = "رمز عبور اشتباه است!");
    if (newPasswordRef.current.value.trim().length && newPasswordRef.current.value.trim() !== repeatNewPasswordRef.current.value.trim()) return (alertRef.current.textContent = "رمز عبور جدید با تکرار رمز عبور جدید یکسان نیست!");
    let obj = {
      name: nameRef.current.value.trim(),
      lastName: lastNameRef.current.value.trim(),
      userName: userNameRef.current.value.trim(),
      phone: phoneRef.current.value.trim(),
      password: newPasswordRef.current.value.trim() || passwordRef.current.value.trim(),
    };
    setLocal("user", obj);
    alertRef.current.style.color = "#26b526";
    alertRef.current.textContent = "تغییرات با موفقیت ذخیره شد.";
  }
  function typeControl(e) {
    e.target.previousElementSibling.type === "password" ? (e.target.previousElementSibling.type = "text") : (e.target.previousElementSibling.type = "password");
  }
  useEffect(() => {
    nameRef.current.value = user.name;
    lastNameRef.current.value = user.lastName;
    userNameRef.current.value = user.userName;
    phoneRef.current.value = user.phone;
  }, []);
  return (
    <>
      <h3 className="relative  pt-3 pb-4 px-3 title-style text-dark text-base xs:text-lg md:text-xl">
        اطلاعات ‌<span className="text-red">حساب کاربری</span>
      </h3>
      <div className="border border-light-gray rounded-2xl px-4 py-3 flex items-start justify-between">
        <input type="file" hidden id="profile" />
        <label htmlFor="profile" className="relative">
          <img className="size-20 rounded-lg" src="https://digiplus.aet-web.ir/wp-content/themes/Digiplus/assets/img/no-prof-img.png" alt="" />
          <span className="absolute bottom-2 left-0 size-6 rounded-full flex justify-center items-center fill-red bg-light border-2 border-org/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <rect x="6" y="11" width="12" height="2" rx="1"></rect>
              <rect x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)"></rect>
            </svg>
          </span>
        </label>
        <Link to={"/login"} className="hidden text-red fill-red xs:flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M17.4389 15.3699C17.2489 15.3699 17.0589 15.2999 16.9089 15.1499C16.6189 14.8599 16.6189 14.3799 16.9089 14.0899L18.9389 12.0599L16.9089 10.0299C16.6189 9.73994 16.6189 9.25994 16.9089 8.96994C17.1989 8.67994 17.6789 8.67994 17.9689 8.96994L20.5289 11.5299C20.8189 11.8199 20.8189 12.2999 20.5289 12.5899L17.9689 15.1499C17.8189 15.2999 17.6289 15.3699 17.4389 15.3699Z"></path>
            <path d="M19.9317 12.8101H9.76172C9.35172 12.8101 9.01172 12.4701 9.01172 12.0601C9.01172 11.6501 9.35172 11.3101 9.76172 11.3101H19.9317C20.3417 11.3101 20.6817 11.6501 20.6817 12.0601C20.6817 12.4701 20.3417 12.8101 19.9317 12.8101Z"></path>
            <path d="M11.7617 20.75C6.61172 20.75 3.01172 17.15 3.01172 12C3.01172 6.85 6.61172 3.25 11.7617 3.25C12.1717 3.25 12.5117 3.59 12.5117 4C12.5117 4.41 12.1717 4.75 11.7617 4.75C7.49172 4.75 4.51172 7.73 4.51172 12C4.51172 16.27 7.49172 19.25 11.7617 19.25C12.1717 19.25 12.5117 19.59 12.5117 20C12.5117 20.41 12.1717 20.75 11.7617 20.75Z"></path>
          </svg>
          <span>خروج از حساب کاربری</span>
        </Link>
      </div>
      <form className="grid! grid-cols-1 sm:grid-cols-2! gap-1 sm:gap-3! pt-5" onSubmit={(e) => submit(e)}>
        <div className="">
          <label htmlFor="name" className="text-dark">
            نام <span className="text-red">*</span>
          </label>
          <input ref={nameRef} type="text" id="name" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" required minLength={3} />
        </div>
        <div className="">
          <label htmlFor="last-name" className="text-dark">
            نام خانوادگی <span className="text-red"></span>
          </label>
          <input ref={lastNameRef} type="text" id="last-name" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" />
        </div>
        <div className="">
          <label htmlFor="user-name" className="text-dark">
            نام کاربری <span className="text-red">*</span>
          </label>
          <input ref={userNameRef} type="text" id="user-name" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" required minLength={8} pattern="[a-zA-Z0-9]+" inputMode="latin" />
        </div>
        <div className="">
          <label htmlFor="phone" className="text-dark">
            شماره تلفن<span className="text-red">*</span>
          </label>
          <input ref={phoneRef} type="tel" id="phone" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" required minLength={8} />
        </div>
        <div className="grid sm:col-span-2 grid-cols-1 md:grid-cols-3 gap-3">
          <div className="">
            <label htmlFor="password" className="text-dark">
              رمز عبور <span className="text-red">*</span>
            </label>
            <div className="flex justify-between items-center gap-2 w-full my-2 px-3 py-2 border border-light-gray focus-within:border-org rounded-lg">
              <input ref={passwordRef} type="password" id="password" className="grow w-full outline-0 border-0" required minLength={6} />
              <button type="button" className="fill-org cursor-pointer" onClick={(e) => typeControl(e)}>
                <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                  <path d="M11.0004 14.9691C8.80958 14.9691 7.03125 13.1908 7.03125 10.9999C7.03125 8.80909 8.80958 7.03076 11.0004 7.03076C13.1912 7.03076 14.9696 8.80909 14.9696 10.9999C14.9696 13.1908 13.1912 14.9691 11.0004 14.9691ZM11.0004 8.40576C9.57042 8.40576 8.40625 9.56993 8.40625 10.9999C8.40625 12.4299 9.57042 13.5941 11.0004 13.5941C12.4304 13.5941 13.5946 12.4299 13.5946 10.9999C13.5946 9.56993 12.4304 8.40576 11.0004 8.40576Z"></path>
                  <path d="M11.0002 19.2681C7.55357 19.2681 4.2994 17.2514 2.06273 13.7498C1.09107 12.2373 1.09107 9.77144 2.06273 8.24978C4.30857 4.74811 7.56273 2.73145 11.0002 2.73145C14.4377 2.73145 17.6919 4.74811 19.9286 8.24978C20.9002 9.76228 20.9002 12.2281 19.9286 13.7498C17.6919 17.2514 14.4377 19.2681 11.0002 19.2681ZM11.0002 4.10645C8.0394 4.10645 5.2069 5.88478 3.2269 8.99228C2.5394 10.0648 2.5394 11.9348 3.2269 13.0073C5.2069 16.1148 8.0394 17.8931 11.0002 17.8931C13.9611 17.8931 16.7936 16.1148 18.7736 13.0073C19.4611 11.9348 19.4611 10.0648 18.7736 8.99228C16.7936 5.88478 13.9611 4.10645 11.0002 4.10645Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="">
            <label htmlFor="new-password" className="text-dark">
              رمز عبور جدید <span className="text-red"></span>
            </label>
            <div className="flex justify-between items-center gap-2 w-full my-2 px-3 py-2 border border-light-gray focus-within:border-org rounded-lg">
              <input ref={newPasswordRef} type="password" id="new-password" className="grow w-full outline-0 border-0" minLength={6} />
              <button type="button" className="fill-org cursor-pointer" onClick={(e) => typeControl(e)}>
                <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                  <path d="M11.0004 14.9691C8.80958 14.9691 7.03125 13.1908 7.03125 10.9999C7.03125 8.80909 8.80958 7.03076 11.0004 7.03076C13.1912 7.03076 14.9696 8.80909 14.9696 10.9999C14.9696 13.1908 13.1912 14.9691 11.0004 14.9691ZM11.0004 8.40576C9.57042 8.40576 8.40625 9.56993 8.40625 10.9999C8.40625 12.4299 9.57042 13.5941 11.0004 13.5941C12.4304 13.5941 13.5946 12.4299 13.5946 10.9999C13.5946 9.56993 12.4304 8.40576 11.0004 8.40576Z"></path>
                  <path d="M11.0002 19.2681C7.55357 19.2681 4.2994 17.2514 2.06273 13.7498C1.09107 12.2373 1.09107 9.77144 2.06273 8.24978C4.30857 4.74811 7.56273 2.73145 11.0002 2.73145C14.4377 2.73145 17.6919 4.74811 19.9286 8.24978C20.9002 9.76228 20.9002 12.2281 19.9286 13.7498C17.6919 17.2514 14.4377 19.2681 11.0002 19.2681ZM11.0002 4.10645C8.0394 4.10645 5.2069 5.88478 3.2269 8.99228C2.5394 10.0648 2.5394 11.9348 3.2269 13.0073C5.2069 16.1148 8.0394 17.8931 11.0002 17.8931C13.9611 17.8931 16.7936 16.1148 18.7736 13.0073C19.4611 11.9348 19.4611 10.0648 18.7736 8.99228C16.7936 5.88478 13.9611 4.10645 11.0002 4.10645Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="">
            <label htmlFor="repeatNewPassword" className="text-dark">
              تکرار رمز عبور جدید <span className="text-red"></span>
            </label>
            <div className="flex justify-between items-center gap-2 w-full my-2 px-3 py-2 border border-light-gray focus-within:border-org rounded-lg">
              <input ref={repeatNewPasswordRef} type="password" id="repeatNewPassword" className="grow w-full outline-0 border-0" />
              <button type="button" className="fill-org cursor-pointer" onClick={(e) => typeControl(e)}>
                <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                  <path d="M11.0004 14.9691C8.80958 14.9691 7.03125 13.1908 7.03125 10.9999C7.03125 8.80909 8.80958 7.03076 11.0004 7.03076C13.1912 7.03076 14.9696 8.80909 14.9696 10.9999C14.9696 13.1908 13.1912 14.9691 11.0004 14.9691ZM11.0004 8.40576C9.57042 8.40576 8.40625 9.56993 8.40625 10.9999C8.40625 12.4299 9.57042 13.5941 11.0004 13.5941C12.4304 13.5941 13.5946 12.4299 13.5946 10.9999C13.5946 9.56993 12.4304 8.40576 11.0004 8.40576Z"></path>
                  <path d="M11.0002 19.2681C7.55357 19.2681 4.2994 17.2514 2.06273 13.7498C1.09107 12.2373 1.09107 9.77144 2.06273 8.24978C4.30857 4.74811 7.56273 2.73145 11.0002 2.73145C14.4377 2.73145 17.6919 4.74811 19.9286 8.24978C20.9002 9.76228 20.9002 12.2281 19.9286 13.7498C17.6919 17.2514 14.4377 19.2681 11.0002 19.2681ZM11.0002 4.10645C8.0394 4.10645 5.2069 5.88478 3.2269 8.99228C2.5394 10.0648 2.5394 11.9348 3.2269 13.0073C5.2069 16.1148 8.0394 17.8931 11.0002 17.8931C13.9611 17.8931 16.7936 16.1148 18.7736 13.0073C19.4611 11.9348 19.4611 10.0648 18.7736 8.99228C16.7936 5.88478 13.9611 4.10645 11.0002 4.10645Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2 flex justify-between items-center flex-wrap-reverse gap-2">
          <p ref={alertRef} className="text-red"></p>
          <button type="submit" className="gradient py-2.5 px-7 ms-auto cursor-pointer text-white rounded-lg">
            ثبت تغییرات
          </button>
        </div>
      </form>
    </>
  );
}
