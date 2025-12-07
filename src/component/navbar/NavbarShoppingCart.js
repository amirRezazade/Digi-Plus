import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocal, setLocal, cartTotalPrice } from "../../utils/funcs";
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
    text == "plus" ? cartList[index].quantity++ : cartList[index].quantity--;
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
        <span className="grow text-white px-3 hidden sm:inline-block font-bold">{cartTotalPrice()} $</span>
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
        <ul className="grow border-y border-light-gray divide-y divide-dashed divide-light-gray overflow-y-auto hidden-scrollbar">
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
                    <div className="flex items-start justify-end text-sm text-[#FAA307] gap-1 ">
                      <span>{product.rating.toFixed(1)}</span>
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
                        <span className="text-gray/80 line-through  mx-2 text-xs">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
                      </div>
                    )}
                    <p className="text-base  text-red font-bold mt-0.5 text-end">{product.price} $</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <img
              className="object-contain mt-10"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAACglBMVEX/////ulX+Wiz/jlUWo9uCFRtMv7yRGiD/uVQAw//JIQD/oicjjIdiERI6BQhGvbr+vVYApuP/v1T/WCQAOl//ik5iAABUCRH/uE+rLTn/tkgVfHcANl8AP1//kVR6Dhp1zMo45Nz+VCH/+/WEAAB8AAAWqOH+VCk5BQgAM1f/i1C4c3JtyccAMl//u0haw8BLAAyNAAD/9ej/qZL/6c3+ThX+nIf+lUVx6+Wj3tzz+v3/79n+qk7+i0AVm9H/x3YUh7j+ZTX9RgD+n0n/49z/g0IfAAC45eQAd3j+fl8MtO7/1pf+1cz+wLL+cD7c4ub/zLbsslX/mGYASG8ViJdnrKj/3qpoDhXltFxGVV1valxsbG3+bknWsrTAHxj27e3+h2lsR1Fnf5Kls73pVzASbZcRYYj+gmX/vJ7/wqj/r4vbz9D+sqMpAACBT1NnSWKa8exAmJRUvevUlEbIs34kRl7NoFf/zIdGpsqKeVqkiVn/oov+aUKwYGPFjI7dvb+iPUKlAACfGx2/g4XCOST/sGTJ0tjMQCaJm6o7XXbhg3luNEDMj3zMdjU8O1ObKx2+W1HFSj2pRSy8YjWNLjLhjYN6T0IyOVLZPBvbblnKUzmUTEmiRDlnXnRjqb21r4sAW5Z1jKzYkWLHbmqKq6aOgZalr5eja1dsj69zWlv+fylPgGf/pR+KjFn+kSiwhWatkZO1l49NfnGuk0ucd3qpiGfDch1NTkfKubqINBecSxhdKSUvLi5RLi+d0u1XeHYRV2NrOhqHyelHGykvHCq+c1LCzYvdv2hSPz8tYF2J17anz56jnmiycjeMTSm4ejtqbH3gxKJvPlNGyOlgjY1Pd2i5W10xAAAfIUlEQVR4nO2di19TZ5rHD4fcrCAnJ0mJQAQTkhjAoIRERQokkCmBoFwGihobtOANRalFUVC71i3aemkrnbbqTmd6d9ruOqO7047Tzk63M7adne7N/X/2ed73PbckqN22Jjr5fYrmRpr3m+f5Pc/7nvccOS6vvPLKK6+88sorr7zyyiuvvPLKK6+88sorr7z+9pRIzPb8IG80vvXY8R/kjbIviyX4vZkkTxx/trr65LGtP8QHygEFnZG93+sNkrXPrq4+Wbs1mfyBPlH2FQgE4hkeXoeqevwe3mC8+tiJhwfHHdRkKEHdCxOu1vhjf5rcUFO9AZTKJHli6/Gt46mvTa6uvV8fK6vKxGTrsdV/B1p9LDXXtq5O4/QwKp3JCePqJ4lOGleP9qpfe+JY9cNShO+oND/ZutooIQEF5VI1/tzJ6mcflhp8ZzXVoeplJidWG08+eZLwQJ2KdJCHk0tXG4//TRSddCVXn3zSqBYfo48/dyLLnyx7qj35pIaJftT5962th4caG7L9yX5cbXzqzPMLPDW+OoWJcc4bFUx2u93vbx0CLs8dewjjZePpMz6f7zTHdWR6ttaoSR2wlVP8BqGAyGQXWxufrX7IfKXp+dMOn9UB2vbCI49kGFlytVEbJPBfiG9GKAL8YTL5LxxPHjdWPyzB0vTU9ikK5MWTj6DSJz8NZ0+qiZwcnTPqX5/Z6TQBkoMHTaIoCMZz3VCbnq1OCZah7u7G+zaSH0hgIT4f8jj/4pOPML2gfYmrsdV/gdG48NKpk6defqPn1aVGbygQDgsm8RW93njxYJ/xnCiuxzJ0UjP3EexlQ/dzPN9bCpB5GQjodfVr1neLdlOfFCEv9c68+rNAx97Ay7XhUCgUXAOJ03zwolFv1J8TTH4MCe2CwQPFBCxkigL5b+MjKVKSB0LEbioQzklMXugZOftqT/zsWeP87EggEPOaiKOIpoPn0G3L0vLkcGvrA8KEAEELmWIWotWr9FWuIaHMhIMuuCgx2RkL7O3d2/uzF9zziZGZwAzUY1p7BPp32frsDuz/q6bnt9Mi8xqxkNepNFDwZQ3ddruJDrhZYjI/kkjsDMz2jIyeqp2dDQQCI87mArVMoivbw/vu2vjUdivJmP1XXnc6eY28MpgOIOKXiBQIza8wJktndsZmZkZGQi+8cMXihOQhNquGYj+c7RF+R4GnUiDnr/AWPqMolleVGMEvvw/LTiVa7EwgcPZsIJB4/dQpYAj3Qs41giZS0i0lh/X8aVZktl0ZXQCITOV1Uf3lQ9kBIKXA5I1XITQCZwPPntTP8eH2BNxJ8Jo4KTC1Znug96rnpbZs2yvhOwEhAigalzA1AxB9Kc773kAmATIt5kN78HbCGdUGiv9BsNkmtBDiqROXFkqZVCiPqcYpiOcqlxiLMU5iiVgg8AJZPuG9azYkYrFLE+e9zRooue8oAMSBGWOdunyPQAgUOXn8w8MHo+G5YuMSZDIKqTI7h5OdUZ4XhOaL+9GtLdqoEnK69ICnrqSeevmOFpIBCkVi75s2m8euwO+OFi9BP4HqOxPm+aVzvLNdLBAG8M2t/2Ax0UihTUoOu+y9eqpazgi74aXVxD/dtcjjadsGGCyvz506OQoGMuMcvVTraWn5+Zt+8c1f/GLHQJv5l0GC0LRmDUaMPTcbV7ktm9r2HTKGdwY6wuzmqMCQLNLpPC2OVy6f3z/KW8BNRiyjDkfYrOta1KV7q2z7gKPNozP/0oJQmr1e9KFcNBRiIVa0kHv1VElhrkMKFKyw/p8vWrTIo2vR6XQDA20tA5edgVDsyjZf2463zfBY1yLz2zbfmAdumt9FKIyJVI3XN6JyoAopbdnlOcs9AoHXJZz4d4zrCbLHvO0F/ncgSrp0njGEgiPf4Qg7rwyMtXjG2nREi7puXCZMuroQiqm9vZmYLP0o3WWobLcrGyUL2Q8Wco9AnBHLzoSLGwEYzhA34pQej/rfMyMSncfRQgnoWqwWS60ZGDAkGCDbfYTYoq5ai1J46Kfptme9hZPn/vtfundPDfKhOMdZQhxCCfZwquB509xFkLT52lRMnsOs0Xk8XR72qGMHCZRFOnmKnDNMNpK2zOqYePnufSpTMDI7A0Bc8RAfHEEokY5kUHm2BTICQTgcY5o4QQCgLpI0kFm+Ng9Jo7elKbKEIetMOCwy38lTw3vJAv2IM+gEAjG4FeHiChPnDRIRgMRBR49MeMydRURdA/RBzw4CpWvRu0EWKPZuFRN7Npmctlrft0U3hHmv9240nEGQM8ElexI9XMhJH4uBp0h3UJZLZoaEZgeNk0itmSJZpHNIKbXDt6PFo/N8EAyLmplxtx+P/mSTyfM+x6ZlhaCau4AJOkPxZLJjJJKACIlx8QgDBUbLJVRhZkHzdGiY+GK9MhOgpaOPe9p2QDHStQR5EicmkR0ZdFFlkUnTlMPaX0i17A5gcItjMg4+EsI8Cbo4KV2c4aSGifNdDyKZmnI4ZCahDolJVwvY1462lhbwWxQ8bSGLsznVsm13WN9fVqhWKpiI08JbRrhkLBiM7ORcmCfBHiVfgnu5gJI7vOUlM0xnpkYvQ0DIuROUmHhaLu9/zVrhcwzsGBsjaMyjXmKyubQkKyePWsuWETCEzGwHt9PCB5Mu7N8jcS4GQeEcUflqgutQPBYESCYs3ktWX4vaY5mdTActa6IXX9p2/jWr1efzWadeskCfl1thwjWtdDj6U5moIgaGj+bBIgOCggaIy6XEkYtTI7Fss16xeDeIDoVJWGLSpftlkDcJgtDcvsZ26dLLL895nTzOG032nNpnAMnzpww8bLYaEjE1e7gOLux17iS2CnGSIAkTV3pXwDWjSh7+0iULNGLiER8rxoRJF00d8w1nmC0QiKJgagYJuFqdYwsFT/kcV1OSB2n0JnujhM0ubje3Kxrd4OIiwUiA5Qz08/Icx7JT3aCgvO0w7usVA8xkFSY680sW3FYAExrNwmNOZQ6HrazDoQ2Qwj22QhsUw102vLub6+ca4IE4twvatbiTum+QcykcYtqWL9yMX/2hCqkVsY4yJl06cxjnwGVDjY12eY0SlO0ZX5rOqJLHFi3cE3dxhYXRuKuD64eAsfVyhXgLcojjOnZFWYPHzJZERUrx9tJV2eEKqUNBJsRP4HYQHbUMzIMFimBqhzeMhfZm3L6SNamTZxd+tPgekjK7OBdjsoeLQx5xrsKoTTbfGUgewmLxP/4qpacJk9H2WR10TqMbGHUSJjAPmg5i5ZWZCKYo+VWv0+lMZNqoni1t9DmmKBMAAUBsUfSTfq53F9cRLYz2ugprXFxNYbSD21OjpFg/xAyW6w8/Wrz4I+Dyq7AcL7ThACZtbS2USYIwgd71XacXq4xAjLVAWKNiaYmM5NAqNbSyb7GRcg1RNu6oqwEo7LJBEtVArOyyAbBem9Z3QG99DEyQCogEjJw8wKSF5U6AO2Yms2Xzc1LZQYlRbdI5w7mTQDgPpIESpR5SCHU4GgdXcXH9wMRW08912AprOFc0rWT/0yGksbibQMGAwc4uLDGhHjuQCNWa6VrSS/JyCQRLNHUSYeFzYWcb2e6utLIYC+Citl17auDmnugeLvkrYEJZScA02lxGYKxv/aj5MKEiJ09fBVsWgNwJMiYtV7zyYTGhPX1ehQ1itvXJNfKXMg+Eskt8No6xEY9Ge7neeDJKWEHyuPbYUpl8uJiqYaihldwgUwIc+HCFNDEeGLUwJm3bLBtkJpmmmpozx+LxeBaSaYL+tV1OHht+CFfvHqwtLkgVuN/QgRnDcTbJQrRMqJ0McY00exaTqoRMDq0cS2XicUxZeKmNfczLB/lg6mJWWPXpEsFI6L4jucbOFFElz26uoz9K2npMFehoOSw+hbY9medEb11HDn/vGvqooZkgWVO4rL25gPRs6UzGdkDPRopS82PgxpZ4TzyRAiWoqsgx3jlzX3ncSHJJFiZck0NKHnRTZqSABxpZG/QmYK+FaUZCdaRvMTPX1gYSKM2mApYcR9OYtLR4zG/TjSfNJE9GIol4ENcwVY6iojAbub9xMn5NCRP1PDDawFE6xFAwX/ohan597v209QSi3xxa/BErOdROyj+8Tg//ikesO3SpfqIzs+VX4dAoH8Qlhni4Z68TDwRIpSemfMb7vdo2wcluwqlbWWhFdttqbNH+3TU2LMAYO4XT5jHfnzJCOfKbcqDAggXDpLO8s/zjQ6JQIJYT/VTLRPdBkBXqK7wzHnEmeuKzocBe+DM4S7MocV8xqLXxBjK5duPGJ+Ruk0+aB5Lk6d8NzXe/jVbemrdazLjM/paaxbJ2+xrJUv75fztppEDA/EvpbwEEYBm+3ilDGZgLy0xaeLpBafgVyJ2Z2Y5YbySxN84nevb2hJzhGM/PZq2ZpWkznkwyKEry2Bo4ANLQK3mq7SxLANXK07Jme3d3M725rPDip19//NFH1zs//Ph62e+eePTRm4ClkxEBtegGzkIfy5h4LlGTFbDsBHpikY5YPBGPAJNQxBkKWfjRjdliMpFyQ5M8Hbv72YoS3P21NBppUlTYXiYMubgG/zIC5OaKfSt+X7548b7SzzZ1/v6JYhBg+VpGUj6tG3hjRo4Tcy01WWQCNmLhw4HYbMdMPBHpiQV7IHfmsskkOQ6N9Cc0THAe6GBD7u+PKm2I7TTkjbRcRqhBiKwn56Ucbr747c2f7FuxZMmKJZ3XHyUs8E9K5VEMlp+iIE7mgjITj2SyB6WWzQnhMZKY7YmHvbh0dyVbTJIvXpu4dm1CFS9nlHmgSrYPYCxffE5H0+a7uqymvxfzHY2wsWwfAlmyYsWK0q8+K1YEQD77w2BRefm/jpnNOniDgUuKx+qm6fEcLDxSqdlJtyc4QzELb9nWlCUm3Pg4jZGJJKvHp32On6VWlpr+aRhKyxef07mcZ2zlnyCzuHgsFMBf6fsjxsiKJaVaHje3vFNiMBgga6ZYc69hIh3PAZNVpn4sYvDGmWwhIYKujRu/cY1OeTIc0rC9hSw+/3xjU1PTFxgnFdCk9OOLY6EYZM+1fRAiq7RArt4eNNRXAZMSYCItFmiYmC8524nJbsp0jNpy+XQ2kSRvkL+kxs2hHA9kUXKWjONpD80dz5jvLYD2O3h5xwznSiavfaYOEZIwkyWIow7PusbUcTgcbXggVMvkOSeZGotHrmRgMroyaxaLovYq9/fKIookaU8NZTJ2vr/w25v7fnIVkgcspfGPP5GJoLduuV0FJDBEgEtJfdUkZeLA/UmEiUfSB0EyNbZ3rxxNZ/JadlMnOXHtE6XwpCdPTb/E5AusOo7zpVBkViz5CcyTIN8+WSUDKcaEMdTXQcJUGUpKDOuqquogTMpLS1f9G2jVi5dv6m/ul/QPb1h4cvhi6LQvDcr5iqyGCZ5ZdWOcmAoRzgNTLPasYow6z4ADi8ySJftubNm3b9/EDVZ8b0LCUBz1wKOqrgpUUlICTDqLS0HFer1+rri02OhmqrZ42010u8kZxyW1p1hGz698KqtEUABknEQLKv14oNyvwYTW0+b4kjBZsmIfJM2jqNLf3i7BjEEDgRv1VVXr6g3kkSJg8jUyqdTrl1bO6UtL9UTGpXo9T+uOqZVrOlMxIe8Xs/CXHb6sGiwV8ZLxT6jZZjgeuOyamTQmji+/PLPjyy9pM7KKBshXfxisVwzEULeuqq6+vo7cM2CYlH9Gg2Tp0srRC6sUJpVsWb9A4BCKY9sro2Hw1ksTDqsv+1Eid2w0fXAeqK48ywrPfVs85oGC4/g3FiGkGSEtyCDUF2KqdZAoYCBV9ZgxpOLADQyT8uLSJ/SMyalVGDCEiVFm4sfm7ymHz0pO/LBafWey7CVUE5p7ZxwVUvLU2GwXvwVPXbKkDWbEK5asoEiWlEqOSsIDMqYODWQd4KAhQigZJknqPFpMKSyt5OcUJkCI7K2QDpuTncqgqe0Lnd5/n8Wyhukp3/atNcijpvCZb0pu/55a6msrJCCrqKPiwEtoytRVraurL5GbkhIaK/WDg1CJf0sxLF26VM+PrqIxQ6OGbcqX9vRxTRuf35i1hj5d4+rjKfC5XDabrX9375+XL1++dvnykj9QLkSlN2kLQghAnNSjg5A7tOyUYNkxAKUqEiZgJ5U0MIx6ntcyoYczcvzkFEV7dkPT3nqLMsGfyS0IZNVXmDCEAHFUGHkdzZ8SUoXJjap166rqS6qKiopodyKFiZHni4ndUiZz0mGvHNtzckcNlQkKE/gpuT0pBwNz1DqpwLAfDJoqdNeS+kHK5OviYonJBZ5/QirGcHeOZ0wenFMAuQbRVLZ87doDCpe1coIY0FEhSeppgaF9PPatdVh/MIxImBShnTyhMAl/u0pmorrYRy5t67uzWu0FZchircwFmCAF9AqD4qhYaTA86jA8qiRIg3LqSBZbeYoP/1UqPBomaYGy8XGqrIz7Dmosgy/wGxYjKGQCwSA5KivDxFMACJqLQa7ChiLGpPNRDZODKiYXeHlrQaqjrCOX7Cqpz87IF5QLz3K0/0XlJxAumBz1JXLJMWC6VGHM0HgxyF5bNAlFZ3KSNPasHwFT5Tf0SYUH7quYSKdiSFqH7w/vmJ2hLyh6BsCf1R6LcVKi9B+YLviFVtGJn6FO8ZaiyUHQJMTJV6UKk1EwVQ0TXt6BknJBj9xkst5P2qlby9ceWKvxWOzN0GFJuiglh60PQKzUV60DHJKd3GSFhjDxRkWpGMN9I6+cgp7So+Qmk1Y6Zx1mSbNWiZMqVnJYwEg/UqMGM0DkwZh8+KmKCe9dI0qFhzDxKqflazeB5iSTRmk3IguQ5YTLWlwFqENbZXMahUcdPlNPnqBWQph0/vunq9RM2sW/Kvf10iQw3WYpk6x6bAM5Q1P1gEsuCBIT1NoD9dKU16AwIT5L1ksonyI5TIDJ8B9LNQwEqfBITEzt7aZ0m11nyHqcDJEzNFUZPSRt5C37Zi1jQiwFRi11JAQHyRWpV2H2WqRKnXLxj3JcGEmuSIXHSONGaPeymaAyFUQ1Ud13EooIAhUTl19O87+gya7VMCFOWkfKTj2Z85SQFSUCS+Ih2Yn4rRwn0I94IRmLFSajGiam3LqgRSqTbnm/NyvGFAurxXU4x6sjkxpMIgwaXFHCfEIUaCWDRGAnKk/Vn+K9QoGgPEAWC5rp+fi5N+0ZspsKTAqTBuWKLqZbUuKQFh+dFKa89VLfhm0a/tDFE7AS6EveQRySnQh/lf0D2lgemPyHmsljgnRxqQxNSnY15EfJTJQwIYVH8ZMD9dRPpO6MxAfhgTaLXcmk1k4E9FRp5XGOzG8Uk8V+RXPlE/lMwHQ9TXQ//aVhPUq+51d9zjIyAVT5Ce1YcTEabbWKtCRYdibVVkKZdH4soKeyFROGQCiVlpX0vPcxDZM7nKnyNDmMkj3PVYcJFmPas8lMsF2rw0aFNLP1xFewm2ddibo7uV5QIJZKKyZsXU12GP0FTX9C/28L2WyWmVA3sZPybMKZMe3ZwGaXrzXU026EHq4gzYrkrRILVXdS3kcR0LVHCIs1mIwseTCXwkIKkwVtNstMSBGyd5N0EgrK/qL4yVpkQeKELNSzY36sJUlPHajEFAE9umPk6To9VOPSJyqN2J5EU5ksuAyZZSbk5BFWAvpM9j+zxMHcqZJmwcoxP9lHFB6Tk1h+BomdUASEiZQqUIqeYPfbU5EsGChPk6Pu2WJCZzoyEyjGJHEYE2UGXIeXaq+bZBBoCV5H2pJJXCVAO7lVoOSKEVdjTTROVuGBUmxXTGlMsnolsg5QxifohFhmUtD3zXKpbVvOFhfrq+pouaG9CCKR42RSZSfsVPtvSfbgKpvEiFquvPSoKT3dGT/V/ZArGImEMz3B+jWFiams4M/fyH5Cyk3dOmja6ooU82DemsFOCmSXlRjADIg299J1qGQ1Nzdn9WAPnkuecaMym/2VDZHrJ/QhIJO9TLj1jdpP6lh9oTxapge1JYd1J//OxkpNVjrEJfVsaZVY8HqxDmXvYI+LdzpnMz3RynJcqsUF8t1b35D5Tv1kUbk8cISB1wJSckbVnQzTof4H7WSV9oT0cOmVmDHJXvK4QqFQptM/XPaChYTRMjw8jD8q9Q2fwX2dw30put5J7URuUKQ4YW1shkr82GPYv+TWTBDV6E9joVJanRD7Nq90WFvMOt0tLUzh405mJ6wWMyYYNVLqpFZigZ3HkW0GqRpaOE7SJfYdsVqtKzcP/xygPONXExN/g409CiY8KibSGhNUIe8C71qWa0fUu++dCSVi3dwnFvjfMevMb6qgmITOzj765R/UMJGW2RaoxCg/mRwHQjOhXDh3lFMs9u5EhKOOCgfECGaIyf8eQHlHyTvxeudvRJlJscxETh2sxFDmiVKZkK4t7HRGcuQk4wW+u1QJQMRqrdgyLEoDeUanM//cz3Ad2vyv5R/TO1LZYUykSfEprMT2BlRjChQaJ7M8H3yQmACRqQrryk2HRLud5ZrJfgugTPfZBXH4yNTKis7y6Wf86UxMpaWqSlxG/pepTKifhIPBXIkT+rHs8ljJeE2ahBLE60CkAogI9sPd3dLDeKlYnW746KYKCKCpj3+KuWTXMlkjr7rRSpyRCTum0dPTszdH/IRuMHvmzTefUS5LwntV3ZUgHtq00rFy03VRoEtA8jN2P5Qf84Cvwrr5EETLtNk8PWzXMhH/qmliMzLJtavCMI/1w3gUw9QwASIQI1NH2RWBFSYkZ9pww+j1PsRlt79jNkOBVkIDmUiVeA6X8BdgkjML1Q0NtCs4bCdMdDoVk+gG2nGaCkiMABFRkL5TmjuC2Hd000poVcYgUt6jv2nyv6nD/OlTM5HrMr8B3Nm+Hj12SMPkDuvU91kNfpGG7JA9LU6ka5QUiMNbwCusR1VHH4jviOKhzVZ0kS2H7M+Y5fJT4L+F+SN8ukpmYmJ12UiXIWkttmvcKndSp6GMfRa6xUIQhLQCJA5vXmmtcBwRRM3DgnDoiAP6+4pNR/vwqx/WIQc7nU+jw3j+s5j1J85d/8Wmg6fSV6elL8CfK2HCNQitbDoqZm7aYGIDkbDySJ+Y8jDWGWByZJhRJFcqh5psAiKHG12f44U/H6VMgvHxUjZFTl+dZsqpw16SMjf34hFwC6uGiAl7sy3wcIVj8yFR9YSfzn5ah4hDNYHtts27sfwG45+wDX9pB3Yk5U7mqLU+48RY3OQgExtFpM5g6GDOaI/mkdmPvGm+6QuzR7e/Ws0kw4EdhiTn1gmoDmcKFHGTdbOKCNaZKdKbHRkWU75x/IftHgcon8vviPlzplovM4FKzHfb0/83prLsrcXeWQ3+DI6iYSIK1zdXVDhob5YKxC/gP4C40aMzfyG9o2s/ngn1hIX4CVmZdY5w61v92oJjsgu5u8V8KHWimsKkb7MDQ4TWmdQQOczGBTaie1p6xxulbR6P7u1IPEkPa9ALAzV0C1CH6bY5XPLNRXeV1Z0ORcVEOAqtfcacof9GJlPT08pxu/FV7jMQOO/GOYwTqMROOpNxNQ61CiJ0KELrUE7tx8mgw6lQhOavXtvMqjTY7VSGnCkTulOG9QX0JuyErYnS6v9u8ZifbroBtbhyVH25Fy7Ll1e+Zw1pPEXo+7TS7dYfpN3ssLXiqJgG5HAGL/hcdtpPVlW69R8Ao6dKb87Pe51701+c+1ovlKmo6N36bfPuyoPk8O9Ra0WfigekjB16s4zvAgWHGe2LxW535F1gND1pWBvLlcWi76ohmYpwUT9hMBi2uCtF6iyb5DCx28taU1NGpY1mM0ueyRLDgV9HxsFUpkvq3ov0LPgrOa7G1jI71gXxQvUgblZ1V0J8CMMrfZg6WCn8kDF3nJ18ofPQG03lJSX1B97bicarMxwIZ+9SSd9brsbuVrFMNFIm+sqDBeJBvdttPCdCpei+6z9QnZR7lMfLcUPCgecTG6chf/7n8Qc3UIhc6xvfd28BJLer3WX+c2i21fr3G+5eKraCA+1nqTNYTs4fPLDuYhFefut//iv4QJSaO2jcXX319ha3+ziXdFcDntt69/hdf+mY2/1iZXU1bUQmi4rIRvQDB4rKJ6GZO7Azdpdfz3ltdburq93HOO6Ee95A7PZ46kt6RkIj6oQ44a6EhLtafZnce7y8vAgjpf7AgckinWe6/sDZwP368D+WkseP1eI/yr3VfdVA0ui51FcEgs6gepjHqm/jKyvd7HT/x4/8bzkUH8PaA1fnK1+Egvx44EFMn45ELJbQdhLjbj2O9Kr716kvDjh5p5rJZerL83KWuTrGJ8uLJichn0BbSkrqzubSZafvUR0RiyW1u9K7Xxwc3OKuTjvyEiCXvFd0DI3HMOh2q1+5rqjoZvXEYMmW6uqvi4qOZOH6p99XeGFKZwqTcXSWavfW9Bf39PSoX3sC3Hjw9jyakPb352mgXRi1RCwjP/hn/rHVEXE607rw5HPz+mN3rzocV0vguVMC6oR7GzWky66O5ANoKMnQzPfZ7rD1WeN8beqvszjZUl37/T7bA6tkBqDz1VC5brszZN/frsax06lOtZmHRx0dHd/dEsbn3e70lu+hUSIS+f+0GJlS6qFRzBl8ANuuH1cjidk8k7zyyiuvvPLKK6+88sorr7zyyiuvvPLKK6+88sqk/wNFJbNTBTzAjAAAAABJRU5ErkJggg=="
              alt=""
            />
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
