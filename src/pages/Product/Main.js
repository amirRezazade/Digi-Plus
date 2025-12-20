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
        <div className=" relative grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 justify-between gap-5 xl:gap-8 lg:gap-y-0 xl:items-start">
          <div className="md:col-span-4 lg:col-span-3 xl:col-span-3">
            <ProductImagesSlider images={response.images} id={response.id} />
          </div>
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-2">
            <ProductInfo data={response} />
          </div>
          <div className="md:col-span-2 lg:col-span-2 lg:order-4 xl:order-0 xl:col-span-2 lg:sticky top-4 md:mt-16 lg:mt-0 xl:mt-16 h-fit">
            <ProductBuyCart data={response} />
          </div>
          <div className="col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-5 min-h-500 bg-blue-300">{/* reviews  */}</div>
        </div>
      </header>
    )
  );
}
