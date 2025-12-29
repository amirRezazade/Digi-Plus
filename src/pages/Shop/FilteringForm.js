import { useState } from "react";

export default function FilteringForm({ product, params, onParams }) {
  const maxProductPrice = 40000;

  let [open, setOpen] = useState(null);
  let [price, setPrice] = useState({ min: params.minPrice || 0, max: params.maxPrice || maxProductPrice });
  const topBrands = ["Apple", "Samsung", "Nike", "Gucci", "Chanel", "Dior", "Prada", "Rolex", "Dell", "Asus"];
  const categories = ["beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches", "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories", "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"];
  let filtersLength = params.brands.length + params.categories.length + (params.minDiscount ? 1 : 0) + (params.minRating ? 1 : 0) + (params.minPrice > 0 ? 1 : 0) + (params.maxPrice && params.maxPrice < maxProductPrice ? 1 : 0) + (params.q?.length ? 1 : 0);
  function toggleBrand(brand) {
    onParams((prev) => {
      const exist = params.brands?.includes(brand);
      return {
        ...prev,
        brands: exist ? prev.brands?.filter((b) => b !== brand) : [...prev.brands, brand],
      };
    });
  }
  function toggleCategory(category) {
    onParams((prev) => {
      const exist = params.categories?.includes(category);
      return {
        ...prev,
        categories: exist ? prev.categories?.filter((b) => b !== category) : [...prev.categories, category],
      };
    });
  }

  function toggleQuery(value) {
    onParams((prev) => {
      return {
        ...prev,
        q: value.trim().toLowerCase(),
      };
    });
  }
  function setMinDiscount(value) {
    onParams((prev) => {
      return {
        ...prev,
        minDiscount: !value ? null : value,
      };
    });
  }
  function setMinRating(value) {
    onParams((prev) => {
      return {
        ...prev,
        minRating: !value ? null : value,
      };
    });
  }

  const handleMinPrice = (value) => {
    setPrice((p) => ({
      max: p.max < value + 1000 ? (value + 1000 > maxProductPrice ? maxProductPrice : value + 1000) : p.max,
      min: value > maxProductPrice - 1000 ? maxProductPrice - 1000 : value,
    }));
  };

  const handleMaxPrice = (value) => {
    setPrice((p) => ({
      min: p.min > value - 1000 ? (value - 1000 < 0 ? 0 : value - 1000) : p.min,
      max: value < 1000 ? 1000 : value,
    }));
  };
  function filterPrice() {
    onParams((prev) => {
      return {
        ...prev,
        minPrice: price.min < 0 ? 0 : price.min,
        maxPrice: price.max > maxProductPrice ? maxProductPrice : price.max,
      };
    });
  }
  function resetFilters() {
    onParams((prev) => {
      setPrice({
        min: 0,
        max: maxProductPrice,
      });
      return {
        ...prev,
        brands: [],
        categories: [],
        minRating: null,
        minPrice: 0,
        maxPrice: maxProductPrice,
        minDiscount: 0,
        q: "",
      };
    });
  }

  return (
    <div className="rounded-2xl border-light-gray border gray-shaddow p-4 text-sm text-gray">
      <div className="flex items-center gap-3">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor">
            <path d="M22 7.25H16C15.59 7.25 15.25 6.91 15.25 6.5C15.25 6.09 15.59 5.75 16 5.75H22C22.41 5.75 22.75 6.09 22.75 6.5C22.75 6.91 22.41 7.25 22 7.25Z"></path>
            <path d="M6 7.25H2C1.59 7.25 1.25 6.91 1.25 6.5C1.25 6.09 1.59 5.75 2 5.75H6C6.41 5.75 6.75 6.09 6.75 6.5C6.75 6.91 6.41 7.25 6 7.25Z"></path>
            <path d="M10 10.75C7.66 10.75 5.75 8.84 5.75 6.5C5.75 4.16 7.66 2.25 10 2.25C12.34 2.25 14.25 4.16 14.25 6.5C14.25 8.84 12.34 10.75 10 10.75ZM10 3.75C8.48 3.75 7.25 4.98 7.25 6.5C7.25 8.02 8.48 9.25 10 9.25C11.52 9.25 12.75 8.02 12.75 6.5C12.75 4.98 11.52 3.75 10 3.75Z"></path>
            <path d="M22 18.25H18C17.59 18.25 17.25 17.91 17.25 17.5C17.25 17.09 17.59 16.75 18 16.75H22C22.41 16.75 22.75 17.09 22.75 17.5C22.75 17.91 22.41 18.25 22 18.25Z"></path>
            <path d="M8 18.25H2C1.59 18.25 1.25 17.91 1.25 17.5C1.25 17.09 1.59 16.75 2 16.75H8C8.41 16.75 8.75 17.09 8.75 17.5C8.75 17.91 8.41 18.25 8 18.25Z"></path>
            <path d="M14 21.75C11.66 21.75 9.75 19.84 9.75 17.5C9.75 15.16 11.66 13.25 14 13.25C16.34 13.25 18.25 15.16 18.25 17.5C18.25 19.84 16.34 21.75 14 21.75ZM14 14.75C12.48 14.75 11.25 15.98 11.25 17.5C11.25 19.02 12.48 20.25 14 20.25C15.52 20.25 16.75 19.02 16.75 17.5C16.75 15.98 15.52 14.75 14 14.75Z"></path>
          </svg>
        </span>
        <span className="text-dark ">فیلتر ها</span>
        {filtersLength !== 0 && (
          <button onClick={() => resetFilters()} className="flex items-center gap-2 rounded-full py-1 px-3.5 border border-org bg-light  ms-auto text-org fill-org text-xs cursor-pointer">
            <span>
              <span>{filtersLength}</span> فیلتر
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                <path d="M7.16172 8C6.94935 8 6.73699 7.92176 6.56933 7.7541L0.243102 1.42787C-0.0810339 1.10374 -0.0810339 0.567237 0.243102 0.243102C0.567237 -0.0810339 1.10374 -0.0810339 1.42787 0.243102L7.7541 6.56933C8.07824 6.89347 8.07824 7.42997 7.7541 7.7541C7.58645 7.92176 7.37408 8 7.16172 8Z"></path>
                <path d="M0.835487 8C0.623122 8 0.410758 7.92176 0.243102 7.7541C-0.0810339 7.42997 -0.0810339 6.89347 0.243102 6.56933L6.56933 0.243102C6.89347 -0.0810339 7.42997 -0.0810339 7.7541 0.243102C8.07824 0.567237 8.07824 1.10374 7.7541 1.42787L1.42787 7.7541C1.27139 7.92176 1.04785 8 0.835487 8Z"></path>
              </svg>
            </span>
          </button>
        )}
      </div>
      {/* search input  */}
      <div className="mt-2">
        <input onInput={(e) => toggleQuery(e.target.value)} className="w-full outline-0 px-3 p-2 rounded-full border border-light-gray focus:border-org text-red placeholder:text-gray/60 focus:placeholder:text-org " placeholder="جستجو..." type="text" value={params.q} />
      </div>
      <div className="flex flex-col gap-3 pt-5">
        <div className={`${open == "category" ? "max-h-100" : "max-h-12.5 "} flex flex-col transition-[max-height] duration-500 overflow-hidden `}>
          <div onClick={() => setOpen((prev) => (prev == "category" ? null : "category"))} className={`flex items-center justify-between gap-3 p-2 rounded-full cursor-pointer border border-light-gray ${open == "category" ? "gradient border-transparent text-white fill-org" : "fill-white"}`}>
            <span className={`${open == "category" ? "bg-white" : "gradient"} size-8 flex justify-center items-center rounded-full `}>
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path opacity="0.4" d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z"></path> <path opacity="0.4" d="M7.24 13.4302H5.34C3.15 13.4302 2 14.5802 2 16.7602V18.6602C2 20.8502 3.15 22.0002 5.33 22.0002H7.23C9.41 22.0002 10.56 20.8502 10.56 18.6702V16.7702C10.57 14.5802 9.42 13.4302 7.24 13.4302Z"></path>
                  <path d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z"></path> <path d="M17.7099 21.9999C20.0792 21.9999 21.9999 20.0792 21.9999 17.7099C21.9999 15.3406 20.0792 13.4199 17.7099 13.4199C15.3406 13.4199 13.4199 15.3406 13.4199 17.7099C13.4199 20.0792 15.3406 21.9999 17.7099 21.9999Z"></path>
                </g>
              </svg>
            </span>
            <span className="me-auto">دسته بندی ها</span>
            <span className={` transition-transform duration-400 ${open == "category" ? "rotate-90 fill-white" : "-rotate-90 fill-red"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
                <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
              </svg>
            </span>
          </div>
          <div className={`grow overflow-y-auto  p-2 border border-light-gray rounded-2xl my-2 transition-all duration-300`}>
            <div className="flex flex-wrap gap-1 text-xs text-org fill-org">
              {params.categories.map((c) => (
                <button key={c} onClick={() => toggleCategory(c)} className="flex items-center gap-1 cursor-pointer rounded-full border border-org px-1 py-0.5 hover:bg-light">
                  {c}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                      <path d="M7.16172 8C6.94935 8 6.73699 7.92176 6.56933 7.7541L0.243102 1.42787C-0.0810339 1.10374 -0.0810339 0.567237 0.243102 0.243102C0.567237 -0.0810339 1.10374 -0.0810339 1.42787 0.243102L7.7541 6.56933C8.07824 6.89347 8.07824 7.42997 7.7541 7.7541C7.58645 7.92176 7.37408 8 7.16172 8Z"></path>
                      <path d="M0.835487 8C0.623122 8 0.410758 7.92176 0.243102 7.7541C-0.0810339 7.42997 -0.0810339 6.89347 0.243102 6.56933L6.56933 0.243102C6.89347 -0.0810339 7.42997 -0.0810339 7.7541 0.243102C8.07824 0.567237 8.07824 1.10374 7.7541 1.42787L1.42787 7.7541C1.27139 7.92176 1.04785 8 0.835487 8Z"></path>
                    </svg>
                  </span>
                </button>
              ))}
            </div>
            <span className="py-2 hidden  md:block">دسته بندی ها</span>
            <div className=" pl-2 overflow-auto">
              {categories.map((cat) => (
                <div key={cat} className="py-1">
                  <label className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-full border border-light-gray has-checked:bg-yel has-checked:border-org/50 has-checked:text-org hover:border-org/50 hover:text-org transition-colors duration-300 " htmlFor={cat}>
                    <input className="peer" type="checkbox" id={cat} hidden onChange={() => toggleCategory(cat)} checked={params.categories.includes(cat.toLowerCase())} />
                    <span className="size-6 border border-light-gray rounded-2xl bg-white peer-checked:bg-org peer-checked:border-org bg-no-repeat bg-center peer-checked:bg-[url(https://digiplus.aet-web.ir/wp-content/themes/Digiplus/assets/img/dpshoptick.svg)] transition-colors duration-300"></span>
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${open == "brand" ? "max-h-100" : "max-h-12.5 "} flex flex-col transition-[max-height] duration-500 overflow-hidden `}>
          <div onClick={() => setOpen((prev) => (prev == "brand" ? null : "brand"))} className={`flex items-center justify-between gap-3 p-2 rounded-full cursor-pointer border border-light-gray ${open == "brand" ? "gradient border-transparent text-white fill-org" : "fill-white"}`}>
            <span className={`${open == "brand" ? "bg-white" : "gradient"} size-8 flex justify-center items-center rounded-full `}>
              <svg width="18" height="18" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>tags</title>
                  <path d="M25.994 16.144l-12.225-12.225-11.769 0.045 0.018 10.831 12.662 12.662c0.794 0.795 2.072 0.806 2.854 0.024l8.484-8.485c0.781-0.781 0.771-2.058-0.024-2.852zM7.081 10.952c-1.104 0-2-0.896-2-2s0.896-2 2-2c1.105 0 2 0.896 2 2s-0.895 2-2 2zM28.846 16.168l-12.225-12.225-1.471 0.005 12.27 12.207c0.795 0.795 0.805 2.071 0.023 2.853l-8.484 8.485c-0.207 0.207-0.451 0.354-0.709 0.451 0.721 0.277 1.561 0.135 2.135-0.438l8.486-8.485c0.781-0.782 0.77-2.059-0.025-2.853z"></path>
                </g>
              </svg>
            </span>
            <span className="me-auto">برند ها</span>
            <span className={` transition-transform duration-400 ${open == "brand" ? "rotate-90 fill-white" : "-rotate-90 fill-red"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
                <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
              </svg>
            </span>
          </div>
          <div className={`grow overflow-y-auto p-2 border border-light-gray rounded-2xl my-2 transition-all duration-300`}>
            <div className="flex flex-wrap gap-1 text-xs text-org fill-org">
              {params.brands.map((b) => (
                <button key={b} onClick={() => toggleBrand(b)} className="flex items-center gap-1 cursor-pointer rounded-full border border-org px-1 py-0.5 hover:bg-light">
                  {b}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                      <path d="M7.16172 8C6.94935 8 6.73699 7.92176 6.56933 7.7541L0.243102 1.42787C-0.0810339 1.10374 -0.0810339 0.567237 0.243102 0.243102C0.567237 -0.0810339 1.10374 -0.0810339 1.42787 0.243102L7.7541 6.56933C8.07824 6.89347 8.07824 7.42997 7.7541 7.7541C7.58645 7.92176 7.37408 8 7.16172 8Z"></path>
                      <path d="M0.835487 8C0.623122 8 0.410758 7.92176 0.243102 7.7541C-0.0810339 7.42997 -0.0810339 6.89347 0.243102 6.56933L6.56933 0.243102C6.89347 -0.0810339 7.42997 -0.0810339 7.7541 0.243102C8.07824 0.567237 8.07824 1.10374 7.7541 1.42787L1.42787 7.7541C1.27139 7.92176 1.04785 8 0.835487 8Z"></path>
                    </svg>
                  </span>
                </button>
              ))}
            </div>
            <span className="py-2 hidden  md:block">برند ها</span>
            <div className="pl-2 overflow-auto">
              {topBrands.map((b) => (
                <div key={b} className="py-1">
                  <label className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-full border border-light-gray has-checked:bg-yel has-checked:border-org/50 has-checked:text-org hover:border-org/50 hover:text-org transition-colors duration-300 " htmlFor={b}>
                    <input className="peer" type="checkbox" id={b} hidden onChange={() => toggleBrand(b.toLowerCase())} checked={params.brands?.includes(b.toLowerCase())} />
                    <span className="size-6 border border-light-gray rounded-2xl bg-white peer-checked:bg-org peer-checked:border-org bg-no-repeat bg-center peer-checked:bg-[url(https://digiplus.aet-web.ir/wp-content/themes/Digiplus/assets/img/dpshoptick.svg)] transition-colors duration-300"></span>
                    {b}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${open == "price" ? "max-h-100" : "max-h-12.5 "} flex flex-col transition-[max-height] duration-500 overflow-hidden `}>
          <div onClick={() => setOpen((prev) => (prev == "price" ? null : "price"))} className={`flex items-center justify-between gap-3 p-2 rounded-full cursor-pointer border border-light-gray ${open == "price" ? "gradient border-transparent text-white fill-org" : "fill-white"}`}>
            <span className={`${open == "price" ? "bg-white" : "gradient"} size-8 flex justify-center items-center rounded-full `}>
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M8,16a1,1,0,0,0-2,0,5.006,5.006,0,0,0,5,5v1a1,1,0,0,0,2,0V21a5,5,0,0,0,0-10V5a3,3,0,0,1,3,3,1,1,0,0,0,2,0,5.006,5.006,0,0,0-5-5V2a1,1,0,0,0-2,0V3a5,5,0,0,0,0,10v6A3,3,0,0,1,8,16Zm5-3a3,3,0,0,1,0,6ZM8,8a3,3,0,0,1,3-3v6A3,3,0,0,1,8,8Z"></path>
                </g>
              </svg>
            </span>
            <span className="me-auto">قیمت</span>
            <span className={` transition-transform duration-400 ${open == "price" ? "rotate-90 fill-white" : "-rotate-90 fill-red"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
                <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
              </svg>
            </span>
          </div>
          <div className={`grow  p-2 border border-light-gray rounded-2xl my-2 transition-all duration-300`}>
            <div className="  py-2">
              <span>قیمت:</span>
              <div className="flex items-center justify-evenly gap-3 mt-2">
                <span>از</span>
                <span className="min-w-13 text-red font-bold text-center">{price.min.toLocaleString("en-US", {})} $</span>
                <span>تا</span>
                <span className="min-w-13 text-green-500 font-bold text-center">{price.max.toLocaleString("en-US", {})} $</span>
              </div>
              <div className=" relative h-1.5 my-6">
                <input dir="ltr" className="range-input price-min absolute h-full w-full pointer-events-none appearance-none bg-none " type="range" min={0} step={5} max={maxProductPrice} value={price.min} onChange={(e) => handleMinPrice(+e.target.value)} onPointerUp={filterPrice} />
                <input dir="ltr" className="range-input price-max absolute h-full w-full pointer-events-none appearance-none bg-none " type="range" min={0} step={5} max={maxProductPrice} value={price.max} onChange={(e) => handleMaxPrice(+e.target.value)} onPointerUp={filterPrice} />
              </div>
              <div className="flex justify-between  px-2">
                <span>{maxProductPrice.toLocaleString("en-US", {})}</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="  py-2">
          <span>
            کمترین امتیاز: <span className="text-org font-bold">{params.minRating || 0}</span>
          </span>
          <div className="flex items-center justify-between gap-2 mt-2">
            <span>5</span>
            <input dir="ltr" className="range-input rating-range-input grow focus:border-0 focus:outline-0 " type="range" min={0} step={0.1} max={5} value={params.minRating || 0} onChange={(e) => setMinRating(Number(e.target.value))} />

            <span>0</span>
          </div>
        </div>
        <div className="  py-2">
          <span>
            کمترین تخفیف: <span className="text-org font-bold">{params.minDiscount || 0} %</span>
          </span>
          <div className="flex items-center justify-between gap-2 mt-2">
            <span>100</span>
            <input dir="ltr" className="range-input discount-range-input grow focus:border-0 focus:outline-0 " type="range" min={0} step={1} max={100} value={params.minDiscount || 0} onChange={(e) => setMinDiscount(Number(e.target.value))} />

            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
