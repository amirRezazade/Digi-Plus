import AddToShoppingCartLargeBtn from "./../../component/btns/AddToShoppingCartLargeBtn";
import { calcRealPrice, formatedPrice } from "../../utils/funcs";
import { useState } from "react";
export default function ProductBuyCart({ data }) {
  let [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col justify-between px-4 py-6 mt-4 gap-5 text-gray text-sm shadow-[0px_2px_15px_0px_#3e3e3e1a] border border-light-gray/60 rounded-2xl ">
      <div>
        <div className="flex justify-between">
          <span>شناسه محصول:</span>
          <span className="text-dark">{data.sku}</span>
        </div>
        <div className="flex justify-between my-3">
          <span>بارکد:</span>
          <span className="text-dark">{data.meta.barcode}</span>
        </div>
        <div className="flex justify-between my-3">
          <span>گارانتی:</span>
          <span className="text-dark">{data.warrantyInformation}</span>
        </div>
        <div className="flex justify-between my-3">
          <span>ارسال:</span>
          <span className="text-dark">{data.shippingInformation}</span>
        </div>
        <div className="flex justify-between my-3">
          <span>بازگشت کالا:</span>
          <span className="text-dark">{data.returnPolicy}</span>
        </div>
        <div className="flex justify-between mt-3">
          <span>آخرین بروزرسانی:</span>
          <span className="text-dark">{data.meta.updatedAt.slice(0, 10)}</span>
        </div>
      </div>

      <div className="text-end">
        <div className="flex items-center justify-between">
          <span>امتیاز:</span>
          <span className=" fill-star text-star flex gap-2 text-2xl font-bold">
            3.5
            <svg width="28" height="28" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" stroke="none">
              <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
              <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
            </svg>
          </span>
        </div>
        <div className="flex justify-between items-center my-3">
          <p>
            تعداد: <span> {data.stock}</span>
          </p>
          <div class="w-30 h-10 flex border border-light-gray rounded-lg">
            <button onClick={() => quantity < data.stock && setQuantity((prev) => prev + 1)} disabled={quantity == data.stock || data.stock == 0} class="cursor-pointer fill-red px-3 h-full disabled:fill-light-gray disabled:cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <rect x="2" y="7" width="12" height="2" rx="1"></rect>
                <rect x="7" y="14" width="12" height="2" rx="1" transform="rotate(-90 7 14)"></rect>
              </svg>
            </button>
            <span class="grow flex justify-center items-center px-2 h-full">{data.stock == 0 ? "0" : quantity}</span>
            <button onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)} disabled={quantity == 1} class="cursor-pointer fill-red px-3 h-full disabled:fill-light-gray disabled:cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <rect x="2" y="7" width="12" height="2" rx="1"></rect>
              </svg>
            </button>
          </div>
        </div>
        <span className="text-start block">قیمت محصول:</span>
        <div class="mb-1.5">
          <span class="text-xs px-1 sm-shaddow gradient rounded text-white">%{data.discountPercentage}</span>
          <span class="text-gray/80 line-through text-sm mx-2">${calcRealPrice(data.price, data.discountPercentage)}</span>
        </div>
        <p class="text-xl md:text-2xl lg:text-3xl text-red font-bold mt-0.5">{formatedPrice(data.price)} $</p>
        <div className="border-t border-light-gray pt-3 ">
          <AddToShoppingCartLargeBtn product={data} quantity={quantity} />
        </div>
      </div>
    </div>
  );
}
