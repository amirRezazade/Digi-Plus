import Navbar from "../../component/navbar/Navbar";
import Title from "../../component/titles/Title";
import HomeCategorySlider from "./Header/CategorySlider";
import HomeDayOffersSlider from "./Header/DayOffersSlider";
import HomeMainSlider from "./Header/MainSlider";
import bgRounded from "../../assets/images/bg-images/bg-round.png";
import AmazingOffers from "./AmazingOffer/AmazingOffers";
import ProductQuickViewModal from "../../component/carts/ProductQuickViewModal";
import { createContext, useState } from "react";
import CompareModal from "../../component/carts/CompareModal";
import PopularBrandsSlider from "./PopularBrands/PopularBrandsSlider";
import TopCategories from "./TopCategories/TopCategories";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import Banners from "./Banners/Banners";
import Footer from "../../component/footer/Footer";
import SupportCat from "../../component/SupportChat/SupportCat";
import ImgFullScreen from "../../component/SupportChat/ImgFullScreen";

export const CompareContext = createContext();
export const quickViewContext = createContext();
export default function Home() {
  let [quickViewId, setQuickViewId] = useState(null);
  let [compareToggle, setCompareToggle] = useState(false);
  let [compareMaxLengthMessage, setCompareMaxLengthMessage] = useState(false);
  let [imgFullScreen, setImgFullScreen] = useState(null);
  return (
    <>
      <quickViewContext.Provider value={{ setQuickViewId }}>
        <CompareContext.Provider value={{ compareToggle, setCompareToggle, compareMaxLengthMessage, setCompareMaxLengthMessage }}>
          <Navbar />
          <header className="custom-container py-8 text-center text-gray -z-1">
            <div className="xl:grid grid-cols-12 items-center gap-6 justify-between select-none ">
              <HomeMainSlider />
              <HomeDayOffersSlider />
            </div>
            <div className="my-10 md:my-15 text-sm">
              <div className="sm:hidden">
                <Title text={"دسته‌بندی‌"} redText={"محصولات"} />
              </div>
              <HomeCategorySlider />
            </div>
          </header>
          {/* start Amazing offers section  */}
          <section className="relative ">
            <img className="hidden xl:inline-block absolute right-0 top-0" src={bgRounded} alt="" />
            <AmazingOffers />
            <img className="hidden xl:inline-block absolute left-0 top-0 rotate-180" src={bgRounded} alt="" />
          </section>

          <ProductQuickViewModal productId={quickViewId} onQuickview={(id) => setQuickViewId(id)} />
          <CompareModal />
          {/* finish Amazing offers section  */}
          {/* start top categories section  */}
          <section className="mt-10 md:mt-15 xl:mt-22">
            <div className="custom-container">
              <div className="md:px-30">
                <Title text={"دسته‌بندی‌های"} redText={"منتخب"} bgText={"top categories"} />
              </div>
              <TopCategories />
            </div>
          </section>
          {/* finish top categories section  */}
          {/* start popular brands section  */}
          <section className="mt-10 md:mt-15 xl:mt-22">
            <div className="custom-container">
              <div className="md:px-30">
                <Title text={"محبوب ترین"} redText={"برند‌ها"} bgText={"popular brands"} />
              </div>
              <PopularBrandsSlider />
            </div>
          </section>
          {/* finish popular brands section  */}
          {/* start special offer  */}
          <section className="mt-10 md:mt-15 xl:mt-22 sm:py-10 relative">
            <img className="hidden lg:inline-block absolute right-0 top-1/3 xl:top-0 -z-2" src={bgRounded} alt="" />
            <SpecialOffer />
            <img className="hidden lg:inline-block absolute left-0 bottom-0 rotate-180 -z-2" src={bgRounded} alt="" />
          </section>
          {/* finish special offer  */}
          {/* start banners section  */}
          <section className="hidden xs:block  md:mt-10 xl:mt-15">
            <Banners />
          </section>
          {/* finish banners section  */}
          <footer className="mt-20">
            <Footer />
          </footer>
          {/* start support chat  */}
          <SupportCat onShowImg={(src) => setImgFullScreen(src)} />
          <ImgFullScreen src={imgFullScreen} onclose={() => setImgFullScreen(null)} />
          {/* finish support chat  */}
        </CompareContext.Provider>
      </quickViewContext.Provider>
    </>
  );
}
