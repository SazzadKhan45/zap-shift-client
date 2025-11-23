import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/HomePage/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import SendParcel from "../Pages/SentPArcel/SentPArcel";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  // Home Area
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "sent-parcel",
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("/serviceCenterLocation.json").then((res) => res.json()),
      },

      {
        path: "coverage",
        element: <Coverage />,
        loader: () =>
          fetch("/serviceCenterLocation.json").then((res) => res.json()),
      },
    ],
  },

  // Auth Area
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
