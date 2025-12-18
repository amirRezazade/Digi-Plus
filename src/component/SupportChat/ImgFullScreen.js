export default function ImgFullScreen({ src, onclose }) {
  if (src) {
    document.body.classList.add("body-lock");
  } else document.body.classList.remove("body-lock");

  return (
    <div onMouseDown={(e) => e.target.classList.contains("modal-bg") && onclose(null)} className={`modal-bg hidden-scrollbar flex items-center justify-center transition-all duration-500 ${src ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
      <div className={` sm:max-w-full md:max-w-[750px] lg:max-w-[800px] xl:max-w-[930px] sm:max-h-[90vh] md:p-3 rounded-2xl overflow-hidden -rotate-y-100 opacity-0  invisible transition-all duration-900  ${src && "rotate-y-0!  opacity-100 visible"}`}>
        <img className="object-cover transition-all duration-500 rounded-2xl" src={src} alt="image-preview" />
      </div>
    </div>
  );
}
