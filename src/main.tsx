
import "./style/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { HomePage } from "./pages/home";
import { ProductPage } from "./pages/product-page";
import { NotFoundPage } from "./pages/not-found";
import { RootLayout } from "./layout/root-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/product/:slug",
        element: <ProductPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);