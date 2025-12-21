import { Link } from "react-router-dom";

export default function ProductInfo({ data }) {
  return (
    <>
      <h1 className="md:w-[90vw] lg:w-auto xl:w-[50vw] text-3xl text-center py-3 border-b border-light-gray text-dark">{data.title}</h1>
      <div className=" pt-6 text-gray text-sm">
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex items-center gap-3">
            امتیاز:
            <span
              className="flex gap-1.5 text-transparent text-3xl relative"
              style={{
                background: `linear-gradient(
          90deg,
          #faa307 ${Math.floor((data.rating / 5) * 100)}%,
          #e0e0e0 ${Math.floor((data.rating / 5) * 100)}%
        )`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ★★★★★
            </span>
            <span className="text-dark  text-base ">{data.rating}</span>
          </div>
          <p>
            برند:
            {data.brand ? (
              <Link to={`/shop/brand=${data.brand}`} className="text-red px-2">
                {data.brand}
              </Link>
            ) : (
              <span className="px-3">-------</span>
            )}
          </p>
          <p>
            دسته بندی:
            {data.category ? (
              <Link to={`/shop/category=${data.category}`} className="text-red px-2">
                {data.category}
              </Link>
            ) : (
              <span className="px-3">دسته بندی نشده</span>
            )}
          </p>
          <p className="text-justify  xl:text-sm text-base 2xl:text-base">{data.description}</p>
          <div className="flex justify-between items-center gap-3">
            <div>
              <span className="text-dark">ویژگی های محصول</span>
              <div className="flex items-baseline gap-8 mt-4">
                <ul className="flex flex-col gap-1.5">
                  <li className="relative pr-4  list-decration">وزن</li>
                  <li className="relative pr-4  list-decration">طول</li>
                  <li className="relative pr-4  list-decration">ارتفاع</li>
                  <li className="relative pr-4  list-decration">عمق</li>
                </ul>
                <ul className="flex flex-col gap-1.5 text-dark">
                  <li>{data.weight}</li>
                  <li>{data.dimensions.width}</li>
                  <li>{data.dimensions.height}</li>
                  <li>{data.dimensions.depth}</li>
                </ul>
              </div>
            </div>
            <img className="max-w-38" src={data.meta.qrCode} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
