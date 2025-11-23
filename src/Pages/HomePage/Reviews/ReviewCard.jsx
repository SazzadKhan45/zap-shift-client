import React from "react";

const ReviewCard = ({ review }) => {
  const { review: text, user_photoURL, userName, date } = review;
  return (
    <div className="card w-full  bg-base-100 shadow-md p-6 rounded-2xl border border-gray-200 scale-105">
      <div className="text-3xl text-primary mb-4">❝</div>

      <p className=" mb-6">{text}</p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-300">
        <div className="w-10 h-10">
          <img
            className="w-full h-full object-cover rounded-full"
            src={user_photoURL}
            alt=""
          />
        </div>

        <div className="text-sm">
          <h3 className="font-semibold text-gray-900">{userName}</h3>
          <p className="text-sm text-gray-500">Date: {date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
