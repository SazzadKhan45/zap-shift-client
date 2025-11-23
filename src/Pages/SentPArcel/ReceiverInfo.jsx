import React from "react";

const ReceiverInfo = ({
  register,
  regions,
  districtsByRegions,
  receiverRegions,
}) => {
  return (
    <div>
      <h3 className="font-medium text-lg mt-6 mb-2">Receiver Details</h3>

      <div className="mb-4">
        <label className="block mb-1">Receiver Name</label>
        <input
          {...register("receiverName", { required: true })}
          className="w-full border p-2 rounded"
          placeholder="Receiver Name"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Receiver Address</label>
        <input
          {...register("receiverAddress", { required: true })}
          className="w-full border p-2 rounded"
          placeholder="Address"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Receiver Contact No</label>
        <input
          {...register("receiverPhone", { required: true })}
          className="w-full border p-2 rounded"
          placeholder="Contact No"
        />
      </div>

      {/* Receiver Regions */}
      <div className="mb-4">
        <label className="block mb-1">Receiver Region</label>
        <select
          {...register("receiverRegions", { required: true })}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Region</option>
          {regions.map((region, index) => (
            <option key={index}>{region}</option>
          ))}
        </select>
      </div>

      {/* Receiver District */}
      <div className="mb-4">
        <label className="block mb-1">Receiver District</label>
        <select
          {...register("receiverDistrict", { required: true })}
          className="w-full border p-2 rounded"
        >
          <option value="">Select District</option>

          {receiverRegions &&
            districtsByRegions(receiverRegions).map((district, index) => (
              <option key={index}>{district}</option>
            ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Delivery Instruction</label>
        <textarea
          {...register("deliveryInstruction")}
          className="w-full border p-2 rounded"
          placeholder="Delivery Instruction"
        />
      </div>
    </div>
  );
};

export default ReceiverInfo;
