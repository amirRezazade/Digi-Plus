export default function Title({ text, redText }) {
  return (
    <div className="flex justify-between items-center gap-3 mb-5">
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
