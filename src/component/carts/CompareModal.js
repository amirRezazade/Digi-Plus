import { useContext, useEffect, useState } from "react";
import { getLocal } from "../../utils/funcs";
import { CompareContext } from "../../pages/Home/Home";
import { Link } from "react-router-dom";
export default function CompareModal() {
  let { compareToggle, setCompareToggle } = useContext(CompareContext);
  let [products, setProducts] = useState(getLocal("compareProducts") || []);
  useEffect(() => {
    setProducts(getLocal("compareProducts") || []);
    console.log(products);
  }, [compareToggle]);

  return (
    <div onMouseDown={(e) => e.target.classList.contains("modal-bg") && setCompareToggle(false)} className={`modal-bg hidden-scrollbar transition-all duration-500 ${compareToggle ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
      <div className={`mx-auto xs:max-w-100 sm:max-w-full md:max-w-[750px] lg:max-w-[800px] xl:max-w-[1100px] sm:min-h-[500px] mt-15 sm:mt-0 bg-white text-gray p-3 rounded-2xl grid grid-cols-13 items-stretch gap-1 divide-x divide-light-gray md:gap-3.5 relative  `}>
        <div className="col-span-1 flex flex-col text-center">
          <span className="h-50 flex items-center justify-center ">تصویر</span>
          <span className="grow flex items-center justify-center ">اسم</span>
          <span className="grow-2 flex items-center justify-center ">توضیحات</span>
          <span className="grow flex items-center justify-center ">امتیاز</span>
          <span className="grow flex items-center justify-center ">تخفیف</span>
          <span className="grow flex items-center justify-center ">قیمت</span>
        </div>
        {products.map((p) => (
          <div key={p.id} className="col-span-4 text-center flex flex-col">
            <Link to={`/product/${p.id}`} className="max-h-50">
              <img className="max-w-full max-h-full aspect-square mx-auto" src={p.thumbnail} alt="" />
            </Link>
            <div className="grow flex items-center justify-center ">{p.title}</div>
            <div className="grow-2 flex items-center justify-center ">{p.discription}</div>
            <div className="grow flex items-center justify-center ">{p.rating}</div>
            <div className="grow flex items-center justify-center ">{p.discountPercentage}</div>
            <div className="grow flex items-center justify-center ">{p.price}</div>
          </div>
        ))}
        {}
        {/* <div className="col-span-4">3</div> */}
      </div>
    </div>
  );
}
