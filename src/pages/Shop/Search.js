import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCart from "./../../component/carts/ProductCart";
import Filter from "./Filter";
export default function Search() {
  const searchParams = Object.fromEntries(new URLSearchParams(window.location.search));
  let [products, setProducts] = useState(null);
  let [filteredProducts, setFilteredProducts] = useState(null);
  let params = {
    brands: searchParams.brand.toLowerCase().split("|"),
    categoryes: searchParams.category?.toLowerCase().split("|"),
    maxPrice: Number(searchParams.maxPrice),
    q: searchParams.q?.toLowerCase().trim(),
  };
  console.log(params);
  useEffect(() => {
    console.log("fetch");

    fetch("https://dummyjson.com/products?limit=500")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  const normalize = (v = "") => v.toString().toLowerCase().trim();

  useMemo(() => {
    if (!products) return null;
    if (params.length === 0) return setFilteredProducts(products);
    else {
      let list = [...products];
      if (params.brands) list = list.filter((p) => params.brands.includes(p.brand?.toLowerCase()));
      if (params.categoryes) list = list.filter((p) => params.categoryes.includes(p.category?.toLowerCase()));
      if (params.maxPrice) list = list.filter((p) => p.price < params.maxPrice || p.price == params.maxPrice);
      if (params.q) {
        list = list.filter((p) => {
          const text = normalize([p.title, p.brand, p.description, ...(p.tags || [])].join(" "));
          return text.includes(normalize(params.q));
        });
      }
      setFilteredProducts(list);
      console.log(list);
    }
  }, [products]);

  return (
    products && (
      <main className="custom-container flex flex-col lg:flex-row gap-5 py-10">
        <div className="w-83">
          <Filter product={products} />
        </div>
        <div className="grow grid grid-cols-4 gap-4">
          {filteredProducts?.map((p) => (
            <ProductCart key={p.id} product={p} />
          ))}
        </div>
      </main>
    )
  );
}
