import { useState } from "react";

export default function Filter({ product }) {
  const topBrands = ["Apple", "Samsung", "Nike", "Gucci", "Chanel", "Dior", "Prada", "Rolex", "Dell", "Asus"];

  let [open, setOpen] = useState(null);

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
      </div>

      <div className="flex flex-col gap-3 py-5">
        <div className={`${open == "brand" ? "max-h-100" : "max-h-12.5 "} transition-[max-height] duration-500 overflow-hidden `}>
          <div onClick={() => setOpen((prev) => (prev == "brand" ? null : "brand"))} className={`flex items-center justify-between gap-3 p-2 rounded-full border border-light-gray ${open == "brand" ? "gradient border-transparent text-white fill-org" : "fill-white"}`}>
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
          <div className={` p-3 border border-light-gray rounded-2xl my-2 transition-all duration-300`}>
            <span className="py-2 block">برند ها</span>
            <div className="max-h-73 py-3  pl-2 overflow-auto">
              {topBrands.map((b) => (
                <div key={b} className="py-1">
                  <label className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-full border border-light-gray has-checked:bg-yel has-checked:border-org/50 has-checked:text-org hover:border-org/50 hover:text-org transition-colors duration-300 " htmlFor={b}>
                    <input className="peer" type="checkbox" id={b} hidden />
                    <span className="size-6 border border-light-gray rounded-2xl bg-white peer-checked:bg-org peer-checked:border-org bg-no-repeat bg-center peer-checked:bg-[url(https://digiplus.aet-web.ir/wp-content/themes/Digiplus/assets/img/dpshoptick.svg)] transition-colors duration-300"></span>
                    {b}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${open == "category" ? "max-h-60" : "max-h-12.5 "} transition-[max-height] duration-500 overflow-hidden`}>
          <div onClick={() => setOpen((prev) => (prev == "category" ? null : "category"))} className="flex items-center justify-between gap-3 p-2 rounded-full border border-light-gray ">
            <span className="gradient size-8 flex justify-center items-center rounded-full stroke-white fill-white">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path opacity="0.34" d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path opacity="0.34" d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
            </span>
            <span className="me-auto">دسته بندی ها</span>
            <span className="fill-red -rotate-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
                <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
              </svg>
            </span>
          </div>
          <div className={` p-3 border border-light-gray rounded-2xl my-2 transition-all duration-300`}>
            <span>برند ها</span>
            <div className="py-1">
              <label className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-full border border-light-gray has-checked:bg-yel has-checked:border-org/50 has-checked:text-org hover:border-org/50 hover:text-org transition-colors duration-300 " htmlFor="brand">
                <input className="peer" type="checkbox" id="brand" hidden />
                <span className="size-6 border border-light-gray rounded-2xl bg-white peer-checked:bg-org peer-checked:border-org bg-no-repeat bg-center peer-checked:bg-[url(https://digiplus.aet-web.ir/wp-content/themes/Digiplus/assets/img/dpshoptick.svg)] transition-colors duration-300"></span>
                sd
              </label>
            </div>
            <div className="py-1">
              <label className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-full border border-light-gray has-checked:bg-yel has-checked:border-org/50 has-checked:text-org hover:border-org/50 hover:text-org transition-colors duration-300 " htmlFor="brand">
                <input className="peer" type="checkbox" id="brand" hidden />
                <span className="size-6 border border-light-gray rounded-2xl bg-white peer-checked:bg-org peer-checked:border-org bg-no-repeat bg-center peer-checked:bg-[url(https://digiplus.aet-web.ir/wp-content/themes/Digiplus/assets/img/dpshoptick.svg)] transition-colors duration-300"></span>
                sd
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
