export default function ContactForm(params) {
  return (
    <div className="max-w-110 w-full gray-shaddow border border-light-gray/40 rounded-2xl p-4">
      <div className="border-b border-light-gray/80 pb-3">
        <h2 className="text-lg font-bold text-dark py-1">
          درخواست مشاوره<span className="text-red"> رایگان</span>
        </h2>
        <p className="">کارشناسان ما در اسرع وقت پاسخگو شما خواهند بود.</p>
      </div>
      <form className="py-4">
        <div className="">
          <label htmlFor="full-name" className="text-dark">
            نام خانوادگی
          </label>
          <input type="text" id="full-name" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" />
        </div>
        <div className="">
          <label htmlFor="phone" className="text-dark">
            شماره تماس
          </label>
          <input type="number" id="phone" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" />
        </div>
        <div className="">
          <label htmlFor="email" className="text-dark">
            آدرس ایمیل
          </label>
          <input type="email" id="email" className="block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" />
        </div>
        <div className="">
          <label htmlFor="message" className="text-dark">
            شرح کامل درخواست
          </label>
          <textarea id="message" className="max-h-40 min-h-20 block w-full my-2 py-2 px-3 outline-0 border border-light-gray focus:border-org rounded-lg" placeholder="پیام شما..."></textarea>
        </div>
      </form>
    </div>
  );
}
