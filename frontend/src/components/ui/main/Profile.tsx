import React from "react";
import type { UserSchema } from "../../../schemas/userSchema";
import { Pen } from "lucide-react";

type Props = {
  user: UserSchema | null;
  className?: string;
  variant?: "horizontal" | "vertical";
};

const Profile = ({ user, className, variant }: Props) => {
  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <div className="relative w-20 h-20">
          <img
            src={user?.profileImage.url}
            alt="profile-image"
            className="w-full h-full rounded-full object-cover"
          />
          <button className="absolute right-1 bottom-0 bg-cusorange rounded-full p-1 flex justify-center items-center shadow-lg z-10 cursor-pointer">
            <Pen size={10} strokeWidth={3} className="text-cuswhite" />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-cusblack text-bd-m md:text-bd font-semibold text-center leading-none">
            {user?.fullname}
          </p>
          <p className="text-capt-m md:text-capt text-center leading-none text-cusdarkgrey font-semibold">
            {user?.email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative w-10 h-10">
        <img
          src={user?.profileImage.url}
          alt="profile-image"
          className="w-full h-full rounded-full object-cover"
        />
        <button className="absolute right-0 bottom-0 bg-cusorange rounded-full p-1 flex justify-center items-center shadow-lg z-10 cursor-pointer">
          <Pen size={8} strokeWidth={3} className="text-cuswhite" />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-cusblack text-bd font-semibold leading-none">
          {user?.fullname}
        </p>
        <p className="text-capt leading-none text-cusdarkgrey font-semibold">
          {user?.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
