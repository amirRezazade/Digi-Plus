import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImagesSlider from "./ProductHeader/ProductImagesSlider";
import BreadCrump from "./ProductHeader/BreadCrump";
import ProductInfo from "./ProductHeader/ProductInfo";

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
      <header className="custom-container">
        {/* bread crump */}
        <BreadCrump category={response.category} brand={response.brand} title={response.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ProductImagesSlider images={response.images} id={response.id} />
          <ProductInfo data={response} />
        </div>
      </header>
    )
  );
}
