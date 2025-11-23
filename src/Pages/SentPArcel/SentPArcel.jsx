import { useForm, useWatch } from "react-hook-form";
import MyContainer from "../../Components/MyContainer";
import { useLoaderData } from "react-router";
import SenderInfo from "./SenderInfo";
import ReceiverInfo from "./Receiverinfo";
import Swal from "sweetalert2";
import useAxiosInstance from "../../Hooks/useAxiosInstance";

const SendParcel = () => {
  // React hook from
  const { register, handleSubmit, control } = useForm();

  // Axios custom hook
  const axiosSecure = useAxiosInstance();

  //Load data info
  const serviceCenter = useLoaderData();
  const regions = [...new Set(serviceCenter.map((center) => center.region))];

  // Watch data by useWatch
  const senderRegions = useWatch({ control, name: "senderRegions" });
  const receiverRegions = useWatch({ control, name: "receiverRegions" });

  const districtsByRegions = (region) => {
    const found = serviceCenter.filter((center) => center.region === region);
    return found.map((item) => item.district);
  };
  // Submit handle function
  const handleSentParcel = async(data) => {
    console.log("Submitted Data:", data);

    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.weight);

    // Cost Calculator
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCost = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCost + extraCharge;
      }
    }

    Swal.fire({
      title: "Agree to Sent-Parcel?",
      text: `Total Cost is : ${cost} Tk`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sent Your Parcel",
    }).then((result) => {
      if (result.isConfirmed) {
        //Save the parcel info to the database
        try{
          const res = 
        }
        axiosSecure.post("/parcels", data).then((res) => {
          console.log(res.data);
        });
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });

    console.log("PArcel Cost Is : ", cost);
  };

  return (
    <div className="my-10">
      <MyContainer>
        <div className="p-6 border border-dashed border-green-700 rounded-xl bg-white shadow-lg lg:mx-40 mx-auto">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">
            Send A Parcel
          </h2>

          <form onSubmit={handleSubmit(handleSentParcel)}>
            {/* Parcel Type */}
            <div className="flex gap-6 mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="document"
                  {...register("parcelType")}
                />
                Document
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="non-document"
                  {...register("parcelType")}
                />
                Non-document
              </label>
            </div>

            {/* Parcel Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <label>Parcel Name</label>
                <input
                  {...register("parcelName")}
                  className="w-full border p-2 rounded"
                  placeholder="Parcel Name"
                />
              </div>

              <div>
                <label>Weight Kg</label>
                <input
                  {...register("weight")}
                  className="w-full border p-2 rounded"
                  placeholder="Weight Kg"
                />
              </div>
            </div>

            {/* Sender */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <SenderInfo
                register={register}
                regions={regions}
                districtsByRegions={districtsByRegions}
                senderRegions={senderRegions}
              />

              {/* Receiver */}
              <ReceiverInfo
                register={register}
                regions={regions}
                districtsByRegions={districtsByRegions}
                receiverRegions={receiverRegions}
              />
            </div>

            <button
              type="submit"
              className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Proceed to Confirm Booking
            </button>
          </form>
        </div>
      </MyContainer>
    </div>
  );
};

export default SendParcel;
