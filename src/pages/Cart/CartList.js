import { useEffect, useMemo, useRef, useState } from "react";
import { cartTotalPrice, formatedPrice, getLocal, setLocal } from "../../utils/funcs";
import { Link } from "react-router-dom";
import { sortProducts } from "../Shop/FilterAndSortProduct";

export default function CartList(params) {
  let [products, setProducts] = useState(getLocal("cart") || []);
  let [totalDiscount, setTotalDiscount] = useState(0);
  let [totalOriginalPrice, setTotalOriginalPrice] = useState(0);
  let [sort, setSort] = useState("name");
  let [isDesc, setIsDesc] = useState(false);
  useEffect(() => {
    function localChanged() {
      setTimeout(() => {
        setProducts(getLocal("cart") || []);
      }, 400);
    }
    window.addEventListener("local-changed", localChanged);
    return () => window.removeEventListener("local-changed", localChanged);
  }, []);

  function deletItem(id, elem) {
    let li = elem.closest("li");
    li.style.opacity = "10%";
    let cartList = getLocal("cart");
    let index = cartList.findIndex((item) => item.id == id);
    cartList.splice(index, 1);
    setLocal("cart", cartList);
  }
  function QuantityControl(id, text) {
    let cartList = getLocal("cart");
    let index = cartList.findIndex((item) => item.id == id);
    if (text == "plus" && cartList[index].quantity < cartList[index].stock) cartList[index].quantity++;
    if (text == "minus" && cartList[index].quantity > 1) cartList[index].quantity--;
    cartList[index].totalPrice = cartList[index].price * cartList[index].quantity;
    setLocal("cart", cartList);
    setProducts(getLocal("cart") || []);
  }

  // calc cart total discount
  useEffect(() => {
    let test = 0;
    products.forEach((item) => {
      test += item.totalPrice;
    });
    console.log(test);

    const totalDiscount = products.reduce((total, item) => {
      const discountedPrice = item.price || 0; // قیمت با تخفیف
      const discountPercentage = item.discountPercentage || 0;
      const quantity = item.quantity || 1;
      // ابتدا قیمت اصلی را پیدا کن
      let originalPrice = discountedPrice;
      if (discountPercentage > 0 && discountPercentage < 100) {
        originalPrice = discountedPrice / (1 - discountPercentage / 100);
      }
      const discountAmount = originalPrice - discountedPrice;
      //   console.log(total + item.totalPrice);

      console.log(total + discountAmount * quantity);
      return total + discountAmount * quantity;
    }, 0);

    setTotalDiscount(totalDiscount);
  }, [products]);

  // calc cart real price (without discount)
  useEffect(() => {
    let total = 0;
    products.forEach((item) => {
      const discountedPrice = item.price || 0;
      const discountPercentage = item.discountPercentage || 0;
      const quantity = item.quantity || 1;
      // محاسبه قیمت اصلی قبل از تخفیف
      let originalPrice = discountedPrice;
      if (discountPercentage > 0 && discountPercentage < 100) {
        originalPrice = discountedPrice / (1 - discountPercentage / 100);
      }
      total += originalPrice * quantity;
    });

    setTotalOriginalPrice(total);
  }, [products]);

  let filteredProducts = useMemo(() => {
    return sortProducts(products, sort, isDesc);
  }, [sort, isDesc, products]);

  function changeSort(value) {
    if (value === sort) {
      setIsDesc(!isDesc);
    } else {
      setIsDesc(false);
    }
    setSort(value);
  }
  return (
    <div className="custom-container text-gray text-sm">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
            <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"></path>
          </svg>
        </span>
        <span className="text-dark">سبد خرید</span>
      </div>
      <div className=" relative flex flex-col lg:flex-row items-start justify-between gap-6">
        <div className="w-full lg:w-auto lg:grow p-3.5 sm:p-6 rounded-2xl  gray-shaddow border border-light-gray/50">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-dark relative ps-2.5 title-style">
              سبد خرید<span className="text-red"> من</span>
            </h2>
            <span className="pe-3">{products.length} محصول</span>
          </div>
          <div className=" flex items-center  gap-2 sm:gap-5 mt-4">
            <span className="shrink-0 fill-gray flex items-center gap-1">
              <svg width="20" height="20" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M384 96a32 32 0 0164 0v786.752a32 32 0 01-54.592 22.656L95.936 608a32 32 0 010-45.312h.128a32 32 0 0145.184 0L384 805.632V96zm192 45.248a32 32 0 0154.592-22.592L928.064 416a32 32 0 010 45.312h-.128a32 32 0 01-45.184 0L640 218.496V928a32 32 0 11-64 0V141.248z"></path>
                </g>
              </svg>
              مرتب سازی:
            </span>
            <div className="flex items-center  gap-1.5 overflow-x-auto hidden-scrollbar px-4">
              <button onClick={() => changeSort("name")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "name" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
                <span>اسم</span>
                <span className={sort == "name" && isDesc ? "rotate-180 translate-y-1/3" : ""}>
                  <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                    </g>
                  </svg>
                </span>
              </button>
              <button onClick={() => changeSort("rating")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "rating" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
                <span>امتیاز</span>
                <span className={sort == "rating" && isDesc ? "rotate-180 translate-y-1/3" : ""}>
                  <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                    </g>
                  </svg>
                </span>
              </button>
              <button onClick={() => changeSort("price")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "price" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
                <span>قیمت</span>
                <span className={sort == "price" && isDesc ? "rotate-180 translate-y-1/3" : ""}>
                  <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                    </g>
                  </svg>
                </span>
              </button>
              <button onClick={() => changeSort("discountPercentage")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "discountPercentage" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
                <span>تخفیف</span>
                <span className={sort == "discountPercentage" && isDesc ? "rotate-180 translate-y-1/3" : ""}>
                  <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                    </g>
                  </svg>
                </span>
              </button>
              <button onClick={() => changeSort("quantity")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "quantity" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
                <span>تعداد</span>
                <span className={sort == "quantity" && isDesc ? "rotate-180 translate-y-1/3" : ""}>
                  <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                    </g>
                  </svg>
                </span>
              </button>
              <button onClick={() => changeSort("totalPrice")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "totalPrice" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
                <span>قیمت کل</span>
                <span className={sort == "totalPrice" && isDesc ? "rotate-180 translate-y-1/3" : ""}>
                  <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <ul>
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <li key={product.id} className="flex flex-wrap md:flex-nowrap justify-between items-center  gap-2.5 my-5 p-3 xs:p-5 border border-light-gray rounded-xl  transition-opacity duration-400">
                  <Link to={`/product/${product.id}`} className="inline-flex items-center gap-3 w-full xs:w-4/5 sm:w-[89%] md:w-1/3  text-dark hover:text-org">
                    <div className="size-16 xs:size-18 sm:shrink-0 rounded-lg overflow-hidden bg-white gray-shaddow p-1 box-border border border-light-gray/40">
                      <img src={product.thumbnail} alt="" />
                    </div>
                    <div>
                      <h4 className="xs:text-base lg:text-sm xl:text-base  transition-colors duration-300">{product.title}</h4>
                      <div className="flex items-start gap-1 fill-star text-star mt-1">
                        <span>{product.rating.toFixed(1)}</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" stroke="none">
                          <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                          <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                  <div className=" text-start sm:text-center order-1  xs:order-3 xl:order-2">
                    <span className="block ">قیمت</span>
                    <h4 className="text-dark xs:text-base">{formatedPrice(product.price)} $</h4>
                  </div>
                  <div className="xs:order-4 text-center">
                    <span className="block ">مانده: {product.stock}</span>
                    <div className="w-21 flex border border-light-gray rounded-md mt-1 ">
                      <button onClick={() => QuantityControl(product.id, "plus")} disabled={product.quantity > product.stock - 1} className="cursor-pointer fill-red px-1 py-1 disabled:fill-gray">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                          <rect x="2" y="7" width="12" height="2" rx="1"></rect>
                          <rect x="7" y="14" width="12" height="2" rx="1" transform="rotate(-90 7 14)"></rect>
                        </svg>
                      </button>
                      <span className="grow text-center px-2 py-1">{product.quantity}</span>
                      <button onClick={() => QuantityControl(product.id, "minus")} disabled={product.quantity < 2} className="cursor-pointer fill-red px-1 py-1 disabled:fill-gray">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                          <rect x="2" y="7" width="12" height="2" rx="1"></rect>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="w-2/3 xs:w-auto xs:text-center order-3 xs:order-5">
                    <span className="block ">قیمت کل</span>
                    <h4 className="text-dark text-base xs:font-bold">{formatedPrice(product.totalPrice)} $</h4>
                  </div>
                  <button onClick={(e) => deletItem(product.id, e.target)} className="order-5 xs:order-1 md:order-last cursor-pointer bg-yel rounded-lg size-8 xl:size-10 flex justify-center items-center border border-org/40 transition-colors duration-300 hover:fill-white hover:bg-red fill-red ">
                    <svg width="17" height="17" viewBox="0 0 16 16" id="trash-16px" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          id="Path_23"
                          data-name="Path 23"
                          d="M-250.5-236H-255v-1.5a1.5,1.5,0,0,0-1.5-1.5h-3a1.5,1.5,0,0,0-1.5,1.5v1.5h-4.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.5v10.5a1.5,1.5,0,0,0,1.5,1.5h9a1.5,1.5,0,0,0,1.5-1.5V-235h1.5a.5.5,0,0,0,.5-.5A.5.5,0,0,0-250.5-236Zm-9.5-1.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v1.5h-4Zm7,13a.5.5,0,0,1-.5.5h-9a.5.5,0,0,1-.5-.5V-235h10Zm-7-9v8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-8a.5.5,0,0,1,.5-.5A.5.5,0,0,1-260-233.5Zm4.5-.5a.5.5,0,0,1,.5.5v8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-8A.5.5,0,0,1-255.5-234Zm-2,.5v8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-8a.5.5,0,0,1,.5-.5A.5.5,0,0,1-257.5-233.5Z"
                          transform="translate(266 239)"
                        ></path>
                      </g>
                    </svg>
                  </button>{" "}
                </li>
              ))
            ) : (
              <h1>no product</h1>
            )}
          </ul>
        </div>

        <div className="sticky top-15 w-full grow lg:max-w-75 xl:max-w-80 lg:min-w-72 mb-10 lg:mb-0">
          <div className="p-4 rounded-2xl  gray-shaddow border border-light-gray/50">
            <h3 className="text-base  text-dark border-b border-light-gray pb-3">
              قیمت <span className="text-red"> کالاها</span>
            </h3>
            <div>
              <div className="flex flex-wrap xs:flex-nowrap lg:flex-wrap justify-between items-center gap-2 pt-3">
                <span className="text-nowrap">کد تخفیف: </span>
                <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-0 w-full max-w-100">
                  <input className="grow border border-l-0 rounded-l-none border-light-gray rounded-md outline-0 px-2 py-2 " type="text" placeholder="کد تخفیف خود را وارد کنید..." required />
                  <button className="px-3 rounded bg-org text-white h-full py-2 cursor-pointer">اعمال</button>
                </form>
              </div>
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
              <button className="py-4 w-full max-w-150 mx-auto block rounded-lg gradient text-white mt-5 cursor-pointer transition-transform duration-300 hover:scale-105 hover:sm-shaddow">تایید و تکمیل سفارش</button>
            </div>
          </div>
          <span className="text-xs text-center block mt-4">قیمت حمل و نقل در هنگام پرداخت به‌روز میشود.</span>
        </div>
      </div>
    </div>
  );
}
