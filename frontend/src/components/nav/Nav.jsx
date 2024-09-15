import React from "react";
import { Link } from "react-router-dom";
import { calendar } from "../../assets";

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

export default function Nav() {
  return (
    <nav className="navbar max-w-screen-xl mx-auto px-4">
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
      <ul className="menu-md navbar-end gap-x-2">
        <Link to="/login" className="btn btn-sm btn-outline">
          Login
        </Link>
        <Link to="/register" className="btn btn-sm btn-primary">
          Join day1
        </Link>
      </ul>
    </nav>
  );
}
