import SimpleTitle from "../../../component/titles/SimpleTitle";
import Title from "../../../component/titles/Title";
import video from "../../../assets/images/special-offer-video.mp4";
import poster from "../../../assets/images/special-offer-pster.png";
import { useState } from "react";
export default function SpecialOffer() {
  let [playVideo, setPlayVideo] = useState(false);
  return (
    <div className="custom-container flex flex-col xl:flex-row justify-between items-center lg:items-stretch lg:gap-5">
      <div className="lg:hidden w-full">
        <Title text={"پیشنهاد ویژه"} redText={"دیجی پلاس"} bgText={"Special offer"} />
      </div>

      {/* video  */}
      <div className="w-auto mx-auto rounded-4xl overflow-hidden relative">
        <video onClick={() => setPlayVideo(true)} src={video} poster={poster} controls></video>
        <div className={`pointer-events-none absolute top-1/2 left-1/2 -translate-1/2 size-20 lg:size-30 gradient rounded-full border-5 border-white flex items-center justify-center ${playVideo ? "hidden" : "flex"} `}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 42 48" fill="white">
              <path d="M39 18.8038C43 21.1133 43 26.8868 39 29.1962L8.99999 46.5167C4.99999 48.8261 -2.35776e-06 45.9393 -2.15587e-06 41.3205L-6.41661e-07 6.67948C-4.39766e-07 2.06068 5 -0.826063 9 1.48334L39 18.8038Z"></path>
            </svg>
          </span>
        </div>
      </div>
      {/* content  */}
      <div className="text-gray lg:w-2/3 mx-auto xl:w-1/2 xl:pl-5 mt-8 lg:mt-0 flex flex-col xl:justify-between gap-4 sm:gap-7 xl:gap-0 text-sm md:text-base ">
        <div className="hidden lg:inline-block">
          <SimpleTitle text={"پیشنهاد ویژه"} redText={"دیجی پلاس"} />
        </div>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه است.</p>
        <p className="">در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته دنیای موجود طراحی اساسا استفاده قرار گیرد.</p>
        <div>
          <button class="py-2.5 px-5 flex items-center gap-2 rounded-2xl gradient text-white transition-transform duration-300  hover:scale-105 ">
            <span>بیشتر بدانید</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M9.20299 11.2656L4.73111 6.51559C4.56861 6.37184 4.49986 6.18434 4.49986 5.99997C4.49986 5.81559 4.56824 5.62872 4.70493 5.48434L9.20299 0.734343C9.49049 0.433406 9.96549 0.420906 10.2655 0.704968C10.5686 0.990281 10.578 1.46684 10.2936 1.76559L6.28424 5.99997L10.2967 10.2343C10.5809 10.5332 10.5702 11.0078 10.2674 11.295C9.96549 11.5781 9.49049 11.5656 9.20299 11.2656Z" fill="white"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
