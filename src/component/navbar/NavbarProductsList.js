import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import { useState } from "react";

export default function NavbarProductsList() {
  const [active, setActive] = useState("womens");
  const [open, setOpen] = useState("womens");
  const [openSubLink, setOpenSubLink] = useState(null);

  const categories = [
    { id: "digital", title: "کالای دیجیتال" },
    { id: "homeAndChcken", title: "خانه و آشپزخانه" },
    { id: "womens", title: "زنانه" },
    { id: "mens", title: "مردانه" },
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
          { id: 14, name: " Executive Conference Chair" },
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
        id: 301,
        title: "لوازم آرایشی",
        products: [
          { id: 5, name: "Red Nail Polish" },
          { id: 4, name: "Red Lipstick" },
          { id: 3, name: "Powder Canister" },
          { id: 2, name: "Eyeshadow Palette" },
        ],
      },
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
        id: 303,
        title: "جواهرات",
        products: [
          { id: 182, name: "Green Crystal Earring" },
          { id: 183, name: "Green Oval Earring" },
          { id: 184, name: "Tropical Earring" },
        ],
      },
    ],
  };

  return (
    <div className="lg:absolute top-[180%]  group-hover:top-[135%] lg:border border-light-gray lg:shadow-sm group-hover:visible group-hover:opacity-100 transition-[opacity_top_visibility] duration-300 right-0 bg-white  lg:px-5 py-3 rounded-2xl w-full lg:w-[90vw]  2xl:max-w-[1400px] ">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 xl:gap-2 2xl:gap-5 items-start overflow-auto">
        {/* products categories  */}
        <ul className="relative lg:col-span-1 flex flex-col lg:pe-5 xl:pe-8 divide-y divide-light-gray text-dark lg:border-e border-light-gray">
          {categories.map((item) => (
            <li key={item.id} className={`transition-[max-height] duration-900 overflow-hidden lg:max-h-12 ${open === item.id ? "max-h-200" : "max-h-12"}`} onMouseEnter={() => setActive(item.id)}>
              <button
                onClick={() => {
                  setOpen(open === item.id ? null : item.id);
                  setOpenSubLink(null);
                }}
                className={` w-full h-12 pe-3 lg:pe-0 flex items-center justify-between cursor-pointer transition-colors duration-600 lg:duration-300  ${active === item.id ? "lg:text-red" : "lg:text-dark"} ${open === item.id ? "fill-red text-red" : ""}`}
              >
                {item.title}
                <span className={`transition-transform duration-500 delay-100 lg:rotate-0  ${open === item.id ? "-rotate-90 " : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="currentcolor">
                    <path d="M3.97051 4.49551C3.67754 4.77453 3.67754 5.22765 3.97051 5.50667L7.72051 9.0781C8.01348 9.35712 8.48926 9.35712 8.78223 9.0781C9.07519 8.79908 9.07519 8.34596 8.78223 8.06694L5.56191 4.99997L8.77988 1.93301C9.07285 1.65399 9.07285 1.20087 8.77988 0.921849C8.48691 0.642831 8.01113 0.642831 7.71816 0.921849L3.96816 4.49328L3.97051 4.49551Z"></path>
                  </svg>
                </span>
              </button>
              <ul className="ps-2 lg:hidden transition-all mt-2">
                {subCategories[active].map((item) => (
                  <li key={item.id} className={` overflow-hidden my-2 transition-[max-height] duration-500 ${openSubLink === item.id ? "max-h-100" : "max-h-6"}`}>
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
        <div className="hidden lg:inline-block lg:col-span-4 xl:col-span-3 text-dark">
          <div className=" columns-4 gap-3 [column-rule:1px_solid_#e5e7eb] max-h-80  w-full">
            <div className=" break-inside-avoid-column text-gray text-sm ps-4 xl:ps-2">
              {subCategories[active].map((item) => (
                <>
                  <h3 className="title-style relative ms:2 xl:ms-4 my-2 text-dark font-semibold  before:-right-3!">{item.title}</h3>
                  {item.products.map((product) => (
                    <NavbarLink text={product.name} to={`/product/${product.id}`} />
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>
        {/* product list img  */}
        <div className="hidden xl:inline-block  xl:ps-4">
          <div className="flex flex-col border border-org p-3 rounded-xl relative">
            <span className="p-0.5 gradient shadow-sm shadow-org text-[10px] w-auto absolute top-2 left-2 rounded-md">فروش ویژه!</span>
            <Link to={"/product/id"}>
              <img className="my-3 size-40 mx-auto" src="https://digiplus.aet-web.ir/wp-content/uploads/2025/01/mob2.svg" alt="" />
              <p className="text-gray text-xs text-center">گوشی موبایل شیائومی مدل Redmi Note 13 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت</p>
            </Link>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-light-gray">
              <button className="size-11 rounded-xl flex justify-center items-center gradient cursor-pointer">
                <svg className="m-0" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2099_13129)">
                    <path
                      d="M-0.833496 1.526C-0.833496 1.04976 -0.461968 0.666626 -0.00016284 0.666626H1.5797C2.51373 0.666626 3.31581 1.35055 3.48942 2.29586L4.77414 9.26038H15.1109C15.4894 9.26038 15.8193 8.99898 15.9165 8.62301L17.5276 2.44983C17.6457 1.9915 18.104 1.71936 18.5484 1.84469C18.9929 1.97001 19.2568 2.43909 19.1353 2.89742L17.5241 9.0706C17.229 10.1949 16.2394 10.9791 15.1109 10.9791H5.09359L5.28109 11.9996C5.35748 12.4043 5.70123 12.6979 6.10053 12.6979H16.1109C16.5728 12.6979 16.9443 13.081 16.9443 13.5573C16.9443 14.0335 16.5728 14.4166 16.1109 14.4166H6.10053C4.89914 14.4166 3.86789 13.5358 3.64567 12.3219L1.854 2.61812C1.8297 2.48206 1.71511 2.38538 1.5797 2.38538H-0.00016284C-0.461968 2.38538 -0.833496 2.00224 -0.833496 1.526ZM3.61095 17.2812C3.61095 17.0555 3.65406 16.832 3.73782 16.6235C3.82157 16.4149 3.94434 16.2255 4.0991 16.0659C4.25387 15.9063 4.4376 15.7797 4.63981 15.6933C4.84202 15.6069 5.05874 15.5625 5.27761 15.5625C5.49648 15.5625 5.71321 15.6069 5.91542 15.6933C6.11763 15.7797 6.30136 15.9063 6.45613 16.0659C6.61089 16.2255 6.73366 16.4149 6.81741 16.6235C6.90117 16.832 6.94428 17.0555 6.94428 17.2812C6.94428 17.5069 6.90117 17.7304 6.81741 17.9389C6.73366 18.1475 6.61089 18.3369 6.45613 18.4965C6.30136 18.6562 6.11763 18.7828 5.91542 18.8691C5.71321 18.9555 5.49648 19 5.27761 19C5.05874 19 4.84202 18.9555 4.63981 18.8691C4.4376 18.7828 4.25387 18.6562 4.0991 18.4965C3.94434 18.3369 3.82157 18.1475 3.73782 17.9389C3.65406 17.7304 3.61095 17.5069 3.61095 17.2812ZM15.2776 15.5625C15.7196 15.5625 16.1436 15.7435 16.4561 16.0659C16.7687 16.3882 16.9443 16.8254 16.9443 17.2812C16.9443 17.7371 16.7687 18.1742 16.4561 18.4965C16.1436 18.8189 15.7196 19 15.2776 19C14.8356 19 14.4117 18.8189 14.0991 18.4965C13.7865 18.1742 13.6109 17.7371 13.6109 17.2812C13.6109 16.8254 13.7865 16.3882 14.0991 16.0659C14.4117 15.7435 14.8356 15.5625 15.2776 15.5625ZM11.1109 2.38538V3.81767H12.4998C12.9616 3.81767 13.3332 4.20081 13.3332 4.67704C13.3332 5.15328 12.9616 5.53642 12.4998 5.53642H11.1109V6.96871C11.1109 7.44495 10.7394 7.82808 10.2776 7.82808C9.81581 7.82808 9.44428 7.44495 9.44428 6.96871V5.53642H8.05539C7.59359 5.53642 7.22206 5.15328 7.22206 4.67704C7.22206 4.20081 7.59359 3.81767 8.05539 3.81767H9.44428V2.38538C9.44428 1.90914 9.81581 1.526 10.2776 1.526C10.7394 1.526 11.1109 1.90914 11.1109 2.38538Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2099_13129">
                      <rect width="20" height="18.3333" fill="white" transform="translate(0 0.666626)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <div>
                <div className="felx items-center text-sm">
                  <span className="text-org shadow shadow-light rounded ">6%</span>
                  <span className="text-gray/80 px-3 line-through">555$</span>
                </div>
                <p className="text-xl text-red text-center">444$</p>
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
