import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCart from "./../../component/carts/ProductCart";
import Filter from "./Filter";
export default function Search() {
  let [products, setProducts] = useState(null);
  let [filteredProducts, setFilteredProducts] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  let [params, setParams] = useState({
    brands: searchParams.get("brand")?.toLocaleLowerCase().split("-") || [],
    categories: searchParams.get("categories")?.toLocaleLowerCase().split("-") || [],
    minPrice: searchParams.get("minPrice"),
    maxPrice: searchParams.get("maxPrice"),
    sort: searchParams.get("sort")?.toLocaleLowerCase(),
    q: searchParams.get("q")?.toLocaleLowerCase() || null,
    minRating: searchParams.get("minRating") || null,
  });
  console.log(params);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=500")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const normalize = (v = "") => v.toString().toLowerCase().trim();

  useMemo(() => {
    if (!products) return null;

    let list = [...products];
    if (params.brands.length) list = list.filter((p) => params.brands.includes(p.brand?.toLowerCase()));
    if (params.categories.length) list = list.filter((p) => params.categories.includes(p.category?.toLowerCase()));
    if (params.maxPrice) list = list.filter((p) => p.price < params.maxPrice || p.price == params.maxPrice);
    if (params.minPrice) list = list.filter((p) => p.price > params.minPrice || p.price == params.minPrice);
    if (params.minRating) list = list.filter((p) => Number(p.rating) > Number(params.minRating) || Number(p.rating) == Number(params.minRating));
    if (params.q) {
      list = list.filter((p) => {
        const text = normalize([p.title, p.brand, ...(p.tags || [])].join(" "));
        return text.includes(normalize(params.q));
      });
    }
    console.log(list);
    setFilteredProducts(list);
  }, [params, products]);

  useEffect(() => {
    const sp = new URLSearchParams();
    if (params.brands.length) {
      sp.set("brand", params.brands.join("-"));
    }
    if (params.categories.length) {
      sp.set("categories", params.categories.join("-"));
    }
    if (params.sort) {
      sp.set("sort", params.sort);
    }
    if (params.q) {
      sp.set("q", params.q);
    }
    if (params.minRating) {
      sp.set("minRating", params.minRating);
    }
    if (params.minPrice) {
      sp.set("minPrice", params.minPrice);
    }
    if (params.maxPrice < 30000) {
      sp.set("maxPrice", params.maxPrice);
    }

    setSearchParams(sp, { replace: true });
  }, [params]);

  return (
    products && (
      <main className="custom-container flex flex-col lg:flex-row gap-5 py-10 min-h-screen">
        <div className="w-75 min-w-75 max-w-75">
          <Filter product={products} params={params} onParams={setParams} />
        </div>
        <div className="grow grid grid-cols-4 gap-4">{filteredProducts && [...filteredProducts].splice(0, 10).map((p) => <ProductCart key={p.id} product={p} />)}</div>
      </main>
    )
  );
}
