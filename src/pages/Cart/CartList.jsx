import { useEffect, useMemo, useState } from "react";
import { cartRealPrice, cartTotalDiscount, cartTotalPrice, formatedPrice, getLocal, setLocal } from "../../utils/funcs";
import { Link } from "react-router-dom";
import { sortProducts } from "../Shop/FilterAndSortProduct";

export default function CartList() {
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
    let total = cartTotalDiscount();

    setTotalDiscount(total);
  }, [products]);

  // calc cart real price (without discount)
  useEffect(() => {
    let realPrice = cartRealPrice();
    setTotalOriginalPrice(realPrice);
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
                        <span>{product.rating?.toFixed(1)}</span>
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
              <div className="flex flex-col items-center justify-center gap-5 py-25">
                <span>
                  <svg width="180" height="160" viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5741 157.225C27.4235 157.225 24.5103 154.15 24.0679 150.374L12.9653 55.0575C12.5229 51.2811 15.2311 48.2061 18.9967 48.2061H160.352C164.118 48.2061 166.815 51.2811 166.373 55.0575L155.281 150.363C154.839 154.139 151.926 157.214 148.775 157.214H30.5741V157.225Z" fill="#FDECE6"></path>
                    <path
                      d="M160.062 50.9918C162.285 50.9918 163.882 52.8153 163.634 55.0596L152.93 150.365C152.682 152.609 150.956 154.433 149.067 154.433H30.2731C28.3957 154.433 26.6694 152.609 26.4104 150.365L15.7178 55.0596C15.4697 52.8153 17.0666 50.9918 19.2892 50.9918H160.062ZM160.656 45.4136H18.7066C13.3873 45.4136 9.58931 49.7402 10.2259 55.0488L21.7169 150.354C22.3535 155.673 26.4644 160 30.8666 160H148.485C152.887 160 156.987 155.673 157.634 150.354L169.125 55.0596C169.773 49.7402 165.964 45.4136 160.656 45.4136Z"
                      fill="#DB3426"
                    ></path>
                    <path d="M160.063 50.9907H139.617L133.952 126.119C133.779 128.364 132.053 130.187 130.1 130.187H24.1562L26.4221 150.364C26.6703 152.608 28.3966 154.431 30.2848 154.431H149.09C150.967 154.431 152.694 152.608 152.953 150.364L163.656 55.0584C163.883 52.8142 162.286 50.9907 160.063 50.9907Z" fill="#F5C1B4"></path>
                    <path d="M160.063 50.9902H152.413L144.235 137.459C144.019 139.703 142.293 141.526 140.372 141.526H25.4297L26.4224 150.374C26.6705 152.618 28.3968 154.442 30.285 154.442H149.09C150.968 154.442 152.694 152.618 152.953 150.374L163.656 55.0687C163.883 52.8137 162.286 50.9902 160.063 50.9902Z" fill="#EE9781"></path>
                    <path d="M24.1953 74.8784L28.9535 121.306" stroke="white" strokeWidth="5.1658" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M49.9139 141.949C50.0002 143.168 49.2233 144.161 48.1768 144.161H43.1596C42.1238 144.161 41.1851 143.168 41.088 141.949L36.2651 85.142C36.1572 83.912 37.0095 82.9302 38.164 82.9302H43.7207C44.8751 82.9302 45.8786 83.9228 45.9649 85.142L49.9139 141.949Z" fill="#EE9781" stroke="#DB3426" strokeWidth="4" strokeMiterlimit="10"></path>
                    <path d="M72.0156 141.949C72.0587 143.168 71.2387 144.161 70.1921 144.161H65.175C64.1284 144.161 63.2436 143.168 63.1897 141.949L60.557 85.142C60.5031 83.912 61.3878 82.9302 62.5423 82.9302H68.099C69.2534 82.9302 70.2245 83.9228 70.2569 85.142L72.0156 141.949Z" fill="#EE9781" stroke="#DB3426" strokeWidth="4" strokeMiterlimit="10"></path>
                    <path d="M94.1111 141.949C94.1003 143.168 93.2479 144.161 92.2121 144.161H87.1949C86.1484 144.161 85.296 143.168 85.296 141.949L84.8536 85.142C84.8428 83.912 85.7707 82.9302 86.9252 82.9302H92.4818C93.6363 82.9302 94.5642 83.9228 94.5534 85.142L94.1111 141.949Z" fill="#EE9781" stroke="#DB3426" strokeWidth="4" strokeMiterlimit="10"></path>
                    <path d="M116.194 141.949C116.14 143.168 115.244 144.161 114.208 144.161H109.191C108.145 144.161 107.335 143.168 107.379 141.949L109.137 85.142C109.18 83.912 110.141 82.9302 111.295 82.9302H116.852C118.006 82.9302 118.891 83.9228 118.837 85.142L116.194 141.949Z" fill="#EE9781" stroke="#DB3426" strokeWidth="4" strokeMiterlimit="10"></path>
                    <path d="M138.294 141.949C138.186 143.168 137.258 144.161 136.222 144.161H131.205C130.169 144.161 129.392 143.168 129.468 141.949L133.417 85.142C133.503 83.912 134.507 82.9302 135.661 82.9302H141.218C142.372 82.9302 143.225 83.9228 143.117 85.142L138.294 141.949Z" fill="#EE9781" stroke="#DB3426" strokeWidth="4" strokeMiterlimit="10"></path>
                    <path d="M39.7874 54.0695C39.1616 55.0405 37.8777 55.3211 36.9174 54.6953L32.2671 51.7066C31.296 51.0808 31.0263 49.7968 31.6413 48.8365L60.4926 3.95188C61.1184 2.99161 62.4023 2.71109 63.3626 3.3261L68.0129 6.31481C68.9732 6.9406 69.2537 8.22456 68.6387 9.18484L39.7874 54.0695Z" fill="#EE9781" stroke="#DB3426" strokeWidth="5.1658" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M139.622 54.0695C140.247 55.0405 141.531 55.3211 142.492 54.6953L147.142 51.7066C148.113 51.0808 148.394 49.7968 147.768 48.8365L118.916 3.95188C118.291 2.99161 117.007 2.71109 116.046 3.3261L111.396 6.31481C110.436 6.9406 110.145 8.22456 110.77 9.18484L139.622 54.0695Z" fill="#EE9781" stroke="#DB3426" strokeWidth="5.1658" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9.39533 70.0806C5.74842 70.0806 2.78125 67.1135 2.78125 63.4665V51.8353C2.78125 48.1883 5.74842 45.2212 9.39533 45.2212H170C173.647 45.2212 176.603 48.1883 176.603 51.8353V63.4665C176.603 67.1135 173.636 70.0806 170 70.0806H9.39533Z" fill="#EE9781"></path>
                    <path
                      d="M170.002 48.0162C172.117 48.0162 173.822 49.7318 173.822 51.8465V63.4778C173.822 65.5926 172.117 67.2974 170.002 67.2974H9.39782C7.28304 67.2974 5.57826 65.5818 5.57826 63.4778V51.8465C5.57826 49.7318 7.29383 48.0162 9.39782 48.0162H170.002ZM170.002 42.4487H9.39782C4.21877 42.4487 0 46.6675 0 51.8465V63.4778C0 68.6569 4.21877 72.8756 9.39782 72.8756H170.002C175.181 72.8756 179.4 68.6569 179.4 63.4778V51.8465C179.4 46.6675 175.181 42.4487 170.002 42.4487Z"
                      fill="#DB3426"
                    ></path>
                    <path d="M170.012 48.0181H162.362V53.8337C162.362 55.9485 160.657 57.6533 158.542 57.6533H5.58789V63.4689C5.58789 65.5837 7.30346 67.2885 9.40745 67.2885H170.012C172.127 67.2885 173.831 65.5729 173.831 63.4689V51.8376C173.831 49.7336 172.127 48.0181 170.012 48.0181Z" fill="#E35A35"></path>
                  </svg>
                </span>
                <h4 className="text-dark text-lg xs:text-xl text-center">سبد خرید شما خالی است</h4>
                <Link to={"/shop"} className="py-2.5 px-8 gradient text-white rounded-lg">
                  نمایش محصولات
                </Link>
              </div>
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
              <Link to="/checkout" className="py-4 w-full max-w-150 mx-auto text-center block rounded-lg gradient text-white mt-5 cursor-pointer transition-transform duration-300 hover:scale-105 sm-shaddow">
                تایید و تکمیل سفارش
              </Link>
            </div>
          </div>
          <span className="text-xs text-center block mt-4">قیمت حمل و نقل در هنگام پرداخت به‌روز میشود.</span>
        </div>
      </div>
    </div>
  );
}
