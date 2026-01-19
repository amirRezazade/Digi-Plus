import { useEffect, useState } from "react";
import { getLocal } from "../../utils/funcs";
import ProductCart from "../../component/carts/ProductCart";
export default function Favorite() {
  let [products, setProducts] = useState(null);

  useEffect(() => {
    let productsId = getLocal("favorites");
    if (productsId) {
      Promise.all(productsId.map((id) => fetch(`https://dummyjson.com/products/${id}`).then((r) => r.json()))).then((data) => setProducts(data).catch((error) => console.log(error)));
    }
  }, []);

  return (
    <>
      <h3 className="relative px-3 title-style text-dark text-base xs:text-lg md:text-xl!">
        علاقه مندی های<span className="text-red"> من</span>
      </h3>
      <div className="p-3 border border-light-gray/40 rounded-xl my-3">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <span className="fill-org">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path d="M19.77 13.75H15.73C13.72 13.75 12.75 12.82 12.75 10.9V4.1C12.75 2.18 13.73 1.25 15.73 1.25H19.77C21.78 1.25 22.75 2.18 22.75 4.1V10.9C22.75 12.82 21.77 13.75 19.77 13.75ZM15.73 2.75C14.46 2.75 14.25 3.09 14.25 4.1V10.9C14.25 11.91 14.46 12.25 15.73 12.25H19.77C21.04 12.25 21.25 11.91 21.25 10.9V4.1C21.25 3.09 21.04 2.75 19.77 2.75H15.73Z"></path>
                <path d="M19.77 22.75H15.73C13.72 22.75 12.75 21.82 12.75 19.9V18.1C12.75 16.18 13.73 15.25 15.73 15.25H19.77C21.78 15.25 22.75 16.18 22.75 18.1V19.9C22.75 21.82 21.77 22.75 19.77 22.75ZM15.73 16.75C14.46 16.75 14.25 17.09 14.25 18.1V19.9C14.25 20.91 14.46 21.25 15.73 21.25H19.77C21.04 21.25 21.25 20.91 21.25 19.9V18.1C21.25 17.09 21.04 16.75 19.77 16.75H15.73Z"></path>
                <path d="M8.27 22.75H4.23C2.22 22.75 1.25 21.82 1.25 19.9V13.1C1.25 11.18 2.23 10.25 4.23 10.25H8.27C10.28 10.25 11.25 11.18 11.25 13.1V19.9C11.25 21.82 10.27 22.75 8.27 22.75ZM4.23 11.75C2.96 11.75 2.75 12.09 2.75 13.1V19.9C2.75 20.91 2.96 21.25 4.23 21.25H8.27C9.54 21.25 9.75 20.91 9.75 19.9V13.1C9.75 12.09 9.54 11.75 8.27 11.75H4.23Z"></path>
                <path d="M8.27 8.75H4.23C2.22 8.75 1.25 7.82 1.25 5.9V4.1C1.25 2.18 2.23 1.25 4.23 1.25H8.27C10.28 1.25 11.25 2.18 11.25 4.1V5.9C11.25 7.82 10.27 8.75 8.27 8.75ZM4.23 2.75C2.96 2.75 2.75 3.09 2.75 4.1V5.9C2.75 6.91 2.96 7.25 4.23 7.25H8.27C9.54 7.25 9.75 6.91 9.75 5.9V4.1C9.75 3.09 9.54 2.75 8.27 2.75H4.23Z"></path>
              </svg>
            </span>
            <span className="text-base text-dark">اطلاع رسانی</span>
          </div>
          <div>
            <input type="radio" id="sms" className=" peer" />
            <label htmlFor="sms"></label>
          </div>
        </div>
        <p className="text-gray py-3">درصورت تخفیف یا رو به اتمام بودن موجودی کالاهای مورد علاقه شما</p>
      </div>
      <div className="p-3 border border-light-gray/40 rounded-xl my-3">
        <h3 className="relative px-3 title-style text-dark text-base xs:text-lg md:text-xl!">
          محصولات مورد علاقه <span className="text-red"> من</span>
        </h3>
        {products && (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2">
            {products.map((p) => (
              <ProductCart key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
