import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import persianDate from "persian-date";
import { formatedPrice, setLocal } from "../../utils/funcs";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm({ checkingForm, totalPrice }) {
  const navigate = useNavigate();

  let [deliveryDays, setDeliveryDays] = useState([]);
  let [selectedDeliveryDay, setSelectedDeliveryDay] = useState(null);
  let [formData, setFormData] = useState({
    name: null,
    lastName: null,
    email: null,
    postalCode: null,
    phone: null,
    country: null,
    Province: null,
    city: null,
    street: null,
    address: null,
  });
  let formRef = useRef(null);
  useEffect(() => {
    const dateList = [];
    const today = new persianDate();
    for (let i = 4; i < 4 + 14; i++) {
      const date = today.add("day", i);
      dateList.push({
        dayName: date.format("dddd"),
        yearName: date.format("YYYY"),
        dayNumber: date.format("D"),
        monthName: date.format("MMMM"),
        fullDate: date.format("dddd DD MMMM"),
      });
    }
    setDeliveryDays(dateList);
  }, []);
  useEffect(() => {
    if (formData.name && formData.lastName && formData.email && formData.postalCode && formData.phone && formData.country && formData.Province && formData.city && formData.street && formData.address && selectedDeliveryDay) {
      setLocal("checkoutPrice", formatedPrice(totalPrice));
      navigate("/payment", { replace: true });
    } else
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [checkingForm]);

  return (
    <form ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-7 my-5" action="">
      <div>
        <label className={`cursor-pointer ${checkingForm && !formData.name ? "text-red" : ""}`} htmlFor="name">
          نام<span className="text-red"> * </span>
        </label>
        <input
          className={`w-full my-2 border  rounded-lg p-2 outline-0  ${checkingForm && !formData.name ? "border-red" : "border-light-gray"}`}
          required
          type="text"
          id="name"
          onInput={(e) =>
            setFormData((prev) => {
              return { ...prev, name: e.target.value.trim() };
            })
          }
        />
      </div>
      <div>
        <label className={`cursor-pointer ${checkingForm && !formData.lastName ? "text-red" : ""}`} htmlFor="last-name">
          نام خانوادگی <span className="text-red"> * </span>
        </label>
        <input
          className={`w-full my-2 border  rounded-lg p-2 outline-0  ${checkingForm && !formData.lastName ? "border-red" : "border-light-gray"}`}
          required
          type="text"
          id="last-name"
          onInput={(e) =>
            setFormData((prev) => {
              return { ...prev, lastName: e.target.value.trim() };
            })
          }
        />
      </div>
      <div>
        <label className={`cursor-pointer ${checkingForm && !formData.email?.includes("@") ? "text-red" : ""}`} htmlFor="email">
          آدرس ایمیل<span className="text-red"> * </span>
        </label>
        <input
          className={`w-full my-2 border  rounded-lg p-2 outline-0  ${checkingForm && !formData.email?.includes("@") ? "border-red" : "border-light-gray"}`}
          required
          type="email"
          id="email"
          onInput={(e) =>
            setFormData((prev) => {
              return { ...prev, email: e.target.value.trim() };
            })
          }
        />
      </div>
      <div>
        <label className={`cursor-pointer ${checkingForm && (!formData.postalCode || formData.postalCode.length < 8) ? "text-red" : ""}`} htmlFor="postal-code">
          کد پستی<span className="text-red"> * </span>
        </label>
        <input
          className={`w-full my-2 border  rounded-lg p-2 outline-0  ${checkingForm && (!formData.postalCode || formData.postalCode.length < 8) ? "border-red" : "border-light-gray"}`}
          required
          type="text"
          id="postal-code"
          onInput={(e) =>
            setFormData((prev) => {
              return { ...prev, postalCode: e.target.value.trim() };
            })
          }
        />
      </div>
      <div>
        <label className={`cursor-pointer ${checkingForm && (!formData.phone || formData.phone.length < 11) ? "text-red" : ""}`} htmlFor="phone">
          تلفن<span className="text-red"> * </span>
        </label>
        <input
          className={`w-full my-2 border  rounded-lg p-2 outline-0  ${checkingForm && (!formData.phone || formData.phone.length < 11) ? "border-red" : "border-light-gray"}`}
          required
          type="tel"
          id="phone"
          onInput={(e) =>
            setFormData((prev) => {
              return { ...prev, phone: e.target.value.trim() };
            })
          }
        />
      </div>
      <div>
        <label className={`cursor-pointer ${checkingForm && !formData.country ? "text-red" : ""}`} htmlFor="country">
          کشور / منطقه <span className="text-red"> * </span>
        </label>
        <input
          className={`w-full my-2 border  rounded-lg p-2 outline-0  ${checkingForm && !formData.country ? "border-red" : "border-light-gray"}`}
          required
          type="text"
          id="country"
          onInput={(e) =>
            setFormData((prev) => {
              return { ...prev, country: e.target.value.trim() };
            })
          }
        />
      </div>
      <div>
        <label className={`cursor-pointer ${checkingForm && !formData.Province ? "text-red" : ""}`} htmlFor="Province">
          استان<span className="text-red"> * </span>
        </label>
        <input
          className={`w-full my-2 border  rounded-lg p-2 outline-0  ${checkingForm && !formData.Province ? "border-red" : "border-light-gray"}`}
          required
          type="text"
          id="Province"
          onInput={(e) =>
            setFormData((prev) => {
              return { ...prev, Province: e.target.value.trim() };
            })
          }
        />
      </div>
      <div>
        <label className={`cursor-pointer ${checkingForm && !formData.city ? "text-red" : ""}`} htmlFor="city">
          شهر<span className="text-red"> * </span>
        </label>
        <input
          className={`w-full my-2 border  rounded-lg p-2 outline-0  ${checkingForm && !formData.city ? "border-red" : "border-light-gray"}`}
          required
          type="text"
          id="city"
          onInput={(e) =>
            setFormData((prev) => {
              return { ...prev, city: e.target.value.trim() };
            })
          }
        />
      </div>
      <div>
        <label className={`cursor-pointer ${checkingForm && !formData.street ? "text-red" : ""}`} htmlFor="street">
          خیابان<span className="text-red"> * </span>
        </label>
        <input
          className={`w-full my-2 border  rounded-lg p-2 outline-0  ${checkingForm && !formData.street ? "border-red" : "border-light-gray"}`}
          required
          type="text"
          id="street"
          onInput={(e) =>
            setFormData((prev) => {
              return { ...prev, street: e.target.value.trim() };
            })
          }
        />
      </div>
      <div>
        <label className={`cursor-pointer ${checkingForm && !formData.address ? "text-red" : ""}`} htmlFor="addres">
          آدرس<span className="text-red"> * </span>
        </label>
        <input
          className={`w-full my-2 border  rounded-lg p-2 outline-0  ${checkingForm && !formData.address ? "border-red" : "border-light-gray"}`}
          required
          type="text"
          id="addres"
          onInput={(e) =>
            setFormData((prev) => {
              return { ...prev, address: e.target.value.trim() };
            })
          }
        />
      </div>
      <div className="md:col-span-2">
        <h4 className={`cursor-pointer ${checkingForm && !selectedDeliveryDay ? "text-red" : ""}`} htmlFor="addres">
          زمان تحویل مرسوله<span className="text-red"> * </span>
        </h4>
        <div className={`border  rounded-2xl p-5 mt-3 text-xs sm:text-sm text-gray/80 ${checkingForm && !selectedDeliveryDay ? "border-red" : "border-light-gray"}`}>
          <Swiper
            className="w-full px-6 md:px-10!"
            slidesPerView={3}
            spaceBetween={15}
            modules={[FreeMode]}
            freeMode={{
              enabled: true,
              momentum: true,
            }}
            breakpoints={{
              450: { slidesPerView: 4 },
              600: { slidesPerView: 5 },
              800: { slidesPerView: 6 },
              950: { slidesPerView: 7 },
              1024: { slidesPerView: 5 },
              1200: { slidesPerView: 7 },
              1400: { slidesPerView: 8 },
            }}
          >
            {deliveryDays.map((day) => (
              <SwiperSlide>
                <div key={day.dayNumber} className={`shrink-0  py-3 flex flex-col justify-around aspect-square rounded-2xl border border-light-gray text-center cursor-pointer select-none ${selectedDeliveryDay == day.dayNumber && "gradient text-white border-org"}`} onClick={() => setSelectedDeliveryDay(day.dayNumber)}>
                  <h3>{day.dayName}</h3>
                  <span>{day.dayNumber + " " + day.monthName + " " + day.yearName}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </form>
  );
}
