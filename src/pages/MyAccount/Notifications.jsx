import NewsCart from "./NewsCart";

export default function Notifications() {
  return (
    <div>
      <h3 className="relative  pt-3 pb-4 px-3 title-style text-dark text-base xs:text-lg md:text-xl">
        اخبار و ‌<span className="text-red">اطلاعیه‌ها</span>
      </h3>
      <NewsCart title={"نگاهی به محصولات ۲۰۲۴ اپل"} date={"1هفته پیش"} link={""} linkText={"مشاهده‌ی محصولات"} message={"از یکم آذر تا یکم دی ماه 45٪ درصد تخفیف ویژه برای باشگاه مشتریان"} code={" qwer123"} />
      <NewsCart title={"جمعه‌ی سیاه"} date={"10 روز پیش"} link={""} linkText={"مشاهده‌ی مقاله"} message={"از یکم آذر تا یکم دی ماه ۳۵٪ درصد تخفیف ویژه"} code={"digi7575"} />
      <NewsCart title={"نگاهی به محصولات ۲۰۲۴ اپل"} date={"1هفته پیش"} link={""} linkText={"مشاهده‌ی محصولات"} message={"از یکم آذر تا یکم دی ماه 45٪ درصد تخفیف ویژه برای باشگاه مشتریان"} code={" qwer123"} />
      <NewsCart title={"جمعه‌ی سیاه"} date={"10 روز پیش"} link={""} linkText={"مشاهده‌ی مقاله"} message={"از یکم آذر تا یکم دی ماه ۳۵٪ درصد تخفیف ویژه"} code={"digi7575"} />
    </div>
  );
}
