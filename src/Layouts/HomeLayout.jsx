import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Sheared/Navbar/Navbar";
import Footer from "../Pages/Sheared/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-gray-200">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
