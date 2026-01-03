import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import Dashboard from "./pages/MyAccount/Dashboard";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/shop/*" element={<Shop />} />
      <Route path="/my-account" element={<Dashboard />} />
      <Route path="/my-account/2" element={<h1>2</h1>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/auth" element={<h1>login</h1>} />
    </Routes>
  );
}
