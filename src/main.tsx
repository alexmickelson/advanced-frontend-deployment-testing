import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./custom.scss";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { PeopleContextProvider } from "./context/people/PeopleContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PeopleContextProvider>
        <App />
      </PeopleContextProvider>
    </BrowserRouter>
  </StrictMode>
);
