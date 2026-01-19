import { useRef, useState } from "react";

export default function AddComment() {
  let [rating, setRating] = useState(0);
  const positiveRef = useRef(null);
  const negativeRef = useRef(null);

  function addPoint(ref) {
    let ul = ref.current;
    if (ul.childElementCount < 5) {
      let li = document.createElement("li");
      li.className = "relative flex items-center justify-between gap-4 ps-5 pe-2  list-decoration";
      li.innerHTML = `
      <input class="border-0 outline-0 w-full" type="text" />  <button type="button" class=" bg-light rounded border border-red size-5 text-red cursor-pointer hover:bg-red hover:text-white">
                x
              </button>`;
      li.querySelector("button").addEventListener("click", () => li.remove());

      ul.appendChild(li);
      li.querySelector("input").focus();
    }
  }

  return (
    <div className="border border-light-gray rounded-2xl p-5">
      <h3 className="text-black text-large mb-3">
        ثبت
        <span className="text-red"> دیدگاه</span>
      </h3>
      <form className="text-gray text-sm">
        <div>
          <label htmlFor="full-name" className="cursor-pointer">
            نام و نام خانوادگی شما <span className="text-red">*</span>
          </label>
          <input required className="border border-light-gray outline-0 rounded-lg block w-full my-3 p-2 " type="text" id="full-name" />
        </div>
        <div>
          <label htmlFor="email" className="cursor-pointer">
            ایمیل <span className="text-red">*</span>
          </label>
          <input required className="border border-light-gray outline-0 rounded-lg block w-full my-3 p-2 " type="email" id="email" />
        </div>
        <div>
          <p className="cursor-pointer">
            امتیاز شما به این محصول <span className="text-red">*</span>
          </p>
          <div className="flex items-center gap-3 my-3">
            <button type="button" onClick={() => setRating(1)} className={`${rating > 0 ? "fill-star" : "fill-gray/50"} cursor-pointer transition-colors duration-300`}>
              <svg width="32" height="32" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" stroke="none" className="starfull">
                <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
              </svg>
            </button>
            <button type="button" onClick={() => setRating(2)} className={`${rating > 1 ? "fill-star" : "fill-gray/50"} cursor-pointer transition-colors duration-300`}>
              <svg width="32" height="32" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" stroke="none" className="starfull">
                <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
              </svg>
            </button>
            <button type="button" onClick={() => setRating(3)} className={`${rating > 2 ? "fill-star" : "fill-gray/50"} cursor-pointer transition-colors duration-300`}>
              <svg width="32" height="32" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" stroke="none" className="starfull">
                <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
              </svg>
            </button>
            <button type="button" onClick={() => setRating(4)} className={`${rating > 3 ? "fill-star" : "fill-gray/50"} cursor-pointer transition-colors duration-300`}>
              <svg width="32" height="32" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" stroke="none" className="starfull">
                <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
              </svg>
            </button>
            <button type="button" onClick={() => setRating(5)} className={`${rating > 4 ? "fill-star" : "fill-gray/50"} cursor-pointer transition-colors duration-300`}>
              <svg width="32" height="32" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" stroke="none" className="starfull">
                <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="text" className="cursor-pointer">
            پیام شما
          </label>
          <textarea maxLength={200} className="border border-light-gray outline-0 rounded-lg block w-full my-3 p-2 min-h-30 max-h-80" id="text"></textarea>
        </div>
        <div className="md:flex justify-between gap-5  mt-7">
          <div className="grow md:max-w-1/2 flex justify-between items-center md:items-start gap-3 my-4 md:my-0">
            <span>نکات مثبت:</span>
            <div className="grow border border-light-gray p-3 rounded-lg">
              <ul ref={positiveRef} className="flex flex-col gap-3">
                <li className="relative ps-5 pe-2 list-decoration ">
                  <input className="border-0 outline-0 w-full" type="text" />
                </li>
              </ul>
              <button onClick={() => addPoint(positiveRef)} type="button" className="mt-4 bg-light rounded border border-red size-5 text-red cursor-pointer hover:bg-red hover:text-white">
                +
              </button>
            </div>
          </div>
          <div className="grow md:max-w-1/2 flex justify-between items-center md:items-start gap-3 my-4 md:my-0">
            <span>نکات منفی:</span>
            <div className="grow border border-light-gray p-3 rounded-lg">
              <ul ref={negativeRef} className="flex flex-col gap-3">
                <li className="relative ps-5 pe-2 list-decoration">
                  <input className="border-0 outline-0 w-full" type="text" />
                </li>
              </ul>
              <button onClick={() => addPoint(negativeRef)} type="button" className="mt-4 bg-light rounded border border-red size-5 text-red cursor-pointer hover:bg-red hover:text-white">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="text-end p-3">
          <button type="button" className="gradient rounded-lg px-15 py-3 text-base mt-5 sm-shaddow cursor-pointer text-white hover:scale-105 transition-transform divide-neutral-400">
            ثبت
          </button>
        </div>
      </form>
    </div>
  );
}
