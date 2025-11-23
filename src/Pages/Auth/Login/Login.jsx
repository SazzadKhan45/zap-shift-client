import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  //Auth Info
  const { setUser, setLoading, loginWithEmailPassword, loginWithGoogle } =
    useAuth();
  const navigate = useNavigate();
  //
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //
  const handleLoginEmailPassword = (data) => {
    //
    loginWithEmailPassword(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        toast.success("Login Successfully");
        setLoading(false);
        navigate("/");
        reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // Login with google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        toast.success("Login Successfully");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body -mb-4">
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        <h4 className="text-xl ">Login with ZapShift</h4>
      </div>
      {/*Google login  */}

      <form onSubmit={handleSubmit(handleLoginEmailPassword)}>
        <div>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* Email field */}
              <label className="label text-lg">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input text-lg"
                placeholder="Email"
              />
              {/* Error field */}
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-500 text-lg">
                  Email is required
                </p>
              )}
              {/* Password filed */}
              <label className="label text-lg">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="input text-lg"
                placeholder="Password"
              />
              {/* Error field */}
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-500 text-lg">
                  Password is required
                </p>
              )}
              {/*  */}
              <div>
                <a className="link link-hover text-lg">Forgot password?</a>
              </div>
              {/*  */}
              <button className="btn btn-neutral mt-4 text-lg">Login</button>
            </fieldset>
          </div>
        </div>
      </form>
      <div className="divider -my-2 px-8">OR</div>
      {/* Google login button */}
      <div className="mx-auto mt-4 w-full px-6">
        <button
          onClick={handleGoogleLogin}
          className="btn bg-white text-black border-[#e5e5e5] w-full"
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
      </div>
      {/*  */}
      <div className="py-3 text-center">
        <p>
          Don’t have any account?{" "}
          <Link
            to="/register"
            className="font-bold ml-1 text-blue-600 underline "
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
