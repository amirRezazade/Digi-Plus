import baner from "../../assets/images/banner.png";
import mobileBaner from "../../assets/images/banner-header-mobile.png";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import NavbarSearchBox from "./NavbarSearchBox";
import NavbarShoppingCart from "./NavbarShoppingCart";
import NavbarUserName from "./NavbarUserName";
import NavbarLink from "./NavbarLink";
import NavbarProductsList from "./NavbarProductsList";
import { useState } from "react";

export default function Navbar() {
  let [openMenu, setOpenMenu] = useState(false);
  return (
    <>
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
      <div className="custom-container flex flex-wrap lg:flex-nowrap justify-between gap-4 xl:gap-x-8 gap-y-2 sm:gap-y-4 mt-2.5 lg:mt-3.5">
        <button className="lg:hidden p-1.5 cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
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
                    fillOpacity="0.75"
                  ></path>
                  <path
                    d="M14.6527 6.8582C13.9007 6.9342 13.3464 7.60502 13.4197 8.3621C13.4944 9.11788 14.1677 9.66964 14.9236 9.5951C17.4216 9.34798 19.8458 10.1979 21.576 11.9281C23.3062 13.6584 24.1545 16.0818 23.909 18.5805C23.8343 19.3362 24.3863 20.0098 25.142 20.0845C25.5687 20.1262 25.9685 19.9694 26.2497 19.6883C26.4674 19.4705 26.613 19.1806 26.6459 18.8514C27.0127 15.5641 25.8703 12.3313 23.5207 9.98162C21.2439 7.70488 18.0111 6.56246 14.6527 6.8582Z"
                    fill="#FAA307"
                    fillOpacity="0.5"
                  ></path>
                  <path
                    d="M14.1403 1.37904C13.3883 1.45512 12.8353 2.12716 12.9073 2.88298C12.982 3.63876 13.6557 4.19093 14.4112 4.11599C18.5337 3.70642 22.5767 5.14862 25.4652 8.03708C28.3893 10.9612 29.8327 15.0046 29.4207 19.1275C29.346 19.8832 29.898 20.5567 30.6537 20.6314C31.0803 20.6731 31.4802 20.5164 31.7614 20.2352C31.9791 20.0175 32.1247 19.7276 32.1576 19.3984C32.6843 14.4865 30.9545 9.63727 27.4097 6.09253C23.9379 2.62071 19.0863 0.888448 14.1403 1.37904Z"
                    fill="#FAA307"
                    fillOpacity="0.25"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
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
      <nav className={`fixed w-screen h-screen max-h-screen z-10 top-0 right-0 lg:relative lg:h-auto lg:w-auto lg:mx-12 xl:mx-15 2xl:mx-auto 2xl:max-w-[1400px] bg-black/50 lg:bg-black/0 transition-all duration-300 delay-200 opacity-0 invisible lg:opacity-100 lg:visible ${openMenu ? "opacity-100 visible" : ""}`} onClick={(e) => (e.target.nodeName == "NAV" ? setOpenMenu(false) : "")}>
        <div className={`relative hidden-scrollbar flex justify-between lg:items-center gap-3 lg:gap-0 lg:py-3.5 bg-white w-70 min-h-full max-h-full  lg:w-auto px-5 lg:px-0 flex-col lg:flex-row overflow-y-auto lg:overflow-y-visible transition-transform duration-500  lg:translate-x-0  ${openMenu ? "" : "translate-x-1/1"}`}>
          <div className="sticky top-0 z-1 bg-white lg:hidden flex justify-center items-center py-5 border-b border-light-gray ">
            <button className="me-auto cursor-pointer p-1.5 " onClick={() => setOpenMenu(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
                <path
                  d="M15.605 17.5781C16.0734 18.0173 16.0734 18.7298 15.605 19.1691C15.1365 19.6083 14.3765 19.6082 13.908 19.1691L7.99999 13.5891L2.04999 19.1672C1.58154 19.6064 0.821487 19.6064 0.352987 19.1672C-0.115512 18.728 -0.115462 18.0155 0.352987 17.5762L6.30499 12L0.351337 6.37968C-0.117112 5.94051 -0.117112 5.22797 0.351337 4.78875C0.819788 4.34953 1.57984 4.34958 2.04834 4.78875L7.99999 10.4109L13.95 4.83281C14.4184 4.39364 15.1785 4.39364 15.647 4.83281C16.1155 5.27198 16.1154 5.98453 15.647 6.42375L9.69499 12L15.605 17.5781Z"
                  fill="#999999"
                ></path>
              </svg>
            </button>
            <img className="max-w-40 me-auto" src={logo} alt="" />
          </div>
          <div className="text-base text-white order-3 lg:order-1 grow lg:grow-0 relative group ">
            <button className="hidden lg:flex items-center xl:gap-1 lg:pe-2 xl:pe-5 p-1 rounded-3xl gradient relative cursor-pointer">
              <span className="bg-white rounded-full size-10 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" className="fill-org">
                  <path d="M0 2.5C0 1.67156 0.671562 1 1.5 1H4.5C5.32812 1 6 1.67156 6 2.5V5.5C6 6.32812 5.32812 7 4.5 7H1.5C0.671562 7 0 6.32812 0 5.5V2.5ZM1.5 5.5H4.5V2.5H1.5V5.5ZM0 10.5C0 9.67188 0.671562 9 1.5 9H4.5C5.32812 9 6 9.67188 6 10.5V13.5C6 14.3281 5.32812 15 4.5 15H1.5C0.671562 15 0 14.3281 0 13.5V10.5ZM1.5 13.5H4.5V10.5H1.5V13.5ZM12.5 1C13.3281 1 14 1.67156 14 2.5V5.5C14 6.32812 13.3281 7 12.5 7H9.5C8.67188 7 8 6.32812 8 5.5V2.5C8 1.67156 8.67188 1 9.5 1H12.5ZM12.5 2.5H9.5V5.5H12.5V2.5ZM8 10.5C8 9.67188 8.67188 9 9.5 9H12.5C13.3281 9 14 9.67188 14 10.5V13.5C14 14.3281 13.3281 15 12.5 15H9.5C8.67188 15 8 14.3281 8 13.5V10.5ZM9.5 13.5H12.5V10.5H9.5V13.5Z"></path>
                </svg>
              </span>
              <span className="text-white lg:px-1.5 xl:px-3 text-nowrap lg:text-sm xl:text-base">دسته بندی محصولات</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="white">
                  <path d="M15.0211 9.34571L8.68778 15.4945C8.49612 15.718 8.24612 15.8125 8.00028 15.8125C7.75445 15.8125 7.50528 15.7185 7.31278 15.5305L0.97945 9.34571C0.5782 8.9504 0.561533 8.29727 0.940283 7.88477C1.3207 7.46797 1.95612 7.45508 2.35445 7.8461L8.00028 13.359L13.6461 7.8418C14.0445 7.45104 14.6774 7.46583 15.0603 7.88209C15.4378 8.29727 15.4211 8.9504 15.0211 9.34571Z"></path>
                </svg>
              </span>
            </button>
            <p className="lg:hidden text-xl font-bold text-dark">
              دسته بندی <span className="text-red">محصولات</span>
            </p>
            <NavbarProductsList />
          </div>
          <ul className="hidden order-2 lg:flex items-center gap-1.5 xl:gap-5 text-gray text-sm me-auto lg:ms-1 xl:ms-3">
            <li className="relative group rounded-[18px]  hover:text-org hover:bg-light transition-colors duration-300">
              <button className="flex items-center gap-1 cursor-pointer  p-2  xl:p-2.5  ">
                <span>
                  <svg className="_mi _before _svg" xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 20 16" fill="currentcolor">
                    <path d="M15.0281 0.0959107C15.8031 0.386879 16.1968 1.25125 15.9031 2.02719L15.0437 4.32188L9.97184 4.95313L9.77496 4.925C9.91871 4.64688 9.97184 4.33438 9.97184 4C9.97184 2.89594 9.10309 2.00032 7.97184 2.00032C6.89684 2.00032 5.97184 2.89594 5.97184 4C5.97184 4.15938 6.01871 4.28438 6.05309 4.45938L4.00621 4.20313C4.00309 4.1375 3.97184 4.06875 3.97184 4C3.97184 1.79125 5.79059 0.000407542 7.97184 0.000407542C10.175 0.000407542 11.9437 1.73657 11.9718 3.9L13.0968 0.973754C13.3875 0.198036 14.25 -0.194964 15.0281 0.0959107ZM2.3509 5.04375L9.97184 5.97188L7.39371 10.3156C7.16246 10.7313 6.69684 10.9125 6.26246 10.7906L1.1584 9.33125C0.556214 9.15938 0.258682 8.48125 0.538714 7.92188L1.84153 5.31563C1.93653 5.12813 2.14059 5.01875 2.3509 5.04375ZM18 12.8281C18 13.5156 17.5312 14.1156 16.8625 14.2844L10.4843 15.8781C10.1656 15.9594 9.83434 15.9594 9.51559 15.8781L3.13746 14.2844C2.4684 14.1156 1.97184 13.5156 1.97184 12.8281V10.6125L3.47184 11.0406V12.8281L9.22184 14.2656V9.72188C9.22184 9.33438 9.58434 8.97188 9.97184 8.97188C10.4156 8.97188 10.75 9.33438 10.75 9.72188V14.2656L16.5 12.8281V11.0406L18 10.6125V12.8281ZM18.8406 9.33125L13.7375 10.7906C13.3031 10.9125 12.8375 10.7313 12.6062 10.3156L9.97184 5.97188L17.65 5.04375C17.8593 5.01875 18.0625 5.12813 18.1593 5.31563L19.4625 7.92188C19.7406 8.48125 19.4437 9.15938 18.8406 9.33125Z"></path>
                  </svg>
                </span>
                <span>اجناس کارکرده</span>
              </button>
              <div className="navbar-hidden-item text-dark text-base flex gap-3 items-center divide-x divide-light-gray">
                <ul className="pe-2.5">
                  <NavbarLink text={"دارای گارانتی"} to={"/shop"} />
                  <NavbarLink text={"اوپن باکس"} to={"/shop"} />
                  <NavbarLink text={"بدون گارانتی"} to={"/shop"} />
                </ul>
                <NavLink to={"/product/id"} className="border border-org rounded-xl p-2 ps-7 relative group/item w-94 flex items-center text-xs text-end text-gray overflow-hidden">
                  <span className="absolute top-2.5 -right-5 gradient text-white rotate-45 px-5">استوک</span>
                  <img src="https://digiplus.aet-web.ir/wp-content/uploads/2025/01/mob2.svg" alt="" />
                  <div>
                    <p>گوشی موبایل شیائومی مدل Redmi Note 13 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت</p>
                    <span className="text-sm font-bold mt-3 inline-block group-hover/item:text-org ">3,555 $ </span>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className="relative group rounded-[18px]  hover:text-org hover:bg-light transition-colors duration-300">
              <NavLink to={"/shop"} className="flex items-center gap-1   p-2  xl:p-2.5  ">
                <span>
                  <svg className="_mi _before _svg" xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="currentcolor">
                    <path d="M6.72188 0.746213C6.72188 0.0040257 5.74844 -0.289724 5.34219 0.339026C2.38969 4.94059 6.25 7.45934 6.25 8.97184C6.25 9.65934 5.6875 10.2218 5 10.2218C4.3125 10.2218 3.75 9.65934 3.75 8.97184V5.69059C3.75 5.08496 3.06625 4.72965 2.57031 5.07715C0.960938 6.19996 0 8.03746 0 9.97184C0 13.3093 2.69125 16 6 16C9.30875 16 12 13.3087 12 9.99996C12 4.67809 6.72188 3.96871 6.72188 0.746213ZM6 14.4718C3.51938 14.4718 1.5 12.4522 1.5 9.97184C1.5 9.07715 1.76562 7.9484 2.25 7.22184V8.97184C2.25 10.4875 3.48438 11.7218 5 11.7218C6.51562 11.7218 7.75 10.4875 7.75 8.97184C7.75 6.96403 5 5.22184 5.75 2.47184C7 5.22184 10.5 6.30309 10.5 9.97184C10.5 12.4812 8.48125 14.4718 6 14.4718Z"></path>
                  </svg>
                </span>
                <span>پرفروش‌ترین‌ها</span>
              </NavLink>
              <div className="navbar-hidden-item text-dark text-base w-95">
                <ul>
                  <NavLink to={"/"} className="flex items-center justify-between border border-org rounded-xl overflow-hidden p-3 group/item">
                    <div className="">
                      <img className="max-w-20" src="https://digiplus.aet-web.ir/wp-content/uploads/2025/01/dplaptop.svg" alt="product" />
                    </div>
                    <div className="text-end text-gray text-xs">
                      <p>لپ تاپ 15.6 اینچی اچ‌پی مدل Victus 15</p>
                      <span className="text-sm font-bold mt-1 inline-block group-hover/item:text-org">3,555 $ </span>
                    </div>
                  </NavLink>
                </ul>
              </div>
            </li>
            <li className="relative group rounded-[18px]  hover:text-org hover:bg-light transition-colors duration-300">
              <button className="flex items-center gap-1 cursor-pointer   p-2  xl:p-2.5  ">
                <span>
                  <svg className="_mi _before _svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
                    <path d="M5 6C5 5.44688 5.44688 5 6 5C6.55312 5 7 5.44688 7 6C7 6.55312 6.55312 7 6 7C5.44688 7 5 6.55312 5 6ZM11 10C11 10.5531 10.5531 11 10 11C9.44687 11 9 10.5531 9 10C9 9.44687 9.44687 9 10 9C10.5531 9 11 9.44687 11 10ZM6.50313 10.5031C6.2375 10.8219 5.7625 10.8219 5.46875 10.5031C5.17812 10.2375 5.17812 9.7625 5.46875 9.46875L9.46875 5.46875C9.7625 5.17812 10.2375 5.17812 10.5031 5.46875C10.8219 5.7625 10.8219 6.2375 10.5031 6.50313L6.50313 10.5031ZM10.7531 1.35656C11.7812 1.22187 12.8625 1.54969 13.6562 2.34313C14.45 3.1375 14.7781 4.19062 14.6438 5.24687C15.4406 5.88125 16 6.87813 16 8C16 9.12187 15.4406 10.1188 14.6438 10.7531C14.7781 11.7812 14.45 12.8625 13.6562 13.6562C12.8625 14.45 11.7812 14.7781 10.7531 14.6438C10.1188 15.4406 9.12187 16 8 16C6.87813 16 5.88125 15.4406 5.24687 14.6438C4.19062 14.7781 3.1375 14.45 2.34313 13.6562C1.55 12.8625 1.22187 11.7812 1.35656 10.7531C0.5325 10.1188 0 9.12187 0 8C0 6.87813 0.5325 5.88125 1.35687 5.24687C1.22187 4.19062 1.55 3.1375 2.34313 2.34313C3.1375 1.55 4.19062 1.22187 5.24687 1.35656C5.88125 0.5325 6.87813 0 8 0C9.12187 0 10.1188 0.5325 10.7531 1.35656ZM5.94063 3.09594L5.375 2.91406C4.7 2.70625 3.90938 2.87094 3.40313 3.40313C2.87094 3.90938 2.70625 4.7 2.91406 5.375L3.09594 5.94063L2.54844 6.25938C1.92313 6.59063 1.5 7.24687 1.5 8C1.5 8.75313 1.92313 9.40938 2.54844 9.74063L3.09594 10.0312L2.91406 10.5969C2.70625 11.3 2.87094 12.0625 3.40313 12.5969C3.90938 13.1281 4.7 13.2938 5.375 13.0844L5.94063 12.9031L6.25938 13.4531C6.59063 14.0781 7.24687 14.5 8 14.5C8.75313 14.5 9.40938 14.0781 9.74063 13.4531L10.0312 12.9031L10.5969 13.0875C11.3 13.2937 12.0625 13.1281 12.5969 12.5969C13.1281 12.0625 13.2938 11.3 13.0844 10.5969L12.9031 10.0312L13.4531 9.74063C14.0781 9.40938 14.5 8.75313 14.5 8C14.5 7.24687 14.0781 6.59063 13.4531 6.25938L12.9031 5.94063L13.0844 5.375C13.2938 4.7 13.1281 3.90938 12.5969 3.40313C12.0625 2.87094 11.3 2.70625 10.5969 2.91406L10.0312 3.09594L9.74063 2.54844C9.40938 1.92313 8.75313 1.5 8 1.5C7.24687 1.5 6.59063 1.92313 6.25938 2.54844L5.94063 3.09594Z"></path>
                  </svg>
                </span>
                <span>صفحات فروشگاه</span>
              </button>
              <div className="navbar-hidden-item text-dark text-base">
                <ul>
                  <NavbarLink text={"فروشگاه"} to={"/shop"} />
                  <NavbarLink text={"سبد خرید"} to={"/shopping-cart"} />
                  <NavbarLink text={"صفحه محصول"} to={"/product"} />
                  <NavbarLink text={"صفحه پرداخت"} to={"/checkout"} />
                </ul>
              </div>
            </li>
            <li className="relative group rounded-[18px]  hover:text-org hover:bg-light transition-colors duration-300">
              <button className="flex items-center gap-1 cursor-pointer  p-2  xl:p-2.5  ">
                <span>
                  <svg className="_mi _before _svg" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="currentcolor">
                    <path d="M14.8 3.5C14.1375 3.5 13.6 4.08789 13.6 4.8125C13.6 5.29703 13.8428 5.71566 14.2 5.94289V11.5938C14.2 12.197 13.7515 12.6875 13.2 12.6875H11.2V11.375C12.0837 11.375 12.8 10.5916 12.8 9.625V4.375C12.8 3.4084 12.0837 2.625 11.2 2.625V1.75C11.2 0.783399 10.4838 0 9.6 0H3.2C2.31625 0 1.6 0.783399 1.6 1.75V2.625C0.71625 2.625 0 3.40977 0 4.375V9.625C0 10.5916 0.71625 11.375 1.6 11.375V12.25C1.6 13.2166 2.31625 14 3.2 14H13.2C14.4132 14 15.4 12.9207 15.4 11.5938V5.9418C15.7575 5.71484 16 5.29648 16 4.8125C16 4.08789 15.4625 3.5 14.8 3.5ZM2.8 1.75C2.8 1.50877 2.97945 1.3125 3.2 1.3125H9.6C9.82055 1.3125 10 1.50877 10 1.75V2.625H2.8V1.75ZM1.6 10.0625C1.37945 10.0625 1.2 9.86623 1.2 9.625V4.375C1.2 4.13377 1.37945 3.9375 1.6 3.9375H11.2C11.4206 3.9375 11.6 4.13377 11.6 4.375V9.625C11.6 9.86623 11.4206 10.0625 11.2 10.0625H1.6ZM10 12.25C10 12.4916 9.8209 12.6875 9.6 12.6875H3.2C2.9791 12.6875 2.8 12.4916 2.8 12.25V11.375H10V12.25ZM4.2 4.8125H2.8C2.46875 4.8125 2.2 5.10645 2.2 5.46875C2.2 5.83105 2.46875 6.125 2.8 6.125H3.3485L2.635 8.30977C2.52328 8.65074 2.68578 9.02672 2.99825 9.14812C3.065 9.17656 3.1325 9.1875 3.2 9.1875C3.4461 9.1875 3.67725 9.02002 3.76475 8.75164L4.76475 5.68914C4.83038 5.48833 4.80303 5.26531 4.69053 5.09086C4.5775 4.91641 4.395 4.8125 4.2 4.8125ZM10.2 4.8125H8.8C8.46875 4.8125 8.2 5.10645 8.2 5.46875C8.2 5.83105 8.47 6.125 8.8 6.125H9.3485L8.63525 8.31086C8.52353 8.65184 8.68603 9.02781 8.9985 9.14922C9.065 9.17656 9.1325 9.1875 9.2 9.1875C9.4461 9.1875 9.67725 9.02002 9.76475 8.75164L10.7648 5.68914C10.8304 5.48833 10.803 5.26531 10.6905 5.09086C10.5775 4.91641 10.395 4.8125 10.2 4.8125ZM7.2 4.8125H5.8C5.47 4.8125 5.2 5.10781 5.2 5.46875C5.2 5.82969 5.47 6.125 5.8 6.125H6.3485L5.635 8.30977C5.52327 8.65074 5.68577 9.02672 5.99825 9.14812C6.065 9.17656 6.1325 9.1875 6.2 9.1875C6.4461 9.1875 6.67725 9.02002 6.76475 8.75164L7.76475 5.68914C7.83038 5.48833 7.80303 5.26531 7.69053 5.09086C7.5775 4.91641 7.395 4.8125 7.2 4.8125Z"></path>
                  </svg>
                </span>
                <span>صفحات بلاگ</span>
              </button>
              <div className="navbar-hidden-item text-dark text-base">
                <ul>
                  <NavbarLink text={"داخلی بلاگ"} to={"/"} />
                  <NavbarLink text={"آرشیو مقالات"} to={"/blogs"} />
                </ul>
              </div>
            </li>
            <li className="relative group rounded-[18px] hover:text-org hover:bg-light transition-colors duration-300">
              <button className=" cursor-pointer   p-2  xl:p-2.5  ">
                <span>صفحات دیگر</span>
              </button>
              <div className="navbar-hidden-item text-dark text-base">
                <ul>
                  <NavbarLink text={"تماس با ما"} to={"/contact-us"} />
                  <NavbarLink text={"درباره ما"} to={"/about-us"} />
                  <NavbarLink text={"صفحه 404"} to={"/404"} />
                </ul>
              </div>
            </li>
          </ul>
          <div className="order-2 lg:order-3">
            <NavbarUserName />
          </div>
          <div className="sticky bottom-0 z-1 bg-white text-center order-5 pt-4 border-t border-light-gray lg:hidden">
            <p className="text-2xl font-bold text-red">
              <span className="text-dark">021</span>66997788
            </p>
            <span className="text-gray text-xs">نیاز به راهنمایی دارید؟</span>
          </div>
        </div>
      </nav>
      <hr className="custom-container text-light-gray mt-3 sm:mt-5 lg:mt-0.5" />
    </>
  );
}
