import React from "react";
//Styles
import "./App.css";
//Pages
import Buys from "./pages/Buys";
//React-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "products/", element: <Buys /> }], {
  future: {
    v7_startTransition: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionStatusRevalidation: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_skipActionErrorRevalidation: true,
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
