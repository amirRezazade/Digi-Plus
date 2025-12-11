export default function Title({ text, redText, bgText }) {
  return (
    <div className="flex justify-between items-center gap-3 py-10 relative overflow-hidden">
      {bgText && <p className="title-bg-text">{bgText}</p>}

      <span className="border-b-2 border-light-gray grow"></span>
      <div>
        <h5 className="font-bold px-2 text-black text-xl sm:text-2xl md:text-3xl">
          {text} <span className="text-red"> {redText}</span>
        </h5>
      </div>
      <span className="border-b-2 border-light-gray grow"></span>
    </div>
  );
}
