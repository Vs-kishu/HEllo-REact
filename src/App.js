import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import RestroInfo from "./components/RestroInfo";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/aboutus",
        element: <AboutUs aboutus="kishan" />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "restroInfo/:restroId",
        element: <RestroInfo />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
