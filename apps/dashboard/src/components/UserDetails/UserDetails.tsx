import { Avatar, AvatarFallback, AvatarImage } from "@/common/ui/avatar";
import { userDetails } from "@/lib/constant";
import React, { useDebugValue } from "react";

interface UserDetailsProps {
  //Props
}

const UserDetails: React.FC<UserDetailsProps> = () => {
  return (
    <div className="flex items-center w-full gap-3">
      {/* Avatar */}
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{userDetails.username}</AvatarFallback>
        </Avatar>
      </div>

      {/* Details */}
      <div className="flex flex-col justify-center">
        <div className="text-sm dark:text-slate-200 text-start">
          {userDetails.username}
        </div>
        <div className="flex items-center gap-1 text-xs group text-slate-500">
          {/* Membership Info */}
          <div className="flex items-center gap-1 text-xs group-hover:hidden">
            <span>{userDetails.membership}</span>
            <span>Plan</span>
          </div>
          {/* Last Online */}
          <div className="items-center hidden gap-1 text-sx group-hover:flex">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            <span>{userDetails.lastOnline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
