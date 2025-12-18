import { useState } from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import ImgFullScreen from "../../component/SupportChat/ImgFullScreen";
import SupportCat from "../../component/SupportChat/SupportCat";
import ProductInfo from "./ProductInfo";

export default function Product() {
  let [imgFullScreen, setImgFullScreen] = useState(null);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <ProductInfo />
      </main>
      <footer className="mt-20">
        <Footer />
      </footer>

      {/* start support chat  */}
      <SupportCat onShowImg={(src) => setImgFullScreen(src)} />
      <ImgFullScreen src={imgFullScreen} onclose={() => setImgFullScreen(null)} />
      {/* finish support chat  */}
    </>
  );
}
