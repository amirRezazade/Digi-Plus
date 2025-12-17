import { useEffect, useRef, useState } from "react";
import EmojiSlider from "./EmojiSlider";

export default function SupportCat() {
  let [openChat, setOpenChat] = useState(true);
  let [showEmoji, setShowEmoji] = useState(false);
  let [message, setMessage] = useState("");
  let inputRef = useRef(null);

  useEffect(() => {
    const closeChat = function (e) {
      if (!e.target.closest(".support-chat")) setOpenChat(false);
    };
    window.addEventListener("mousedown", closeChat);

    return () => window.removeEventListener("mousedown", closeChat);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      // inputRef.current.focus();
      inputRef.current.selectionStart = 0;
    }, 0);
  }, [message]);

  function sendMessage() {
    console.log(message);
  }

  return (
    <div className={`support-chat fixed bottom-3 right-3 sm:bottom-8 sm:right-8 text-sm z-1 flex flex-col items-start gap-1.5  transition-all duration-400 overflow-hidden  ${openChat ? " w-75 h-118 md:w-78 md:h-110" : "size-13 gap-0!"}`}>
      <div className={`flex flex-col justify-between bg-white shadow-[-2px_-1px_8px_0px_#6666665c] rounded-2xl  overflow-hidden w-70 md:w-78 grow transition-all duration-500  ${openChat ? "" : "size-0! opacity-0 overflow-hidden  "}`}>
        <div className="flex items-center justify-end gap-3 p-2 gradient">
          <div className=" flex items-center gap-2">
            <span className="text-white">ادمین شماره 4</span>
            <span>
              <svg fill="white" height="33" width="33" version="1.1" id="Icons" viewBox="0 0 32 32">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16,2C9.4,2,4,7.4,4,14v3c0,2.8,2.2,5,5,5c0.6,0,1-0.4,1-1v-8c0-0.6-0.4-1-1-1c-1.1,0-2.1,0.4-2.9,1c0.5-5,4.8-9,9.9-9 s9.4,3.9,9.9,9c-0.8-0.6-1.8-1-2.9-1c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1c0.6,0,1.3-0.1,1.8-0.4c-1.1,2-2.8,3.6-4.9,4.5 c-0.2-1.2-1.2-2.2-2.5-2.2c-1.3,0-2.4,1.1-2.4,2.4c0,0.7,0.3,1.4,0.9,1.9c0.5,0.4,1,0.6,1.6,0.6c0.1,0,0.3,0,0.4,0 C23.6,28,28,22.9,28,17v-3C28,7.4,22.6,2,16,2z"></path>
                </g>
              </svg>
            </span>
          </div>
          <button onClick={() => setOpenChat(false)} className="cursor-pointer fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
              <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
            </svg>
          </button>
        </div>
        <div className="grow bg-gray " style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MWnkOj6oFBXng-1jACMdp6O5t07VlJHqTZB6DmF-cA&s")' }}></div>

        <div className="flex items-center gap-1 relative px-2 py-1">
          <button onClick={sendMessage} className="size-10 p-0.5 gradient rounded-full">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </button>
          <div className="grow">
            <input ref={inputRef} value={message} onChange={(e) => setMessage(e.target.value)} className="border-0 outline-0 w-full rounded-2xl px-3 py-2 bg-light-gray/40 text-dark " type="text" placeholder="پیام خود را وارد کنید" />
          </div>
          <div className=" flex items-center gap-1">
            {/* add photo  */}
            <div>
              <label htmlFor="file-input" className="cursor-pointer stroke-gray">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" stroke-width="2"></path> <path d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022" stroke-width="2" stroke-linecap="round"></path> <path d="M21 13.6702C18.9068 12.0667 17.4778 12.2919 15.198 14.3459" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z" stroke-width="2"></path>
                  </g>
                </svg>
              </label>
              <input type="file" id="file-input" accept=".png,.jpg,.webp,.jpeg,.jfif,.pjpeg,.pjp" hidden />
            </div>
            {/* show emojies  */}
            <button onClick={() => setShowEmoji(!showEmoji)} className={`cursor-pointer ${showEmoji ? "fill-red" : "fill-dark"}`}>
              <svg width="22" height="22" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M324.8 440c34.4 0 62.4-28 62.4-62.4s-28-62.4-62.4-62.4-62.4 28-62.4 62.4 28 62.4 62.4 62.4z m374.4 0c34.4 0 62.4-28 62.4-62.4s-28-62.4-62.4-62.4-62.4 28-62.4 62.4 28 62.4 62.4 62.4zM340 709.6C384 744 440.8 764.8 512 764.8s128-20.8 172-55.2c26.4-21.6 42.4-42.4 50.4-58.4 6.4-12 0.8-27.2-11.2-33.6s-27.2-0.8-33.6 11.2c-0.8 1.6-3.2 6.4-8 12-7.2 10.4-17.6 20-28.8 29.6-34.4 28-80.8 44.8-140.8 44.8s-105.6-16.8-140.8-44.8c-12-9.6-21.6-20-28.8-29.6-4-5.6-7.2-9.6-8-12-6.4-12-20.8-17.6-33.6-11.2s-17.6 20.8-11.2 33.6c8 16 24 36.8 50.4 58.4z"
                    fill=""
                  ></path>
                  <path d="M512 1010.4c-276.8 0-502.4-225.6-502.4-502.4S235.2 5.6 512 5.6s502.4 225.6 502.4 502.4-225.6 502.4-502.4 502.4zM512 53.6C261.6 53.6 57.6 257.6 57.6 508s204 454.4 454.4 454.4 454.4-204 454.4-454.4S762.4 53.6 512 53.6z" fill=""></path>
                </g>
              </svg>
            </button>
          </div>
          <div className={`absolute bottom-1/1 left-0 w-full text-xl bg-white select-none  transition-[translate_opacity] duration-300 ${!showEmoji && "-translate-x-1/1 opacity-0 "}`}>
            <EmojiSlider input={inputRef.current} text={message} onEmoji={(newText) => setMessage(newText)} />
          </div>
        </div>
      </div>

      {/* open close btn  */}
      <button onClick={() => setOpenChat(!openChat)} className={`shrink-0 cursor-pointer size-13 flex justify-center items-center gradient rounded-full  transition-all duration-500 `}>
        <span>
          {openChat ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 16 24" fill="none">
              <path
                d="M15.605 17.5781C16.0734 18.0173 16.0734 18.7298 15.605 19.1691C15.1365 19.6083 14.3765 19.6082 13.908 19.1691L7.99999 13.5891L2.04999 19.1672C1.58154 19.6064 0.821487 19.6064 0.352987 19.1672C-0.115512 18.728 -0.115462 18.0155 0.352987 17.5762L6.30499 12L0.351337 6.37968C-0.117112 5.94051 -0.117112 5.22797 0.351337 4.78875C0.819788 4.34953 1.57984 4.34958 2.04834 4.78875L7.99999 10.4109L13.95 4.83281C14.4184 4.39364 15.1785 4.39364 15.647 4.83281C16.1155 5.27198 16.1154 5.98453 15.647 6.42375L9.69499 12L15.605 17.5781Z"
                fill="#fff"
              ></path>
            </svg>
          ) : (
            <svg fill="white" height="33" width="33" version="1.1" id="Icons" viewBox="0 0 32 32">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M16,2C9.4,2,4,7.4,4,14v3c0,2.8,2.2,5,5,5c0.6,0,1-0.4,1-1v-8c0-0.6-0.4-1-1-1c-1.1,0-2.1,0.4-2.9,1c0.5-5,4.8-9,9.9-9 s9.4,3.9,9.9,9c-0.8-0.6-1.8-1-2.9-1c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1c0.6,0,1.3-0.1,1.8-0.4c-1.1,2-2.8,3.6-4.9,4.5 c-0.2-1.2-1.2-2.2-2.5-2.2c-1.3,0-2.4,1.1-2.4,2.4c0,0.7,0.3,1.4,0.9,1.9c0.5,0.4,1,0.6,1.6,0.6c0.1,0,0.3,0,0.4,0 C23.6,28,28,22.9,28,17v-3C28,7.4,22.6,2,16,2z"></path>
              </g>
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
