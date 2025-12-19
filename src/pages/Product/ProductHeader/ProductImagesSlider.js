import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { useState } from "react";
import AddToFavoritesBtn from "./../../../component/carts/AddToFavoritesBtn";
import CopyLinkBtn from "../CopyLinkBtn/CopyLinkBtn";
export default function ProductImagesSlider({ images, id }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  gap-3 py-5">
      <div className=" sm:col-span-2">
        <Swiper className="h-full product-swiper" direction="vertical" slidesPerView={5} spaceBetween={"10"} onSwiper={setThumbsSwiper} watchSlidesProgress modules={[Thumbs]}>
          {images.map((img) => (
            <SwiperSlide className="aspect-square! rounded-2xl border border-light-gray hover:border-org transition-colors! duration-300 cursor-pointer">
              <img className="object-cover" src={img} alt="img-slider" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sm:col-span-10 shadow-[0px_0px_15px_0px_#3e3e3e1a] border border-light-gray/80 rounded-3xl relative">
        <div className="absolute top-5 left-5 z-10 flex flex-col gap-1">
          <AddToFavoritesBtn id={id} />
          <CopyLinkBtn />
        </div>
        <Swiper thumbs={{ swiper: thumbsSwiper }} modules={[Thumbs]} className="max-w-full max-h-full" slidesPerView={1}>
          {images.map((img) => (
            <SwiperSlide className="p-7">
              <img className="object-contain mx-auto" src={img} alt="img-slider" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
