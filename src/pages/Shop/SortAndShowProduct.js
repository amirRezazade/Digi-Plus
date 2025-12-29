import { useEffect, useState } from "react";
import ProductCart from "../../component/carts/ProductCart";

export default function SortAndShowProduct({ filteredProducts, params, onParams }) {
  let [sort, setSort] = useState(params.sortBy || "name");
  let [isDesc, setIsDesc] = useState(params.desc || false);
  let [sortedProducts, setSortedProducts] = useState(null);

  useEffect(() => {
    let list = [...filteredProducts];
    if (!isDesc) {
      if (sort === "name")
        list.sort((a, b) => {
          let A = a.title.replace(/^\d+\s*/, "").toLowerCase();
          let B = b.title.replace(/^\d+\s*/, "").toLowerCase();
          return A.localeCompare(B, "en", { numeric: true });
        });
      else {
        list.sort((a, b) => b[sort] - a[sort]);
      }
    } else {
      if (sort === "name")
        list.sort((a, b) => {
          let A = a.title.replace(/^\d+\s*/, "").toLowerCase();
          let B = b.title.replace(/^\d+\s*/, "").toLowerCase();
          return B.localeCompare(A, "en", { numeric: true });
        });
      else {
        list.sort((a, b) => a[sort] - b[sort]);
      }
    }
    setSortedProducts(list);
  }, [sort, isDesc, filteredProducts]);

  useEffect(() => {
    onParams((prev) => {
      return {
        ...prev,
        sortBy: sort,
        desc: isDesc,
      };
    });
  }, [sort, isDesc]);
  function handleSortChange(key) {
    if (key == sort) {
      setIsDesc(!isDesc);
    } else {
      setIsDesc(false);
      setSort(key);
    }
  }

  return (
    <div className="w-full grow ">
      <div className="pb-5 text-sm text-gray flex items-center gap-1.5 sm:gap-4">
        <span className="fill-gray flex items-center gap-1">
          <svg width="20" height="20" viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M384 96a32 32 0 0164 0v786.752a32 32 0 01-54.592 22.656L95.936 608a32 32 0 010-45.312h.128a32 32 0 0145.184 0L384 805.632V96zm192 45.248a32 32 0 0154.592-22.592L928.064 416a32 32 0 010 45.312h-.128a32 32 0 01-45.184 0L640 218.496V928a32 32 0 11-64 0V141.248z"></path>
            </g>
          </svg>
          مرتب سازی:
        </span>
        <div className="flex items-center gap-1.5">
          <button onClick={() => handleSortChange("name")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2  ${sort == "name" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
            <span>اسم</span>
            <span className={sort == "name" && isDesc && "rotate-180 translate-y-1/3"}>
              <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                </g>
              </svg>
            </span>
          </button>
          <button onClick={() => handleSortChange("price")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "price" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
            <span>قیمت</span>
            <span className={sort == "price" && isDesc && "rotate-180 translate-y-1/3"}>
              <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                </g>
              </svg>
            </span>
          </button>
          <button onClick={() => handleSortChange("rating")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "rating" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
            <span>امتیاز</span>
            <span className={sort == "rating" && isDesc && "rotate-180 translate-y-1/3"}>
              <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                </g>
              </svg>
            </span>
          </button>
          <button onClick={() => handleSortChange("discountPercentage")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "discountPercentage" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
            <span>تخفیف</span>
            <span className={sort == "discountPercentage" && isDesc && "rotate-180 translate-y-1/3"}>
              <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="grid items-center justify-center xs:grid-cols-2 md:grid-cols-3 xl:grid xl:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-6">{sortedProducts && [...sortedProducts].splice(0, 10).map((p) => <ProductCart key={p.id} product={p} />)}</div>
    </div>
  );
}
