import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { banners } from "@/constants/bannerList";
const CardSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }}
      >
        {banners?.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={`/banner/${item.img}`}
                alt={item.title}
                className="w-full"
                loading="lazy"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
