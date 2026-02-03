import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emptyImg from "../../assets/images/empty-shopping-cart.png";
import { getLocal, setLocal, cartTotalPrice, formatedPrice, calcRealPrice } from "../../utils/funcs";
export default function NavbarShoppingCart() {
  let [products, setProduct] = useState(getLocal("cart") || []);
  let [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function localChanged() {
      setTimeout(() => {
        setProduct(getLocal("cart") || []);
      }, 400);
    }
    window.addEventListener("local-changed", localChanged);
    return () => window.removeEventListener("local-changed", localChanged);
  }, []);

  useEffect(() => {
    let closeMenu = function () {
      setOpenMenu(false);
    };
    window.addEventListener("click", (e) => !e.target.closest(".shopping-cart") && closeMenu());
    window.addEventListener("scroll", () => window.scrollY > 300 && closeMenu());
    return () => {
      window.removeEventListener("click", closeMenu);
      window.removeEventListener("scroll", closeMenu);
    };
  }, []);

  function toggleMenu() {
    setOpenMenu(!openMenu);
    setProduct(getLocal("cart") || []);
  }
  function deletItem(id, elem) {
    let li = elem.closest("li");
    li.style.transform = "translateX(-100%)";
    let cartList = getLocal("cart");
    let index = cartList.findIndex((item) => item.id == id);
    cartList.splice(index, 1);
    setLocal("cart", cartList);
    setTimeout(() => {
      setProduct(getLocal("cart") || []);
    }, 400);
  }
  function QuantityControl(id, text) {
    let cartList = getLocal("cart");
    let index = cartList.findIndex((item) => item.id == id);
    if (text == "plus" && cartList[index].quantity < cartList[index].stock) cartList[index].quantity++;
    if (text == "minus" && cartList[index].quantity > 1) cartList[index].quantity--;
    cartList[index].totalPrice = cartList[index].price * cartList[index].quantity;

    setLocal("cart", cartList);
    setProduct(getLocal("cart") || []);
  }
  return (
    <div onClick={(e) => e.stopPropagation()} className="relative shopping-cart sm:w-45">
      <button onClick={toggleMenu} className="w-full flex items-center gap-1 p-0.5 sm:p-1 rounded-3xl gradient relative cursor-pointer">
        <span className="bg-white rounded-full size-10 flex justify-center items-center">
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.33333 16.8438C9.33333 17.4153 8.8875 17.875 8.33333 17.875C7.77917 17.875 7.33333 17.4153 7.33333 16.8438V13.4063C7.33333 12.8348 7.77917 12.375 8.33333 12.375C8.8875 12.375 9.33333 12.8348 9.33333 13.4063V16.8438ZM12 12.375C12.5542 12.375 13 12.8348 13 13.4063V16.8438C13 17.4153 12.5542 17.875 12 17.875C11.4458 17.875 11 17.4153 11 16.8438V13.4063C11 12.8348 11.4458 12.375 12 12.375ZM16.6667 16.8438C16.6667 17.4153 16.2208 17.875 15.6667 17.875C15.1125 17.875 14.6667 17.4153 14.6667 16.8438V13.4063C14.6667 12.8348 15.1125 12.375 15.6667 12.375C16.2208 12.375 16.6667 12.8348 16.6667 13.4063V16.8438ZM10.1292 0.116392C10.6167 0.379146 10.8083 1.00163 10.5542 1.50695L7.15417 8.25003H16.8458L13.4458 1.50695C13.1917 1.00163 13.3833 0.379146 13.8708 0.116392C14.3625 -0.146361 14.9667 0.0502636 15.2208 0.555619L19.1 8.25003H23C23.5542 8.25003 24 8.7098 24 9.28128C24 9.85277 23.5542 10.3125 23 10.3125H22.1667L19.8375 19.916C19.5042 21.1407 18.475 22 17.25 22H6.7125C5.525 22 4.45833 21.1407 4.16167 19.916L1.83333 10.3125H1C0.447917 10.3125 0 9.85277 0 9.28128C0 8.7098 0.447917 8.25003 1 8.25003H4.9L8.77917 0.555619C9.03333 0.0502636 9.6375 -0.146361 10.1292 0.116392ZM6.1 19.4176C6.175 19.7227 6.44167 19.9375 6.7125 19.9375H17.25C17.5583 19.9375 17.825 19.7227 17.9 19.4176L20.1042 10.3125H3.895L6.1 19.4176Z"
              fill="#DC2F02"
            ></path>
          </svg>
        </span>
        <span className="grow text-white px-3 hidden sm:inline-block font-bold text-nowrap">{cartTotalPrice()} $</span>
        <span className="size-4 text-org bg-white rounded-full text-xs absolute top-0 left-0 flex justify-center items-center sm-shaddow">{products.length}</span>
      </button>

      <div className={`absolute ${openMenu ? "" : "opacity-0 invisible"} transition-[opacity_visibility] duration-400 top-[110%] left-0 flex flex-col text-gray rounded-2xl shadow-sm w-72 h-105 px-2 border border-light-gray bg-white z-19`}>
        <Link to={"/cart"} className="flex items-center gap-2  fill-gray hover:text-org hover:fill-org py-3">
          <svg className="transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M4.32507 5.31686C4.16673 5.31686 4.00007 5.2502 3.8834 5.13353C3.64173 4.89186 3.64173 4.49186 3.8834 4.2502L6.9084 1.2252C7.15007 0.983529 7.55007 0.983529 7.79173 1.2252C8.0334 1.46686 8.0334 1.86686 7.79173 2.10853L4.76673 5.13353C4.64173 5.2502 4.4834 5.31686 4.32507 5.31686Z"></path>
            <path d="M15.6748 5.31686C15.5164 5.31686 15.3581 5.25853 15.2331 5.13353L12.2081 2.10853C11.9664 1.86686 11.9664 1.46686 12.2081 1.2252C12.4498 0.983529 12.8498 0.983529 13.0914 1.2252L16.1164 4.2502C16.3581 4.49186 16.3581 4.89186 16.1164 5.13353C15.9998 5.2502 15.8331 5.31686 15.6748 5.31686Z"></path>
            <path d="M16.8415 8.83333C16.7832 8.83333 16.7248 8.83333 16.6665 8.83333H16.4748H3.33317C2.74984 8.84167 2.08317 8.84167 1.59984 8.35833C1.2165 7.98333 1.0415 7.4 1.0415 6.54167C1.0415 4.25 2.7165 4.25 3.5165 4.25H16.4832C17.2832 4.25 18.9582 4.25 18.9582 6.54167C18.9582 7.40833 18.7832 7.98333 18.3998 8.35833C17.9665 8.79167 17.3832 8.83333 16.8415 8.83333ZM3.5165 7.58333H16.6748C17.0498 7.59167 17.3998 7.59167 17.5165 7.475C17.5748 7.41667 17.6998 7.21667 17.6998 6.54167C17.6998 5.6 17.4665 5.5 16.4748 5.5H3.5165C2.52484 5.5 2.2915 5.6 2.2915 6.54167C2.2915 7.21667 2.42484 7.41667 2.47484 7.475C2.5915 7.58333 2.94984 7.58333 3.3165 7.58333H3.5165Z"></path>
            <path d="M8.1333 15.2498C7.79163 15.2498 7.5083 14.9665 7.5083 14.6248V11.6665C7.5083 11.3248 7.79163 11.0415 8.1333 11.0415C8.47497 11.0415 8.7583 11.3248 8.7583 11.6665V14.6248C8.7583 14.9748 8.47497 15.2498 8.1333 15.2498Z"></path>
            <path d="M11.9668 15.2498C11.6251 15.2498 11.3418 14.9665 11.3418 14.6248V11.6665C11.3418 11.3248 11.6251 11.0415 11.9668 11.0415C12.3085 11.0415 12.5918 11.3248 12.5918 11.6665V14.6248C12.5918 14.9748 12.3085 15.2498 11.9668 15.2498Z"></path>
            <path d="M12.4083 18.9581H7.38329C4.39996 18.9581 3.73329 17.1831 3.47496 15.6415L2.29996 8.43313C2.24162 8.09146 2.47496 7.7748 2.81662 7.71646C3.15829 7.65813 3.47496 7.89146 3.53329 8.23313L4.70829 15.4331C4.94996 16.9081 5.44996 17.7081 7.38329 17.7081H12.4083C14.55 17.7081 14.7916 16.9581 15.0666 15.5081L16.4666 8.21646C16.5333 7.87479 16.8583 7.6498 17.2 7.7248C17.5416 7.79146 17.7583 8.11646 17.6916 8.45813L16.2916 15.7498C15.9666 17.4415 15.425 18.9581 12.4083 18.9581Z"></path>
          </svg>
          <span className="transition-colors duration-300 text-sm">سفارش های من</span>
        </Link>
        <ul className="grow border-y border-light-gray divide-y divide-dashed divide-light-gray overflow-y-auto hidden-scrollbar overflow-x-hidden">
          {products.length ? (
            products.map((product) => (
              <li key={product.id} className=" transition-transform duration-300 py-1.5">
                <div className="flex justify-between items-center gap-1.5 h-12 ">
                  <Link to={`/product/${product.id}`} className="shrink-0 size-15">
                    <img src={product.thumbnail} alt={product.title} />
                  </Link>

                  <p className="grow text-sm truncate text-wrap overflow-hidden line-clamp-2 leading-5 text-dark">{product.title}</p>
                  <button onClick={(e) => deletItem(product.id, e.target)} className="self-start cursor-pointer bg-yel rounded-lg p-1 transition-colors duration-300 hover:fill-white hover:bg-red fill-red ">
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
                  </button>
                </div>
                <div className="flex justify-between items-end pt-2">
                  <div>
                    <span className="text-xs ">مانده در انبار: {product.stock}</span>

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
                  <div>
                    <div className="flex items-start justify-end text-sm text-[#FAA307] gap-1 ">
                      <span>{product.rating?.toFixed(1)}</span>
                      <span>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.99774 0C7.22135 0 7.42552 0.123047 7.52274 0.316875L9.1901 3.62813L12.9161 4.16016C13.1349 4.19063 13.3148 4.33828 13.3852 4.53984C13.4533 4.74375 13.3974 4.96641 13.2418 5.11406L10.5391 7.69687L11.1783 11.3414C11.2148 11.5523 11.1248 11.768 10.9425 11.8922C10.7627 12.0164 10.5026 12.0328 10.3276 11.932L6.99774 10.2164L3.64844 11.932C3.47344 12.0328 3.23524 12.0164 3.05295 11.8922C2.87309 11.768 2.78316 11.5523 2.79774 11.3414L3.45642 7.69687L0.756318 5.11406C0.599304 4.96641 0.543644 4.74375 0.612672 4.53984C0.681457 4.33828 0.863019 4.19063 1.08153 4.16016L4.80538 3.62813L6.47274 0.316875C6.57239 0.123023 6.77413 0 6.99774 0ZM6.99774 1.85039L5.7217 4.3875C5.63663 4.55391 5.47135 4.67109 5.28177 4.69922L2.40594 5.10703L4.49427 7.10156C4.62795 7.23047 4.68871 7.41563 4.65712 7.59609L4.16614 10.3992L6.72309 9.08203C6.89566 8.99297 7.10225 8.99297 7.27239 9.08203L9.82934 10.3992L9.33837 7.59609C9.30677 7.41563 9.36996 7.23047 9.50364 7.10156L11.5915 5.10703L8.71614 4.69922C8.52413 4.67109 8.35885 4.55391 8.27621 4.3875L6.99774 1.85039Z"
                            fill="#FAA307"
                          ></path>
                          <path d="M4.49427 7.10156C4.62795 7.23047 4.68871 7.41563 4.65712 7.59609L4.16614 10.3992L6.72309 9.08203C6.89566 8.99297 7.10225 8.99297 7.27239 9.08203L9.82934 10.3992L9.33837 7.59609C9.30677 7.41563 9.36996 7.23047 9.50364 7.10156L11.5915 5.10703L8.71614 4.69922C8.52413 4.67109 8.35885 4.55391 8.27621 4.3875L6.99774 1.85039V6L4.49427 7.10156Z" fill="#FAA307"></path>
                          <path d="M6.99774 1.85039L5.7217 4.3875C5.63663 4.55391 5.47135 4.67109 5.28177 4.69922L2.40594 5.10703L4.49427 7.10156L6.99774 6V1.85039Z" fill="#FAA307"></path>
                        </svg>
                      </span>
                    </div>
                    {product.discountPercentage && (
                      <div>
                        <span className="text-xs px-1 sm-shaddow gradient rounded text-white">%{product.discountPercentage}</span>
                        <span className="text-gray/80 line-through  mx-2 text-xs">${calcRealPrice(product.price, product.discountPercentage)}</span>
                      </div>
                    )}
                    <p className="text-base  text-red font-bold mt-0.5 text-end">{formatedPrice(product.price)} $</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <img className="object-contain mt-10" src={emptyImg} alt="" />
          )}
        </ul>
        <div className="flex items-center justify-between p-2">
          <div className="flex flex-col gap-1">
            <span className="text-xs"> جمع مبلغ سفارش: </span>
            <span className=" text-dark font-semibold">{cartTotalPrice()} $</span>
          </div>
          <Link to={"/checkout"} className="py-2 px-3 rounded-lg border border-yel2 bg-light text-org text-sm  transition-colors duration-300 hover:text-white hover:bg-red">
            ثبت سفارش
          </Link>
        </div>
      </div>
    </div>
  );
}
