import { Link } from "react-router-dom";

export default function BreadCrump({ response, category, brand, title }) {
  return (
    <div className="flex items-center gap-3 text-gray text-sm text-nowrap overflow-auto hidden-scrollbar my-5 px-4">
      <Link to={"/"} className="stroke-gray hover:stroke-org fill-white">
        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="style=linear" clipPath="url(#clip0_1_129)">
              <g id="home-door">
                <path id="vector" d="M19 23H5C3.34315 23 2 21.6569 2 20V11.563C2 10.4094 2.49808 9.31192 3.36639 8.55236L10.0248 2.72784C11.1558 1.7385 12.8442 1.73851 13.9752 2.72784L20.6336 8.55236C21.5019 9.31192 22 10.4094 22 11.563V20C22 21.6569 20.6569 23 19 23Z" strokeWidth="1.5" strokeLinecap="round"></path> <path id="vector_2" d="M12 16L12 19" strokeWidth="1.5" strokeLinecap="round"></path>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_129">
                <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)"></rect>
              </clipPath>
            </defs>
          </g>
        </svg>
      </Link>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
          <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"></path>
        </svg>
      </span>
      {category && (
        <>
          <Link to={`/shop/category=${category}`} className="hover:text-org">
            {category}
          </Link>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
              <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"></path>
            </svg>
          </span>
        </>
      )}
      {brand && (
        <>
          <Link to={`/shop/brand=${brand}`} className="hover:text-org">
            {brand}
          </Link>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
              <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z"></path>
            </svg>
          </span>
        </>
      )}
      {title && <span className="text-dark">{title}</span>}
    </div>
  );
}
