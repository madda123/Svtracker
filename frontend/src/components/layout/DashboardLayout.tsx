import React, { type ReactNode } from "react";
import Sidebar from "../ui/Sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-[240px_1fr] w-screen h-screen bg-cusgrey">
      <Sidebar />
      <section className="">
        <Outlet />
      </section>
    </div>
  );
};

export default DashboardLayout;
