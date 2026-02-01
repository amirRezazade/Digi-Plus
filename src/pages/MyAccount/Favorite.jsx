import { useEffect, useState } from "react";
import { getLocal } from "../../utils/funcs";
import ProductCart from "../../component/carts/ProductCart";
import { Link } from "react-router-dom";
export default function Favorite() {
  let [products, setProducts] = useState(null);

  useEffect(() => {
    let productsId = getLocal("favorites");
    if (productsId) {
      Promise.all(productsId.map((id) => fetch(`https://dummyjson.com/products/${id}`).then((r) => r.json())))
        .then((data) => setProducts(data))
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <>
      <h3 className="relative px-3 title-style text-dark text-base xs:text-lg md:text-xl!">
        علاقه مندی های<span className="text-red"> من</span>
      </h3>
      <div className="p-3 border border-light-gray/70 rounded-xl my-5">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-1">
            <span className="fill-red">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12.0199 20.53C9.68987 20.53 7.35987 20.16 5.14987 19.42C4.30987 19.13 3.66987 18.54 3.38987 17.77C3.09987 17 3.19987 16.15 3.65987 15.39L4.80987 13.48C5.04987 13.08 5.26987 12.28 5.26987 11.81V8.92004C5.26987 5.20004 8.29987 2.17004 12.0199 2.17004C15.7399 2.17004 18.7699 5.20004 18.7699 8.92004V11.81C18.7699 12.27 18.9899 13.08 19.2299 13.49L20.3699 15.39C20.7999 16.11 20.8799 16.98 20.5899 17.77C20.2999 18.56 19.6699 19.16 18.8799 19.42C16.6799 20.16 14.3499 20.53 12.0199 20.53ZM12.0199 3.67004C9.12987 3.67004 6.76987 6.02004 6.76987 8.92004V11.81C6.76987 12.54 6.46987 13.62 6.09987 14.25L4.94987 16.16C4.72987 16.53 4.66987 16.92 4.79987 17.25C4.91987 17.59 5.21987 17.85 5.62987 17.99C9.80987 19.39 14.2399 19.39 18.4199 17.99C18.7799 17.87 19.0599 17.6 19.1899 17.24C19.3199 16.88 19.2899 16.49 19.0899 16.16L17.9399 14.25C17.5599 13.6 17.2699 12.53 17.2699 11.8V8.92004C17.2699 6.02004 14.9199 3.67004 12.0199 3.67004Z"></path>
                <path d="M13.8806 3.94005C13.8106 3.94005 13.7406 3.93005 13.6706 3.91005C13.3806 3.83005 13.1006 3.77005 12.8306 3.73005C11.9806 3.62005 11.1606 3.68005 10.3906 3.91005C10.1106 4.00005 9.8106 3.91005 9.6206 3.70005C9.4306 3.49005 9.3706 3.19005 9.4806 2.92005C9.8906 1.87005 10.8906 1.18005 12.0306 1.18005C13.1706 1.18005 14.1706 1.86005 14.5806 2.92005C14.6806 3.19005 14.6306 3.49005 14.4406 3.70005C14.2906 3.86005 14.0806 3.94005 13.8806 3.94005Z"></path>
                <path d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z"></path>
              </svg>
            </span>
            <span className="text-base text-dark">اطلاع رسانی</span>
          </div>
          <div>
            <input type="checkbox" id="sms" className="peer" hidden />
            <label className="inline-block w-9 h-4.5 bg-light-gray peer-checked:bg-org rounded-full relative before:absolute before:size-3.5 before:bg-white before:rounded-full before:top-1/2 before:right-1/2 before:-translate-y-1/2 peer-checked:before:translate-x-1/1 before:transition-transform before:duration-300" htmlFor="sms"></label>
          </div>
        </div>
        <p className="text-gray py-3">درصورت تخفیف یا رو به اتمام بودن موجودی کالاهای مورد علاقه شما</p>
      </div>
      <div className="p-3 border border-light-gray/40 rounded-xl my-3">
        <h3 className="relative  pt-3 pb-4 px-3 title-style text-dark text-base xs:text-lg md:text-xl">
          محصولات مورد علاقه <span className="text-red"> من</span>
        </h3>
        {products?.length ? (
          <div className="grid grid-cols-1  sm:grid-cols-2! md:grid-cols-3! lg:grid-cols-2! xl:grid-cols-3! 2xl:grid-cols-4! gap-5 py-4">
            {products.map((p) => (
              <ProductCart key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4 ">
            <div className="flex flex-col items-center justify-center gap-5 py-15">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="91" height="106" viewBox="0 0 91 106" fill="none">
                  <path d="M3.46449 104.43C3.00926 104.43 2.56704 104.235 2.26789 103.884C1.96874 103.546 1.82566 103.077 1.87769 102.635L12.0879 21.9552C12.1919 21.1618 12.8683 20.5635 13.6747 20.5635H77.342C78.1484 20.5635 78.8247 21.1618 78.9288 21.9552L89.1389 102.635C89.191 103.09 89.0609 103.546 88.7487 103.884C88.4496 104.222 88.0074 104.43 87.5521 104.43H3.46449Z" fill="#FCEBE6"></path>
                  <path d="M77.3334 22.1469L87.5436 102.827H3.4559L13.6661 22.1469H77.3334ZM77.3334 18.9473H13.6661C12.0533 18.9473 10.7006 20.1439 10.5055 21.7307L0.295306 102.411C0.178246 103.321 0.464387 104.232 1.06269 104.921C1.674 105.61 2.54544 106 3.4559 106H87.5436C88.454 106 89.3255 105.61 89.9368 104.921C90.5481 104.232 90.8213 103.321 90.7042 102.411L80.494 21.7307C80.2859 20.1439 78.9332 18.9473 77.3334 18.9473Z" fill="#DC2F02"></path>
                  <path d="M77.3345 22.1543H53.7145L60.7381 77.5494H6.65664L3.45703 102.834H87.5447L77.3345 22.1543Z" fill="#F5C1B4"></path>
                  <path d="M77.3345 22.1543H63.6125L71.8457 87.1353H5.43404L3.45703 102.834H87.5447L77.3345 22.1543Z" fill="#EE9781"></path>
                  <path d="M18.2019 25.6357L13.5195 66.2294" stroke="white" strokeWidth="2.4529" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M36.9528 27.5399C36.9528 28.5934 36.0944 29.4519 35.0409 29.4519C33.9873 29.4519 33.1289 28.5934 33.1289 27.5399C33.1289 26.4864 33.9873 25.6279 35.0409 25.6279C36.0944 25.6279 36.9528 26.4864 36.9528 27.5399Z" fill="#DC2F02"></path>
                  <path d="M57.9099 27.5399C57.9099 28.5934 57.0514 29.4519 55.9979 29.4519C54.9444 29.4519 54.0859 28.5934 54.0859 27.5399C54.0859 26.4864 54.9444 25.6279 55.9979 25.6279C57.0514 25.6279 57.9099 26.4864 57.9099 27.5399Z" fill="#DC2F02"></path>
                  <path d="M55.9875 27.5427V16.6432C55.9875 10.8682 51.3051 6.17285 45.5172 6.17285C39.7292 6.17285 35.0469 10.8552 35.0469 16.6432V27.5427" stroke="#DC2F02" strokeWidth="2.4529" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M55.9875 23.3568V12.4703C55.9875 6.68238 51.3051 2 45.5172 2C39.7292 2 35.0469 6.68238 35.0469 12.4703V23.3568" stroke="#DC2F02" strokeWidth="2.4529" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M45.2708 75.3337C52.6346 75.3337 58.6042 69.3641 58.6042 62.0003C58.6042 54.6365 52.6346 48.667 45.2708 48.667C37.907 48.667 31.9375 54.6365 31.9375 62.0003C31.9375 69.3641 37.907 75.3337 45.2708 75.3337Z" fill="#EA8267"></path>
                  <path d="M45.7103 68.6666C45.4703 68.7466 45.057 68.7466 44.817 68.6666C42.737 67.9599 38.0703 64.9866 38.0703 59.9466C38.0703 57.7199 39.857 55.9199 42.0703 55.9199C43.377 55.9199 44.537 56.5466 45.2703 57.5332C45.9903 56.5599 47.1636 55.9199 48.4703 55.9199C50.6836 55.9199 52.4703 57.7199 52.4703 59.9466C52.4703 64.9866 47.8036 67.9599 45.7103 68.6666Z" fill="white"></path>
                </svg>
              </span>
              <h4 className="text-dark text-lg xs:text-xl text-center">هیچ محصولی به لیست دلخواه شما اضافه نشده است.</h4>
              <Link to={"/shop"} className="py-2.5 px-8 gradient text-white rounded-lg">
                نمایش محصولات
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
