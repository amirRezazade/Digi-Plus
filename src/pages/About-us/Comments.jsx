import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
export default function Comment() {
  return (
    <div className="custom-container mt-10 md:mt-15! mb-5">
      <div className="flex items-center justify-between gap-2 py-5">
        <h2 className=" text-start inline-block font-bold text-black text-nowrap text-xl xs:text-2xl lg:text-3xl">
          نظرات<span className="text-red "> مشتریان</span>
        </h2>
        <div className="flex gap-2">
          <button className="comment-prev size-8 rounded-lg bg-yel border border-org/40 fill-red hover:bg-linear-264 from-red to-[#ff7b00] hover:fill-white  flex justify-center items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11">
              <path d="M5.94708 1.11192L9.85997 5.07026C10.0022 5.19005 10.0623 5.3463 10.0623 5.49995C10.0623 5.65359 10.0025 5.80932 9.88288 5.92963L5.94708 9.88797C5.69552 10.1387 5.27989 10.1492 5.01739 9.91244C4.75216 9.67468 4.74396 9.27755 4.99278 9.02859L8.50099 5.49995L4.99005 1.9713C4.74139 1.72229 4.75079 1.32677 5.01569 1.08745C5.27989 0.851507 5.69552 0.861924 5.94708 1.11192Z"></path>
            </svg>
          </button>
          <button className="comment-next size-8 rounded-lg rotate-180 bg-yel border border-org/40 fill-red hover:bg-linear-264 from-red to-[#ff7b00] hover:fill-white  flex justify-center items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11">
              <path d="M5.94708 1.11192L9.85997 5.07026C10.0022 5.19005 10.0623 5.3463 10.0623 5.49995C10.0623 5.65359 10.0025 5.80932 9.88288 5.92963L5.94708 9.88797C5.69552 10.1387 5.27989 10.1492 5.01739 9.91244C4.75216 9.67468 4.74396 9.27755 4.99278 9.02859L8.50099 5.49995L4.99005 1.9713C4.74139 1.72229 4.75079 1.32677 5.01569 1.08745C5.27989 0.851507 5.69552 0.861924 5.94708 1.11192Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        className="py-4!"
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          nextEl: ".comment-next",
          prevEl: ".comment-prev",
        }}
        spaceBetween={15}
        breakpoints={{
          650: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="p-3.5 w-fit rounded-4xl bg-white gray-shaddow border border-light-gray/50 mx-auto hover:border-red transition-colors duration-300">
            <div className="flex items-center gap-2">
              <span className="inline-block relative rounded-full size-7 bg-red/15 after:absolute after:size-2 after:top-1/2 after:left-1/2 after:-translate-1/2 after:rounded-full after:bg-red before:absolute before:size-4 before:top-1/2 before:left-1/2 before:-translate-1/2 before:rounded-full before:bg-red/40"></span>
              <span className="font-bold text-dark md:text-base">پژمان رسولی</span>
            </div>
            <p className="leading-8 mb-6 mt-4"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. </p>
            <div className="flex justify-between">
              <p>تنکابن، گیلان </p>
              <div className="flex items-start gap-1 fill-star text-star text-lg font-bold">
                <span>5</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
                  <path d="M11.9958 0C12.3792 0 12.7292 0.225586 12.8958 0.580938L15.7542 6.65156L22.1417 7.62695C22.5167 7.68281 22.825 7.95352 22.9458 8.32305C23.0625 8.69688 22.9667 9.10508 22.7 9.37578L18.0667 14.1109L19.1625 20.7926C19.225 21.1793 19.0709 21.5746 18.7584 21.8023C18.45 22.0301 18.0042 22.0602 17.7042 21.8754L11.9958 18.7301L6.25418 21.8754C5.95418 22.0602 5.54585 22.0301 5.23335 21.8023C4.92502 21.5746 4.77085 21.1793 4.79585 20.7926L5.92502 14.1109L1.29627 9.37578C1.0271 9.10508 0.931682 8.69688 1.05002 8.32305C1.16793 7.95352 1.47918 7.68281 1.85377 7.62695L8.23752 6.65156L11.0958 0.580938C11.2667 0.225543 11.6125 0 11.9958 0ZM11.9958 3.39238L9.80835 8.04375C9.66252 8.34883 9.37918 8.56367 9.05418 8.61524L4.12418 9.36289L7.70418 13.0195C7.93335 13.2559 8.03752 13.5953 7.98335 13.9262L7.14168 19.0652L11.525 16.6504C11.8208 16.4871 12.175 16.4871 12.4667 16.6504L16.85 19.0652L16.0083 13.9262C15.9542 13.5953 16.0625 13.2559 16.2917 13.0195L19.8708 9.36289L14.9417 8.61524C14.6125 8.56367 14.3292 8.34883 14.1875 8.04375L11.9958 3.39238Z"></path>
                  <path d="M7.70418 13.0195C7.93335 13.2559 8.03752 13.5953 7.98335 13.9262L7.14168 19.0652L11.525 16.6504C11.8208 16.4871 12.175 16.4871 12.4667 16.6504L16.85 19.0652L16.0083 13.9262C15.9542 13.5953 16.0625 13.2559 16.2917 13.0195L19.8708 9.36289L14.9417 8.61524C14.6125 8.56367 14.3292 8.34883 14.1875 8.04375L11.9958 3.39238V11L7.70418 13.0195Z"></path>
                  <path d="M11.9958 3.39238L9.80835 8.04375C9.66252 8.34883 9.37918 8.56367 9.05418 8.61524L4.12418 9.36289L7.70418 13.0195L11.9958 11V3.39238Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-3.5 w-fit rounded-4xl bg-white gray-shaddow border border-light-gray/50 mx-auto hover:border-red transition-colors duration-300">
            <div className="flex items-center gap-2">
              <span className="inline-block relative rounded-full size-7 bg-red/15 after:absolute after:size-2 after:top-1/2 after:left-1/2 after:-translate-1/2 after:rounded-full after:bg-red before:absolute before:size-4 before:top-1/2 before:left-1/2 before:-translate-1/2 before:rounded-full before:bg-red/40"></span>
              <span className="font-bold text-dark md:text-base">پژمان رسولی</span>
            </div>
            <p className="leading-8 mb-6 mt-4"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. </p>
            <div className="flex justify-between">
              <p>تنکابن، گیلان </p>
              <div className="flex items-start gap-1 fill-star text-star text-lg font-bold">
                <span>5</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
                  <path d="M11.9958 0C12.3792 0 12.7292 0.225586 12.8958 0.580938L15.7542 6.65156L22.1417 7.62695C22.5167 7.68281 22.825 7.95352 22.9458 8.32305C23.0625 8.69688 22.9667 9.10508 22.7 9.37578L18.0667 14.1109L19.1625 20.7926C19.225 21.1793 19.0709 21.5746 18.7584 21.8023C18.45 22.0301 18.0042 22.0602 17.7042 21.8754L11.9958 18.7301L6.25418 21.8754C5.95418 22.0602 5.54585 22.0301 5.23335 21.8023C4.92502 21.5746 4.77085 21.1793 4.79585 20.7926L5.92502 14.1109L1.29627 9.37578C1.0271 9.10508 0.931682 8.69688 1.05002 8.32305C1.16793 7.95352 1.47918 7.68281 1.85377 7.62695L8.23752 6.65156L11.0958 0.580938C11.2667 0.225543 11.6125 0 11.9958 0ZM11.9958 3.39238L9.80835 8.04375C9.66252 8.34883 9.37918 8.56367 9.05418 8.61524L4.12418 9.36289L7.70418 13.0195C7.93335 13.2559 8.03752 13.5953 7.98335 13.9262L7.14168 19.0652L11.525 16.6504C11.8208 16.4871 12.175 16.4871 12.4667 16.6504L16.85 19.0652L16.0083 13.9262C15.9542 13.5953 16.0625 13.2559 16.2917 13.0195L19.8708 9.36289L14.9417 8.61524C14.6125 8.56367 14.3292 8.34883 14.1875 8.04375L11.9958 3.39238Z"></path>
                  <path d="M7.70418 13.0195C7.93335 13.2559 8.03752 13.5953 7.98335 13.9262L7.14168 19.0652L11.525 16.6504C11.8208 16.4871 12.175 16.4871 12.4667 16.6504L16.85 19.0652L16.0083 13.9262C15.9542 13.5953 16.0625 13.2559 16.2917 13.0195L19.8708 9.36289L14.9417 8.61524C14.6125 8.56367 14.3292 8.34883 14.1875 8.04375L11.9958 3.39238V11L7.70418 13.0195Z"></path>
                  <path d="M11.9958 3.39238L9.80835 8.04375C9.66252 8.34883 9.37918 8.56367 9.05418 8.61524L4.12418 9.36289L7.70418 13.0195L11.9958 11V3.39238Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-3.5 w-fit rounded-4xl bg-white gray-shaddow border border-light-gray/50 mx-auto hover:border-red transition-colors duration-300">
            <div className="flex items-center gap-2">
              <span className="inline-block relative rounded-full size-7 bg-red/15 after:absolute after:size-2 after:top-1/2 after:left-1/2 after:-translate-1/2 after:rounded-full after:bg-red before:absolute before:size-4 before:top-1/2 before:left-1/2 before:-translate-1/2 before:rounded-full before:bg-red/40"></span>
              <span className="font-bold text-dark md:text-base">پژمان رسولی</span>
            </div>
            <p className="leading-8 mb-6 mt-4"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. </p>
            <div className="flex justify-between">
              <p>تنکابن، گیلان </p>
              <div className="flex items-start gap-1 fill-star text-star text-lg font-bold">
                <span>5</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
                  <path d="M11.9958 0C12.3792 0 12.7292 0.225586 12.8958 0.580938L15.7542 6.65156L22.1417 7.62695C22.5167 7.68281 22.825 7.95352 22.9458 8.32305C23.0625 8.69688 22.9667 9.10508 22.7 9.37578L18.0667 14.1109L19.1625 20.7926C19.225 21.1793 19.0709 21.5746 18.7584 21.8023C18.45 22.0301 18.0042 22.0602 17.7042 21.8754L11.9958 18.7301L6.25418 21.8754C5.95418 22.0602 5.54585 22.0301 5.23335 21.8023C4.92502 21.5746 4.77085 21.1793 4.79585 20.7926L5.92502 14.1109L1.29627 9.37578C1.0271 9.10508 0.931682 8.69688 1.05002 8.32305C1.16793 7.95352 1.47918 7.68281 1.85377 7.62695L8.23752 6.65156L11.0958 0.580938C11.2667 0.225543 11.6125 0 11.9958 0ZM11.9958 3.39238L9.80835 8.04375C9.66252 8.34883 9.37918 8.56367 9.05418 8.61524L4.12418 9.36289L7.70418 13.0195C7.93335 13.2559 8.03752 13.5953 7.98335 13.9262L7.14168 19.0652L11.525 16.6504C11.8208 16.4871 12.175 16.4871 12.4667 16.6504L16.85 19.0652L16.0083 13.9262C15.9542 13.5953 16.0625 13.2559 16.2917 13.0195L19.8708 9.36289L14.9417 8.61524C14.6125 8.56367 14.3292 8.34883 14.1875 8.04375L11.9958 3.39238Z"></path>
                  <path d="M7.70418 13.0195C7.93335 13.2559 8.03752 13.5953 7.98335 13.9262L7.14168 19.0652L11.525 16.6504C11.8208 16.4871 12.175 16.4871 12.4667 16.6504L16.85 19.0652L16.0083 13.9262C15.9542 13.5953 16.0625 13.2559 16.2917 13.0195L19.8708 9.36289L14.9417 8.61524C14.6125 8.56367 14.3292 8.34883 14.1875 8.04375L11.9958 3.39238V11L7.70418 13.0195Z"></path>
                  <path d="M11.9958 3.39238L9.80835 8.04375C9.66252 8.34883 9.37918 8.56367 9.05418 8.61524L4.12418 9.36289L7.70418 13.0195L11.9958 11V3.39238Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-3.5 w-fit rounded-4xl bg-white gray-shaddow border border-light-gray/50 mx-auto hover:border-red transition-colors duration-300">
            <div className="flex items-center gap-2">
              <span className="inline-block relative rounded-full size-7 bg-red/15 after:absolute after:size-2 after:top-1/2 after:left-1/2 after:-translate-1/2 after:rounded-full after:bg-red before:absolute before:size-4 before:top-1/2 before:left-1/2 before:-translate-1/2 before:rounded-full before:bg-red/40"></span>
              <span className="font-bold text-dark md:text-base">پژمان رسولی</span>
            </div>
            <p className="leading-8 mb-6 mt-4"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. </p>
            <div className="flex justify-between">
              <p>تنکابن، گیلان </p>
              <div className="flex items-start gap-1 fill-star text-star text-lg font-bold">
                <span>5</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
                  <path d="M11.9958 0C12.3792 0 12.7292 0.225586 12.8958 0.580938L15.7542 6.65156L22.1417 7.62695C22.5167 7.68281 22.825 7.95352 22.9458 8.32305C23.0625 8.69688 22.9667 9.10508 22.7 9.37578L18.0667 14.1109L19.1625 20.7926C19.225 21.1793 19.0709 21.5746 18.7584 21.8023C18.45 22.0301 18.0042 22.0602 17.7042 21.8754L11.9958 18.7301L6.25418 21.8754C5.95418 22.0602 5.54585 22.0301 5.23335 21.8023C4.92502 21.5746 4.77085 21.1793 4.79585 20.7926L5.92502 14.1109L1.29627 9.37578C1.0271 9.10508 0.931682 8.69688 1.05002 8.32305C1.16793 7.95352 1.47918 7.68281 1.85377 7.62695L8.23752 6.65156L11.0958 0.580938C11.2667 0.225543 11.6125 0 11.9958 0ZM11.9958 3.39238L9.80835 8.04375C9.66252 8.34883 9.37918 8.56367 9.05418 8.61524L4.12418 9.36289L7.70418 13.0195C7.93335 13.2559 8.03752 13.5953 7.98335 13.9262L7.14168 19.0652L11.525 16.6504C11.8208 16.4871 12.175 16.4871 12.4667 16.6504L16.85 19.0652L16.0083 13.9262C15.9542 13.5953 16.0625 13.2559 16.2917 13.0195L19.8708 9.36289L14.9417 8.61524C14.6125 8.56367 14.3292 8.34883 14.1875 8.04375L11.9958 3.39238Z"></path>
                  <path d="M7.70418 13.0195C7.93335 13.2559 8.03752 13.5953 7.98335 13.9262L7.14168 19.0652L11.525 16.6504C11.8208 16.4871 12.175 16.4871 12.4667 16.6504L16.85 19.0652L16.0083 13.9262C15.9542 13.5953 16.0625 13.2559 16.2917 13.0195L19.8708 9.36289L14.9417 8.61524C14.6125 8.56367 14.3292 8.34883 14.1875 8.04375L11.9958 3.39238V11L7.70418 13.0195Z"></path>
                  <path d="M11.9958 3.39238L9.80835 8.04375C9.66252 8.34883 9.37918 8.56367 9.05418 8.61524L4.12418 9.36289L7.70418 13.0195L11.9958 11V3.39238Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
