import React from "react";
import { Link } from "react-router-dom";
import { calendar } from "../../assets";
import { TbUserFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/auth/auth";
import axios from "axios";

export default function Nav() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

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
    <nav className="w-full bg-secondary max-w-screen-[1440px] h-[60px] mx-auto px-8 grid grid-cols-3 absolute">
      <div className="flex items-center">
        <img src={calendar} alt="logo" className="w-[32px] h-[32px]" />
        <h1 className="">day1</h1>
      </div>
      <ul className="flex justify-center items-center gap-x-4">
        <Link to="/" className="hover:link-primary hover:border-b px-2">
          Dashboard
        </Link>
        <Link to="/habits" className="hover:link-primary hover:border-b px-2">
          Habits
        </Link>
      </ul>
      <ul className="flex items-center gap-x-2 ">
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
