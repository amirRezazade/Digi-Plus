import { Link } from "react-router-dom";
import AddToShoppingCartLargeBtn from "../btns/AddToShoppingCartLargeBtn";
import AddToFavoritesBtn from "./AddToFavoritesBtn";
import QuickViewBtn from "./QuickViewBtn";
import { formatedPrice } from "../../utils/funcs";
import { useEffect, useState } from "react";
import CompareBtn from "./CompareBtn";

export default function ProductCart({ product, onQuickview }) {
  return (
    <div className=" group  flex flex-col justify-between relative text-sm rounded-2xl border border-light-gray text-gray bg-white p-3 gray-shaddow overflow-hidden">
      <Link to={`/product/${product.id}`} className="  max-h-2/3">
        <img className="mx-auto aspect-square" src={product.thumbnail} alt={product.title} />
        <h4 className=" text-center py-2">{product.title}</h4>
      </Link>
      <div className="grow max-h-1/3 flex flex-col justify-end pt-2 border-t border-light-gray/80">
        <div className="text-center">
          <span className="text-xs px-1 sm-shaddow gradient rounded text-white">%{product.discountPercentage}</span>
          <span className="text-gray/50 line-through text-sm mx-2">${formatedPrice(product.price / (1 - product.discountPercentage / 100))}</span>
        </div>
        <p className="text-lg lg:text-xl text-center text-red font-bold mt-0.5">{formatedPrice(product.price)} $</p>
        <AddToShoppingCartLargeBtn product={product} />
      </div>
      <div className="absolute top-1/6 -left-1/2 transition-[left] duration-500 group-hover:left-2  flex flex-col gap-1 border border-light-gray rounded-lg shadow-sm bg-white">
        <AddToFavoritesBtn id={product.id} />
        <QuickViewBtn id={product.id} onQuickview={onQuickview} />
        <CompareBtn product={product} />
      </div>
    </div>
  );
}
