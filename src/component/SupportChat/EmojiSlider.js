import { Swiper, SwiperSlide } from "swiper/react";

export default function EmojiSlider({ input, message, onEmoji }) {
  function addEmoji(emoji) {
    let start = input.selectionStart;
    let end = input.selectionEnd;
    let beforeText = input.value.slice(0, start);
    let afterText = input.value.slice(end, input.value.length);
    console.log(beforeText, emoji, afterText);

    onEmoji(beforeText + emoji + afterText);
  }

  const commonEmojis = [
    "😀", // خوشحال
    "😄",
    "😊",
    "😉",
    "😍",

    "👍", // تأیید
    "👌",
    "🙏",

    "❤️", // علاقه
    "🔥",

    "😅", // واکنش‌ها
    "😂",
    "😭",
    "😐",

    "🤔", // فکر کردن
    "😎",

    "🚀", // پیشرفت
    "✨",

    "📦", // فروشگاهی
    "🛒",
    "🎁",

    "📞", // پشتیبانی
    "💬",
    "⚡",
  ];
  return (
    <Swiper slidesPerView={9} className="py-1!">
      {commonEmojis.map((emoji) => (
        <SwiperSlide onClick={() => addEmoji(emoji)} className="cursor-pointer  shrink-0">
          {emoji}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
