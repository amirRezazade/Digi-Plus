import { useNavigate } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import CheckoutMain from "./CheckoutMain";
import { getLocal } from "../../utils/funcs";
import { useEffect } from "react";

export default function Checkout() {
  const navigate = useNavigate();
  const cart = getLocal("cart") || [];
  useEffect(() => {
    if (!cart || cart.length === 0) {
      navigate("/cart", { replace: true });
    }
  }, [cart, navigate]);
  return (
    <>
      <Navbar />
      <CheckoutMain />
      <Footer />
    </>
  );
}
