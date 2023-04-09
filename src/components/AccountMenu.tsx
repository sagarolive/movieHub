import { signOut } from "next-auth/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";

import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <ul className="absolute top-[40px] bg-gray-100 rounded-md w-36 py-2">
      <li className="flex items-center gap-x-1 hover:bg-gray-900 hover:bg-opacity-20 px-3 py-1">
        <CgProfile />
        Profile
      </li>

      <li className="flex items-center gap-x-1 hover:bg-gray-900 hover:bg-opacity-20 px-3 py-1">
        <AiOutlineHeart />
        My Watchlist
      </li>

      <li
        onClick={() => signOut()}
        className="flex items-center gap-x-1 hover:bg-gray-900 hover:bg-opacity-20 px-3 py-1"
      >
        <AiOutlineLogout />
        Sign out
      </li>
    </ul>
  );
};

export default AccountMenu;
