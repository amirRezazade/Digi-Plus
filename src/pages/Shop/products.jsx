import { useEffect, useRef, useState } from "react";
import ProductCart from "../../component/carts/ProductCart";
import { sortProducts } from "./FilterAndSortProduct";

export default function ShowProducts({ filteredProducts, sorting, onSorting, params }) {
  let [sort, setSort] = useState(sorting.sortBy || "name");
  let [isDesc, setIsDesc] = useState(sorting.desc || false);
  let [sortedProducts, setSortedProducts] = useState([]);
  let [page, setPage] = useState(sorting.page || 1);

  let totalPage = Math.ceil(filteredProducts?.length / 12) || 1;
  let listRef = useRef(null);
  const isFirstRender = useRef(true);

  // sorting
  useEffect(() => {
    let list = sortProducts(filteredProducts, sort, isDesc);
    setSortedProducts(list);
  }, [sort, isDesc, params]);

  // set sort in URL
  useEffect(() => {
    onSorting((prev) => {
      return {
        ...prev,
        sortBy: sort,
        desc: isDesc,
      };
    });
  }, [sort, isDesc]);

  // set Page in URL
  useEffect(() => {
    if (page > totalPage || page < 1) setPage(1);
    onSorting((prev) => {
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

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // اولین رندر رد شود
      return;
    }
    setPage(1);
  }, [params, sort, isDesc]);

  function handleSortChange(key) {
    if (key == sort) {
      setIsDesc(!isDesc);
    } else {
      setIsDesc(false);
      setSort(key);
    }
  }

  return filteredProducts.length ? (
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
  ) : (
    <div className="w-full flex flex-col gap-5 items-center justify-center py-15 text-gray">
      <svg width="180" height="160" viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.5741 157.225C27.4235 157.225 24.5103 154.15 24.0679 150.374L12.9653 55.0575C12.5229 51.2811 15.2311 48.2061 18.9967 48.2061H160.352C164.118 48.2061 166.815 51.2811 166.373 55.0575L155.281 150.363C154.839 154.139 151.926 157.214 148.775 157.214H30.5741V157.225Z" fill="#FDECE6"></path>
        <path
          d="M160.062 50.9918C162.285 50.9918 163.882 52.8153 163.634 55.0596L152.93 150.365C152.682 152.609 150.956 154.433 149.067 154.433H30.2731C28.3957 154.433 26.6694 152.609 26.4104 150.365L15.7178 55.0596C15.4697 52.8153 17.0666 50.9918 19.2892 50.9918H160.062ZM160.656 45.4136H18.7066C13.3873 45.4136 9.58931 49.7402 10.2259 55.0488L21.7169 150.354C22.3535 155.673 26.4644 160 30.8666 160H148.485C152.887 160 156.987 155.673 157.634 150.354L169.125 55.0596C169.773 49.7402 165.964 45.4136 160.656 45.4136Z"
          fill="#DB3426"
        ></path>
        <path d="M160.063 50.9907H139.617L133.952 126.119C133.779 128.364 132.053 130.187 130.1 130.187H24.1562L26.4221 150.364C26.6703 152.608 28.3966 154.431 30.2848 154.431H149.09C150.967 154.431 152.694 152.608 152.953 150.364L163.656 55.0584C163.883 52.8142 162.286 50.9907 160.063 50.9907Z" fill="#F5C1B4"></path>
        <path d="M160.063 50.9902H152.413L144.235 137.459C144.019 139.703 142.293 141.526 140.372 141.526H25.4297L26.4224 150.374C26.6705 152.618 28.3968 154.442 30.285 154.442H149.09C150.968 154.442 152.694 152.618 152.953 150.374L163.656 55.0687C163.883 52.8137 162.286 50.9902 160.063 50.9902Z" fill="#EE9781"></path>
        <path d="M24.1953 74.8784L28.9535 121.306" stroke="white" stroke-width="5.1658" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M49.9139 141.949C50.0002 143.168 49.2233 144.161 48.1768 144.161H43.1596C42.1238 144.161 41.1851 143.168 41.088 141.949L36.2651 85.142C36.1572 83.912 37.0095 82.9302 38.164 82.9302H43.7207C44.8751 82.9302 45.8786 83.9228 45.9649 85.142L49.9139 141.949Z" fill="#EE9781" stroke="#DB3426" stroke-width="4" stroke-miterlimit="10"></path>
        <path d="M72.0156 141.949C72.0587 143.168 71.2387 144.161 70.1921 144.161H65.175C64.1284 144.161 63.2436 143.168 63.1897 141.949L60.557 85.142C60.5031 83.912 61.3878 82.9302 62.5423 82.9302H68.099C69.2534 82.9302 70.2245 83.9228 70.2569 85.142L72.0156 141.949Z" fill="#EE9781" stroke="#DB3426" stroke-width="4" stroke-miterlimit="10"></path>
        <path d="M94.1111 141.949C94.1003 143.168 93.2479 144.161 92.2121 144.161H87.1949C86.1484 144.161 85.296 143.168 85.296 141.949L84.8536 85.142C84.8428 83.912 85.7707 82.9302 86.9252 82.9302H92.4818C93.6363 82.9302 94.5642 83.9228 94.5534 85.142L94.1111 141.949Z" fill="#EE9781" stroke="#DB3426" stroke-width="4" stroke-miterlimit="10"></path>
        <path d="M116.194 141.949C116.14 143.168 115.244 144.161 114.208 144.161H109.191C108.145 144.161 107.335 143.168 107.379 141.949L109.137 85.142C109.18 83.912 110.141 82.9302 111.295 82.9302H116.852C118.006 82.9302 118.891 83.9228 118.837 85.142L116.194 141.949Z" fill="#EE9781" stroke="#DB3426" stroke-width="4" stroke-miterlimit="10"></path>
        <path d="M138.294 141.949C138.186 143.168 137.258 144.161 136.222 144.161H131.205C130.169 144.161 129.392 143.168 129.468 141.949L133.417 85.142C133.503 83.912 134.507 82.9302 135.661 82.9302H141.218C142.372 82.9302 143.225 83.9228 143.117 85.142L138.294 141.949Z" fill="#EE9781" stroke="#DB3426" stroke-width="4" stroke-miterlimit="10"></path>
        <path d="M39.7874 54.0695C39.1616 55.0405 37.8777 55.3211 36.9174 54.6953L32.2671 51.7066C31.296 51.0808 31.0263 49.7968 31.6413 48.8365L60.4926 3.95188C61.1184 2.99161 62.4023 2.71109 63.3626 3.3261L68.0129 6.31481C68.9732 6.9406 69.2537 8.22456 68.6387 9.18484L39.7874 54.0695Z" fill="#EE9781" stroke="#DB3426" stroke-width="5.1658" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M139.622 54.0695C140.247 55.0405 141.531 55.3211 142.492 54.6953L147.142 51.7066C148.113 51.0808 148.394 49.7968 147.768 48.8365L118.916 3.95188C118.291 2.99161 117.007 2.71109 116.046 3.3261L111.396 6.31481C110.436 6.9406 110.145 8.22456 110.77 9.18484L139.622 54.0695Z" fill="#EE9781" stroke="#DB3426" stroke-width="5.1658" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9.39533 70.0806C5.74842 70.0806 2.78125 67.1135 2.78125 63.4665V51.8353C2.78125 48.1883 5.74842 45.2212 9.39533 45.2212H170C173.647 45.2212 176.603 48.1883 176.603 51.8353V63.4665C176.603 67.1135 173.636 70.0806 170 70.0806H9.39533Z" fill="#EE9781"></path>
        <path d="M170.002 48.0162C172.117 48.0162 173.822 49.7318 173.822 51.8465V63.4778C173.822 65.5926 172.117 67.2974 170.002 67.2974H9.39782C7.28304 67.2974 5.57826 65.5818 5.57826 63.4778V51.8465C5.57826 49.7318 7.29383 48.0162 9.39782 48.0162H170.002ZM170.002 42.4487H9.39782C4.21877 42.4487 0 46.6675 0 51.8465V63.4778C0 68.6569 4.21877 72.8756 9.39782 72.8756H170.002C175.181 72.8756 179.4 68.6569 179.4 63.4778V51.8465C179.4 46.6675 175.181 42.4487 170.002 42.4487Z" fill="#DB3426"></path>
        <path d="M170.012 48.0181H162.362V53.8337C162.362 55.9485 160.657 57.6533 158.542 57.6533H5.58789V63.4689C5.58789 65.5837 7.30346 67.2885 9.40745 67.2885H170.012C172.127 67.2885 173.831 65.5729 173.831 63.4689V51.8376C173.831 49.7336 172.127 48.0181 170.012 48.0181Z" fill="#E35A35"></path>
      </svg>
      <span>محصولی با این فیلترها پیدا نشد!</span>
    </div>
  );
}
