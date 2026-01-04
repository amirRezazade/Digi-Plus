import { useState } from "react";
import { Link } from "react-router-dom";

export default function Payment({ price }) {
  let expirationYears = new Date().getFullYear();

  let [cardNumber, setCardNumber] = useState([]);
  let [cardHolder, setCardHolder] = useState("");
  let [cardYear, setCardYear] = useState("");
  let [cardMonth, setCardMonth] = useState("");
  let [cardCvv, setCardCvv] = useState("");
  let [cardPassword, setCarPassword] = useState("");
  let [loading, setLoading] = useState(false);
  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "") // حذف غیر عدد
      .slice(0, 16) // حداکثر 16 رقم
      .replace(/(.{4})/g, "$1 ") // فاصله بعد هر 4 رقم
      .trim();
  };
  function sumbitForm(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/";
    }, 2000);
  }

  return (
    <div className="w-screen min-h-screen  flex justify-center items-center py-20">
      <div className="mt-30 bg-white rounded-lg border border-light-gray/70 gray-shaddow w-140 min-h-100 relative  overflow-visible select-none">
        <div className="absolute w-8/10 h-65 rounded-2xl overflow-hidden bg-[url(https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/8.jpeg)] bg-cover top-0 left-1/2 -translate-1/2 shadow-[3px_13px_30px_0px_#0b132980]">
          <div className="absolute w-full h-full top-0 left-0 text-white bg-black/40 p-6 flex flex-col justify-between ">
            <div className="flex justify-between items-center">
              <img className="max-w-18" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="" />
              <div className="flex items-center gap-1 ms-auto me-4">
                <span className="tracking-widest">{cardCvv || ""}</span>
                <span className="text-white/80">: CVV</span>
              </div>
              <img className="max-w-15" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="" />
            </div>
            <div dir="ltr" className="w-full text-2xl font-bold flex justify-center items-center  gap-5 tracking-widest">
              <div>
                <span className="w-4.5 inline-block">{cardNumber[0] || "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[1] || "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[2] || "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[3] || "#"}</span>
              </div>
              <div>
                <span className="w-4.5 inline-block">{cardNumber[5] ? "*" : "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[6] ? "*" : "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[7] ? "*" : "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[8] ? "*" : "#"}</span>
              </div>
              <div>
                <span className="w-4.5 inline-block">{cardNumber[10] ? "*" : "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[11] ? "*" : "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[12] ? "*" : "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[13] ? "*" : "#"}</span>
              </div>
              <div>
                <span className="w-4.5 inline-block">{cardNumber[15] || "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[16] || "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[17] || "#"}</span>
                <span className="w-4.5 inline-block">{cardNumber[18] || "#"}</span>
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
        <form dir="ltr" className="mt-35 p-5 w-full text-gray text-sm" onSubmit={sumbitForm}>
          <h2 className="text-center text-dark text-2xl sm:text-3xl lg:text-4xl font-black ">243,000 $</h2>
          <div>
            <label htmlFor="cart-number">Card Number</label>
            <input className="w-full text-lg mt-2 border border-light-gray rounded-lg focus:border-blue-400 outline-0 p-3 " type="text" id="cart-number" maxLength={19} minLength={19} required autoComplete="off" inputMode="numeric" value={cardNumber} onInput={(e) => setCardNumber(formatCardNumber(e.target.value.trim()))} />
          </div>
          <div className="mt-3">
            <label htmlFor="cart-holder">Card Holder</label>
            <input className="w-full text-lg mt-2 border border-light-gray rounded-lg focus:border-blue-400 outline-0 p-3 " type="text" id="cart-holder" minLength={3} required autoComplete="off" value={cardHolder} onInput={(e) => setCardHolder(e.target.value)} />
          </div>
          <div className="mt-3">
            <label htmlFor="password">Password</label>
            <input className="w-full text-lg mt-2 border border-light-gray rounded-lg focus:border-blue-400 outline-0 p-3 " type="password" id="password" minLength={4} maxLength={4} required inputMode="numeric" pattern="[0-9]*" autoComplete="off" value={cardPassword} onInput={(e) => setCarPassword(e.target.value.trim().replace(/\D/g, ""))} />
          </div>
          <div className="flex flex-col xs:flex-row gap-5 justify-between items-center ">
            <div className="grow my-5">
              <label htmlFor="expiration-mount">Expiration Date</label>
              <div className="flex items-center gap-3 mt-1 text-base">
                <select required value={cardMonth} className="grow outline-0 border border-light-gray focus:border-blue-400 rounded-lg p-3" id="expiration-mount" onChange={(e) => setCardMonth(e.target.value)}>
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
                <select required value={cardYear} className="grow outline-0 border border-light-gray focus:border-blue-400 rounded-lg p-3" id="expiration-year" onChange={(e) => setCardYear(e.target.value)}>
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
            <div className="xs:max-w-1/3">
              <label htmlFor="cart-cvv">CVV</label>
              <input className="w-full  text-lg mt-2 border border-light-gray rounded-xl focus:border-blue-400 outline-0 p-3 " type="number" id="cart-cvv" maxLength={4} minLength={3} required inputMode="numeric" pattern="[0-9]*" autoComplete="off" value={cardCvv} onInput={(e) => e.target.value.trim().length < 5 && setCardCvv(e.target.value.trim())} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 text-white">
            <Link to={"/"} className="py-3 w-3/10 text-center bg-red-700 hover:bg-red-600 rounded-2xl cursor-pointer">
              انصراف
            </Link>
            <button type="submit" disabled={loading} className="py-3 w-7/10 bg-green-700 hover:bg-green-600 rounded-2xl cursor-pointer disabled:cursor-wait disabled:opacity-50">
              {loading ? <span className="border-4 border-transparent border-t-white rounded-full block mx-auto size-5 animate-spin"></span> : "پرداخت"}
            </button>
          </div>
          <span dir="rtl" className="text-xs pt-3 text-center block ">
            این درگاه صرفاً جهت تست و شبیه‌سازی پرداخت است.
          </span>
        </form>
      </div>
    </div>
  );
}
