import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "ТВОЙ_GOOGLE_CLIENT_ID";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
