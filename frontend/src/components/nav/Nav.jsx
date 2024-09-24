import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { calendar } from "../../assets";
import { TbUserFilled } from "react-icons/tb";
import { useAuth } from "@/context/auth/auth";
import axios from "axios";

export default function Nav() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  async function handleLogout(e) {
    const { data } = await axios.delete("/api/users/logout");
    console.log("DATA: ", data);
    if (data.success) {
      setUser(null);
      navigate("/login");
    }
    try {
    } catch (error) {
      console.log(error.response.message);
    }
  }

  return (
    <nav className="w-full drop-shadow-sm bg-accent max-w-[1440px] mx-auto px-4 min-h-[80px] flex justify-between items-center ">
      <div className="w-full max-w-[25%] flex items-center">
        <img src={calendar} alt="logo" className="w-[32px] h-[32px]" />
        <h1 className="text-xl ml-2">day1</h1>
      </div>
      <ul className="w-full max-w-[25%] flex justify-center items-center gap-x-4">
        <Link
          to="/"
          className={`hover:link-primary  px-2 ${pathname === "/" ? "link-primary" : ""}`}
        >
          Dashboard
        </Link>
        <Link
          to="/habits"
          className={`hover:link-primary  px-2 ${pathname === "/habits" ? "link-primary" : ""}`}
        >
          Habits
        </Link>
      </ul>
      <ul className="w-full max-w-[25%] flex items-center gap-x-2 ">
        {user ? (
          <div className="w-full flex justify-end items-center gap-x-2">
            <TbUserFilled className="" />
            <span className="py-2 rounded-md font-semibold ">
              {user.username}
            </span>
            <button
              className="ml-4 btn btn-sm btn-primary"
              onClick={(e) => handleLogout(e)}
            >
              Logout
            </button>
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
