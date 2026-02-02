import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setLocal } from "../../utils/funcs";

export default function SignupForm({ onForm, form }) {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const alertRef = useRef(null);
  const navigate = useNavigate();

  function typeControl(e) {
    e.target.previousElementSibling.type === "password" ? (e.target.previousElementSibling.type = "text") : (e.target.previousElementSibling.type = "password");
  }
  function submit(e) {
    e.preventDefault();
    if (passwordRef.current.value.trim() !== repeatPasswordRef.current.value.trim()) return (alertRef.current.textContent = "رمز عبور و تکرار رمز عبور یکسان نیست!");
    else {
      let user = {
        name: nameRef.current.value.trim(),
        phone: phoneRef.current.value.trim(),
        password: passwordRef.current.value.trim(),
      };
      setLocal("user", user);
      console.log(user);
      navigate("/", { replace: true });
    }
  }
  return (
    <div className={`  px-3 xs:px-10! md:px-3! lg:px-10! py-3 ${form !== "signup" ? "scale-30 opacity-0 pointer-events-none" : ""} transition-transform duration-500`}>
      <h1 className="font-bold text-xl xs:text-2xl sm:text-3xl! md:text-2xl! lg:text-4xl! text-dark py-3 text-center">
        ثبت نام در <span className="text-red"> فروشگاه دیجی پلاس</span>
      </h1>
      <p className="text-center">حساب کاربریتو باز کن و دنیایی از امکانات دیجی پلاس رو تجربه کن!</p>
      <form className="mt-4 xs:mt-15" onSubmit={(e) => submit(e)}>
        <div className="">
          <label htmlFor="user-name" className="text-dark">
            نام <span className="text-red">*</span>
          </label>
          <input ref={nameRef} type="text" id="user-name" className="block w-full my-1 xs:my-3! p-3 outline-0 gray-shaddow border border-light-gray/50 focus:border-org rounded-lg" required minLength={3} />
        </div>
        <div className="mt-2 xs:my-4!">
          <label htmlFor="phone" className="text-dark">
            شماره تلفن <span className="text-red">*</span>
          </label>
          <input ref={phoneRef} type="tel" id="phone" className="block w-full my-1 xs:my-3! p-3 outline-0 gray-shaddow border border-light-gray/50 focus:border-org rounded-lg" required minLength={8} />
        </div>
        <div className="mt-2 xs:my-4!">
          <label htmlFor="password" className="text-dark">
            رمز عبور <span className="text-red">*</span>
          </label>
          <div className="flex justify-between items-center gap-2 w-full my-2 p-3 gray-shaddow border border-light-gray/50 focus-within:border-org rounded-lg">
            <input ref={passwordRef} type="password" id="password" className="grow w-full  outline-0 border-0" required minLength={6} />
            <button type="button" className="fill-org cursor-pointer" onClick={(e) => typeControl(e)}>
              <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                <path d="M11.0004 14.9691C8.80958 14.9691 7.03125 13.1908 7.03125 10.9999C7.03125 8.80909 8.80958 7.03076 11.0004 7.03076C13.1912 7.03076 14.9696 8.80909 14.9696 10.9999C14.9696 13.1908 13.1912 14.9691 11.0004 14.9691ZM11.0004 8.40576C9.57042 8.40576 8.40625 9.56993 8.40625 10.9999C8.40625 12.4299 9.57042 13.5941 11.0004 13.5941C12.4304 13.5941 13.5946 12.4299 13.5946 10.9999C13.5946 9.56993 12.4304 8.40576 11.0004 8.40576Z"></path>
                <path d="M11.0002 19.2681C7.55357 19.2681 4.2994 17.2514 2.06273 13.7498C1.09107 12.2373 1.09107 9.77144 2.06273 8.24978C4.30857 4.74811 7.56273 2.73145 11.0002 2.73145C14.4377 2.73145 17.6919 4.74811 19.9286 8.24978C20.9002 9.76228 20.9002 12.2281 19.9286 13.7498C17.6919 17.2514 14.4377 19.2681 11.0002 19.2681ZM11.0002 4.10645C8.0394 4.10645 5.2069 5.88478 3.2269 8.99228C2.5394 10.0648 2.5394 11.9348 3.2269 13.0073C5.2069 16.1148 8.0394 17.8931 11.0002 17.8931C13.9611 17.8931 16.7936 16.1148 18.7736 13.0073C19.4611 11.9348 19.4611 10.0648 18.7736 8.99228C16.7936 5.88478 13.9611 4.10645 11.0002 4.10645Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-2 xs:my-4!">
          <label htmlFor="repeat-password" className="text-dark">
            تکرار رمز عبور <span className="text-red">*</span>
          </label>
          <div className="flex justify-between items-center gap-2 w-full my-2 p-3 gray-shaddow border border-light-gray/50 focus-within:border-org rounded-lg">
            <input ref={repeatPasswordRef} type="password" id="repeat-password" className="grow w-full  outline-0 border-0" required minLength={6} />
            <button type="button" className="fill-org cursor-pointer" onClick={(e) => typeControl(e)}>
              <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                <path d="M11.0004 14.9691C8.80958 14.9691 7.03125 13.1908 7.03125 10.9999C7.03125 8.80909 8.80958 7.03076 11.0004 7.03076C13.1912 7.03076 14.9696 8.80909 14.9696 10.9999C14.9696 13.1908 13.1912 14.9691 11.0004 14.9691ZM11.0004 8.40576C9.57042 8.40576 8.40625 9.56993 8.40625 10.9999C8.40625 12.4299 9.57042 13.5941 11.0004 13.5941C12.4304 13.5941 13.5946 12.4299 13.5946 10.9999C13.5946 9.56993 12.4304 8.40576 11.0004 8.40576Z"></path>
                <path d="M11.0002 19.2681C7.55357 19.2681 4.2994 17.2514 2.06273 13.7498C1.09107 12.2373 1.09107 9.77144 2.06273 8.24978C4.30857 4.74811 7.56273 2.73145 11.0002 2.73145C14.4377 2.73145 17.6919 4.74811 19.9286 8.24978C20.9002 9.76228 20.9002 12.2281 19.9286 13.7498C17.6919 17.2514 14.4377 19.2681 11.0002 19.2681ZM11.0002 4.10645C8.0394 4.10645 5.2069 5.88478 3.2269 8.99228C2.5394 10.0648 2.5394 11.9348 3.2269 13.0073C5.2069 16.1148 8.0394 17.8931 11.0002 17.8931C13.9611 17.8931 16.7936 16.1148 18.7736 13.0073C19.4611 11.9348 19.4611 10.0648 18.7736 8.99228C16.7936 5.88478 13.9611 4.10645 11.0002 4.10645Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <p ref={alertRef} className=" text-red text-sm cursor-pointer mt-5"></p>
        <button className="block mt-2 mb-3 w-full gradient rounded-lg cursor-pointer text-white py-3">عضویت</button>
        <div className="flex justify-center gap-2">
          <span>حساب کاربری دارید؟ </span>
          <button type="button" onClick={() => onForm("login")} className=" text-red cursor-pointer">
            ورود
          </button>
        </div>
        <Link to={"/"} className="flex items-center justify-center gap-1 group text-red fill-red mt-3.5">
          <span>رفتن به صفحه اصلی</span>
          <span className="group-hover:-translate-x-1 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 16">
              <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
            </svg>
          </span>
        </Link>
      </form>
    </div>
  );
}
