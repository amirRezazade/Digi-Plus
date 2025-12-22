import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import CompareModal from "./component/carts/CompareModal";
import ProductQuickViewModal from "./component/carts/ProductQuickViewModal";
import ScrollToTop from "./component/ScrollToTop";

import { CompareProvider } from "./contexts/CompareContext";
import { QuickViewProvider } from "./contexts/QuickViewContext";
import { ImgFullScreenProvider } from "./contexts/ImgFullScreenContext";
import ImgFullScreenModal from "./component/SupportChat/ImgFullScreenModal";

function App() {
  return (
    <CompareProvider>
      <QuickViewProvider>
        <ImgFullScreenProvider>
          <BrowserRouter>
            <ScrollToTop />
            <CompareModal />
            <ImgFullScreenModal />

            <ProductQuickViewModal />

            <AppRoutes />
          </BrowserRouter>
        </ImgFullScreenProvider>
      </QuickViewProvider>
    </CompareProvider>
  );
}

export default App;
