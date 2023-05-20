import { useRouter } from "next/router";
import React from "react";

interface NavbarItemProps {
  label: string;
  active?: boolean;
  url: string;
  children: any;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  active,
  url,
  children,
}) => {
  const router = useRouter();
  return (
    <div className="group relative">
      <div
        onClick={() => router.push(url)}
        className={`cursor-pointer hover:text-teal-500 ${
          router.pathname === url ? "text-teal-500" : "text-gray-300"
        }`}
      >
        {label}
      </div>
      <div className="absolute group-hover:block hidden w-28 z-50 rounded-sm  bg-gray-300">
        {children
          ? children.map((item: any) => (
              <div
                key={item.id}
                onClick={() => router.push(item.url)}
                className={`${
                  router.pathname === item.url
                    ? "text-teal-500"
                    : "text-gray-900"
                } cursor-pointer text-sm p-1 hover:text-teal-500`}
              >
                {item.name}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default NavbarItem;
