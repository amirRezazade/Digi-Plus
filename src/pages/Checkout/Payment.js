import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLocal, removeLocal, setLocal } from "../../utils/funcs";
import cardBg from "../../assets/images/bank-card.jpeg";
export default function Payment() {
  const navigate = useNavigate();

  let expirationYears = new Date().getFullYear();
  let price = getLocal("checkoutPrice");
  let [orderNumber, setOrderNumber] = useState(null);

  let [cardNumber, setCardNumber] = useState([]);
  let [cardHolder, setCardHolder] = useState("");
  let [cardYear, setCardYear] = useState("");
  let [cardMonth, setCardMonth] = useState("");
  let [cardCvv, setCardCvv] = useState("");
  let [cardPassword, setCarPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let numberRef = useRef(null);
  let holderRef = useRef(null);
  let yearRef = useRef(null);
  let mountRef = useRef(null);
  let cvvRef = useRef(null);
  let passwordRef = useRef(null);

  let [redirectTime, setRedirectTime] = useState(20);

  let [succesPayment, setSuccesPayment] = useState(false);

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "") // حذف غیر عدد
      .slice(0, 16) // حداکثر 16 رقم
      .replace(/(.{4})/g, "$1 ") // فاصله بعد هر 4 رقم
      .trim();
  };
  const formHolderName = (e) => {
    const input = e;
    const lettersOnly = input.replace(/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, "");

    setCardHolder(lettersOnly);
  };
  function sumbitForm(e) {
    e.preventDefault();
    let isOk = true;
    if (cardNumber.length < 19) {
      isOk = false;
      numberRef.current.style.borderColor = "#dc2f02";
    } else numberRef.current.style.borderColor = "#e0e0e0";
    if (cardHolder.length < 3) {
      isOk = false;
      holderRef.current.style.borderColor = "#dc2f02";
    } else holderRef.current.style.borderColor = "#e0e0e0";
    if (cardYear == "") {
      isOk = false;
      yearRef.current.style.borderColor = "#dc2f02";
    } else yearRef.current.style.borderColor = "#e0e0e0";
    if (cardMonth == "") {
      isOk = false;
      mountRef.current.style.borderColor = "#dc2f02";
    } else mountRef.current.style.borderColor = "#e0e0e0";
    if (cardCvv.length < 3) {
      isOk = false;
      cvvRef.current.style.borderColor = "#dc2f02";
    } else cvvRef.current.style.borderColor = "#e0e0e0";

    if (cardPassword.length !== 4) {
      isOk = false;
      passwordRef.current.style.borderColor = "#dc2f02";
    } else passwordRef.current.style.borderColor = "#e0e0e0";

    if (isOk) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccesPayment(true);
        complateOrder();
      }, 2000);
    }
  }

  function complateOrder() {
    let date = new Date();
    let orderInfo = {
      code: orderNumber,
      price: price,
      year: date.getFullYear(),
      mounth: date.getMonth(),
      day: date.getDay(),
      hour: date.getHours(),
      minute: date.getMinutes(),
    };
    let orderList = getLocal("orderList") || [];
    orderList.push(orderInfo);
    setLocal("orderList", orderList);
    removeLocal("checkoutPrice");
    removeLocal("cart");
    setInterval(() => {
      setRedirectTime((prev) => prev - 1);
    }, 1000);
  }

  useEffect(() => {
    if (redirectTime < 1) navigate("/", { replace: true });
  }, [redirectTime]);

  useEffect(() => {
    const cart = getLocal("cart") || [];
    if (!price || cart.length === 0) navigate("/cart", { replace: true });
    setOrderNumber(Math.floor(Math.random() * 200));
  }, []);

  {
    return !succesPayment ? (
      <div className="w-full flex justify-center items-center py-8 xs:py-20 px-5">
        <div className="xs:mt-30 bg-white rounded-lg border border-light-gray/70 gray-shaddow w-140 min-h-100 relative  overflow-visible select-none">
          <div className="hidden xs:block absolute w-9/10 sm:w-8/10 h-65 rounded-2xl overflow-hidden  bg-cover top-0 left-1/2 -translate-1/2 shadow-[3px_13px_30px_0px_#0b132980]" style={{ backgroundImage: `url(${cardBg})` }}>
            <div className="absolute w-full h-full top-0 left-0 text-white bg-black/40 p-6 flex flex-col justify-between ">
              <div className="flex justify-between items-center">
                <img className="max-w-18" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="" />
                <div className="flex items-center gap-1 ms-auto me-4">
                  <span className="tracking-widest">{cardCvv || ""}</span>
                  <span className="text-white/80">: CVV</span>
                </div>
                <img className="max-w-15" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="" />
              </div>
              <div dir="ltr" className="w-full text-xl sm:text-2xl font-bold flex justify-center items-center  gap-5 ">
                <div className="text-nowrap">
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[0] || "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[1] || "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[2] || "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[3] || "#"}</span>
                </div>
                <div className="text-nowrap">
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[5] ? "*" : "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[6] ? "*" : "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[7] ? "*" : "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[8] ? "*" : "#"}</span>
                </div>
                <div className="text-nowrap">
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[10] ? "*" : "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[11] ? "*" : "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[12] ? "*" : "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[13] ? "*" : "#"}</span>
                </div>
                <div className="text-nowrap">
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[15] || "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[16] || "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[17] || "#"}</span>
                  <span className=" w-4 sm:w-4.5 inline-block">{cardNumber[18] || "#"}</span>
                </div>
              </div>
              <div className="w-full flex justify-between items-center text-base">
                <div className="">
                  <span className="text-white/60">Expires</span>
                  <div>
                    <span>{cardMonth || "MM"}</span>/<span>{cardYear ? cardYear[2] + cardYear[3] : "YY"}</span>
                  </div>
                </div>

                <div className="grow text-end max-w-80">
                  <span className="text-white/60">Card Holder</span>
                  <div className="truncate">
                    <span className="text-lg truncate">{cardHolder || "Full Name"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form dir="ltr" className="xs:mt-35 p-5 w-full text-gray text-sm">
            <h2 className="text-center text-dark text-2xl sm:text-3xl lg:text-4xl font-black pb-5">{price} $</h2>
            <div>
              <label htmlFor="cart-number">Card Number</label>
              <input ref={numberRef} className="w-full text-lg mt-2 border border-light-gray rounded-lg focus:border-blue-400 outline-0 p-3 " type="text" id="cart-number" maxLength={19} minLength={19} required autoComplete="off" inputMode="numeric" value={cardNumber} onInput={(e) => setCardNumber(formatCardNumber(e.target.value.trim()))} />
            </div>
            <div className="mt-3">
              <label htmlFor="cart-holder">Card Holder</label>
              <input ref={holderRef} className="w-full text-lg mt-2 border border-light-gray rounded-lg focus:border-blue-400 outline-0 p-3 " type="text" id="cart-holder" minLength={3} required autoComplete="off" value={cardHolder} onInput={(e) => formHolderName(e.target.value)} />
            </div>
            <div className="mt-3">
              <label htmlFor="password">Password</label>
              <input ref={passwordRef} className="w-full text-lg mt-2 border border-light-gray rounded-lg focus:border-blue-400 outline-0 p-3 " type="password" id="password" minLength={4} maxLength={4} required inputMode="numeric" pattern="[0-9]*" autoComplete="off" value={cardPassword} onInput={(e) => setCarPassword(e.target.value.trim().replace(/\D/g, ""))} />
            </div>
            <div className="flex flex-col xs:flex-row xs:gap-5 justify-between items-center ">
              <div className="w-full grow my-5">
                <label htmlFor="expiration-mount">Expiration Date</label>
                <div className="flex items-center gap-3 mt-1 text-base">
                  <select ref={mountRef} required value={cardMonth} className="grow outline-0 border border-light-gray focus:border-blue-400 rounded-lg p-3" id="expiration-mount" onChange={(e) => setCardMonth(e.target.value)}>
                    <option value="" disabled>
                      Mount
                    </option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select ref={yearRef} required value={cardYear} className="grow outline-0 border border-light-gray focus:border-blue-400 rounded-lg p-3" id="expiration-year" onChange={(e) => setCardYear(e.target.value)}>
                    <option value="" disabled>
                      Year
                    </option>
                    <option value={expirationYears}>{expirationYears}</option>
                    <option value={expirationYears + 1}>{expirationYears + 1}</option>
                    <option value={expirationYears + 2}>{expirationYears + 2}</option>
                    <option value={expirationYears + 3}>{expirationYears + 3}</option>
                    <option value={expirationYears + 4}>{expirationYears + 4}</option>
                    <option value={expirationYears + 5}>{expirationYears + 5}</option>
                    <option value={expirationYears + 6}>{expirationYears + 6}</option>
                    <option value={expirationYears + 7}>{expirationYears + 7}</option>
                    <option value={expirationYears + 8}>{expirationYears + 8}</option>
                    <option value={expirationYears + 9}>{expirationYears + 9}</option>
                    <option value={expirationYears + 10}>{expirationYears + 10}</option>
                  </select>
                </div>
              </div>
              <div className="w-full xs:max-w-1/3">
                <label htmlFor="cart-cvv">CVV</label>
                <input ref={cvvRef} className="w-full  text-lg mt-1 border border-light-gray rounded-xl focus:border-blue-400 outline-0 p-3 " type="number" id="cart-cvv" maxLength={4} minLength={3} required inputMode="numeric" pattern="[0-9]*" autoComplete="off" value={cardCvv} onInput={(e) => e.target.value.trim().length < 5 && setCardCvv(e.target.value.trim())} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 text-white mt-5 xs:mt-0">
              <Link to={"/checkout"} className="py-3 w-3/10 text-center bg-red-700 hover:bg-red-600 rounded-2xl cursor-pointer" onClick={() => removeLocal("checkoutPrice")}>
                انصراف
              </Link>
              <button type="submit" disabled={loading} className="py-3 w-7/10 bg-green-700 hover:bg-green-600 rounded-2xl cursor-pointer disabled:cursor-wait disabled:opacity-50" onClick={sumbitForm}>
                {loading ? <span className="border-4 border-transparent border-t-white rounded-full block mx-auto size-5 animate-spin"></span> : "پرداخت"}
              </button>
            </div>
            <span dir="rtl" className="text-xs pt-3 text-center block ">
              این درگاه صرفاً جهت تست و شبیه‌سازی پرداخت است.
            </span>
          </form>
        </div>
      </div>
    ) : (
      <div className="min-h-screen flex justify-center pt-20">
        <div>
          <span className="mx-auto flex justify-center items-center size-20 rounded-full bg-green-500 fill-none stroke-white">
            <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" strokeWidth="2" strokeLinecap="round"></path>{" "}
              </g>
            </svg>
          </span>
          <div className="flex flex-col items-center justify-center gap-4 mt-10 text-gray text-center">
            <h1 className="text-2xl text-green-600">سفارش شما با موفقیت ثبت شد!</h1>
            <h3>کد رهگیری سفارش شما:{orderNumber}</h3>
            <p>شما میتوانید تاریخچه سفارش خود را با رفتن به صفحه حساب کاربری خود مشاهده نمایید.</p>
            <span>از خرید آنلاین شما سپاسگزاریم.</span>
            <Link to={"/"} className="sm:mt-7 text-white bg-green-600 py-3 w-50 text-center rounded-lg">
              بازگشت به صفحه اصلی <span>{redirectTime}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
