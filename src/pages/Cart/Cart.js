import { useEffect, useState } from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import { cartTotalPrice, formatedPrice, getLocal, setLocal } from "../../utils/funcs";
import { Link } from "react-router-dom";

export default function Cart() {
  let [products, setProducts] = useState(getLocal("cart") || []);
  let [totalDiscount, setTotalDiscount] = useState(0);
  let [totalOriginalPrice, setTotalOriginalPrice] = useState(0);
  let [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    let li = elem.closest("li");
    li.style.opacity = "10%";
    let cartList = getLocal("cart");
    let index = cartList.findIndex((item) => item.id == id);
    cartList.splice(index, 1);
    setIsLoading(false);
    setLocal("cart", cartList);
  }
  function QuantityControl(id, text) {
    let cartList = getLocal("cart");
    let index = cartList.findIndex((item) => item.id == id);
    text == "plus" ? cartList[index].quantity++ : cartList[index].quantity--;
    setLocal("cart", cartList);
    setProducts(getLocal("cart") || []);
  }

  // calc cart total discount
  useEffect(() => {
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

  return (
    <>
      <Navbar />
      <div className="custom-container text-gray text-sm">
        <div class="flex items-center gap-3 text-gray text-sm text-nowrap overflow-auto hidden-scrollbar my-5 lg:my-9 px-4">
          <Link class="stroke-gray hover:stroke-org fill-white" to="/">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="style=linear" clip-path="url(#clip0_1_129)">
                  <g id="home-door">
                    <path id="vector" d="M19 23H5C3.34315 23 2 21.6569 2 20V11.563C2 10.4094 2.49808 9.31192 3.36639 8.55236L10.0248 2.72784C11.1558 1.7385 12.8442 1.73851 13.9752 2.72784L20.6336 8.55236C21.5019 9.31192 22 10.4094 22 11.563V20C22 21.6569 20.6569 23 19 23Z" stroke-width="1.5" stroke-linecap="round"></path> <path id="vector_2" d="M12 16L12 19" stroke-width="1.5" stroke-linecap="round"></path>
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
          <span class="text-dark">سبد خرید</span>
        </div>
        <div className=" relative flex flex-col lg:flex-row items-start justify-between gap-6">
          <div className="w-full lg:w-auto lg:grow p-3.5 sm:p-6 rounded-2xl  gray-shaddow border border-light-gray/50">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-dark relative ps-2.5 title-style">
                سبد خرید<span className="text-red"> من</span>
              </h2>
              <span className="pe-3">{products.length} محصول</span>
            </div>
            <ul>
              {products.length && !isLoading ? (
                products.map((product) => (
                  <li key={product.id} className="flex flex-wrap md:flex-nowrap justify-between items-center  gap-2.5 my-5 p-3 xs:p-5 border border-light-gray rounded-xl  transition-opacity duration-400">
                    <Link to={`/product/${product.id}`} className="inline-flex items-center gap-3 w-full xs:w-4/5 sm:w-[89%] md:w-1/3  text-dark hover:text-org">
                      <div className="size-16 xs:size-18 sm:shrink-0 rounded-lg overflow-hidden bg-white gray-shaddow p-1 box-border border border-light-gray/40">
                        <img src={product.thumbnail} alt="" />
                      </div>
                      <h4 className="xs:text-base lg:text-sm xl:text-base transition-colors duration-300">{product.title}</h4>
                    </Link>
                    <div className=" text-start sm:text-center order-1  xs:order-3 xl:order-2">
                      <span className="block ">قیمت</span>
                      <h4 className="text-dark xs:text-base">{formatedPrice(product.price)} $</h4>
                    </div>
                    <div className="xs:order-4 text-center">
                      <span className="block ">مانده: {product.stock}</span>
                      <div className="w-21 flex border border-light-gray rounded-md mt-1 ">
                        <button onClick={() => QuantityControl(product.id, "plus")} disabled={product.quantity == product.stock} className="cursor-pointer fill-red px-1 py-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <rect x="2" y="7" width="12" height="2" rx="1"></rect>
                            <rect x="7" y="14" width="12" height="2" rx="1" transform="rotate(-90 7 14)"></rect>
                          </svg>
                        </button>
                        <span className="grow text-center px-2 py-1">{product.quantity}</span>
                        <button onClick={() => QuantityControl(product.id, "minus")} disabled={product.quantity == 1} className="cursor-pointer fill-red px-1 py-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <rect x="2" y="7" width="12" height="2" rx="1"></rect>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="w-2/3 xs:w-auto xs:text-center order-3 xs:order-5">
                      <span className="block ">قیمت کل</span>
                      <h4 className="text-dark text-base xs:font-bold">{formatedPrice(product.price * product.quantity)} $</h4>
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

          <div className="sticky top-10 w-full grow lg:max-w-75 xl:max-w-80 lg:min-w-72 mb-10">
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
      <Footer />
    </>
  );
}
