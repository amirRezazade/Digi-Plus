import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ChatBottom({ message, onMessage, sendMessage, sendImg }) {
  const commonEmojis = [
    "😀", // خوشحال
    "😄",
    "😊",
    "😉",
    "😍",

    "👍", // تأیید
    "👌",
    "🙏",

    "❤️", // علاقه
    "🔥",

    "😅", // واکنش‌ها
    "😂",
    "😭",
    "😐",

    "🤔", // فکر کردن
    "😎",

    "🚀", // پیشرفت
    "✨",

    "📦", // فروشگاهی
    "🛒",
    "🎁",

    "📞", // پشتیبانی
    "💬",
    "⚡",
  ];
  let [showEmoji, setShowEmoji] = useState(false);
  let inputRef = useRef(null);

  function addEmoji(emoji) {
    let start = inputRef.current.selectionStart;
    let end = inputRef.current.selectionEnd;
    let beforeText = inputRef.current.value.slice(0, start);
    let afterText = inputRef.current.value.slice(end, inputRef.current.value.length);
    onMessage(beforeText + emoji + afterText);

    requestAnimationFrame(() => {
      inputRef.current.focus();
      const cursorPos = start + emoji.length;
      inputRef.current.setSelectionRange(cursorPos, cursorPos);
    });
  }
  function send() {
    sendMessage();
    inputRef.current?.focus();
  }

  return (
    <div className="flex items-center gap-1 relative px-2 py-2">
      <button onClick={send} className="size-10 p-0.5 gradient rounded-full  focus:outline-0">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z"
              fill="white"
            ></path>
          </g>
        </svg>
      </button>
      <div className="grow">
        <input dir="rtl" ref={inputRef} value={message} onChange={(e) => onMessage(e.target.value)} onKeyUp={(e) => (e.key === "Enter" ? sendMessage() : "")} className="border-0 outline-0 w-full rounded-2xl p-3 bg-light-gray/40 text-dark " type="text" placeholder="پیام خود را وارد کنید" />
      </div>
      <div className=" flex items-center gap-1.5 md:gap-3">
        {/* add photo  */}
        <div>
          <label htmlFor="file-input" className="cursor-pointer stroke-gray hover:stroke-org">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" strokeWidth="2"></path> <path d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022" strokeWidth="2" strokeLinecap="round"></path> <path d="M21 13.6702C18.9068 12.0667 17.4778 12.2919 15.198 14.3459" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z" strokeWidth="2"></path>
              </g>
            </svg>
          </label>
          <input onChange={(e) => sendImg(e.target.files[0])} type="file" id="file-input" accept="image/*" hidden />
        </div>
        {/* show emojies  */}
        <button onClick={() => setShowEmoji(!showEmoji)} className={`cursor-pointer ${showEmoji ? "fill-red" : "fill-dark hover:fill-red"}`}>
          <svg width="22" height="22" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
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
      {/* emojies slider  */}
      <div className={`absolute bottom-1/1 left-0 w-full text-xl bg-white select-none  transition-[translate_opacity] duration-300 ${!showEmoji && "-translate-x-1/1 opacity-0 "}`}>
        <Swiper slidesPerView={9} className="py-1!">
          {commonEmojis.map((emoji) => (
            <SwiperSlide key={emoji} onClick={() => addEmoji(emoji)} className="cursor-pointer  shrink-0">
              {emoji}
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </div>
    </div>
  );
}
