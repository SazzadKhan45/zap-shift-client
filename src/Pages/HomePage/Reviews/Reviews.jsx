import { use, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MyContainer from "../../../Components/MyContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import topImage from "../../../assets/customer-top.png";

//
const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  //
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="pb-10 bg-gray-100 mt-10">
      <div data-aos="fade-up" className="text-center mb-10">
        <img className="mx-auto pt-8" src={topImage} alt="" />
        <h2 className="text-2xl font-bold py-3">
          What our customers are sayings
        </h2>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <MyContainer>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true} // loop enabled
          initialSlide={Math.floor(reviews.length / 2)} // start in the middle
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </MyContainer>
    </div>
  );
};

export default Reviews;
