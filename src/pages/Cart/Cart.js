import { useEffect, useState } from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import { formatedPrice, getLocal, setLocal } from "../../utils/funcs";
import { Link } from "react-router-dom";

export default function Cart() {
  let [products, setProducts] = useState(getLocal("cart") || []);
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
    // setTimeout(() => {
    setLocal("cart", cartList);
    //   setProducts(getLocal("cart") || []);
    // }, 400);
  }
  function QuantityControl(id, text) {
    let cartList = getLocal("cart");
    let index = cartList.findIndex((item) => item.id == id);
    text == "plus" ? cartList[index].quantity++ : cartList[index].quantity--;
    setLocal("cart", cartList);
    setProducts(getLocal("cart") || []);
  }
  return (
    <>
      <Navbar />
      <div className="custom-container text-gray text-sm">
        <div class="flex items-center gap-3 text-gray text-sm text-nowrap overflow-auto hidden-scrollbar my-5 lg:my-9 px-4">
          <a class="stroke-gray hover:stroke-org fill-white" href="/">
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
          </a>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
              <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"></path>
            </svg>
          </span>
          <span class="hover:text-org">سبد خرید</span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <div className="grow p-6 rounded-2xl  gray-shaddow border border-light-gray/50">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-dark relative ps-2.5 title-style">
                سبد خرید<span className="text-red"> من</span>
              </h2>
              <span className="pe-3">{products.length} محصول</span>
            </div>
            <ul>
              {products.length && !isLoading ? (
                products.map((product) => (
                  <li key={product.id} className="flex justify-between items-center  gap-2.5 my-5 p-5 border border-light-gray rounded-xl  transition-opacity duration-400">
                    <Link to={`/product/${product.id}`} className="inline-flex items-center gap-3 w-75">
                      <div className="size-18 shrink-0 rounded-lg overflow-hidden bg-white gray-shaddow p-1 box-border border border-light-gray/40">
                        <img src={product.thumbnail} alt="" />
                      </div>
                      <h4 className="text-base text-dark">{product.title}</h4>
                    </Link>
                    <div>
                      <span className="block text-center">قیمت</span>
                      <h4 className="text-dark text-base">{formatedPrice(product.price)}</h4>
                    </div>
                    <div>
                      <span className="block text-center">مانده: {product.stock}</span>
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
                    <div>
                      <span className="block text-center">قیمت کل</span>
                      <h4 className="text-dark text-base">{formatedPrice(product.price * product.quantity)}</h4>
                    </div>
                    <button onClick={(e) => deletItem(product.id, e.target)} className="cursor-pointer bg-yel rounded-lg size-10 flex justify-center items-center border border-org/40 transition-colors duration-300 hover:fill-white hover:bg-red fill-red ">
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
        </div>
      </div>
      <Footer />
    </>
  );
}
