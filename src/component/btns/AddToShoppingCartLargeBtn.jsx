import { useEffect, useState } from "react";
import { getLocal, setLocal } from "../../utils/funcs.js";
import "./addToShoppingCartLargeBtn.css";
export default function AddToShoppingCartLargeBtn({ product, quantity = 1 }) {
  let [inCart, setInCart] = useState(false);
  let [reRender, setReRender] = useState(true);

  useEffect(() => {
    function localChanged() {
      setReRender((prev) => !prev);
    }
    window.addEventListener("local-changed", localChanged);
    return () => window.removeEventListener("local-changed", localChanged);
  }, []);
  useEffect(() => {
    let cart = getLocal("cart");

    if (cart) {
      let isInCart = cart.findIndex((item) => item.id == product.id);
      if (isInCart > -1) setInCart(true);
      else setInCart(false);
    }
  }, [reRender]);
  if (!product) return null;
  function addToCart() {
    let cartList = getLocal("cart") || [];
    let isInTheCart = cartList.findIndex((item) => item.id == product.id);
    if (isInTheCart === -1) {
      const { price, title, discountPercentage, id, rating, stock, thumbnail } = product;
      const TP = product.price * (quantity || 1);
      let newProduct = { price, title, discountPercentage, id, rating, stock, thumbnail, quantity: quantity, totalPrice: TP };
      cartList.push(newProduct);
      setInCart(true);
      setLocal("cart", cartList);
    } else {
      cartList.splice(isInTheCart, 1);
      setInCart(false);
      setLocal("cart", cartList);
    }
  }

  return (
    <button disabled={product.stock === 0} onClick={addToCart} className={`text-sm text-nowrap add-to-cart disabled:opacity-50 disabled:cursor-no-drop! ${inCart && "added"} `}>
      {product.stock ? (
        <>
          <div className="default">افزودن به سبد خرید</div>
          <div className="success">حذف از سبد خرید</div>
          <div className="cart">
            <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipule="evenodd"
                d="M0 3C0 2.44772 0.447715 2 1 2H3.67703C4.08593 2 4.45364 2.24895 4.6055 2.62861L5.15407 4H21.523C22.2304 4 22.7142 4.71453 22.4514 5.37139L19.5029 12.7428C19.1992 13.5021 18.4637 14 17.6459 14H8.21106L6.87255 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.63088 18 4.29178 17.7967 4.1179 17.4711C3.94402 17.1455 3.96365 16.7506 4.16895 16.4438L6.55276 12.8819L3 4H1C0.447715 4 0 3.55228 0 3ZM8.35407 12H17.6459L20.0459 6H5.95407L8.35407 12Z"
              />
              <path d="M7.5 21.25C7.5 22.2165 6.7165 23 5.75 23C4.7835 23 4 22.2165 4 21.25C4 20.2835 4.7835 19.5 5.75 19.5C6.7165 19.5 7.5 20.2835 7.5 21.25Z" />
              <path d="M18.25 23C19.2165 23 20 22.2165 20 21.25C20 20.2835 19.2165 19.5 18.25 19.5C17.2835 19.5 16.5 20.2835 16.5 21.25C16.5 22.2165 17.2835 23 18.25 23Z" />
            </svg>
          </div>
          <div className="dots">
            <svg fill="#ffffff" width="15" height="15" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>box1</title> <path d="M2.005 22.825l13.039 6.169v-13.8l-13.039-5.52v13.151zM6.006 14.791l5.026 2.337-0.029 1.842-5.025-2.336 0.028-1.843zM16 15.194v13.8l12.994-6.169v-13.151l-12.994 5.52zM15.453 3.006l-13.363 5.757 13.375 5.712 13.514-5.725-13.526-5.744z"></path>
              </g>
            </svg>
          </div>
        </>
      ) : (
        "نا موجود"
      )}
    </button>
  );
}
