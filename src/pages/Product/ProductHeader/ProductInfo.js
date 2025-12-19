import { Link } from "react-router-dom";
import AddToShoppingCartLargeBtn from "./../../../component/btns/AddToShoppingCartLargeBtn";
import { calcRealPrice, formatedPrice } from "../../../utils/funcs";

export default function ProductInfo({ data }) {
  return (
    <div className="">
      <h1 className="text-3xl text-center py-3 border-b border-light-gray text-dark">{data.title}</h1>
      <div className="md:grid grid-cols-2 gap-8 pt-6 text-gray text-sm">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-start gap-3">
            <span className="flex gap-1.5 fill-star">
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.30502 12C4.38752 11.6325 4.23752 11.1075 3.97502 10.845L2.15252 9.0225C1.58252 8.4525 1.35752 7.845 1.52252 7.32C1.69502 6.795 2.22752 6.435 3.02252 6.3L5.36252 5.91C5.70002 5.85 6.11252 5.55 6.27002 5.2425L7.56002 2.655C7.93502 1.9125 8.44502 1.5 9.00002 1.5C9.55502 1.5 10.065 1.9125 10.44 2.655L11.73 5.2425C11.8275 5.4375 12.03 5.625 12.2475 5.7525L4.17002 13.83C4.06502 13.935 3.88502 13.8375 3.91502 13.6875L4.30502 12Z"></path>
                <path d="M14.0251 10.845C13.7551 11.115 13.6051 11.6325 13.6951 12L14.2126 14.2575C14.4301 15.195 14.2951 15.9 13.8301 16.2375C13.6426 16.3725 13.4176 16.44 13.1551 16.44C12.7726 16.44 12.3226 16.2975 11.8276 16.005L9.6301 14.7C9.2851 14.4975 8.7151 14.4975 8.3701 14.7L6.1726 16.005C5.3401 16.4925 4.6276 16.575 4.1701 16.2375C3.9976 16.11 3.8701 15.9375 3.7876 15.7125L12.9076 6.5925C13.2526 6.2475 13.7401 6.09 14.2126 6.1725L14.9701 6.3C15.7651 6.435 16.2976 6.795 16.4701 7.32C16.6351 7.845 16.4101 8.4525 15.8401 9.0225L14.0251 10.845Z"></path>
              </svg>
            </span>
            <span className="text-dark text-base">{data.rating}</span>
          </div>
          <p>
            برند:
            <Link to={`/shop/brand=${data.brand}`} className="text-red px-2">
              {data.brand}
            </Link>
          </p>
          <p>
            دسته بندی:
            <Link to={`/shop/category=${data.category}`} className="text-red px-2">
              {data.category}
            </Link>
          </p>
          <p className="text-justify text-base">{data.description}</p>
          <div className="">
            <span className="text-dark">ویژگی های محصول</span>
            <div className="flex items-baseline gap-5 my-4">
              <ul className="flex flex-col gap-1.5">
                <li className="relative pr-4 before:absolute before:size-2.5 before:top-1/2 before:-translate-y-1/2 before:right-0 before:bg-linear-210 before:from-20% before:from-[#ff5200] to-red to-30%  before:rounded-full">وزن</li>
                <li className="relative pr-4 before:absolute before:size-2.5 before:top-1/2 before:-translate-y-1/2 before:right-0 before:bg-linear-210 before:from-20% before:from-[#ff5200] to-red to-30%  before:rounded-full">طول</li>
                <li className="relative pr-4 before:absolute before:size-2.5 before:top-1/2 before:-translate-y-1/2 before:right-0 before:bg-linear-210 before:from-20% before:from-[#ff5200] to-red to-30%  before:rounded-full">ارتفاع</li>
                <li className="relative pr-4 before:absolute before:size-2.5 before:top-1/2 before:-translate-y-1/2 before:right-0 before:bg-linear-210 before:from-20% before:from-[#ff5200] to-red to-30%  before:rounded-full">عمق</li>
              </ul>
              <ul className="flex flex-col gap-1.5">
                <li>{data.weight}</li>
                <li>{data.dimensions.width}</li>
                <li>{data.dimensions.height}</li>
                <li>{data.dimensions.depth}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 shadow-[0px_2px_15px_0px_#3e3e3e1a] rounded-2xl px-4 py-6 ">
          <div className="flex justify-between">
            <span>شناسه محصول:</span>
            <span className="text-dark">{data.sku}</span>
          </div>
          <div className="flex justify-between">
            <span>گارانتی:</span>
            <span className="text-dark">{data.warrantyInformation}</span>
          </div>

          <div className="text-end">
            <div class="mb-1.5">
              <span class="text-xs px-1 sm-shaddow gradient rounded text-white">%{data.discountPercentage}</span>
              <span class="text-gray/80 line-through text-sm mx-2">${calcRealPrice(data.price, data.discountPercentage)}</span>
            </div>
            <p class="text-xl md:text-2xl lg:text-3xl text-red font-bold mt-0.5">{formatedPrice(data.price)} $</p>
            <div className="border-t border-light-gray pt-3 ">
              <AddToShoppingCartLargeBtn product={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
