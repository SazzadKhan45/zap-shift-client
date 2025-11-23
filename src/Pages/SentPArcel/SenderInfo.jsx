import React from "react";
import useAuth from "./../../Hooks/useAuth";

const SenderInfo = ({
  register,
  regions,
  districtsByRegions,
  senderRegions,
}) => {
  //Auth info
  const { user } = useAuth();
  console.log(user);
  //
  return (
    <div>
      <h3 className="font-medium text-lg mt-6 mb-2">Sender Details</h3>

      <div className="mb-4">
        <label className="block mb-1">Sender Name</label>
        <input
          defaultValue={user?.displayName}
          {...register("senderName", { required: true })}
          className="w-full border p-2 rounded"
          placeholder="Sender Name"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Sender Email</label>
        <input
          type="email"
          defaultValue={user?.email}
          readOnly
          {...register("senderEmail", { required: true })}
          className="w-full border p-2 rounded"
          placeholder="Enter Your email"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Address</label>
        <input
          {...register("senderAddress", { required: true })}
          className="w-full border p-2 rounded"
          placeholder="Address"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Sender Phone No</label>
        <input
          {...register("senderPhone", { required: true })}
          className="w-full border p-2 rounded"
          placeholder="Sender Phone No"
        />
      </div>

      {/* Sender Regions */}
      <div className="mb-4">
        <label className="block mb-1">Sender Region</label>
        <select
          {...register("senderRegions", { required: true })}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Region</option>
          {regions.map((region, index) => (
            <option key={index}>{region}</option>
          ))}
        </select>
      </div>

      {/* Sender District */}
      <div className="mb-4">
        <label className="block mb-1">Sender District</label>
        <select
          {...register("senderDistrict", { required: true })}
          className="w-full border p-2 rounded"
        >
          <option value="">Select District</option>
          {senderRegions &&
            districtsByRegions(senderRegions).map((district, index) => (
              <option key={index}>{district}</option>
            ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Pickup Instruction</label>
        <textarea
          {...register("pickupInstruction")}
          className="w-full border p-2 rounded"
          placeholder="Pickup Instruction"
        />
      </div>
    </div>
  );
};

export default SenderInfo;
