export default function Title({ text, redText }) {
  return (
    <div className="flex justify-between items-center gap-3 py-5 relative overflow-hidden">
      <div>
        <h5 className="font-bold px-2 text-black text-xl sm:text-2xl md:text-3xl">
          {text} <span className="text-red"> {redText}</span>
        </h5>
      </div>
    </div>
  );
}
