import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Checkout/Payment";
import MyAccount from "./pages/MyAccount/MyAccount";
import PrivateRoute from "./component/PrivateRoute";
import Auth from "./pages/Auth/Auth";
import ContactUs from "./pages/Contact-Us/ContactUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/shop/*" element={<Shop />} />
      <Route
        path="/my-account/*"
        element={
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        }
      />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
