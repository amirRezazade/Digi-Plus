import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import { useEffect, useState } from "react";
import AddToShoppingCartBtn from "../btns/AddToShoppingCartBtn";
export default function NavbarProductsList() {
  const [active, setActive] = useState("digital");
  const [open, setOpen] = useState(null);
  const [openSubLink, setOpenSubLink] = useState(null);
  let [sponsorProduct, setSponsorProduct] = useState(null);
  const categories = [
    { id: "digital", title: "کالای دیجیتال" },
    { id: "homeAndChcken", title: "خانه و آشپزخانه" },
    { id: "womens", title: "زنانه" },
    { id: "mens", title: "مردانه" },
    { id: "skin", title: "لوازم آرایشی و پوستی" },
    { id: "food", title: "مواد غذایی" },
  ];

  const subCategories = {
    digital: [
      {
        id: 101,
        title: "گوشی ها",
        products: [
          { id: 136, name: "Vivo X21" },
          { id: 135, name: "Vivo V9" },
          { id: 134, name: "Vivo S1" },
          { id: 132, name: "Samsung Galaxy S8" },
          { id: 131, name: "Samsung Galaxy S7" },
          { id: 133, name: "Samsung Galaxy S10" },
          { id: 130, name: "Realme XT" },
          { id: 128, name: "Realme C35" },
          { id: 127, name: "Oppo K1" },
        ],
      },
      {
        id: 102,
        title: "لپ تاپ ها",
        products: [
          { id: 82, name: "Dell" },
          { id: 81, name: "Lenovo" },
          { id: 80, name: "Huawei" },
          { id: 79, name: "Asus" },
          { id: 78, name: "Apple" },
        ],
      },
      {
        id: 103,
        title: "تبلت ها",
        products: [
          { id: 159, name: "iPad Mini 2021" },
          { id: 160, name: " Galaxy Tab S8" },
          { id: 161, name: " Galaxy Tab White" },
        ],
      },
      {
        id: 104,
        title: "لوازم جانبی موبایل",
        products: [
          { id: 112, name: "TV Studio Camera" },
          { id: 111, name: "Selfie Stick Monopod" },
          { id: 109, name: "Monopod" },
          { id: 108, name: "iPhone 12 Case" },
          { id: 107, name: "Wireless Earphones" },
          { id: 104, name: "Apple iPhone Charger" },
          { id: 103, name: "Apple HomePod Mini " },
          { id: 99, name: "Amazon Echo Plus" },
          { id: 100, name: "Apple Airpods" },
          { id: 101, name: "Apple AirPods Max" },
        ],
      },
    ],
    homeAndChcken: [
      {
        id: 201,
        title: "دکوراسیون منزل",
        products: [
          { id: 47, name: "Table Lamp" },
          { id: 46, name: "Plant Pot" },
          { id: 45, name: "House Showpiece Plant" },
          { id: 44, name: " Tree Photo Frame" },
          { id: 43, name: "Decoration Swing" },
        ],
      },
      {
        id: 202,
        title: "مبلمان",
        products: [
          { id: 15, name: "Wooden Bathroom Sink" },
          { id: 14, name: " Executive Conference" },
          { id: 13, name: "Bedside Table" },
          { id: 12, name: "Annibale Colombo Sofa" },
          { id: 11, name: "Annibale Colombo Bed" },
        ],
      },
      {
        id: 203,
        title: "لوازم آشپزخانه",
        products: [
          { id: 77, name: "Yellow Peeler" },
          { id: 76, name: "Yellow Peeler" },
          { id: 75, name: "Tray" },
          { id: 74, name: "Spoon" },
          { id: 73, name: "Spice Rack" },
          { id: 72, name: "Slotted Turner" },
          { id: 68, name: "Pan" },
          { id: 70, name: "Red Tongs" },
          { id: 66, name: "Microwave Oven" },
          { id: 65, name: "Lunch Box" },
          { id: 64, name: "Knife" },
          { id: 62, name: "Ice Cube Tray" },
          { id: 61, name: "Hand Blender" },
          { id: 60, name: "Grater Black" },
          { id: 59, name: "Glass" },
          { id: 57, name: "Fine Mesh Strainer" },
          { id: 56, name: "Electric Stove" },
          { id: 55, name: "Egg Slicer" },
          { id: 49, name: "Black Aluminium Cup" },
          { id: 51, name: "Boxed Blender" },
          { id: 52, name: "Carbon Steel Wok" },
        ],
      },
    ],
    womens: [
      {
        id: 304,
        title: "لباس",
        products: [
          { id: 177, name: "Black Women's Gown" },
          { id: 178, name: "Corset Leather " },
          { id: 179, name: "Corset" },
          { id: 180, name: "Dress Pea" },
          { id: 181, name: "Marni Red & Black" },
        ],
      },
      {
        id: 306,
        title: "تاپ",
        products: [
          { id: 162, name: "Blue Frock" },
          { id: 163, name: "Girl Summer Dress" },
          { id: 164, name: "Gray Dress" },
          { id: 165, name: "Short Frock" },
          { id: 166, name: "Tartan Dress" },
        ],
      },
      {
        id: 303,
        title: "جواهرات",
        products: [
          { id: 182, name: "Green Crystal Earring" },
          { id: 183, name: "Green Oval Earring" },
          { id: 184, name: "Tropical Earring" },
        ],
      },
      {
        id: 302,
        title: "کفش",
        products: [
          { id: 185, name: "Black & Brown Slipper" },
          { id: 186, name: "Calvin Klein Shoes" },
          { id: 187, name: "Golden Shoes Woman" },
          { id: 188, name: "Pampi Shoes" },
          { id: 189, name: "Red Shoes" },
        ],
      },
      {
        id: 305,
        title: "کیف",
        products: [
          { id: 172, name: "Blue Women's Handbag" },
          { id: 173, name: "Women's Leather Bag" },
          { id: 174, name: "Prada Women Bag" },
          { id: 175, name: "Leather Backpack" },
          { id: 176, name: "Women Handbag Black" },
        ],
      },
      {
        id: 301,
        title: "ساعت زنانه",
        products: [
          { id: 190, name: "IWC Ingenieur" },
          { id: 191, name: "Rolex Cellini " },
          { id: 192, name: "Rolex Datejust Women" },
          { id: 193, name: "Watch Gold for Women" },
          { id: 194, name: "Women's Wrist Watch" },
        ],
      },
    ],
    mens: [
      {
        id: 401,
        title: "پیراهن مردانه",
        products: [
          { id: 87, name: "Men Check Shirt" },
          { id: 86, name: "Short Sleeve Shirt" },
          { id: 85, name: "Man Plaid Shirt" },
          { id: 84, name: "Gigabyte Aorus Tshirt" },
          { id: 83, name: "Blue & Black Shirt" },
        ],
      },
      {
        id: 402,
        title: "کفش مردانه",
        products: [
          { id: 92, name: "Sports Sneakers " },
          { id: 91, name: "Sports Sneakers " },
          { id: 90, name: "Future Rider Trainers" },
          { id: 89, name: "Nike Baseball Cleats" },
          { id: 88, name: "Nike Air Jordan 1" },
        ],
      },
      {
        id: 403,
        title: "ساعت مردانه",
        products: [
          { id: 98, name: "Submariner Watch" },
          { id: 97, name: "Datejust" },
          { id: 96, name: "Cellini Moonphase" },
          { id: 95, name: "Cellini Date Black Dial" },
          { id: 94, name: "Longines Master" },
          { id: 93, name: "Brown Leather Belt Watch" },
        ],
      },
    ],
    skin: [
      {
        id: 501,
        title: "لوازم آرایشی",
        products: [
          { id: 5, name: "Red Nail Polish" },
          { id: 4, name: "Red Lipstick" },
          { id: 3, name: "Powder Canister" },
          { id: 2, name: "Eyeshadow Palette" },
        ],
      },
      {
        id: 502,
        title: "عطر ها",
        products: [
          { id: 10, name: "Gucci Bloom Eau de " },
          { id: 9, name: "Dolce Shine Eau de" },
          { id: 8, name: "Dior J'adore " },
          { id: 7, name: "Chanel Coco Noir" },
          { id: 6, name: "Calvin Klein CK One " },
        ],
      },
      {
        id: 503,
        title: "مراقبت پوستی",
        products: [
          { id: 120, name: "Vaseline Men Body " },
          { id: 119, name: "Butter Body Wash" },
          { id: 118, name: "Attitude Super Leaves" },
        ],
      },
    ],
    food: [
      {
        id: 601,
        title: "مواد غذایی",
        products: [
          { id: 42, name: "Water" },
          { id: 40, name: "Strawberry" },
          { id: 39, name: "Soft Drinks" },
          { id: 38, name: "Rice" },
          { id: 37, name: "Red Onions" },
          { id: 36, name: "Protein Powder" },
          { id: 35, name: "Potatoes" },
          { id: 34, name: "Nescafe Coffee" },
          { id: 33, name: "Mulberry" },
          { id: 32, name: "Milk" },
          { id: 31, name: "Lemon" },
          { id: 30, name: "Kiwi" },
          { id: 29, name: "Juice" },
          { id: 28, name: "Ice Cream" },
          { id: 27, name: "Honey Jar" },
          { id: 26, name: "Green Chili Pepper" },
          { id: 25, name: "Green Bell Pepper" },
          { id: 24, name: "Fish Steak" },
          { id: 23, name: "Eggs" },
          { id: 22, name: "Dog Food" },
          { id: 21, name: "Cucumber" },
          { id: 20, name: "Cooking Oil" },
          { id: 19, name: "Chicken Meat" },
          { id: 18, name: "Cat Food" },
          { id: 17, name: "Beef Steak" },
          { id: 16, name: "Apple" },
        ],
      },
    ],
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products/159")
      .then((res) => res.json())
      .then((res) => setSponsorProduct(res));
  }, []);

  return (
    <div className="lg:absolute top-[180%] lg:opacity-0 lg:invisible group-hover:top-[135%] lg:border border-light-gray lg:shadow-sm group-hover:visible group-hover:opacity-100 transition-[opacity_top_visibility] duration-300 right-0 bg-white  lg:px-5 py-3 rounded-2xl w-full lg:w-[91vw]  2xl:max-w-[1400px] ">
      <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-15 gap-5 xl:gap-2 2xl:gap-5 items-stretch overflow-auto">
        {/* products categories  */}
        <ul className="lg:col-span-1 xl:col-span-2 2xl:col-span-3 flex flex-col justify-around lg:pe-5 xl:pe-2 2xl:pe-8 text-sm divide-y divide-light-gray text-dark lg:border-e border-light-gray">
          {categories.map((item) => (
            <li key={item.id} className={`transition-[max-height] duration-900 overflow-hidden lg:max-h-full ${open === item.id ? "max-h-200" : "max-h-12"}`} onMouseEnter={() => setActive(item.id)}>
              <button
                onClick={() => {
                  setOpenSubLink(null);
                  setOpen(open === item.id ? null : item.id);
                }}
                className={` w-full h-12 pe-3 lg:pe-0 flex items-center justify-between cursor-pointer transition-colors duration-600 lg:duration-300 text-nowrap ${active === item.id ? "lg:text-red" : "lg:text-dark"} ${open === item.id ? "fill-red text-red" : ""}`}
              >
                {item.title}
                <span className={`transition-transform duration-500 delay-100 lg:rotate-0  ${open === item.id ? "-rotate-90 " : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="currentcolor">
                    <path d="M3.97051 4.49551C3.67754 4.77453 3.67754 5.22765 3.97051 5.50667L7.72051 9.0781C8.01348 9.35712 8.48926 9.35712 8.78223 9.0781C9.07519 8.79908 9.07519 8.34596 8.78223 8.06694L5.56191 4.99997L8.77988 1.93301C9.07285 1.65399 9.07285 1.20087 8.77988 0.921849C8.48691 0.642831 8.01113 0.642831 7.71816 0.921849L3.96816 4.49328L3.97051 4.49551Z"></path>
                  </svg>
                </span>
              </button>
              <ul className="ps-2 lg:hidden transition-all mt-2">
                {subCategories[item.id].map((item) => (
                  <li key={item.title} className={` overflow-hidden my-2 transition-[max-height] duration-500 ${openSubLink === item.id ? "max-h-100" : "max-h-6"}`}>
                    <button onClick={() => setOpenSubLink(openSubLink == item.id ? null : item.id)} className="title-style  w-full text-start h-6 relative flex items-center justify-between ps-4 text-dark text-sm font-semibold ">
                      {item.title}
                      <span className={`transition-transform duration-500 delay-100 me-8 ${openSubLink === item.id ? "-rotate-90" : ""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="currentcolor">
                          <path d="M3.97051 4.49551C3.67754 4.77453 3.67754 5.22765 3.97051 5.50667L7.72051 9.0781C8.01348 9.35712 8.48926 9.35712 8.78223 9.0781C9.07519 8.79908 9.07519 8.34596 8.78223 8.06694L5.56191 4.99997L8.77988 1.93301C9.07285 1.65399 9.07285 1.20087 8.77988 0.921849C8.48691 0.642831 8.01113 0.642831 7.71816 0.921849L3.96816 4.49328L3.97051 4.49551Z"></path>
                        </svg>
                      </span>
                    </button>
                    <ul className="text-gray text-sm ps-4 py-2 flex flex-col gap-1">
                      {item.products.map((product) => (
                        <NavbarLink key={product.id} text={product.name} to={`/product/${product.id}`} />
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {/* proudcts list  */}
        <div className="hidden lg:inline-block lg:col-span-4 xl:col-span-10 2xl:col-span-9 text-dark">
          <div className=" columns-4 gap-3 [column-rule:1px_solid_#e5e7eb] max-h-80  w-full">
            <div className=" break-inside-avoid-column text-gray text-sm ps-4 xl:ps-2">
              {subCategories[active].map((item) => (
                <div key={item.id}>
                  <h3 className="title-style relative ms:2 xl:ms-4 my-2 text-dark font-semibold  before:-right-3!">{item.title}</h3>
                  {item.products.map((product) => (
                    <NavbarLink key={product.id} text={product.name} to={`/product/${product.id}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* product list img  */}
        <div className="hidden xl:inline-block xl:col-span-3 2xl:ps-4">
          <div className="flex flex-col border border-org p-3 rounded-xl relative">
            <span className="p-0.5 gradient shadow-sm shadow-org text-[10px] w-auto absolute top-2 left-2 rounded-md">فروش ویژه!</span>
            <Link to={"/product/159"}>
              <img className="my-3 size-40 mx-auto" src="https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp" alt="iPad Mini 2021 " />
              <p className="text-gray text-xs text-center">iPad Mini 2021 Starlight با دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت</p>
            </Link>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-light-gray">
              {sponsorProduct && <AddToShoppingCartBtn product={sponsorProduct} />}
              <div>
                <div className="felx items-center text-sm">
                  <span class="text-xs px-1 sm-shaddow gradient rounded text-white">%3.64</span>
                  <span class="text-gray/80 line-through text-sm mx-2">$518.88</span>
                </div>
                <p className="text-xl text-red text-end mt-1 font-bold">499.99$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
}
