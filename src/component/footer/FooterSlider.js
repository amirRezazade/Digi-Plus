import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
export default function FooterSlider() {
  let links = [
    {
      name: "Amazon Echo Plus",
      id: "99",
    },
    {
      name: "Samsung Galaxy S8",
      id: "132",
    },
    {
      name: "Apple Airpower",
      id: "102",
    },
    {
      name: "Sun Glasses",
      id: "55",
    },
    {
      name: "Monopod",
      id: "111",
    },
    {
      name: "Water",
      id: "42",
    },
    {
      name: "Apple HomePod",
      id: "103",
    },
    {
      name: "Apple Watch",
      id: "106",
    },
    {
      name: "iPhone 13 Pro",
      id: "123",
    },
    {
      name: "Football",
      id: "147",
    },
  ];

  return (
    <Swiper
      className="w-full select-none "
      slidesPerView={"auto"}
      modules={[FreeMode]}
      freeMode={{
        enabled: true,
        momentum: true,
      }}
    >
      <SwiperSlide className="flex!  lg:flex-wrap items-center w-full gap-3 text-gray p-4">
        {links.map((link) => (
          <Link key={link.id} to={`/product/${link.id}`} className="shrink-0 px-3 py-2 rounded-full border border-light-gray flex items-center gap-1 text-sm shadow-[0px_4px_8px_0px_#6666661a] transition-colors duration-300 hover:text-red hover:bg-light hover:border-org/30 hover:shadow-[0px_4px_8px_0px_#dc2e0217]">
            <span className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="currentcolor">
                <path d="M15.1429 4.78151L12.4996 4.78061L12.9864 2.11717C13.0701 1.65909 12.761 1.21964 12.2943 1.13702C11.83 1.0601 11.3836 1.36005 11.2986 1.81835L10.7571 4.78061H6.78571L7.2725 2.11717C7.35622 1.65909 7.04707 1.21964 6.58036 1.13702C6.11429 1.06022 5.66786 1.36045 5.58571 1.81854L5.04429 4.7808H2C1.52679 4.7808 1.14286 5.15979 1.14286 5.62561C1.14286 6.09143 1.52679 6.4683 2 6.4683H4.73464L3.80893 11.5308H0.857143C0.383929 11.5308 0 11.9091 0 12.3749C0 12.8428 0.383929 13.219 0.857143 13.219L3.50036 13.2187L3.01357 15.8822C2.92986 16.3403 3.239 16.7797 3.70571 16.8623C3.75714 16.8717 3.80714 16.8753 3.85714 16.8753C4.26357 16.8753 4.625 16.5885 4.69964 16.1809L5.24107 13.2187H9.2125L8.72571 15.8821C8.642 16.3402 8.95114 16.7796 9.41786 16.8622C9.47143 16.8717 9.52143 16.8753 9.57143 16.8753C9.97786 16.8753 10.3393 16.5885 10.4139 16.1809L10.9554 13.2187L14 13.219C14.4732 13.219 14.8571 12.8411 14.8571 12.4069C14.8571 11.9411 14.4732 11.5628 14 11.5628H11.2654L12.1911 6.50029L15.1429 6.469C15.6161 6.469 16 6.09107 16 5.6569C16 5.16119 15.6179 4.78151 15.1429 4.78151ZM9.525 11.4999H5.55357L6.47929 6.43736H10.4507L9.525 11.4999Z"></path>
              </svg>
            </span>
            <span>{link.name}</span>
          </Link>
        ))}
      </SwiperSlide>
    </Swiper>
  );
}
