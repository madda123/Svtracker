import React from "react";
import type { UserSchema } from "../../schemas/userSchema";

type Props = {
  user: UserSchema | null;
  className: string;
};

const Profile = ({ user, className }: Props) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={user?.profileImage.url}
        alt="profile-image"
        className="w-10 h-10 rounded-4xl object-cover"
      />
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
