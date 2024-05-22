import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";
import { Home } from "../pages/Home";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const PrivateRoute = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset/:token" element={<ResetPassword />} />

      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
