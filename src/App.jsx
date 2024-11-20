import React from "react";
//Styles
import "./App.css";
//Components
import Layout from "./components/Layout";
//Pages
import Buys from "./pages/Buys";
import Start from "./pages/Start";
import Contact from "./pages/Contact";
import FormBuy from "./pages/FormBuy"
//React-router-Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Start /> },
        { path: "products", element: <Buys /> },
        { path: "contact", element: <Contact /> },
        { path: "formbuy", element: <FormBuy /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
