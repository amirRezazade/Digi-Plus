import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCart from "./../../component/carts/ProductCart";
import FilteringForm from "./FilteringForm";
import { FilterAndSortProduct, setUrl } from "./FilterAndSortProduct";
import SortAndShowProduct from "./SortAndShowProduct";
export default function Search() {
  let [products, setProducts] = useState(null);
  let [filteredProducts, setFilteredProducts] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  let [params, setParams] = useState({
    brands: searchParams.get("brand")?.toLocaleLowerCase().split("-") || [],
    categories: searchParams.get("categories")?.toLocaleLowerCase().split("-") || [],
    minPrice: searchParams.get("minPrice"),
    maxPrice: searchParams.get("maxPrice"),
    minDiscount: searchParams.get("minDiscount"),
    q: searchParams.get("q")?.toLocaleLowerCase() || null,
    minRating: searchParams.get("minRating") || null,
    sortBy: searchParams.get("sortBy")?.toLocaleLowerCase(),
    desc: searchParams.get("desc")?.toLocaleLowerCase(),
  });
  console.log(params);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=500")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  useMemo(() => {
    setFilteredProducts(FilterAndSortProduct(params, products));
  }, [params, products]);

  useEffect(() => {
    let sp = setUrl(params);
    setSearchParams(sp, { replace: true });
  }, [params]);

  return (
    products && (
      <main className="relative custom-container flex flex-col items-start lg:flex-row gap-8 lg:gap-6 py-10 min-h-screen">
        <div className="mx-auto w-full max-w-100 md:max-w-120 lg:max-w-65 xl:max-w-75 xl:min-w-75 lg:sticky top-10">
          <FilteringForm product={products} params={params} onParams={setParams} />
        </div>
        <SortAndShowProduct filteredProducts={filteredProducts} params={params} onParams={setParams} />
      </main>
    )
  );
}
