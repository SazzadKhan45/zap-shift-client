import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MyContainer from "../../../Components/MyContainer";
import { Autoplay, Pagination } from "swiper/modules";
//
import amazonImage from "../../../assets/brands/amazon.png";
import casioImage from "../../../assets/brands/casio.png";
import moonstarImage from "../../../assets/brands/moonstar.png";
import randstandImage from "../../../assets/brands/randstad.png";
import starImage from "../../../assets/brands/star.png";

//
const brandsLogos = [
  amazonImage,
  casioImage,
  moonstarImage,
  randstandImage,
  randstandImage,
  starImage,
];

const Barns = () => {
  return (
    <div className="py-10 bg-white shadow-2xl">
      <MyContainer>
        <h2 className="text-2xl text-center font-bold mb-8">
          We've helped thousands of sales teams
        </h2>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {brandsLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </MyContainer>
    </div>
  );
};

export default Barns;
