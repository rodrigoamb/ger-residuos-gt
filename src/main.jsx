import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DashboardPage from "./pages/DashboardPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import EditResiduosPage from "./pages/EditResiduosPage.jsx";
import GlobalProvider from "./context/globalContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GlobalProvider>
          <Routes>
            {/* ROTA PÚBLICA */}
            <Route path="/" element={<Login />} />

            {/* ROTAS PROTEGIDAS */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editar-residuo/:id"
              element={
                <ProtectedRoute>
                  <EditResiduosPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
