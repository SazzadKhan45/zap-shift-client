import React from "react";
import MyContainer from "../../../Components/MyContainer";
import {
  FiTruck,
  FiPackage,
  FiHome,
  FiClock,
  FiShield,
  FiRefreshCw,
} from "react-icons/fi";

const OurService = () => {
  const services = [
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: "Express & Standard Delivery",
      description:
        "Get your rented gadgets delivered in 1-3 days with express or standard options across major cities.",
    },
    {
      icon: <FiPackage className="w-8 h-8" />,
      title: "Nationwide Delivery",
      description:
        "We deliver to every corner of the country. Rent from anywhere, get it delivered everywhere.",
      highlighted: true,
    },
    {
      icon: <FiHome className="w-8 h-8" />,
      title: "Fulfillment Solution",
      description:
        "End-to-end logistics handled by us. From warehouse to your doorstep — seamless & hassle-free.",
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "Cash on Delivery",
      description:
        "Pay only when you receive your device. Safe, secure & trusted payment on delivery.",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Corporate Service + Onsite Support",
      description:
        "Dedicated support for businesses with bulk rentals and on-site technical assistance.",
    },
    {
      icon: <FiRefreshCw className="w-8 h-8" />,
      title: "Parcel Return",
      description:
        "Easy return process. Schedule pickup or drop at nearest hub — no questions asked.",
    },
  ];

  return (
    <div className="py-16 bg-teal-900 text-white">
      <MyContainer>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-teal-100 max-w-3xl mx-auto">
            Enjoy seamless gadget rental experience with trusted delivery,
            flexible payments, and nationwide coverage
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 text-center transition-all duration-300 ${
                service.highlighted
                  ? "bg-lime-400 text-gray-900 shadow-2xl scale-105"
                  : "bg-white hover:bg-teal-700"
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  service.highlighted ? "bg-white text-lime-600" : "bg-teal-700"
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-bold mb-3 ${
                  service.highlighted ? "text-gray-900" : "text-black"
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed ${
                  service.highlighted ? "text-gray-800" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default OurService;
