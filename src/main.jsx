import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ✅ Подключаем новый FavoritesContext
import { NewFavoritesProvider } from "./context/NewFavoritesContext.jsx"; 
import { AdminDataProvider } from "./contexts/AdminDataContext";

import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "ТВОЙ_GOOGLE_CLIENT_ID";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        {/* ✅ Новый FavoritesProvider */}
        <NewFavoritesProvider>
          <AdminDataProvider>
            <App />
          </AdminDataProvider>
        </NewFavoritesProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
