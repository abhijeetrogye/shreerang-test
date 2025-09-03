import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";
import "./AdsBannerSlider.css"; 

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items || 1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <BannerBox img={'/banner/1.jpg'} link={'/'} />
        </SwiperSlide>

        <SwiperSlide>
            <BannerBox img={'/banner/1.jpg'} link={'/'} />
        </SwiperSlide>

        <SwiperSlide>
            <BannerBox img={'/banner/1.jpg'} link={'/'} />
        </SwiperSlide>

        <SwiperSlide>
            <BannerBox img={'/banner/1.jpg'} link={'/'} />
        </SwiperSlide>

        <SwiperSlide>
            <BannerBox img={'/banner/1.jpg'} link={'/'} />
        </SwiperSlide>

        <SwiperSlide>
            <BannerBox img={'/banner/1.jpg'} link={'/'} />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default AdsBannerSlider;
