import { useEffect, useState } from "react";

export default function SupportCat() {
  let [openChat, setOpenChat] = useState(true);

  useEffect(() => {
    const closeChat = function (e) {
      if (!e.target.closest(".support-chat")) setOpenChat(false);
    };
    window.addEventListener("click", closeChat);

    return () => window.removeEventListener("click", closeChat);
  }, []);

  return (
    <div className={`support-chat fixed bottom-3 right-3 sm:bottom-8 sm:right-8 text-sm z-1 transition-all duration-400 overflow-hidden ${openChat ? "p-2.5 w-75 h-118" : "size-13"}`}>
      <div className={`flex flex-col justify-between bg-white shadow-[-2px_-1px_8px_0px_#6666665c] rounded-2xl  overflow-hidden mb-12 w-70 h-100 transition-all duration-500  ${openChat ? "" : "size-13! opacity-0 overflow-hidden  "}`}>
        <div className="flex items-center justify-end gap-3 p-2 gradient">
          <div className=" flex items-center gap-2">
            <span className="text-white">ادمین شماره 4</span>
            <span>
              <svg fill="white" height="33" width="33" version="1.1" id="Icons" viewBox="0 0 32 32">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M16,2C9.4,2,4,7.4,4,14v3c0,2.8,2.2,5,5,5c0.6,0,1-0.4,1-1v-8c0-0.6-0.4-1-1-1c-1.1,0-2.1,0.4-2.9,1c0.5-5,4.8-9,9.9-9 s9.4,3.9,9.9,9c-0.8-0.6-1.8-1-2.9-1c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1c0.6,0,1.3-0.1,1.8-0.4c-1.1,2-2.8,3.6-4.9,4.5 c-0.2-1.2-1.2-2.2-2.5-2.2c-1.3,0-2.4,1.1-2.4,2.4c0,0.7,0.3,1.4,0.9,1.9c0.5,0.4,1,0.6,1.6,0.6c0.1,0,0.3,0,0.4,0 C23.6,28,28,22.9,28,17v-3C28,7.4,22.6,2,16,2z"></path>{" "}
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

        <div className="flex items-center gap-1 px-2 py-1">
          <button className="size-10 p-0.5 gradient rounded-full">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z"
                  fill="white"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <div className="grow">
            <input className="border-0 outline-0 w-full rounded-2xl px-3 py-2 bg-light-gray/40 text-dark " type="text" placeholder="پیام خود را وارد کنید" />
          </div>
        </div>
      </div>

      {/* open close btn  */}
      <button onClick={() => setOpenChat(!openChat)} className={`cursor-pointer absolute right-0 bottom-0 mt-1 size-13 flex justify-center items-center gradient rounded-full  transition-all duration-500 `}>
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
                {" "}
                <path d="M16,2C9.4,2,4,7.4,4,14v3c0,2.8,2.2,5,5,5c0.6,0,1-0.4,1-1v-8c0-0.6-0.4-1-1-1c-1.1,0-2.1,0.4-2.9,1c0.5-5,4.8-9,9.9-9 s9.4,3.9,9.9,9c-0.8-0.6-1.8-1-2.9-1c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1c0.6,0,1.3-0.1,1.8-0.4c-1.1,2-2.8,3.6-4.9,4.5 c-0.2-1.2-1.2-2.2-2.5-2.2c-1.3,0-2.4,1.1-2.4,2.4c0,0.7,0.3,1.4,0.9,1.9c0.5,0.4,1,0.6,1.6,0.6c0.1,0,0.3,0,0.4,0 C23.6,28,28,22.9,28,17v-3C28,7.4,22.6,2,16,2z"></path>{" "}
              </g>
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
