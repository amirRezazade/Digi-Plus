import { useEffect, useState } from "react";
import "./AddToFavoritesBtn.css";
import { getLocal, setLocal } from "../../utils/funcs";
export default function AddToFavoritesBtn({ id }) {
  let [inFavorite, setInFavorite] = useState(false);
  let [reRender, setReRender] = useState(false);
  useEffect(() => {
    function localChanged() {
      setReRender((prev) => !prev);
    }
    window.addEventListener("local-changed", localChanged);
    return () => window.removeEventListener("local-changed", localChanged);
  }, []);
  useEffect(() => {
    let favorites = getLocal("favorites") || [];
    let isInFavorites = favorites.findIndex((item) => item == id);
    if (isInFavorites > -1) setInFavorite(true);
    else setInFavorite(false);
  }, [inFavorite, reRender]);

  function addToFavorite(id) {
    let favoriteList = getLocal("favorites") || [];
    let isInTheList = favoriteList.findIndex((item) => item == id);
    if (isInTheList === -1) {
      favoriteList.push(id);
      setInFavorite(true);
    } else {
      favoriteList.splice(isInTheList, 1);
      setInFavorite(false);
    }
    setLocal("favorites", favoriteList);
  }

  return (
    <span className=" relative group/item">
      <button onClick={() => addToFavorite(id)} className={`p-1 cursor-pointer stroke-dark hover:stroke-red ${inFavorite ? "fill-red stroke-red" : ""}`}>
        <span className={`ui-like ${inFavorite && "add"} `}>
          <div className="like">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
              <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
              </g>
            </svg>
          </div>
        </span>
      </button>
      <span className="opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible group-hover/item:left-[160%] transition-[opacity_visibility] duration-400 absolute top-1/2 -translate-y-1/2 left-[140%] bg-red text-white text-[10px] rounded px-1.5 py-0.5 text-nowrap before:absolute before:size-1.5 before:bg-red before:top-1/2 before:-translate-1/2 before:rotate-45  before:left-0 ">{inFavorite ? "حذف از" : "افزودن به"} علاقه مندی ها</span>
    </span>
  );
}
