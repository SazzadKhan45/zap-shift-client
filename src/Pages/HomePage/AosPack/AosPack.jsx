import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MyContainer from "../../../Components/MyContainer";
import SlideUp from "../../../assets/banner/banner1.png";

const AosPack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <MyContainer>
        <div>
          <img data-aos="fade-up" src={SlideUp} alt="" />
        </div>
      </MyContainer>
    </div>
  );
};

export default AosPack;
