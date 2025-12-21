export default function AddComment() {
  return (
    <div className="border border-light-gray rounded-2xl p-5">
      <h3 className="text-black text-large mb-3">
        ثبت
        <span className="text-red"> دیدگاه</span>
      </h3>
      <form className="text-gray text-sm">
        <div>
          <label htmlFor="full-name" className="cursor-pointer">
            نام و نام خانوادگی شما <span className="text-red">*</span>
          </label>
          <input className="border border-light-gray outline-0 rounded-lg block w-full my-3 p-2 " type="text" id="full-name" />
        </div>
        <div>
          <label htmlFor="email" className="cursor-pointer">
            ایمیل <span className="text-red">*</span>
          </label>
          <input className="border border-light-gray outline-0 rounded-lg block w-full my-3 p-2 " type="email" id="email" />
        </div>
        <div>
          <label htmlFor="text" className="cursor-pointer">
            پیام شما
          </label>
          <textarea className="border border-light-gray outline-0 rounded-lg block w-full my-3 p-2 min-h-30 max-h-80" id="text"></textarea>
        </div>
      </form>
    </div>
  );
}
