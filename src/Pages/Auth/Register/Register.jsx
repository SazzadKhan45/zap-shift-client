import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  //Auth Info
  const {
    user,
    setUser,
    setLoading,
    loginWithGoogle,
    registerEmailPassword,
    userProfileUpdate,
  } = useAuth();
  console.log(user);

  //
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //
  const handlearegister = (data) => {
    //
    registerEmailPassword(data.email, data.password)
      .then((result) => {
        // Upload image
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append("image", imageFile);

        const host_key = import.meta.env.VITE_image_host_key;

        axios
          .post(`https://api.imgbb.com/1/upload?key=${host_key}`, formData)
          .then((res) => {
            const profile = {
              displayName: data.name,
              photoURL: res.data.data.display_url,
            };
            // MUST await this
            userProfileUpdate(profile);
            setUser(result.user);
            toast.success("Successfully Registered!");
            reset();
          })
          .catch((err) => {
            console.log("Image Upload Error:", err);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(user);
        setLoading(false);
        toast.success("Successfully Register");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
      <div className="mb-4">
        <h2 className="text-3xl font-bold">Create an Account</h2>
        <h4 className="text-xl mt-2">Register with ZapShift</h4>
      </div>
      <form onSubmit={handleSubmit(handlearegister)}>
        <fieldset className="px-2 md:px-0">
          {/* Name */}
          <label className="label">Your Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          {/* Email field */}
          <label className="label mt-2">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {/* Error field */}
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-500">
              Email is required
            </p>
          )}
          {/* Password field */}
          <label className="label mt-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              })}
              className="input w-full text-lg pr-12"
              placeholder="Password"
            />

            {/* Icon Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-600"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
          {/* Error field */}
          {errors.password?.type === "required" && (
            <p role="alert" className="text-red-500">
              Password is required
            </p>
          )}
          {/*  */}
          {errors.password?.type === "pattern" && (
            <p role="alert" className="text-red-500">
              Password must be 8+ chars with upper, lower, number, and special
              chars.
            </p>
          )}

          {/* Image Upload */}
          <label className="label mt-2">Upload Photo</label>
          <input
            type="file"
            className="file-input mt-2"
            accept="image/*"
            {...register("image", { required: true })}
          />

          <button className="btn btn-neutral mt-4 w-full">Register</button>
        </fieldset>
      </form>
      <div className="divider">Or</div>
      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="btn w-full bg-white text-black border-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
      <div className="py-3 text-center">
        <p>
          All Ready have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
