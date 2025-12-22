import { useImgFullScreen } from "../../contexts/ImgFullScreenContext";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ImgFullScreenModal() {
  let { images, setImages, index } = useImgFullScreen();

  console.log(images);
  if (images) {
    document.body.classList.add("body-lock");
  } else document.body.classList.remove("body-lock");

  return (
    <div onMouseDown={(e) => e.target.classList.contains("modal-bg") && setImages(null)} className={`modal-bg hidden-scrollbar flex items-center justify-center transition-all duration-500 ${images ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
      <div className={` sm:max-w-full md:max-w-[750px] lg:max-w-[800px] xl:max-w-[930px] sm:max-h-[90vh] md:p-3 rounded-2xl overflow-hidden -rotate-y-100 opacity-0  invisible transition-all duration-900  ${images && "rotate-y-0!  opacity-100 visible"}`}>
        {images && images.length === 1 ? (
          <img className="object-cover transition-all duration-500 rounded-2xl" src={images && images[0]} alt="image-preview" />
        ) : (
          <Swiper>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
          </Swiper>
        )}
      </div>
    </div>
  );
}
