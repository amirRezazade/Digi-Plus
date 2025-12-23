import { useEffect, useState } from "react";
import { useImgFullScreen } from "../../contexts/ImgFullScreenContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function ImgFullScreenModal() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isReadey, setIsReady] = useState(false);
  let { images, setImages, index } = useImgFullScreen();

  useEffect(() => {
    if (images) {
      document.body.classList.add("body-lock");
    } else document.body.classList.remove("body-lock");
    setTimeout(() => {
      setIsReady(images ? true : false);
    }, 300);
  }, [images]);

  function closeModal(e) {
    if (e.target.classList.contains("modal-bg")) {
      setIsReady(false);
      setThumbsSwiper(null);
      setTimeout(() => {
        setImages(null);
      }, 600);
      if (!images) return null;
    }
  }

  return (
    <div onMouseDown={closeModal} className={`modal-bg hidden-scrollbar flex items-center justify-center transition-all duration-500 ${images ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
      <div className={`${images?.length > 1 && "bg-white! "} w-full sm:max-w-full md:max-w-[750px] lg:max-w-[800px] xl:max-w-[930px] xs:max-h-[87dvh] md:max-h-[90dvh] md:p-3 rounded-2xl overflow-hidden -rotate-y-90 opacity-0  invisible transition-all duration-900  ${isReadey && "rotate-y-0!  opacity-100 visible"}`}>
        {images?.length > 0 && (
          <div className="max-h-full relative">
            <Swiper
              navigation={{
                nextEl: ".modal-next",
                prevEl: ".modal-prev",
              }}
              initialSlide={index}
              loop={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs, Navigation]}
              slidesPerView={1}
              className="w-full! max-h-full!"
            >
              {images &&
                images.map((img) => (
                  <SwiperSlide>
                    <img className={`w-full rounded-2xl max-w-100  sm:max-w-110 md:max-w-120 mx-auto object-contain `} src={img} alt="" />
                  </SwiperSlide>
                ))}
            </Swiper>
            {images?.length > 1 && (
              <>
                <div className="mt-4 sm:mt-0">
                  <Swiper
                    initialSlide={2}
                    className="product-swiper"
                    modules={[Thumbs]}
                    breakpoints={{
                      450: {
                        slidesPerView: 4,
                      },
                      650: {
                        slidesPerView: 4,
                      },
                      1024: {
                        slidesPerView: 6,
                      },
                      1200: {
                        slidesPerView: 6,
                      },
                    }}
                    slidesPerView={3}
                    spaceBetween={"10"}
                    onSwiper={setThumbsSwiper}
                  >
                    {images.map((img) => (
                      <SwiperSlide className="opacity-50 cursor-pointer">
                        <img className=" mx-auto max-h-30 object-contain " src={img} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <button className="modal-prev hidden size-12 sm:inline-block p-3  fill-gray absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer z-1 -rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 22 16">
                    <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
                  </svg>
                </button>{" "}
                <button className="modal-next hidden size-12 sm:inline-block p-3  fill-gray absolute top-1/2 left-1 -translate-y-1/2 cursor-pointer z-1 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 22 16">
                    <path d="M12.6542 15.0209L6.50534 8.68754C6.2819 8.49587 6.18737 8.24587 6.18737 8.00004C6.18737 7.75421 6.28139 7.50504 6.46933 7.31254L12.6542 0.979206C13.0495 0.577956 13.7026 0.561289 14.1151 0.940039C14.5319 1.32046 14.5448 1.95587 14.1538 2.35421L8.64089 8.00004L14.1581 13.6459C14.5488 14.0443 14.5341 14.6771 14.1178 15.06C13.7026 15.4375 13.0495 15.4209 12.6542 15.0209Z"></path>
                  </svg>
                </button>{" "}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
