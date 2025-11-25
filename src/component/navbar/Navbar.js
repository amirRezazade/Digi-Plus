import baner from "../../assets/images/banner.png";
import mobileBaner from "../../assets/images/banner-header-mobile.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import NavbarSearchBox from "./NavbarSearchBox";
import NavbarShoppingCart from "./NavbarShoppingCart";

export default function Navbar() {
  return (
    <header>
      <Link to="/" className=" overflow-hidden">
        <img className="hidden sm:block w-full max-h-16 bg-transparent" src={baner} alt="black-friday-logo" />
        <img className="sm:hidden block w-full max-h-16 bg-transparent" src={mobileBaner} alt="black-friday-mobile-logo" />
      </Link>
      <div className="hidden custom-container lg:flex pt-3 justify-between text-gray text-sm">
        <ul className="flex gap-2.5   divide-x divide-light-gray">
          <li className="px-2 py-0.5 text-hover">
            <Link>راهنمای خرید</Link>
          </li>
          <li className="px-2 py-0.5 text-hover">
            <Link>شرایط گارانتی</Link>
          </li>
          <li className="px-2 py-0.5 text-hover">
            <Link>سوالات متدوال</Link>
          </li>
          <li className="px-2 py-0.5 text-hover">
            <Link>تماس با ما</Link>
          </li>
          <li className="px-2 py-0.5 text-hover">
            <Link>درباره ما</Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <span>ساعت کاری فروشگاه: شنبه تا پنجشنبه ساعت</span>
          <div className="flex items-center gap-2">
            <span className="p-0.5 text-org bg-yel rounded">09:30</span>
            <span className="">تا</span>
            <span className="p-0.5 text-org bg-yel rounded">20:00</span>
          </div>
        </div>
      </div>
      <div className="custom-container flex flex-wrap lg:flex-nowrap justify-between gap-4 lg:gap-x-8 gap-y-2 sm:gap-y-4 mt-2.5 lg:mt-3.5">
        <button className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor">
            <path d="M24 19.875C24 20.4984 23.4984 21 22.875 21L4.125 21C3.50156 21 3 20.4984 3 19.875C3 19.2516 3.50156 18.75 4.125 18.75L22.875 18.75C23.4984 18.75 24 19.2516 24 19.875ZM21 12.375C21 12.9984 20.4984 13.5 19.875 13.5L1.125 13.5C0.501561 13.5 -1.20783e-06 12.9984 -1.15333e-06 12.375C-1.09882e-06 11.7516 0.501561 11.25 1.125 11.25L19.875 11.25C20.4984 11.25 21 11.7516 21 12.375ZM3 4.875C3 4.25156 3.50156 3.75 4.125 3.75L22.875 3.75C23.4984 3.75 24 4.25156 24 4.875C24 5.49844 23.4984 6 22.875 6L4.125 6C3.50156 6 3 5.49844 3 4.875Z"></path>
          </svg>
        </button>
        <Link to={"/"} className="max-w-[45%] me-auto flex items-center">
          <img src={logo} alt="logo" />
        </Link>
        <NavbarSearchBox />
        <div className="flex items-center gap-6 lg:gap-4 xl:gap-7 divide-x divide-light-gray order-2 lg:order-3">
          <div className="hidden md:inline-block pe-6 lg:pe-4 xl:pe-7">
            <div className="flex items-center gap-3 text-gray">
              <div className="flex flex-col">
                <span>
                  021<span className="text-org">66997788</span>
                </span>
                <span className="text-xs">نیاز به مشاوره داریــد؟</span>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                  <path
                    d="M15.232 12.3394C14.4776 12.4178 13.9241 13.0903 14.0028 13.8446C14.0775 14.604 14.75 15.1549 15.5075 15.0779C16.3404 14.9945 17.1482 15.2756 17.7227 15.8501C18.2975 16.4249 18.5783 17.2323 18.4948 18.0653C18.4203 18.8252 18.9712 19.4977 19.7248 19.5707C20.1514 19.6149 20.5525 19.4569 20.8336 19.1757C21.0501 18.9593 21.197 18.6681 21.23 18.3414C21.3957 16.6816 20.8265 15.0664 19.6658 13.9058C18.4689 12.781 16.893 12.1773 15.232 12.3394Z"
                    fill="#FAA307"
                    fill-opacity="0.75"
                  ></path>
                  <path
                    d="M14.6527 6.8582C13.9007 6.9342 13.3464 7.60502 13.4197 8.3621C13.4944 9.11788 14.1677 9.66964 14.9236 9.5951C17.4216 9.34798 19.8458 10.1979 21.576 11.9281C23.3062 13.6584 24.1545 16.0818 23.909 18.5805C23.8343 19.3362 24.3863 20.0098 25.142 20.0845C25.5687 20.1262 25.9685 19.9694 26.2497 19.6883C26.4674 19.4705 26.613 19.1806 26.6459 18.8514C27.0127 15.5641 25.8703 12.3313 23.5207 9.98162C21.2439 7.70488 18.0111 6.56246 14.6527 6.8582Z"
                    fill="#FAA307"
                    fill-opacity="0.5"
                  ></path>
                  <path
                    d="M14.1403 1.37904C13.3883 1.45512 12.8353 2.12716 12.9073 2.88298C12.982 3.63876 13.6557 4.19093 14.4112 4.11599C18.5337 3.70642 22.5767 5.14862 25.4652 8.03708C28.3893 10.9612 29.8327 15.0046 29.4207 19.1275C29.346 19.8832 29.898 20.5567 30.6537 20.6314C31.0803 20.6731 31.4802 20.5164 31.7614 20.2352C31.9791 20.0175 32.1247 19.7276 32.1576 19.3984C32.6843 14.4865 30.9545 9.63727 27.4097 6.09253C23.9379 2.62071 19.0863 0.888448 14.1403 1.37904Z"
                    fill="#FAA307"
                    fill-opacity="0.25"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.0756 18.3756C12.0035 17.6376 12.2998 16.3767 11.8376 15.3044L9.98218 10.9648C9.47976 9.799 8.21624 9.16091 6.9807 9.44687L2.9862 10.4158C1.78933 10.6936 0.950505 11.7426 0.949776 12.9734C0.945725 18.218 2.98952 23.1559 6.66795 26.8343C10.3841 30.5504 15.3208 32.5954 20.5674 32.591C21.3209 32.6234 21.9812 32.3358 22.4593 31.8577C22.7973 31.5197 23.0454 31.0843 23.1605 30.5893L24.0927 26.5613C24.3787 25.3281 23.7435 24.065 22.5699 23.5525L18.2275 21.6943C17.1604 21.2438 15.9126 21.5436 15.1672 22.451L14.122 23.7231C12.3751 22.6698 10.8985 21.1932 9.84404 19.4451L11.0756 18.3756ZM15.5314 26.3478C15.1138 26.8619 14.4353 26.9934 13.8632 26.7124C10.8317 25.2228 8.34714 22.7407 6.85916 19.7084C6.5798 19.1357 6.71984 18.4526 7.22295 18.0393L9.37816 16.273L7.45428 12.0489L3.66403 13.0341C3.68551 17.5094 5.43884 21.7161 8.61249 24.8898C11.8453 28.1226 16.0864 29.8771 20.5986 29.8723L21.41 25.939L17.1508 24.2272L15.5314 26.3478Z"
                    fill="#E85D04"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <NavbarShoppingCart />
        </div>
      </div>
    </header>
  );
}
