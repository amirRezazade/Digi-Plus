import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import SupportCat from "../../component/SupportChat/SupportCat";
import Main from "./Main";

export default function Product() {
  return (
    <>
      <Navbar />

      <main className="">
        <Main />
      </main>
      <footer className="mt-20">
        <Footer />
      </footer>

      {/* start support chat  */}
      <SupportCat />
      {/* finish support chat  */}
    </>
  );
}
