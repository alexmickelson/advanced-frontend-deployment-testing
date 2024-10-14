import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./custom.scss";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { PeopleContextProvider } from "./context/people/PeopleContextProvider.tsx";
import { ItemsContextProvider } from "./pages/itemApi/ItemsContextProvider.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { myQueryClient } from "./services/myQueryClient.ts";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "alex-in-class",
  redirect_uri: "http://localhost:5173/",
  // onSigninCallback: () => {
  //   window.history.replaceState({}, document.title, window.location.pathname);
  // },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider {...oidcConfig}>
        <QueryClientProvider client={myQueryClient}>
          <PeopleContextProvider>
            <ItemsContextProvider>
              <App />
            </ItemsContextProvider>
          </PeopleContextProvider>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
