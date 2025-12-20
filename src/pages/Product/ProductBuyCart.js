import AddToShoppingCartLargeBtn from "./../../component/btns/AddToShoppingCartLargeBtn";
import { calcRealPrice, formatedPrice } from "../../utils/funcs";
import { useState } from "react";
export default function ProductBuyCart({ data }) {
  let [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col justify-between px-4 py-6 mt-8 gap-5 text-gray text-sm shadow-[0px_2px_15px_0px_#3e3e3e1a] rounded-2xl ">
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
