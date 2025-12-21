import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { useState } from "react";
import AddToFavoritesBtn from "./../../../component/carts/AddToFavoritesBtn";
import CopyLinkBtn from "../CopyLinkBtn/CopyLinkBtn";

export default function ProductImagesSlider({ images, id }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="py-5 px-3 max-w-120 sm:max-w-[600px] md:max-w-[700px] overflow-hidden mx-auto">
      <div className="max-w-full max-h-full lg:mt-0 xl:mt-8 shadow-[0px_0px_15px_0px_#3e3e3e1a] border border-light-gray/80 rounded-3xl relative">
        <div className="absolute top-5 left-2  md:left-4  flex flex-col gap-1 z-2">
          <AddToFavoritesBtn id={id} />
          <CopyLinkBtn />
        </div>
        {images.length > 1 ? (
          <Swiper thumbs={{ swiper: thumbsSwiper }} modules={[Thumbs]} className="max-w-full!  max-h-full" slidesPerView={1}>
            {images.map((img) => (
              <SwiperSlide className="">
                <img className="object-contain mx-auto w-full max-w-125!" src={img} alt="img-slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>
            <img src={images[0]} alt="" />
          </div>
        )}
      </div>
      {images.length > 1 && (
        <div className="max-w-full mt-3">
          <Swiper
            className=" product-swiper "
            modules={[Thumbs]}
            breakpoints={{
              450: {
                slidesPerView: 5,
              },
              650: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            slidesPerView={4}
            spaceBetween={"10"}
            onSwiper={setThumbsSwiper}
          >
            {images.map((img) => (
              <SwiperSlide className="aspect-square! h-auto! opacity-60 rounded-2xl border border-light-gray hover:border-org transition-colors! duration-300 cursor-pointer">
                <img className="object-cover w-full h-full" src={img} alt="img-slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
