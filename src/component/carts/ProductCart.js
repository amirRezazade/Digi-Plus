import { Link } from "react-router-dom";
import AddToShoppingCartLargeBtn from "../btns/AddToShoppingCartLargeBtn";
import AddToFavoritesBtn from "./AddToFavoritesBtn";
import QuickViewBtn from "./QuickViewBtn";
import { calcRealPrice, formatedPrice } from "../../utils/funcs";
import CompareBtn from "./CompareBtn";

export default function ProductCart({ product }) {
  return (
    <div className=" group min-w-53 aspect-[4/6.8] flex flex-col justify-between relative text-sm rounded-2xl border border-light-gray text-gray bg-white p-3 gray-shaddow overflow-hidden">
      <Link to={`/product/${product.id}`} className="grow flex flex-col justify-between overflow-hidden   ">
        <img className="mx-auto " src={product.thumbnail} alt={product.title} />
        <h4 className=" text-center pb-2">{product.title}</h4>
      </Link>
      <div className="min-h-27 flex flex-col justify-end pt-2 border-t border-light-gray/80">
        <div className="text-center">
          <span className="text-xs px-1 sm-shaddow gradient rounded text-white">%{product.discountPercentage}</span>
          <span className="text-gray/50 line-through text-sm mx-2">${calcRealPrice(product.price, product.discountPercentage)}</span>
        </div>
        <p className="text-lg lg:text-xl text-center text-red font-bold mt-0.5">{formatedPrice(product.price)} $</p>
        <AddToShoppingCartLargeBtn product={product} />
      </div>
      <div className="absolute top-1/10 -left-1/3 transition-[left] duration-500 group-hover:left-2  flex flex-col gap-1 border border-light-gray rounded-lg shadow-sm bg-white">
        <AddToFavoritesBtn id={product.id} />
        <QuickViewBtn id={product.id} />
        <CompareBtn product={product} />
      </div>
    </div>
  );
}
