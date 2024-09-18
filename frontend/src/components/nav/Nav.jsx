import React from "react";
import { Link } from "react-router-dom";
import { calendar } from "../../assets";
import { TbUserFilled } from "react-icons/tb";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useAuth } from "@/context/auth/auth";

export default function Nav() {
  const { user } = useAuth();
  return (
    <nav className="navbar max-w-screen-[1440px] mx-auto px-8 py-8 ">
      <div className="navbar-start">
        <img src={calendar} alt="logo" className="w-[32px] h-[32px]" />
        <h1 className="">day1</h1>
      </div>
      <ul className="menu-md navbar-center gap-x-4">
        <Link
          to="/"
          className="hover:link-accent hover:border-b hover:border-accent px-2"
        >
          Dashboard
        </Link>
        <Link
          to="/habits"
          className="hover:link-accent hover:border-b hover:border-accent px-2"
        >
          Habits
        </Link>
        <Link
          to="/daily"
          className="hover:link-accent  hover:border-b hover:border-accent px-2"
        >
          Daily
        </Link>
      </ul>
      <ul className="menu-md navbar-end gap-x-2 ">
        {user ? (
          <div className="w-full flex justify-end items-center gap-x-2">
            <TbUserFilled className="" />
            <span className="py-2 rounded-md font-semibold ">
              {user.fullname}
            </span>
            <button className="ml-4 btn btn-sm btn-primary">Logout</button>
          </div>
        ) : (
          <div className="w-full flex justify-end gap-x-4">
            <Link to="/login" className="btn btn-sm btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-primary">
              Start your day1
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
