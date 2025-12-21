import { useState } from "react";

export default function CopyLinkBtn() {
  let [isCopy, setIscopy] = useState(false);
  function copyLink() {
    let url = window.location.href;
    navigator.clipboard.writeText(url);
    setIscopy(true);
    setTimeout(() => {
      setIscopy(false);
    }, 3000);
  }

  return (
    <span className=" relative group/item">
      <button onClick={copyLink} className={`p-1 cursor-pointer stroke-gray hover:stroke-red `}>
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="1.5" strokeLinecap="round"></path>
            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="1.5" strokeLinecap="round"></path>
          </g>
        </svg>
      </button>
      <span className={`${!isCopy && "opacity-0 invisible"} group-hover/item:opacity-100 group-hover/item:visible group-hover/item:left-[160%] transition-[opacity_visibility] duration-400 absolute top-1/2 -translate-y-1/2 left-[140%] bg-red text-white text-[10px] rounded px-1.5 py-0.5 text-nowrap before:absolute before:size-1.5 before:bg-red before:top-1/2 before:-translate-1/2 before:rotate-45  before:left-0`}>{isCopy ? "لینک کپی شد" : "کپی کردن لینک"}</span>
    </span>
  );
}
