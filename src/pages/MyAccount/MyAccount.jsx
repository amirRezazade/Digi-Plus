import { Link } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import SideBar from "./SideBar";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Favorite from "./Favorite";
import { useLocation } from "react-router-dom";
import Orders from "./Orders";
import Address from "./Address";
import Comments from "./Comments";
import Notifications from "./Notifications";
import EditAccount from "./EditAccount";

export default function MyAccount() {
  let [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar />
      <section className="custom-container text-gray text-sm mb-5">
        <div className="flex items-center gap-3 text-gray text-sm text-nowrap overflow-auto hidden-scrollbar my-5 lg:my-9 px-4">
          <Link className="stroke-gray hover:stroke-org fill-white" to="/">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="style=linear" clipPath="url(#clip0_1_129)">
                  <g id="home-door">
                    <path id="vector" d="M19 23H5C3.34315 23 2 21.6569 2 20V11.563C2 10.4094 2.49808 9.31192 3.36639 8.55236L10.0248 2.72784C11.1558 1.7385 12.8442 1.73851 13.9752 2.72784L20.6336 8.55236C21.5019 9.31192 22 10.4094 22 11.563V20C22 21.6569 20.6569 23 19 23Z" strokeWidth="1.5" strokeLinecap="round"></path> <path id="vector_2" d="M12 16L12 19" strokeWidth="1.5" strokeLinecap="round"></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_129">
                    <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)"></rect>
                  </clipPath>
                </defs>
              </g>
            </svg>
          </Link>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"></path>
            </svg>
          </span>
          <Link className="fill-gray hover:fill-org " to="/my-account">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
              <path d="M11.0013 11.6875C8.09547 11.6875 5.73047 9.32254 5.73047 6.41671C5.73047 3.51087 8.09547 1.14587 11.0013 1.14587C13.9071 1.14587 16.2721 3.51087 16.2721 6.41671C16.2721 9.32254 13.9071 11.6875 11.0013 11.6875ZM11.0013 2.52087C8.8563 2.52087 7.10547 4.27171 7.10547 6.41671C7.10547 8.56171 8.8563 10.3125 11.0013 10.3125C13.1463 10.3125 14.8971 8.56171 14.8971 6.41671C14.8971 4.27171 13.1463 2.52087 11.0013 2.52087Z"></path>
              <path d="M18.8733 20.8542C18.4975 20.8542 18.1858 20.5425 18.1858 20.1667C18.1858 17.0042 14.9592 14.4375 10.9992 14.4375C7.03916 14.4375 3.8125 17.0042 3.8125 20.1667C3.8125 20.5425 3.50083 20.8542 3.125 20.8542C2.74917 20.8542 2.4375 20.5425 2.4375 20.1667C2.4375 16.2525 6.27833 13.0625 10.9992 13.0625C15.72 13.0625 19.5608 16.2525 19.5608 20.1667C19.5608 20.5425 19.2492 20.8542 18.8733 20.8542Z"></path>
            </svg>
          </Link>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"></path>
            </svg>
          </span>
          <span className="text-dark">داشبورد</span>
        </div>
        <div className="relative flex flex-col lg:flex-row justify-between items-start gap-6">
          <button className="lg:hidden gradient py-2 px-6 rounded-2xl cursor-pointer text-white" onClick={() => setIsOpen(true)}>
            حساب
          </button>
          <SideBar open={isOpen} onOpen={setIsOpen} />
          <div className="w-full p-3 rounded-2xl border border-light-gray/40 gray-shaddow">
            {location.pathname === "/my-account/dashboard" && <Dashboard />}
            {location.pathname === "/my-account/orders" && <Orders />}
            {location.pathname === "/my-account/favorites" && <Favorite />}
            {location.pathname === "/my-account/address" && <Address />}
            {location.pathname === "/my-account/comments" && <Comments />}
            {location.pathname === "/my-account/notifications" && <Notifications />}
            {location.pathname === "/my-account/edit-account" && <EditAccount />}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
