import { useEffect, useRef, useState } from "react";
import ProductCart from "../../component/carts/ProductCart";
import { sortProducts } from "./FilterAndSortProduct";

export default function ShowProducts({ filteredProducts, params, onParams }) {
  let [sort, setSort] = useState(params.sortBy || "name");
  let [isDesc, setIsDesc] = useState(params.desc || false);
  let [sortedProducts, setSortedProducts] = useState(null);
  let [page, setPage] = useState(params.page || 1);
  let totalPage = Math.ceil(filteredProducts.length / 12);
  let listRef = useRef(null);
  // sorting
  useEffect(() => {
    let list = sortProducts(filteredProducts, sort, isDesc);
    setSortedProducts(list);
  }, [sort, isDesc, filteredProducts]);

  // set sort in URL
  useEffect(() => {
    onParams((prev) => {
      return {
        ...prev,
        sortBy: sort,
        desc: isDesc,
      };
    });
  }, [sort, isDesc]);

  // set Page in URL
  useEffect(() => {
    console.log("page");

    onParams((prev) => {
      return {
        ...prev,
        page: page,
      };
    });
    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [page]);

  // reset page
  if (page > totalPage || page < 1) setPage(1);
  useEffect(() => {
    setPage(1);
  }, [params.brands, params.categories, params.minPrice, params.maxPrice, params.minDiscount, params.minRating, params.sortBy, params.desc, params.q]);

  function handleSortChange(key) {
    if (key == sort) {
      setIsDesc(!isDesc);
    } else {
      setIsDesc(false);
      setSort(key);
    }
  }

  return (
    <div ref={listRef} className="w-full grow text-gray text-sm">
      <div className="pb-5 flex flex-wrap xs:flex-nowrap items-center gap-1.5 sm:gap-4 ">
        <span className="shrink-0 fill-gray flex items-center gap-1">
          <svg width="20" height="20" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M384 96a32 32 0 0164 0v786.752a32 32 0 01-54.592 22.656L95.936 608a32 32 0 010-45.312h.128a32 32 0 0145.184 0L384 805.632V96zm192 45.248a32 32 0 0154.592-22.592L928.064 416a32 32 0 010 45.312h-.128a32 32 0 01-45.184 0L640 218.496V928a32 32 0 11-64 0V141.248z"></path>
            </g>
          </svg>
          مرتب سازی:
        </span>
        <span className="ms-auto sm:me-5 px-3 xs:order-3 text-nowrap">{filteredProducts.length} کالا</span>

        <div className="flex items-center gap-1.5 overflow-auto px-4 my-3 hidden-scrollbar">
          <button onClick={() => handleSortChange("name")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2  ${sort == "name" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
            <span>اسم</span>
            <span className={sort == "name" && isDesc ? "rotate-180 translate-y-1/3" : ""}>
              <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                </g>
              </svg>
            </span>
          </button>
          <button onClick={() => handleSortChange("price")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "price" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
            <span>قیمت</span>
            <span className={sort == "price" && isDesc ? "rotate-180 translate-y-1/3" : ""}>
              <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                </g>
              </svg>
            </span>
          </button>
          <button onClick={() => handleSortChange("rating")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "rating" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
            <span>امتیاز</span>
            <span className={sort == "rating" && isDesc ? "rotate-180 translate-y-1/3" : ""}>
              <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                </g>
              </svg>
            </span>
          </button>
          <button onClick={() => handleSortChange("discountPercentage")} className={`border rounded-full border-light-gray py-1 px-3 cursor-pointer flex items-start gap-2 ${sort == "discountPercentage" ? "fill-org text-org bg-light border-org" : "fill-gray"}`}>
            <span>تخفیف</span>
            <span className={sort == "discountPercentage" && isDesc ? "rotate-180 translate-y-1/3" : ""}>
              <svg width="15" height="15" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="min-h-[80dvh] grid items-start justify-center xs:grid-cols-2 md:grid-cols-3 xl:grid xl:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-6">{sortedProducts && [...sortedProducts].splice((page - 1) * 12, 12).map((p) => <ProductCart key={p.id} product={p} />)}</div>
      {totalPage > 1 && (
        <div className="flex items-center justify-center gap-2 my-8 xs:mt-13 fill-gray">
          <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)} className={`hidden w-10 h-7 border border-light-gray rounded-lg cursor-pointer xs:flex justify-center items-center`}>
            <svg height="15" width="15" version="1.1" id="Capa_1" viewBox="0 0 55.752 55.752">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001 c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58 s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912 C44.605,26.413,44.086,24.993,43.006,23.916z"></path>
                </g>
              </g>
            </svg>
          </button>
          {totalPage > 3 && (
            <>
              <button onClick={() => setPage(1)} className={`w-10 h-7 border border-light-gray rounded-lg cursor-pointer flex justify-center items-center`}>
                {1}
              </button>
              ...
            </>
          )}
          <button onClick={(e) => setPage(Number(e.target.textContent))} className={`w-10 h-7 border border-light-gray rounded-lg cursor-pointer flex justify-center items-center ${page == 1 ? "bg-light text-org border-org" : ""}`}>
            {(page - 1 > 0 && page < totalPage && page - 1) || (page == totalPage && totalPage > 2 && page - 2) || 1}
          </button>
          <button onClick={(e) => setPage(Number(e.target.textContent))} className={`w-10 h-7 border  rounded-lg cursor-pointer flex justify-center items-center ${(page > 1 && page < totalPage) || (totalPage < 3 && page > 1) ? "bg-light text-org border-org" : " border-light-gray"}`}>
            {(page == 1 && 2) || (page == totalPage && totalPage > 2 && totalPage - 1) || page}
          </button>
          {totalPage > 2 && (
            <button onClick={(e) => setPage(Number(e.target.textContent))} className={`w-10 h-7 border border-light-gray rounded-lg cursor-pointer flex justify-center items-center ${page == totalPage ? "bg-light text-org border-org" : ""}`}>
              {(page == 1 && totalPage > 2 && page + 2) || (page + 1 < totalPage && totalPage > 2 && page + 1) || totalPage}{" "}
            </button>
          )}

          {totalPage > 3 && (
            <>
              ...
              <button onClick={() => setPage(totalPage)} className={`w-10 h-7 border border-light-gray rounded-lg cursor-pointer flex justify-center items-center`}>
                {totalPage}
              </button>
            </>
          )}

          <button disabled={page === totalPage} onClick={() => setPage((prev) => prev + 1)} className={`hidden w-10 h-7 border border-light-gray rounded-lg cursor-pointer xs:flex justify-center items-center`}>
            <svg className="rotate-180" height="15" width="15" version="1.1" id="Capa_1" viewBox="0 0 55.752 55.752">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001 c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58 s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912 C44.605,26.413,44.086,24.993,43.006,23.916z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
