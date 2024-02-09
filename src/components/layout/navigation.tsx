"use client";

import {
  HomeIcon as HomeSolidIcon,
  PencilSquareIcon as PencilSquareSolidIcon,
  UserIcon as UserSolidIcon,
} from "@heroicons/react/24/solid";

import {
  HomeIcon as HomeOutlineIcon,
  PencilSquareIcon as PencilSquareOutlineIcon,
  UserIcon as UserOutlineIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const menus = [
  { solid: HomeSolidIcon, outline: HomeOutlineIcon, title: "홈", path: "/" },
  {
    solid: PencilSquareSolidIcon,
    outline: PencilSquareOutlineIcon,
    title: "생성",
    path: "/create",
  },
  {
    solid: UserSolidIcon,
    outline: UserOutlineIcon,
    title: "인사 관리",
    path: "/users",
  },
];

const Navigation = () => {
  const { push } = useRouter();
  const asPath = usePathname();

  const isCurrentMenu = (path: string) => path === asPath;

  return (
    <nav className="fixed bottom-0 flex h-20 w-full justify-between border-t bg-white py-3">
      {menus.map((menu) => (
        <button
          key={menu.title}
          className="flex w-full flex-col items-center gap-1"
          onClick={() => push(menu.path)}
        >
          {isCurrentMenu(menu.path) ? (
            <menu.solid className="w-8" />
          ) : (
            <menu.outline className="w-8" />
          )}
          <p>{menu.title}</p>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
