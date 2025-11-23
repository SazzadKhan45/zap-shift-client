import React from "react";
import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import OurService from "../OurService/OurService";
import Barns from "../Brands/Barns";
import Reviews from "../Reviews/Reviews";
import AosPack from "../AosPack/AosPack";

//
const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="bg-gray-400">
      <main>
        <Banner />
        {/*  */}
        <HowItWork />
        {/*  */}
        <OurService />
        {/*  */}
        <Barns />
        {/*  */}
        <Reviews reviewsPromise={reviewsPromise} />
      </main>
    </div>
  );
};

export default Home;
