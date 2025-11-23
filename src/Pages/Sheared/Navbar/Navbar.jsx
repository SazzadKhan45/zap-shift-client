import React from "react";
import MyContainer from "../../../Components/MyContainer";
import { NavLink } from "react-router";
import Logo from "../../../Components/Logo/Logo";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const links = (
    <>
      <li className="text-lg font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink to="/sent-parcel">Sent Parcel</NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
    </>
  );

  //Auth Info
  const { user, loading, signOutUser } = useAuth();
  console.log(user);

  // Handle SignOut User
  const LogOutUser = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign-out successful");
        // .
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //

  return (
    <div className="bg-base-100 shadow-sm">
      <MyContainer>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {loading ? (
              <p className="text-green-600">
                <span className="loading loading-spinner text-success"></span>
              </p>
            ) : user ? (
              <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="h-12 w-12 rounded-full object-cover cursor-pointer border-2 border-green-500"
                    src={user.photoURL}
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm"
                >
                  <button onClick={LogOutUser} className="btn">
                    LogOut
                  </button>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
