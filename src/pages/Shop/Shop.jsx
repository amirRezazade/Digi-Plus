import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import SupportCat from "../../component/SupportChat/SupportCat";
import Search from "./Search";
import "./shop.css";
export default function Shop() {
  return (
    <>
      <Navbar />
      <Search />
      <Footer />
      <SupportCat />
    </>
  );
}
