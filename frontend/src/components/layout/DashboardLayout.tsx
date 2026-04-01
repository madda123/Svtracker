import React, { useEffect, type ReactNode } from "react";
import { useState } from "react";
import Sidebar from "../ui/Sidebar";
import { Outlet, useLocation } from "react-router";
import Profile from "../ui/Profile";
import { userSchema, type UserSchema } from "../../schemas/userSchema";
import { getUserById } from "../../api/userApi";
import Navbar from "../ui/Navbar";

const PageTitles: Record<string, string> = {
  "/": "Analytics",
  "/income": "Incomes",
  "/expense": "Expenses",
  "/setting": "Settings",
};

const DashboardLayout = () => {
  const [profile, setProfile] = useState<UserSchema | null>(null);
  const [pageName, setPageName] = useState("");

  const location = useLocation();

  useEffect(() => {
    const title = PageTitles[location.pathname];
    setPageName(title);
  }, [location.pathname]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserById();

      if (!data) {
        console.log("Something went wrong");
      }

      setProfile(data);
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col md:grid md:grid-cols-[240px_1fr] w-screen h-screen bg-cusgrey">
      <Navbar />
      <Sidebar />
      <section className="h-screen overflow-y-auto py-3.75 md:py-6.5 px-8 no-scrollbar">
        <div className="flex flex-col gap-3.75">
          <div className="flex justify-between items-center">
            <h4 className="text-cusblack text-h4 font-bold">{pageName}</h4>
            <Profile user={profile} className="hidden md:flex" />
          </div>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
