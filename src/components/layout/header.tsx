"use client";

import React from "react";

import useUser from "@/src/hooks/getUser";
import { onSignIn, onSignOut } from "@/src/utils/firebase/auth";

const Header = () => {
  const { user } = useUser();

  const handleLogin = async () => {
    try {
      const signIn = await onSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      const signOut = await onSignOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="flex h-[72px] items-center justify-between bg-white px-10 shadow-md">
      <h1 className="text-xl">MADE IN PINK</h1>
      <button className="text-sm" onClick={user ? handleLogout : handleLogin}>
        {user ? "로그아웃" : "로그인"}
      </button>
    </header>
  );
};

export default Header;
