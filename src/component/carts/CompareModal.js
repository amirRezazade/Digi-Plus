import { useContext, useEffect, useState } from "react";
import { formatedPrice, getLocal, setLocal } from "../../utils/funcs";
import { CompareContext } from "../../pages/Home/Home";
import { Link } from "react-router-dom";
import AddToShoppingCartLargeBtn from "../btns/AddToShoppingCartLargeBtn";
import AddToFavoritesBtn from "./AddToFavoritesBtn";
export default function CompareModal() {
  let { compareToggle, setCompareToggle, compareMaxLengthMessage, setCompareMaxLengthMessage } = useContext(CompareContext);
  let [products, setProducts] = useState(getLocal("compareProducts") || []);
  if (compareToggle) {
    document.body.classList.add("body-lock");
  } else document.body.classList.remove("body-lock");

  useEffect(() => {
    setProducts(getLocal("compareProducts") || []);
  }, [compareToggle]);

  function removeItem(id) {
    let list = getLocal("compareProducts") || [];
    let index = list.findIndex((item) => item.id == id);
    if (compareMaxLengthMessage) {
      list[index] = compareMaxLengthMessage;
      setCompareMaxLengthMessage(false);
    } else list.splice(index, 1);
    setLocal("compareProducts", list);
    setProducts(list);
    if (list.length == 0) setCompareToggle(false);
  }

  return (
    <div onMouseDown={(e) => e.target.classList.contains("modal-bg") && setCompareToggle(false)} className={`modal-bg hidden-scrollbar transition-all duration-500 ${compareToggle ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
      <div className={`mx-auto min-w-150 min-h-100 md:w-full md:max-w-[750px] md:min-h-120 lg:max-w-[850px] 2xl:max-w-[950px] mt-15 sm:mt-0 bg-white text-gray p-3 rounded-2xl grid grid-cols-13 items-stretch  divide-x divide-light-gray  relative -rotate-y-100 opacity-0  invisible transition-all duration-500 delay-100 ${compareToggle && "rotate-y-0!  opacity-100 visible"} `}>
        <button onClick={() => setCompareToggle(false)} className="absolute right-2 bottom-[102%] text-2xl border border-light-gray rounded-lg text-light-gray cursor-pointer size-9 ">
          ×
        </button>
        {compareMaxLengthMessage && <span className="bg-white px-2 py-1 absolute bottom-1/1 left-1/2 -translate-x-1/2 border-b border-light-gray rounded-t-xl text-sm text-red-600"> ابتدا یک محصول را حذف کنید!</span>}
        <div className="col-span-1 flex flex-col text-center text-xs sm:text-sm">
          <span className="grow max-h-50  flex items-center justify-center ">تصویر</span>
          <span className="h-1/9 flex items-center justify-center ">اسم</span>
          <span className="h-1/9 flex items-center justify-center ">مانده</span>
          <span className="h-1/9 flex items-center justify-center ">امتیاز</span>
          <span className="h-1/9 flex items-center justify-center ">تخفیف</span>
          <span className="h-1/9 flex items-center justify-center ">قیمت</span>
          <span className="h-1/9 flex items-center justify-center "></span>
        </div>
        {products.map((p) => (
          <div key={p.id} className="col-span-4 text-center flex flex-col relative">
            <div className="absolute top-1 left-1 flex flex-col gap-2">
              <button onClick={() => removeItem(p.id)} className=" cursor-pointer size-8 border border-light-gray rounded-md hover:text-red hover:border-red text-xl">
                ×
              </button>
              <AddToFavoritesBtn id={p.id} />
            </div>
            <Link to={`/product/${p.id}`} className="h-3/9 max-h-50">
              <img className="max-w-full max-h-full aspect-square mx-auto" src={p.thumbnail} alt="" />
            </Link>
            <div className="h-1/9 flex items-center justify-center text-dark font-bold text-sm sm:text-base">{p.title}</div>
            <div className="h-1/9 flex items-center justify-center ">{p.stock}</div>
            <div className="h-1/9 flex items-center justify-center text-yellow-400">
              <div className="flex items-start gap-1 font-bold">
                {p.rating}
                <span className="fill-yellow-400">
                  <svg width="18" height="18" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99774 0C7.22135 0 7.42552 0.123047 7.52274 0.316875L9.1901 3.62813L12.9161 4.16016C13.1349 4.19063 13.3148 4.33828 13.3852 4.53984C13.4533 4.74375 13.3974 4.96641 13.2418 5.11406L10.5391 7.69687L11.1783 11.3414C11.2148 11.5523 11.1248 11.768 10.9425 11.8922C10.7627 12.0164 10.5026 12.0328 10.3276 11.932L6.99774 10.2164L3.64844 11.932C3.47344 12.0328 3.23524 12.0164 3.05295 11.8922C2.87309 11.768 2.78316 11.5523 2.79774 11.3414L3.45642 7.69687L0.756318 5.11406C0.599304 4.96641 0.543644 4.74375 0.612672 4.53984C0.681457 4.33828 0.863019 4.19063 1.08153 4.16016L4.80538 3.62813L6.47274 0.316875C6.57239 0.123023 6.77413 0 6.99774 0ZM6.99774 1.85039L5.7217 4.3875C5.63663 4.55391 5.47135 4.67109 5.28177 4.69922L2.40594 5.10703L4.49427 7.10156C4.62795 7.23047 4.68871 7.41563 4.65712 7.59609L4.16614 10.3992L6.72309 9.08203C6.89566 8.99297 7.10225 8.99297 7.27239 9.08203L9.82934 10.3992L9.33837 7.59609C9.30677 7.41563 9.36996 7.23047 9.50364 7.10156L11.5915 5.10703L8.71614 4.69922C8.52413 4.67109 8.35885 4.55391 8.27621 4.3875L6.99774 1.85039Z"></path>
                    <path d="M4.49427 7.10156C4.62795 7.23047 4.68871 7.41563 4.65712 7.59609L4.16614 10.3992L6.72309 9.08203C6.89566 8.99297 7.10225 8.99297 7.27239 9.08203L9.82934 10.3992L9.33837 7.59609C9.30677 7.41563 9.36996 7.23047 9.50364 7.10156L11.5915 5.10703L8.71614 4.69922C8.52413 4.67109 8.35885 4.55391 8.27621 4.3875L6.99774 1.85039V6L4.49427 7.10156Z"></path>
                    <path d="M6.99774 1.85039L5.7217 4.3875C5.63663 4.55391 5.47135 4.67109 5.28177 4.69922L2.40594 5.10703L4.49427 7.10156L6.99774 6V1.85039Z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="h-1/9 flex items-center justify-center text-org">{p.discountPercentage} %</div>
            <div className="h-1/9 flex items-center justify-center font-bold md:text-2xl text-red">{formatedPrice(p.price)} $</div>
            <div className="h-1/9 flex items-center justify-center px-4">
              <AddToShoppingCartLargeBtn product={p} />
            </div>
          </div>
        ))}
        {Array.from({ length: 3 - products.length }).map((_, i) => (
          <div key={"empty-" + i} className="col-span-4   ">
            <div className="max-h-50">
              <img className="max-w-full max-h-full aspect-square mx-auto" src="https://digiplus.aet-web.ir/wp-content/plugins/woo-smart-compare/assets/images/placeholder.png" alt="default-bg" />
            </div>
            <div className="h-1/9">
              <span className="block mx-auto mt-3 w-20 h-3.5 rounded-lg bg-light-gray"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
