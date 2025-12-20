import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImagesSlider from "./ProductHeader/ProductImagesSlider";
import BreadCrump from "./ProductHeader/BreadCrump";
import ProductInfo from "./ProductHeader/ProductInfo";
import ProductBuyCart from "./ProductBuyCart";

export default function Main() {
  let { id } = useParams();
  let [response, setResponse] = useState(null);

  useEffect(() => {
    console.log(id);
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => (setResponse(data), console.log(data)));
    }
  }, [id]);

  return (
    response && (
      <header className="relative custom-container ">
        {/* bread crump */}
        <BreadCrump category={response.category} brand={response.brand} title={response.title} />
        <div className="relative  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 items-center">
          <div className="md:col-span-2">
            <ProductImagesSlider images={response.images} id={response.id} />
          </div>
          <div className="md:col-span-1 lg:col-span-2 xl:col-span-1">
            <ProductInfo data={response} />
          </div>
          <div className="md:col-span-1 ">
            <ProductBuyCart data={response} />
          </div>
        </div>
      </header>
    )
  );
}
