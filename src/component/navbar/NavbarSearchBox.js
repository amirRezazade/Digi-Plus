import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getLocal, setLocal } from "../../utils/funcs";

export default function NavbarSearchBox() {
  let [searchParam, setSearchParam] = useState("");
  let [showSearchOptions, setShowSearchOptions] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  let [response, setResponse] = useState([]);
  let searchInput = useRef(null);

  useEffect(() => {
    if (searchParam.length > 1) {
      setIsLoading(true);
      fetch(`https://dummyjson.com/products/search?q=${searchParam}`)
        .then((res) => res.json())
        .then((list) => {
          setResponse(list.products);
          setIsLoading(false);
        });
    } else setResponse(null);
  }, [searchParam]);

  useEffect(() => {
    const hiddenSearchOptions = function (e) {
      if (!e.target.closest(".search-box")) setShowSearchOptions(false);
      else {
        setShowSearchOptions(true);
        setTimeout(() => {
          searchInput.current?.focus();
        }, 400);
      }
    };
    window.addEventListener("click", hiddenSearchOptions);
    return () => window.removeEventListener("click", hiddenSearchOptions);
  }, []);

  function setParamToLocal() {
    let searchHistory = getLocal("recentSearchs") || [];
    let value = searchInput.current.value.trim();
    if (value) {
      let isInList = searchHistory.indexOf(value);
      if (isInList === -1) {
        searchHistory.push(value);
        setLocal("recentSearchs", searchHistory);
      }
    }
  }

  return (
    <div className={`search-box grow w-full rounded-2xl  order-3 lg:order-1 relative border transition-colors duration-300 ${showSearchOptions ? "border-transparent" : "border-light-gray"} `}>
      <div className="flex items-center gap-3 px-4 h-full py-3 ">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="fill-dark-gray ">
            <path d="M15.7531 14.7188L11.5656 10.5312C12.4719 9.42188 12.9719 8.025 12.9719 6.5C12.9719 2.90937 10.0616 0 6.47188 0C2.88219 0 0 2.91031 0 6.5C0 10.0897 2.91001 13 6.47188 13C7.99657 13 9.39532 12.4716 10.5031 11.5925L14.6906 15.78C14.8656 15.9281 15.0594 16 15.25 16C15.4406 16 15.6338 15.9268 15.7803 15.7803C16.0719 15.4875 16.0719 15.0125 15.7531 14.7188ZM1.50001 6.5C1.50001 3.74312 3.74313 1.5 6.50001 1.5C9.25688 1.5 11.5 3.74312 11.5 6.5C11.5 9.25688 9.25688 11.5 6.50001 11.5C3.74313 11.5 1.50001 9.25625 1.50001 6.5Z"></path>
          </svg>
        </span>
        <span className="text-dark-gray text-sm">جستجو محصول...</span>
      </div>
      <div className={`absolute w-full top-0 right-0 bg-white px-2 sm:px-4 border border-light-gray rounded-2xl z-50 opacity-0 invisible transition-[opacity_visibility] duration-300 ${showSearchOptions && "opacity-100 visible"}`}>
        <div className="flex items-center gap-3  h-full border-b border-org">
          <button onClick={setParamToLocal} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="fill-dark-gray ">
              <path d="M15.7531 14.7188L11.5656 10.5312C12.4719 9.42188 12.9719 8.025 12.9719 6.5C12.9719 2.90937 10.0616 0 6.47188 0C2.88219 0 0 2.91031 0 6.5C0 10.0897 2.91001 13 6.47188 13C7.99657 13 9.39532 12.4716 10.5031 11.5925L14.6906 15.78C14.8656 15.9281 15.0594 16 15.25 16C15.4406 16 15.6338 15.9268 15.7803 15.7803C16.0719 15.4875 16.0719 15.0125 15.7531 14.7188ZM1.50001 6.5C1.50001 3.74312 3.74313 1.5 6.50001 1.5C9.25688 1.5 11.5 3.74312 11.5 6.5C11.5 9.25688 9.25688 11.5 6.50001 11.5C3.74313 11.5 1.50001 9.25625 1.50001 6.5Z"></path>
            </svg>
          </button>
          <input autoFocus onKeyUp={(e) => e.key === "Enter" && setParamToLocal()} onInput={(e) => setSearchParam(e.target.value.trim())} ref={searchInput} className={`grow border-0 outline-0 py-3 text-org placeholder:text-dark-gray placeholder:text-sm `} type="text" placeholder="جستجو محصول..." />
        </div>

        {/* spinner */}
        {isLoading && (
          <div className="my-5  text-center">
            <div className="inline-block size-7 animate-spin rounded-full border-5 border-light-gray/40 border-t-red"></div>
          </div>
        )}
        {/* default content  */}
        {response == null && !isLoading && (
          <>
            {/* recent searchs  */}
            <div className="my-3 p-1 sm:p-3 border border-light-gray rounded-xl">
              <div className="relative title-style flex items-center gap-1.5 ps-3">
                <span className="fill-gray">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8.00016 15.1666C4.04683 15.1666 0.833496 11.9532 0.833496 7.99992C0.833496 4.04658 4.04683 0.833252 8.00016 0.833252C11.9535 0.833252 15.1668 4.04658 15.1668 7.99992C15.1668 11.9532 11.9535 15.1666 8.00016 15.1666ZM8.00016 1.83325C4.60016 1.83325 1.8335 4.59992 1.8335 7.99992C1.8335 11.3999 4.60016 14.1666 8.00016 14.1666C11.4002 14.1666 14.1668 11.3999 14.1668 7.99992C14.1668 4.59992 11.4002 1.83325 8.00016 1.83325Z"></path>
                    <path d="M10.4731 10.6199C10.3864 10.6199 10.2998 10.5999 10.2198 10.5466L8.1531 9.31326C7.63977 9.00659 7.25977 8.33326 7.25977 7.73993V5.00659C7.25977 4.73326 7.48643 4.50659 7.75977 4.50659C8.0331 4.50659 8.25977 4.73326 8.25977 5.00659V7.73993C8.25977 7.97993 8.45977 8.33326 8.66643 8.45326L10.7331 9.68659C10.9731 9.82659 11.0464 10.1333 10.9064 10.3733C10.8064 10.5333 10.6398 10.6199 10.4731 10.6199Z"></path>
                  </svg>
                </span>
                <h5 className=" text-dark text-sm">
                  جستجوهای <span className="text-red">اخیر</span>
                </h5>
              </div>
              <div className="flex items-center flex-wrap gap-2 text-gray text-sm mt-4">
                {getLocal("recentSearchs") &&
                  getLocal("recentSearchs")
                    .splice(0, 6)
                    .map((word) => (
                      <Link key={word} to={`/shop/q=${word}`} className="border border-light-gray fill-dark transition-colors duration-300 hover:border-org hover:text-org  rounded-full py-1 px-2 flex items-center gap-2">
                        <span>{word}</span>
                        <span className="bg-light-gray/70 rounded-full size-4 flex justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 16">
                            <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
                          </svg>
                        </span>
                      </Link>
                    ))}
              </div>
            </div>
            {/* popular searchs  */}
            <div className="my-3 p-3 border border-light-gray rounded-xl">
              <div className="relative title-style flex items-center gap-1.5 ps-3">
                <span className="fill-gray">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8.00016 14.4333C7.8535 14.4333 7.6335 14.42 7.42683 14.3467C4.88016 13.4733 0.833496 10.38 0.833496 5.79333C0.833496 3.46 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00667 8.00016 2.79333C8.78016 2.00667 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46 15.1668 5.79333C15.1668 6.6 15.0468 7.39332 14.8068 8.15332C14.7268 8.41332 14.4402 8.56665 14.1802 8.47998C13.9135 8.39998 13.7735 8.11335 13.8535 7.85335C14.0602 7.19335 14.1668 6.50001 14.1668 5.80001C14.1668 4.02001 12.7268 2.57332 10.9602 2.57332C9.94683 2.57332 9.00683 3.04665 8.40016 3.85999C8.21349 4.11332 7.78683 4.11332 7.60016 3.85999C6.98683 3.03999 6.05349 2.57332 5.04016 2.57332C3.27349 2.57332 1.8335 4.02001 1.8335 5.80001C1.8335 10.36 6.21349 12.8867 7.75349 13.4133C7.79349 13.4267 7.88683 13.4467 8.00016 13.4467C8.2735 13.4467 8.50016 13.6733 8.50016 13.9467C8.50016 14.22 8.2735 14.4333 8.00016 14.4333Z"></path>
                    <path d="M11.8267 14.5001C10.3734 14.5001 9.19336 13.3201 9.19336 11.8667C9.19336 10.4134 10.3734 9.2334 11.8267 9.2334C13.28 9.2334 14.46 10.4134 14.46 11.8667C14.46 13.3201 13.28 14.5001 11.8267 14.5001ZM11.8267 10.2334C10.9267 10.2334 10.1934 10.9667 10.1934 11.8667C10.1934 12.7667 10.9267 13.5001 11.8267 13.5001C12.7267 13.5001 13.46 12.7667 13.46 11.8667C13.46 10.9667 12.7267 10.2334 11.8267 10.2334Z"></path>
                    <path d="M14.3598 14.9001C14.2332 14.9001 14.1065 14.8534 14.0065 14.7534L13.3398 14.0868C13.1465 13.8934 13.1465 13.5734 13.3398 13.3801C13.5332 13.1868 13.8532 13.1868 14.0465 13.3801L14.7132 14.0468C14.9065 14.2401 14.9065 14.5601 14.7132 14.7534C14.6132 14.8468 14.4865 14.9001 14.3598 14.9001Z"></path>
                  </svg>
                </span>
                <h5 className=" text-dark text-sm">
                  جستجوهای <span className="text-red">پرطرفدار</span>
                </h5>
              </div>
              <div className="flex items-center flex-wrap gap-2 text-gray text-sm mt-4">
                <Link to={"/shop/q=laptop"} className="border border-light-gray fill-dark transition-colors duration-300 hover:border-org hover:text-org  rounded-full py-1 px-2 flex items-center gap-2">
                  <span>laptop</span>
                  <span className="bg-light-gray/70 rounded-full size-4 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 16">
                      <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
                    </svg>
                  </span>
                </Link>
                <Link to={"/shop/q=watch"} className="border border-light-gray fill-dark transition-colors duration-300 hover:border-org hover:text-org  rounded-full py-1 px-2 flex items-center gap-2">
                  <span>watch</span>
                  <span className="bg-light-gray/70 rounded-full size-4 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 16">
                      <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
                    </svg>
                  </span>
                </Link>
                <Link to={"/shop/q=phone"} className="border border-light-gray fill-dark transition-colors duration-300 hover:border-org hover:text-org  rounded-full py-1 px-2 flex items-center gap-2">
                  <span>phone</span>
                  <span className="bg-light-gray/70 rounded-full size-4 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 16">
                      <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </>
        )}
        {/* search results  */}
        {response && !isLoading && (
          <div className="my-3 sm:my-5 p-1.5 sm:p-3 border border-light-gray rounded-xl">
            <div className=" flex items-center justify-between gap-1.5 px-1.5 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="fill-gray">
                  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.18 7.50004H10.4867C9.14667 7.50004 8.5 6.90671 8.5 5.68004V2.65337C8.5 1.42671 9.15333 0.833374 10.4867 0.833374H13.18C14.52 0.833374 15.1667 1.42671 15.1667 2.65337V5.67337C15.1667 6.90671 14.5133 7.50004 13.18 7.50004ZM10.4867 1.83337C9.59333 1.83337 9.5 2.08671 9.5 2.65337V5.67337C9.5 6.24671 9.59333 6.49337 10.4867 6.49337H13.18C14.0733 6.49337 14.1667 6.24004 14.1667 5.67337V2.65337C14.1667 2.08004 14.0733 1.83337 13.18 1.83337H10.4867Z"></path>
                    <path d="M13.18 15.1667H10.4867C9.14667 15.1667 8.5 14.5133 8.5 13.18V10.4867C8.5 9.14667 9.15333 8.5 10.4867 8.5H13.18C14.52 8.5 15.1667 9.15333 15.1667 10.4867V13.18C15.1667 14.5133 14.5133 15.1667 13.18 15.1667ZM10.4867 9.5C9.7 9.5 9.5 9.7 9.5 10.4867V13.18C9.5 13.9667 9.7 14.1667 10.4867 14.1667H13.18C13.9667 14.1667 14.1667 13.9667 14.1667 13.18V10.4867C14.1667 9.7 13.9667 9.5 13.18 9.5H10.4867Z"></path>
                    <path d="M5.5135 7.50004H2.82016C1.48016 7.50004 0.833496 6.90671 0.833496 5.68004V2.65337C0.833496 1.42671 1.48683 0.833374 2.82016 0.833374H5.5135C6.8535 0.833374 7.50016 1.42671 7.50016 2.65337V5.67337C7.50016 6.90671 6.84683 7.50004 5.5135 7.50004ZM2.82016 1.83337C1.92683 1.83337 1.8335 2.08671 1.8335 2.65337V5.67337C1.8335 6.24671 1.92683 6.49337 2.82016 6.49337H5.5135C6.40683 6.49337 6.50016 6.24004 6.50016 5.67337V2.65337C6.50016 2.08004 6.40683 1.83337 5.5135 1.83337H2.82016Z"></path>
                    <path d="M5.5135 15.1667H2.82016C1.48016 15.1667 0.833496 14.5133 0.833496 13.18V10.4867C0.833496 9.14667 1.48683 8.5 2.82016 8.5H5.5135C6.8535 8.5 7.50016 9.15333 7.50016 10.4867V13.18C7.50016 14.5133 6.84683 15.1667 5.5135 15.1667ZM2.82016 9.5C2.0335 9.5 1.8335 9.7 1.8335 10.4867V13.18C1.8335 13.9667 2.0335 14.1667 2.82016 14.1667H5.5135C6.30016 14.1667 6.50016 13.9667 6.50016 13.18V10.4867C6.50016 9.7 6.30016 9.5 5.5135 9.5H2.82016Z"></path>
                  </svg>
                </span>
                <h5 className=" text-gray text-sm">
                  جستجوهای مرتبط با <span className="text-red "> {searchParam} </span>
                </h5>
              </div>
              <Link to={`/shop/q=${searchParam}`}>
                <div className="bg-light-gray/70 rounded-full  px-1.5 py-1 flex justify-center items-center gap-1 text-gray hover:fill-org hover:text-org">
                  <span className="text-xs "> {response.length}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 16">
                    <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-4 text-gray text-sm mt-4">
              {response.length ? (
                [...response].splice(0, 6).map((product) => (
                  <div key={product.id}>
                    <Link to={`/product/id=${product.id}`} className="inline-flex items-start gap-2 fill-gray hover:text-org hover:underline hover:fill-org  px-2 ">
                      <span className=" ">
                        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.6097 5.20743C21.0475 5.54416 21.1294 6.17201 20.7926 6.60976L10.7926 19.6098C10.6172 19.8378 10.352 19.9793 10.0648 19.9979C9.77765 20.0166 9.49637 19.9106 9.29289 19.7072L4.29289 14.7072C3.90237 14.3166 3.90237 13.6835 4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L9.90178 17.4876L19.2074 5.39034C19.5441 4.95258 20.172 4.87069 20.6097 5.20743Z"></path>
                          </g>
                        </svg>
                      </span>
                      <span>{product.title}</span>
                    </Link>
                    <p className="ps-8">
                      در دسته بندی: <span className="text-red">{product.category}</span>
                    </p>
                  </div>
                ))
              ) : (
                <span className="px-8">محصولی پیدا نشد!</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
