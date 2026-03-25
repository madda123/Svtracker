import React, { type ReactNode } from "react";
import { useState } from "react";
import logo from "../../assets/images/svtracker-logo.png";
import {
  ChartColumnIncreasing,
  TrendingUp,
  WalletMinimal,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-12.5 h-screen bg-cuswhite rounded-[0px_15px_15px_0px] p-[56px_32px_285px_32px]">
      <NavLink to="/" className="flex items-center gap-1.5 font-bold">
        <img src={logo} alt="logo" className="w-7.25 h-7.25" />
        <p className="text-h6 text-cusblack">Svtracker</p>
      </NavLink>
      <div className="flex flex-col gap-5 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-1.5 w-full rounded-lg px-2.5 py-1.25 transition
   ${isActive ? "text-cuswhite bg-cusorange" : "text-cusblack hover:text-cuswhite hover:bg-cusorange"}`
          }
        >
          <ChartColumnIncreasing strokeWidth={2.5} className="w-5 h-5 " />
          <p className="text-bd  font-semibold">Analytics</p>
        </NavLink>
        <NavLink
          to="/income"
          className={({ isActive }) =>
            `flex items-center gap-1.5 w-full rounded-lg px-2.5 py-1.25 transition
   ${isActive ? "text-cuswhite bg-cusorange" : "text-cusblack hover:text-cuswhite hover:bg-cusorange"}`
          }
        >
          <TrendingUp strokeWidth={2.5} className="w-5 h-5" />
          <p className="text-bd font-semibold">Incomes</p>
        </NavLink>
        <NavLink
          to="/expense"
          className={({ isActive }) =>
            `flex items-center gap-1.5 w-full rounded-lg px-2.5 py-1.25 transition
   ${isActive ? "text-cuswhite bg-cusorange" : "text-cusblack hover:text-cuswhite hover:bg-cusorange"}`
          }
        >
          <WalletMinimal strokeWidth={2.5} className="w-5 h-5" />
          <p className="text-bd font-semibold">Expenses</p>
        </NavLink>
        <NavLink
          //TEMPORARY
          to="/setting"
          className={({ isActive }) =>
            `flex items-center gap-1.5 w-full rounded-lg px-2.5 py-1.25 transition
   ${isActive ? "text-cuswhite bg-cusorange" : "text-cusblack hover:text-cuswhite hover:bg-cusorange"}`
          }
        >
          <Settings strokeWidth={2.5} className="w-5 h-5 " />
          <p className="text-bd font-semibold">Settings</p>
        </NavLink>
        <NavLink
          //TEMPORARY
          to="/logout"
          className={({ isActive }) =>
            `flex items-center gap-1.5 w-full rounded-lg px-2.5 py-1.25 transition
   ${isActive ? "text-cuswhite bg-danger" : "text-danger hover:text-cuswhite hover:bg-danger"}`
          }
        >
          <LogOut strokeWidth={2.5} className="w-5 h-5" />
          <p className="text-bd font-semibold">Logout</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
