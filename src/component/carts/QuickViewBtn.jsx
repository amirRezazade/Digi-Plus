import { useQuickView } from "../../contexts/QuickViewContext.jsx";

export default function QuickViewBtn({ id }) {
  let { setId } = useQuickView();

  return (
    <button onClick={() => setId(id)} className="p-1 cursor-pointer relative group/item">
      <span className="stroke-gray hover:stroke-org fill-white">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Search_Magnifying_Glass">
              <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" strokeWidth="1.08" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </g>
        </svg>
      </span>
      <span className="opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible group-hover/item:left-[160%] transition-[opacity_visibility] duration-400 absolute top-1/2 -translate-y-1/2 left-[140%] bg-red text-white text-[10px] rounded px-1.5 py-0.5 text-nowrap before:absolute before:size-1.5 before:bg-red before:top-1/2 before:-translate-1/2 before:rotate-45  before:left-0 ">مشاهده سریع</span>
    </button>
  );
}
