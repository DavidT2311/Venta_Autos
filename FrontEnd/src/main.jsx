import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//Roboto-Font
import "@fontsource/roboto";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Redux
import store from "./redux/store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
