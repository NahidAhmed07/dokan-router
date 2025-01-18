import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import DashboardLayout from "./components/layout/DashboardLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Auth from "./pages/auth/Auth";
import Home from "./pages/dashboard/Home";
import Sell from "./pages/dashboard/Sell";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/home" />} />

        <Route element={<DashboardLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<Auth />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
