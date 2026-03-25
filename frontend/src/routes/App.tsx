import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "../pages/dashboard/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Income from "../pages/dashboard/Income";
import Expense from "../pages/dashboard/Expense";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../components/layout/DashboardLayout";
import Settings from "../pages/dashboard/Settings";
import Logout from "../pages/dashboard/Logout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/income"
          element={
            <ProtectedRoute>
              <Income />
            </ProtectedRoute>
          }
        />
        <Route
          path="/expense"
          element={
            <ProtectedRoute>
              <Expense />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
