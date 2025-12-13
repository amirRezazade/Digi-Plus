export default function TopCategoriesBtn({ name, id, category, onCategory, icon }) {
  return (
    <button onClick={() => onCategory(id)} className={`flex items-center gap-2 cursor-pointer rounded-full border border-light-gray py-1.5 px-3 transition-colors duration-300 ${category == id ? "text-white fill-white bg-org shadow-[-2px_0px_8px_#ff00001a]" : "shadow-[0px_4px_8px_0px_#6666661A] hover:text-red hover:bg-light hover:fill-red hover:border-org/40 hover:shadow-[-2px_0px_8px_#ff00001a]"} `}>
      <span>{icon}</span>
      <span>{name}</span>
    </button>
  );
}
