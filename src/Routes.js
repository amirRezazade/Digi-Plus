import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/shop/*" element={<Shop />} />
      <Route path="/auth" element={<h1>login</h1>} />
    </Routes>
  );
}
