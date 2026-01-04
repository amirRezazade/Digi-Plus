export default function Payment({ price }) {
  let expirationYears = new Date().getFullYear();
  console.log(expirationYears);

  return (
    <div className="w-screen min-h-screen bg-[#ddeefc] flex justify-center items-center">
      <div className="mt-20 bg-white rounded-md w-140 min-h-100 relative overflow-visible select-none">
        <div className="absolute w-8/10 h-70 rounded-2xl overflow-hidden bg-[url(https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/8.jpeg)] bg-cover top-0 left-1/2 -translate-1/2 shadow-[3px_13px_30px_0px_#0b132980]">
          <div className="absolute w-full h-full top-0 left-0 text-white bg-black/40 p-6 flex flex-col justify-between ">
            <div className="flex justify-between items-center">
              <img className="max-w-18" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="" />
              <img className="max-w-15" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="" />
            </div>
            <div className="w-full text-2xl font-bold flex justify-around items-center  gap-2 tracking-widest">
              <span>####</span>
              <span>####</span>
              <span>####</span>
              <span>####</span>
            </div>
            <div className="w-full flex justify-between items-center text-base">
              <div className="">
                <span className="text-white/60">Expires</span>
                <div>
                  <span>MM</span>/<span>YY</span>
                </div>
              </div>
              <div className="grow text-end">
                <span className="text-white/60">Card Holder</span>
                <div>
                  <span className="text-lg">Full Name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div dir="ltr" className="mt-40 p-5 w-full text-gray text-sm">
          <h2 className="text-center text-black text-2xl font-black ">243,000 $</h2>
          <div>
            <label htmlFor="cart-number">cart Number</label>
            <input className="w-full text-lg mt-2 border border-light-gray rounded-lg focus:border-blue-400 outline-0 p-3 " type="number" id="cart-number" maxLength={16} minLength={16} autocomplete="off" />
          </div>
          <div className="flex flex-col xs:flex-row gap-5 justify-between items-center ">
            <div className="grow my-5">
              <label htmlFor="expiration-mount">Expiration Date</label>
              <div className="flex items-center gap-3 mt-1 text-base">
                <select className="grow outline-0 border border-light-gray focus:border-blue-400 rounded-lg p-3" id="expiration-mount" value={null}>
                  <option value="null" disabled selected>
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
                <select className="grow outline-0 border border-light-gray focus:border-blue-400 rounded-lg p-3" id="expiration-year" value={null}>
                  <option value="null" disabled selected>
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
              <input className="w-full  text-lg mt-2 border border-light-gray rounded-xl focus:border-blue-400 outline-0 p-3 " type="number" id="cart-cvv" maxLength={4} minLength={3} autocomplete="off" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 text-white">
            <button className="py-3 grow bg-red-700 hover:bg-red-600 rounded-2xl cursor-pointer">انصراف</button>
            <button className="py-3 grow-2 bg-green-700 hover:bg-green-600 rounded-2xl cursor-pointer">پرداخت</button>
          </div>
        </div>
      </div>
    </div>
  );
}
