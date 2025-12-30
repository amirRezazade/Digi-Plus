const normalize = (v = "") => v.toString().toLowerCase().trim();

function FilterProducts(params, products) {
  console.log("fi");

  if (!products) return null;

  let list = [...products];
  if (params.brands.length) list = list.filter((p) => params.brands.includes(p.brand?.toLowerCase()));
  if (params.categories.length) list = list.filter((p) => params.categories.includes(p.category?.toLowerCase()));
  if (params.maxPrice) list = list.filter((p) => p.price < params.maxPrice || p.price == params.maxPrice);
  if (params.minPrice) list = list.filter((p) => p.price > params.minPrice || p.price == params.minPrice);
  if (params.minRating) list = list.filter((p) => Number(p.rating) > Number(params.minRating) || Number(p.rating) == Number(params.minRating));
  if (params.minDiscount) list = list.filter((p) => Number(p.discountPercentage) > Number(params.minDiscount) || Number(p.discountPercentage) == Number(params.minDiscount));
  if (params.q) {
    list = list.filter((p) => {
      const text = normalize([p.title, p.brand, ...(p.tags || [])].join(" "));
      return text.includes(normalize(params.q));
    });
  }
  return list;
}

function setUrl(params) {
  console.log(3);

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
  if (params.maxPrice && params.maxPrice < 40000) {
    sp.set("maxPrice", params.maxPrice);
  }
  if (params.minDiscount) {
    sp.set("minDiscount", params.minDiscount);
  }
  if (params.sortBy) {
    sp.set("sortBy", params.sortBy);
  }
  if (params.desc) {
    sp.set("desc", params.desc);
  }
  if (params.page > 1) {
    sp.set("page", params.page);
  }
  return sp;
}
function sortProducts(filteredProducts, sort, isDesc) {
  console.log("sort");

  let list = [...filteredProducts];
  if (!isDesc) {
    if (sort === "name")
      list.sort((a, b) => {
        let A = a.title.replace(/^\d+\s*/, "").toLowerCase();
        let B = b.title.replace(/^\d+\s*/, "").toLowerCase();
        return A.localeCompare(B, "en", { numeric: true });
      });
    else {
      list.sort((a, b) => b[sort] - a[sort]);
    }
  } else {
    if (sort === "name")
      list.sort((a, b) => {
        let A = a.title.replace(/^\d+\s*/, "").toLowerCase();
        let B = b.title.replace(/^\d+\s*/, "").toLowerCase();
        return B.localeCompare(A, "en", { numeric: true });
      });
    else {
      list.sort((a, b) => a[sort] - b[sort]);
    }
  }
  return list;
}

export { FilterProducts, setUrl, sortProducts };
