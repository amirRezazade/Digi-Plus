import Navbar from "../../component/navbar/Navbar";
import HomeCategorySlider from "./HomeCategorySlider";
import HomeDayOffersSlider from "./HomeDayOffersSlider";
import HomeMainSlider from "./HomeMainSlider";
export default function Home() {
  return (
    <>
      <Navbar />
      <header className="custom-container py-8 text-center text-gray -z-1">
        <div className="xl:grid grid-cols-12 items-center gap-6 justify-between select-none ">
          <HomeMainSlider />
          <HomeDayOffersSlider />
        </div>
        <div className="my-10 md:my-15 text-sm">
          <HomeCategorySlider />
        </div>
      </header>
    </>
  );
}
