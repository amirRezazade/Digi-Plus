import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilteringForm from "./FilteringForm";
import { FilterProducts, setUrl, setSortingUrl } from "./FilterAndSortProduct";
import ShowProducts from "./products";
export default function Search() {
  let [products, setProducts] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  let [params, setParams] = useState({
    brands: [],
    categories: [],
    minPrice: null,
    maxPrice: null,
    minDiscount: null,
    q: null,
    minRating: null,
  });
  let [sorting, setSorting] = useState({
    sortBy: "name",
    desc: false,
    page: 1,
  });

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      brands: searchParams.get("brand")?.toLowerCase().split("-") || [],
      categories: searchParams.get("categories")?.toLowerCase().split("-") || [],
      minPrice: searchParams.get("minPrice"),
      maxPrice: searchParams.get("maxPrice"),
      minDiscount: searchParams.get("minDiscount"),
      q: searchParams.get("q")?.toLowerCase() || null,
      minRating: searchParams.get("minRating"),
    }));

    setSorting((prev) => ({
      ...prev,
      sortBy: searchParams.get("sortBy")?.toLowerCase() || "name",
      desc: searchParams.get("desc") === "true",
      page: Number(searchParams.get("page")) || 1,
    }));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=500")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = useMemo(() => {
    console.count("filter run");
    console.log(FilterProducts(params, products));

    return FilterProducts(params, products);
  }, [products, params.q, params.minPrice, params.maxPrice, params.minDiscount, params.minRating, params.brands.join(","), params.categories.join(",")]);

  useEffect(() => {
    let sp = setUrl(params);
    setSearchParams(sp, { replace: true });
  }, [params]);
  useEffect(() => {
    let sp = setSortingUrl(sorting);
    setSearchParams(sp, { replace: true });
  }, [sorting]);

  return (
    products && (
      <main className="relative custom-container flex flex-col items-start lg:flex-row gap-8 lg:gap-6 py-10 ">
        <div className="mx-auto w-full max-w-100 md:max-w-120 lg:max-w-65 xl:max-w-75 xl:min-w-75 lg:sticky top-10">
          <FilteringForm params={params} onParams={setParams} />
        </div>
        <ShowProducts filteredProducts={filteredProducts || []} sorting={sorting} onSorting={setSorting} params={params} />
      </main>
    )
  );
}
