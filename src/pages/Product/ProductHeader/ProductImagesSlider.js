import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductImagesSlider({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  gap-3 py-5">
      <div className=" sm:col-span-2">
        <Swiper className="h-full" direction="vertical" slidesPerView={5} spaceBetween={"10"}>
          {images.map((img) => (
            <SwiperSlide className="aspect-square! rounded-2xl border border-light-gray">
              <img className="object-cover" src={img} alt="img-slider" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sm:col-span-10 shadow-[0px_0px_15px_0px_#3e3e3e1a] border border-light-gray/80 rounded-3xl">
        <Swiper className="max-w-full max-h-full" slidesPerView={1}>
          {images.map((img) => (
            <SwiperSlide>
              <img className="object-cover" src={img} alt="img-slider" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
