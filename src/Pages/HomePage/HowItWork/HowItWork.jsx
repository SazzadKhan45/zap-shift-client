import AOS from "aos";
import "aos/dist/aos.css";
import MyContainer from "../../../Components/MyContainer";
import {
  FiShoppingCart,
  FiPackage,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";
import { useEffect } from "react";

const HowItWork = () => {
  const steps = [
    {
      icon: <FiShoppingCart className="w-8 h-8 text-secondary" />,
      title: "Book, Pick & Drop",
      description:
        "Choose your gadget, select pickup or drop-off, and complete the booking in minutes.",
    },
    {
      icon: <FiPackage className="w-8 h-8 text-secondary" />,
      title: "Cash On Delivery",
      description:
        "Pay securely when you receive your device. No upfront payment required.",
    },
    {
      icon: <FiTruck className="w-8 h-8 text-secondary" />,
      title: "Delivery Hub",
      description:
        "We deliver to your doorstep or nearest pickup point with fast & reliable service.",
    },
    {
      icon: <FiCheckCircle className="w-8 h-8 text-secondary" />,
      title: "Ready, Use & Experience",
      description:
        "Unbox your device, plug in, and enjoy premium tech without buying.",
    },
  ];
  //
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <MyContainer>
        {/* Section Header */}
        <div className=" mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How it Works
          </h2>
          <p className="text-lg text-gray-600">
            Rent your favorite gadgets in just 4 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8  hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary group-hover:bg-teal-100 transition-colors">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default HowItWork;
