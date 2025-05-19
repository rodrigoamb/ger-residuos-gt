import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import EditResiduosPage from "./pages/EditResiduosPage.jsx";
import GlobalProvider from "./context/globalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/editar-residuo/:id" element={<EditResiduosPage />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>
);
