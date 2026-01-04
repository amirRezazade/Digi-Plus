import { Link } from "react-router-dom";
import { cartRealPrice, cartTotalDiscount, cartTotalPrice, formatedPrice, getLocal } from "../../utils/funcs";
import { useEffect, useMemo, useRef, useState } from "react";

import CheckoutForm from "./CheckoutForm";

export default function CheckoutMain() {
  let [products, setProducts] = useState(getLocal("cart") || []);
  let [shippingPrice, setShippingPrice] = useState(10);
  let [paymentMethod, setPaymentMethod] = useState("Pay-upon-receipt");
  let [checking, setChecking] = useState(0);

  useEffect(() => {
    function localChanged() {
      setTimeout(() => {
        setProducts(getLocal("cart") || []);
      }, 400);
    }
    window.addEventListener("local-changed", localChanged);
    return () => window.removeEventListener("local-changed", localChanged);
  }, []);

  // calc cart total discount
  let totalDiscount = useMemo(() => {
    return cartTotalDiscount();
  }, [products]);
  // calc cart real price (without discount)
  let totalOriginalPrice = useMemo(() => {
    return cartRealPrice();
  }, [products]);
  let totalPrice = useMemo(() => {
    let total = 0;
    products.forEach((item) => {
      total += item.totalPrice;
    });
    return total + shippingPrice;
  }, [products, shippingPrice]);

  return (
    <div className="custom-container text-gray">
      <div className="flex items-center gap-3 text-gray text-sm text-nowrap overflow-auto hidden-scrollbar my-5 lg:my-9 px-4">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"></path>
          </svg>
        </span>
        <Link className="fill-gray hover:fill-org " to="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <path d="M4.75943 5.8484C4.58526 5.8484 4.40193 5.77507 4.27359 5.64673C4.00776 5.3809 4.00776 4.9409 4.27359 4.67507L7.60109 1.34757C7.86693 1.08174 8.30693 1.08174 8.57276 1.34757C8.83859 1.6134 8.83859 2.0534 8.57276 2.31923L5.24526 5.64673C5.10776 5.77507 4.93359 5.8484 4.75943 5.8484Z"></path>
            <path d="M17.2432 5.8484C17.069 5.8484 16.8948 5.78423 16.7573 5.64673L13.4298 2.31923C13.164 2.0534 13.164 1.6134 13.4298 1.34757C13.6957 1.08174 14.1357 1.08174 14.4015 1.34757L17.729 4.67507C17.9948 4.9409 17.9948 5.3809 17.729 5.64673C17.6007 5.77507 17.4173 5.8484 17.2432 5.8484Z"></path>
            <path d="M18.5245 9.71672C18.4604 9.71672 18.3962 9.71672 18.332 9.71672H18.1212H3.66536C3.0237 9.72588 2.29036 9.72588 1.7587 9.19422C1.33703 8.78172 1.14453 8.14005 1.14453 7.19588C1.14453 4.67505 2.98703 4.67505 3.86703 4.67505H18.1304C19.0104 4.67505 20.8529 4.67505 20.8529 7.19588C20.8529 8.14922 20.6604 8.78172 20.2387 9.19422C19.762 9.67088 19.1204 9.71672 18.5245 9.71672ZM3.86703 8.34172H18.3412C18.7537 8.35088 19.1387 8.35088 19.267 8.22255C19.3312 8.15838 19.4687 7.93838 19.4687 7.19588C19.4687 6.16005 19.212 6.05005 18.1212 6.05005H3.86703C2.7762 6.05005 2.51953 6.16005 2.51953 7.19588C2.51953 7.93838 2.6662 8.15838 2.7212 8.22255C2.84953 8.34172 3.2437 8.34172 3.64703 8.34172H3.86703Z"></path>
            <path d="M8.94531 16.7749C8.56948 16.7749 8.25781 16.4633 8.25781 16.0874V12.8333C8.25781 12.4574 8.56948 12.1458 8.94531 12.1458C9.32115 12.1458 9.63281 12.4574 9.63281 12.8333V16.0874C9.63281 16.4724 9.32115 16.7749 8.94531 16.7749Z"></path>
            <path d="M13.1641 16.7749C12.7882 16.7749 12.4766 16.4633 12.4766 16.0874V12.8333C12.4766 12.4574 12.7882 12.1458 13.1641 12.1458C13.5399 12.1458 13.8516 12.4574 13.8516 12.8333V16.0874C13.8516 16.4724 13.5399 16.7749 13.1641 16.7749Z"></path>
            <path d="M13.6485 20.8542H8.12103C4.83937 20.8542 4.10603 18.9017 3.82187 17.2059L2.52937 9.27669C2.4652 8.90085 2.72187 8.55252 3.0977 8.48835C3.47353 8.42419 3.82187 8.68085 3.88603 9.05669L5.17853 16.9767C5.44437 18.5992 5.99437 19.4792 8.12103 19.4792H13.6485C16.0044 19.4792 16.2702 18.6542 16.5727 17.0592L18.1127 9.03835C18.186 8.66252 18.5435 8.41502 18.9194 8.49752C19.2952 8.57085 19.5335 8.92835 19.4602 9.30419L17.9202 17.325C17.5627 19.1859 16.9669 20.8542 13.6485 20.8542Z"></path>
          </svg>
        </Link>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"></path>
          </svg>
        </span>
        <span className="text-dark">پرداخت</span>
      </div>

      <section className="flex flex-col lg:flex-row items-start justify-between gap-5 mt-8">
        <div className="w-full lg:w-auto lg:grow p-3.5 sm:p-6 rounded-2xl  gray-shaddow border border-light-gray/50">
          <h2 className="text-lg font-bold text-dark relative ps-2.5 title-style">
            ثبت<span className="text-red"> سفارش</span>
          </h2>
          <CheckoutForm checkingForm={checking} />
        </div>

        <div className="w-full grow lg:max-w-75 xl:max-w-80 lg:min-w-72 mb-10 lg:mb-0 text-sm">
          <div className="p-4 rounded-2xl  gray-shaddow border border-light-gray/50">
            <h3 className="text-base  text-dark border-b border-light-gray pb-3">
              قیمت <span className="text-red"> کالاها</span>
            </h3>
            <div>
              <div className="flex justify-between items-center mt-5 ">
                <span>قیمت کل بدون تخفیف</span>
                <span className="">{formatedPrice(totalOriginalPrice)} $</span>
              </div>
              <div className="flex justify-between items-center mt-5 ">
                <span>تخفیف شما از خرید</span>
                <span className="font-bold text-red">{formatedPrice(totalDiscount)} $</span>
              </div>
              <div className="flex justify-between items-center mt-5 ">
                <span>قیمت نهایی</span>
                <span className="font-bold text-dark text-base">{cartTotalPrice()} $</span>
              </div>
            </div>
          </div>
          <div className="my-5 flex flex-col sm:flex-row lg:flex-col items-center gap-4">
            <div className="w-full p-4 rounded-2xl  gray-shaddow border border-light-gray/50">
              <h3 className="text-base  text-dark border-b border-light-gray pb-3">
                قیمت <span className="text-red"> حمل و نقل</span>
              </h3>
              <div>
                <div className="flex items-center justify-between py-2 mt-2">
                  <label htmlFor="shipping-normal" className="grow flex items-center gap-2 cursor-pointer">
                    <span className="fill-red">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M13 14.75H2C1.59 14.75 1.25 14.41 1.25 14V6C1.25 3.38 3.38 1.25 6 1.25H15C15.41 1.25 15.75 1.59 15.75 2V12C15.75 13.52 14.52 14.75 13 14.75ZM2.75 13.25H13C13.69 13.25 14.25 12.69 14.25 12V2.75H6C4.21 2.75 2.75 4.21 2.75 6V13.25Z"></path>
                        <path d="M19 20.75H18C17.59 20.75 17.25 20.41 17.25 20C17.25 19.31 16.69 18.75 16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.41 14.41 20.75 14 20.75H10C9.59 20.75 9.25 20.41 9.25 20C9.25 19.31 8.69 18.75 8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.41 6.41 20.75 6 20.75H5C2.93 20.75 1.25 19.07 1.25 17V14C1.25 13.59 1.59 13.25 2 13.25H13C13.69 13.25 14.25 12.69 14.25 12V5C14.25 4.59 14.59 4.25 15 4.25H16.84C17.83 4.25 18.74 4.78001 19.23 5.64001L20.94 8.63C21.07 8.86 21.07 9.15 20.94 9.38C20.81 9.61 20.56 9.75 20.29 9.75H19C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H22C22.41 13.25 22.75 13.59 22.75 14V17C22.75 19.07 21.07 20.75 19 20.75ZM18.65 19.25H19C20.24 19.25 21.25 18.24 21.25 17V14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.03 8.25 19 8.25L17.93 6.38C17.71 5.99 17.29 5.75 16.84 5.75H15.75V12C15.75 13.52 14.52 14.75 13 14.75H2.75V17C2.75 18.24 3.76 19.25 5 19.25H5.35001C5.68001 18.1 6.74 17.25 8 17.25C9.26 17.25 10.32 18.1 10.65 19.25H13.36C13.69 18.1 14.75 17.25 16.01 17.25C17.27 17.25 18.32 18.1 18.65 19.25Z"></path>
                        <path d="M8 22.75C6.48 22.75 5.25 21.52 5.25 20C5.25 18.48 6.48 17.25 8 17.25C9.52 17.25 10.75 18.48 10.75 20C10.75 21.52 9.52 22.75 8 22.75ZM8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.69 7.31 21.25 8 21.25C8.69 21.25 9.25 20.69 9.25 20C9.25 19.31 8.69 18.75 8 18.75Z"></path>
                        <path d="M16 22.75C14.48 22.75 13.25 21.52 13.25 20C13.25 18.48 14.48 17.25 16 17.25C17.52 17.25 18.75 18.48 18.75 20C18.75 21.52 17.52 22.75 16 22.75ZM16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.69 15.31 21.25 16 21.25C16.69 21.25 17.25 20.69 17.25 20C17.25 19.31 16.69 18.75 16 18.75Z"></path>
                        <path d="M22 14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.04 8.25 19 8.25H20.29C20.56 8.25 20.81 8.39 20.94 8.63L22.65 11.63C22.71 11.74 22.75 11.87 22.75 12V14C22.75 14.41 22.41 14.75 22 14.75ZM19 9.75C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H21.25V12.2L19.85 9.75H19Z"></path>
                      </svg>
                    </span>
                    <span className="text-xs">ارسال عادی:</span>
                    <span className="text-base text-dark">10 $</span>
                  </label>
                  <input className="peer hidden" type="checkbox" id="shipping-normal" checked={shippingPrice === 10} onChange={(e) => setShippingPrice(10)} />
                  <label htmlFor="shipping-normal" className="flex justify-center items-center size-6 border border-light-gray cursor-pointer rounded-md peer-checked:bg-red peer-checked:border-red  transition-colors duration-300">
                    <svg className="size-4 text-white " viewBox="0 0 24 24" fill="none">
                      <path className="check-path" d="M4 12L10 18L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </label>
                </div>
                <div className="flex items-center justify-between py-2">
                  <label htmlFor="shipping-fast" className=" grow flex items-center gap-2 cursor-pointer">
                    <span className="fill-red">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M13.0017 14.75H12.0017C11.5917 14.75 11.2517 14.41 11.2517 14C11.2517 13.59 11.5917 13.25 12.0017 13.25H13.0017C13.6917 13.25 14.2517 12.69 14.2517 12V2.75H6.00173C4.82173 2.75 3.7417 3.38998 3.1617 4.41998C2.9617 4.77998 2.50175 4.91002 2.14175 4.71002C1.78175 4.51002 1.65171 4.05 1.85171 3.69C2.69171 2.19 4.28173 1.25 6.00173 1.25H15.0017C15.4117 1.25 15.7517 1.59 15.7517 2V12C15.7517 13.52 14.5217 14.75 13.0017 14.75Z"></path>
                        <path d="M19 20.75H18C17.59 20.75 17.25 20.41 17.25 20C17.25 19.31 16.69 18.75 16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.41 14.41 20.75 14 20.75H10C9.59 20.75 9.25 20.41 9.25 20C9.25 19.31 8.69 18.75 8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.41 6.41 20.75 6 20.75H5C2.93 20.75 1.25 19.07 1.25 17C1.25 16.59 1.59 16.25 2 16.25C2.41 16.25 2.75 16.59 2.75 17C2.75 18.24 3.76 19.25 5 19.25H5.34998C5.67998 18.1 6.74 17.25 8 17.25C9.26 17.25 10.32 18.1 10.65 19.25H13.36C13.69 18.1 14.75 17.25 16.01 17.25C17.27 17.25 18.33 18.1 18.66 19.25H19C20.24 19.25 21.25 18.24 21.25 17V14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.03 8.25 19 8.25L17.93 6.38C17.71 5.99 17.29 5.75 16.84 5.75H15.75V12C15.75 13.52 14.52 14.75 13 14.75H12C11.59 14.75 11.25 14.41 11.25 14C11.25 13.59 11.59 13.25 12 13.25H13C13.69 13.25 14.25 12.69 14.25 12V5C14.25 4.59 14.59 4.25 15 4.25H16.84C17.83 4.25 18.74 4.78001 19.23 5.64001L20.94 8.63C21.07 8.86 21.07 9.15 20.94 9.38C20.81 9.61 20.56 9.75 20.29 9.75H19C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H22C22.41 13.25 22.75 13.59 22.75 14V17C22.75 19.07 21.07 20.75 19 20.75Z"></path>
                        <path d="M8 22.75C6.48 22.75 5.25 21.52 5.25 20C5.25 18.48 6.48 17.25 8 17.25C9.52 17.25 10.75 18.48 10.75 20C10.75 21.52 9.52 22.75 8 22.75ZM8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.69 7.31 21.25 8 21.25C8.69 21.25 9.25 20.69 9.25 20C9.25 19.31 8.69 18.75 8 18.75Z"></path>
                        <path d="M16 22.75C14.48 22.75 13.25 21.52 13.25 20C13.25 18.48 14.48 17.25 16 17.25C17.52 17.25 18.75 18.48 18.75 20C18.75 21.52 17.52 22.75 16 22.75ZM16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.69 15.31 21.25 16 21.25C16.69 21.25 17.25 20.69 17.25 20C17.25 19.31 16.69 18.75 16 18.75Z"></path>
                        <path d="M22 14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.04 8.25 19 8.25H20.29C20.56 8.25 20.81 8.39 20.94 8.63L22.65 11.63C22.71 11.74 22.75 11.87 22.75 12V14C22.75 14.41 22.41 14.75 22 14.75ZM19 9.75C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H21.25V12.2L19.85 9.75H19Z"></path>
                        <path d="M8 8.75H2C1.59 8.75 1.25 8.41 1.25 8C1.25 7.59 1.59 7.25 2 7.25H8C8.41 7.25 8.75 7.59 8.75 8C8.75 8.41 8.41 8.75 8 8.75Z"></path>
                        <path d="M6 11.75H2C1.59 11.75 1.25 11.41 1.25 11C1.25 10.59 1.59 10.25 2 10.25H6C6.41 10.25 6.75 10.59 6.75 11C6.75 11.41 6.41 11.75 6 11.75Z"></path>
                        <path d="M4 14.75H2C1.59 14.75 1.25 14.41 1.25 14C1.25 13.59 1.59 13.25 2 13.25H4C4.41 13.25 4.75 13.59 4.75 14C4.75 14.41 4.41 14.75 4 14.75Z"></path>
                      </svg>
                    </span>
                    <span className="text-xs">ارسال پیشتاز:</span>
                    <span className="text-base text-dark">20 $</span>
                  </label>
                  <input className="peer hidden" type="checkbox" id="shipping-fast" checked={shippingPrice === 20} onChange={(e) => setShippingPrice(20)} />
                  <label htmlFor="shipping-fast" className="flex justify-center items-center size-6 border border-light-gray cursor-pointer rounded-md peer-checked:bg-red peer-checked:border-red  transition-colors duration-300">
                    <svg className="size-4 text-white " viewBox="0 0 24 24" fill="none">
                      <path className="check-path" d="M4 12L10 18L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full p-4 rounded-2xl  gray-shaddow border border-light-gray/50">
              <h3 className="text-base  text-dark border-b border-light-gray pb-3">
                نحوه‌ی <span className="text-red"> پرداخت</span>
              </h3>
              <div>
                <div className="flex items-center justify-between py-2 mt-2">
                  <label htmlFor="Pay-upon-receipt" className="grow flex items-center gap-2 cursor-pointer">
                    <span className="fill-red">
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 13.3599H2C1.59 13.3599 1.25 13.0199 1.25 12.6099C1.25 12.1999 1.59 11.8599 2 11.8599H19C19.41 11.8599 19.75 12.1999 19.75 12.6099C19.75 13.0199 19.41 13.3599 19 13.3599Z"></path>
                        <path d="M15.22 21.7498H5.78003C2.35003 21.7498 1.25 20.6598 1.25 17.2698V10.2798C1.25 7.5898 1.86002 5.99981 4.96002 5.81981C5.22002 5.80981 5.49003 5.7998 5.78003 5.7998H15.22C18.65 5.7998 19.75 6.8898 19.75 10.2798V17.4298C19.71 20.6998 18.61 21.7498 15.22 21.7498ZM5.78003 7.2998C5.51003 7.2998 5.26003 7.30981 5.03003 7.31981C3.24003 7.42981 2.75 7.8098 2.75 10.2798V17.2698C2.75 19.8298 3.17003 20.2498 5.78003 20.2498H15.22C17.8 20.2498 18.22 19.8498 18.25 17.4198V10.2798C18.25 7.7198 17.83 7.2998 15.22 7.2998H5.78003Z"></path>
                        <path d="M19 18.18C18.81 18.18 18.62 18.11 18.49 17.98C18.34 17.84 18.25 17.64 18.25 17.43V10.28C18.25 7.72 17.83 7.3 15.22 7.3H5.78003C5.51003 7.3 5.26003 7.31 5.03003 7.32C4.83003 7.33 4.62998 7.25 4.47998 7.11C4.32998 6.97 4.25 6.77 4.25 6.56C4.29 3.3 5.39003 2.25 8.78003 2.25H18.22C21.65 2.25 22.75 3.34 22.75 6.73V13.72C22.75 16.41 22.14 18 19.04 18.18C19.03 18.18 19.01 18.18 19 18.18ZM5.78003 5.8H15.22C18.65 5.8 19.75 6.89 19.75 10.28V16.6C20.91 16.39 21.25 15.79 21.25 13.72V6.73C21.25 4.17 20.83 3.75 18.22 3.75H8.78003C6.50003 3.75 5.91003 4.06 5.78003 5.8Z"></path>
                        <path d="M6.96222 18.5601H5.24219C4.83219 18.5601 4.49219 18.2201 4.49219 17.8101C4.49219 17.4001 4.83219 17.0601 5.24219 17.0601H6.96222C7.37222 17.0601 7.71222 17.4001 7.71222 17.8101C7.71222 18.2201 7.38222 18.5601 6.96222 18.5601Z"></path>
                        <path d="M12.5494 18.5601H9.10938C8.69938 18.5601 8.35938 18.2201 8.35938 17.8101C8.35938 17.4001 8.69938 17.0601 9.10938 17.0601H12.5494C12.9594 17.0601 13.2994 17.4001 13.2994 17.8101C13.2994 18.2201 12.9694 18.5601 12.5494 18.5601Z"></path>
                      </svg>
                    </span>
                    <span className=" text-dark">انتقال مستقیم بانکی</span>
                  </label>
                  <input className="peer hidden" type="checkbox" id="Pay-upon-receipt" checked={paymentMethod === "Pay-upon-receipt"} onChange={() => setPaymentMethod("Pay-upon-receipt")} />
                  <label htmlFor="Pay-upon-receipt" className="flex justify-center items-center size-6 border border-light-gray cursor-pointer rounded-md peer-checked:bg-red peer-checked:border-red  transition-colors duration-300">
                    <svg className="size-4 text-white " viewBox="0 0 24 24" fill="none">
                      <path className="check-path" d="M4 12L10 18L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </label>
                </div>
                <div className="flex items-center justify-between py-2">
                  <label htmlFor="Bank-payment" className=" grow flex items-center gap-2 cursor-pointer">
                    <span className="fill-red">
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.74 22.75H6.26C3.77 22.75 1.75 20.73 1.75 18.24V11.51C1.75 9.02001 3.77 7 6.26 7H17.74C20.23 7 22.25 9.02001 22.25 11.51V12.95C22.25 13.36 21.91 13.7 21.5 13.7H19.48C19.13 13.7 18.81 13.83 18.58 14.07L18.57 14.08C18.29 14.35 18.16 14.72 18.19 15.1C18.25 15.76 18.88 16.29 19.6 16.29H21.5C21.91 16.29 22.25 16.63 22.25 17.04V18.23C22.25 20.73 20.23 22.75 17.74 22.75ZM6.26 8.5C4.6 8.5 3.25 9.85001 3.25 11.51V18.24C3.25 19.9 4.6 21.25 6.26 21.25H17.74C19.4 21.25 20.75 19.9 20.75 18.24V17.8H19.6C18.09 17.8 16.81 16.68 16.69 15.24C16.61 14.42 16.91 13.61 17.51 13.02C18.03 12.49 18.73 12.2 19.48 12.2H20.75V11.51C20.75 9.85001 19.4 8.5 17.74 8.5H6.26Z"></path>
                        <path d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.6 5.87003C3.79 6.18003 3.24 6.97006 3.24 7.84006V12.41C3.25 12.83 2.91 13.16 2.5 13.16Z"></path>
                        <path d="M19.5985 17.8002C18.0885 17.8002 16.8085 16.6802 16.6885 15.2402C16.6085 14.4102 16.9085 13.6002 17.5085 13.0102C18.0185 12.4902 18.7185 12.2002 19.4685 12.2002H21.5485C22.5385 12.2302 23.2985 13.0102 23.2985 13.9702V16.0302C23.2985 16.9902 22.5385 17.7702 21.5785 17.8002H19.5985ZM21.5285 13.7002H19.4785C19.1285 13.7002 18.8085 13.8302 18.5785 14.0702C18.2885 14.3502 18.1485 14.7302 18.1885 15.1102C18.2485 15.7702 18.8785 16.3002 19.5985 16.3002H21.5585C21.6885 16.3002 21.8085 16.1802 21.8085 16.0302V13.9702C21.8085 13.8202 21.6885 13.7102 21.5285 13.7002Z"></path>
                        <path d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"></path>
                      </svg>
                    </span>
                    <span className=" text-dark">پرداخت هنگام دریافت</span>
                  </label>
                  <input className="peer hidden" type="checkbox" id="Bank-payment" checked={paymentMethod === "Bank-payment"} onChange={() => setPaymentMethod("Bank-payment")} />
                  <label htmlFor="Bank-payment" className="flex justify-center items-center size-6 border border-light-gray cursor-pointer rounded-md peer-checked:bg-red peer-checked:border-red  transition-colors duration-300">
                    <svg className="size-4 text-white " viewBox="0 0 24 24" fill="none">
                      <path className="check-path" d="M4 12L10 18L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl  gray-shaddow border border-light-gray/50">
            <h3 className="text-base  text-dark border-b border-light-gray pb-3">
              جمع <span className="text-red"> صورتحساب</span>
            </h3>
            <div>
              <div className="flex justify-between items-center mt-5 ">
                <span className="text-base ">جمع کل:</span>
                <span className="text-lg text-dark font-bold">{formatedPrice(totalPrice)} $</span>
              </div>
              <button type="button" className="block w-full max-w-140 mx-auto py-3 text-lg rounded-lg sm-shaddow mt-6 gradient text-white cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => setChecking((prev) => ++prev)}>
                ثبت سفارش
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
