import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MyContainer from "../../../Components/MyContainer";
import bannerImage1 from "../../../assets/banner/banner1.png";
import bannerImage2 from "../../../assets/banner/banner2.png";
import bannerImage3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="py-10 px-2 lg:px-0">
      <MyContainer>
        <Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
          <div className="relative">
            <img src={bannerImage1} />

            <div className="absolute ml-[52px] bottom-4">
              <button className="btn btn-secondary mr-3 ">
                Track Your Parcel
              </button>
              <button className="btn btn-outline">Be A Rider</button>
            </div>
          </div>
          <div className="relative">
            <img src={bannerImage2} />
            <div className="absolute ml-[52px] bottom-4">
              <button className="btn btn-secondary mr-3 ">
                Track Your Parcel
              </button>
              <button className="btn btn-outline">Be A Rider</button>
            </div>
          </div>
          <div className="relative">
            <img src={bannerImage3} />
            <div className="absolute ml-[52px] bottom-4">
              <button className="btn btn-secondary mr-3 ">
                Track Your Parcel
              </button>
              <button className="btn btn-outline">Be A Rider</button>
            </div>
          </div>
        </Carousel>
      </MyContainer>
    </div>
  );
};

export default Banner;
