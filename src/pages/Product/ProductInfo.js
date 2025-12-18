import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImagesSlider from "./ProductHeader/ProductImagesSlider";

export default function ProductInfo() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <ProductImagesSlider images={response.images} />
          <div></div>
        </div>
      </header>
    )
  );
}
