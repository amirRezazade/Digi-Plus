import { useEffect, useRef, useState } from "react";
import ChatBottom from "./ChatBottom";
import { getLocal, setLocal } from "../../utils/funcs";
import wallpaper from "../../assets/images/support-chat-wallpaper.jpg";
export default function SupportCat({ onShowImg }) {
  let [openChat, setOpenChat] = useState(false);
  let [message, setMessage] = useState("");
  let bottomRef = useRef(null);
  let [messages, setMessages] = useState(getLocal("supportMessages") || []);

  useEffect(() => {
    if (!getLocal("supportMessages")) {
      let now = new Date();
      let list = [
        {
          sender: "admin",
          text: "سلام 👋 من پشتیبان DigiPlus هستم. چطور می‌تونم کمکت کنم؟ اینجا بنویس 🌱",
          date: now.getHours() + ":" + now.getMinutes(),
        },
      ];
      setLocal("supportMessages", list);
      setMessages(getLocal("supportMessages"));
    }

    const closeChat = function (e) {
      if (!e.target.closest(".support-chat") && !e.target.closest(".modal-bg")) setOpenChat(false);
    };
    window.addEventListener("pointerdown", closeChat);

    return () => window.removeEventListener("pointerdown", closeChat);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  function sendMessage() {
    if (message.trim()) {
      let now = new Date();

      let obj = {
        text: message,
        date: now.getHours() + ":" + now.getMinutes(),
      };
      let newList = [...messages, obj];
      setMessages(newList);
      setMessage("");
      setLocal("supportMessages", newList);
    }
  }
  function sendImg(file) {
    if (!file) return;

    const now = new Date();
    const reader = new FileReader();

    reader.onload = () => {
      setMessages((prev) => {
        const updated = [
          ...prev,
          {
            date: `${now.getHours()}:${now.getMinutes()}`,
            img: reader.result,
          },
        ];
        setLocal("supportMessages", updated);
        return updated;
      });
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className={`support-chat fixed bottom-2 right-2 sm:bottom-5 md:right-8 text-sm z-5 lg:z-10 flex flex-col items-start gap-0.5   transition-[width_height] duration-400 overflow-hidden ${openChat ? "w-full h-[90dvh] xs:w-90 xs:h-130 sm:w-100  md:w-130 md:h-150  p-2" : "size-13 gap-0!"}`}>
      <div className={`flex flex-col justify-between bg-white shadow-[-2px_-1px_8px_0px_#6666665c] rounded-2xl  overflow-hidden  w-[calc(100%-20px)] grow transition-[margin_width_height_opacity] duration-500  ${openChat ? "md:m-2 " : "w-0! h-0!  opacity-0 overflow-hidden  "}`}>
        <div className="flex items-center justify-end gap-8 p-2 gradient">
          <div className=" flex items-center gap-2">
            <span className="text-white font-bold">پشتیبانی آنلاین </span>
            <span>
              <svg fill="white" height="33" width="33" version="1.1" id="Icons" viewBox="0 0 32 32">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16,2C9.4,2,4,7.4,4,14v3c0,2.8,2.2,5,5,5c0.6,0,1-0.4,1-1v-8c0-0.6-0.4-1-1-1c-1.1,0-2.1,0.4-2.9,1c0.5-5,4.8-9,9.9-9 s9.4,3.9,9.9,9c-0.8-0.6-1.8-1-2.9-1c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1c0.6,0,1.3-0.1,1.8-0.4c-1.1,2-2.8,3.6-4.9,4.5 c-0.2-1.2-1.2-2.2-2.5-2.2c-1.3,0-2.4,1.1-2.4,2.4c0,0.7,0.3,1.4,0.9,1.9c0.5,0.4,1,0.6,1.6,0.6c0.1,0,0.3,0,0.4,0 C23.6,28,28,22.9,28,17v-3C28,7.4,22.6,2,16,2z"></path>
                </g>
              </svg>
              {/* <span className="block size-2 rounded-full bg-lime-400 "></span> */}
            </span>
          </div>
          <button onClick={() => setOpenChat(false)} className="cursor-pointer fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
              <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
            </svg>
          </button>
        </div>
        <div className="grow bg-gray max-h-full overflow-y-auto hidden-scrollbar " style={{ backgroundImage: `url(${wallpaper})` }}>
          <ul className="flex flex-col gap-3 p-2 pb-7">
            {messages.map((mes, index) =>
              mes.sender === "admin" ? (
                <li key={index + mes} className=" px-2.5 ms-auto gradient rounded-2xl max-w-8/10 lg:max-w-100 text-white ">
                  <p className="pt-2 ">{mes.text}</p>
                  <span className="text-[10px] select-none">{mes.date}</span>
                </li>
              ) : mes.text ? (
                <li key={index + mes} className=" px-2.5 me-auto rounded-2xl max-w-8/10 lg:max-w-100 text-dark bg-light-gray/60 ">
                  <p className="pt-2 ">{mes.text}</p>
                  <span className="text-[10px] select-none text-gray">{mes.date}</span>
                </li>
              ) : (
                <li key={index + mes} className=" me-auto rounded-t-2xl rounded-b-lg max-w-8/10 text-dark bg-light-gray/60 ">
                  <img onClick={() => onShowImg(mes.img)} className="rounded-t-2xl object-cover cursor-pointer" src={mes.img} alt="img" />
                  <span className="text-[10px] select-none text-gray text-start px-3">{mes.date}</span>
                </li>
              )
            )}
            <div ref={bottomRef} className="w-full"></div>
          </ul>
        </div>

        <ChatBottom message={message} onMessage={(newMessage) => setMessage(newMessage)} sendMessage={sendMessage} sendImg={sendImg} />
      </div>

      {/* open close btn  */}
      <button onClick={() => setOpenChat(!openChat)} className={`shrink-0 cursor-pointer size-11 md:size-13 flex justify-center items-center gradient rounded-full  `}>
        <span>
          {openChat ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 md:size-8" viewBox="0 0 16 24" fill="none">
              <path
                d="M15.605 17.5781C16.0734 18.0173 16.0734 18.7298 15.605 19.1691C15.1365 19.6083 14.3765 19.6082 13.908 19.1691L7.99999 13.5891L2.04999 19.1672C1.58154 19.6064 0.821487 19.6064 0.352987 19.1672C-0.115512 18.728 -0.115462 18.0155 0.352987 17.5762L6.30499 12L0.351337 6.37968C-0.117112 5.94051 -0.117112 5.22797 0.351337 4.78875C0.819788 4.34953 1.57984 4.34958 2.04834 4.78875L7.99999 10.4109L13.95 4.83281C14.4184 4.39364 15.1785 4.39364 15.647 4.83281C16.1155 5.27198 16.1154 5.98453 15.647 6.42375L9.69499 12L15.605 17.5781Z"
                fill="#fff"
              ></path>
            </svg>
          ) : (
            <svg fill="white" height="33" width="33" version="1.1" id="Icons" viewBox="0 0 32 32">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
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
