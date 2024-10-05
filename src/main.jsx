import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FormProvider } from "./Context/Task1.jsx";

createRoot(document.getElementById("root")).render(
  <FormProvider>
    <App />
  </FormProvider>
);
