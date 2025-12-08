import Navbar from "../../component/navbar/Navbar";
import Title from "../../component/titles/Title";
import HomeCategorySlider from "./HomeCategorySlider";
import HomeDayOffersSlider from "./HomeDayOffersSlider";
import HomeMainSlider from "./HomeMainSlider";
import bgRounded from "../../assets/images/bg-images/bg-round.png";
import AmazingOffers from "./AmazingOffer/AmazingOffers";
import ProductQuickViewModal from "../../component/carts/ProductQuickViewModal";
import { createContext, useState } from "react";
import CompareModal from "../../component/carts/CompareModal";

export const CompareContext = createContext();
export default function Home() {
  let [quickViewId, setQuickViewId] = useState(null);
  let [compareToggle, setCompareToggle] = useState(false);
  let [compareMaxLengthMessage, setCompareMaxLengthMessage] = useState(false);
  return (
    <>
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
      <CompareContext.Provider value={{ compareToggle, setCompareToggle, compareMaxLengthMessage, setCompareMaxLengthMessage }}>
        <section className="relative">
          <img className="hidden xl:inline-block absolute right-0 top-0" src={bgRounded} alt="" />
          <AmazingOffers onQuickview={(id) => setQuickViewId(id)} />
          <img className="hidden xl:inline-block absolute left-0 top-0 rotate-180" src={bgRounded} alt="" />
        </section>

        <ProductQuickViewModal productId={quickViewId} onQuickview={(id) => setQuickViewId(id)} />
        <CompareModal />
      </CompareContext.Provider>
    </>
  );
}
