import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/auth/auth";
export default function Login() {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  //   const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("LOGIN DATA:", formData);
    try {
      const { data } = await axios.post("/api/users/login", formData);
      console.log("DATA:", data);

      setUser(data.user);
      return navigate("/habits");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="w-full grow flex justify-center items-center">
      <form
        className="w-full sm:max-w-[50%] mx-auto flex flex-col gap-y-4 -mt-32 px-4 sm:px-0"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-4xl mb-4 font-semibold">Login to Your Account</h2>

        <div className="flex flex-col gap-y-4">
          <label htmlFor="" className="text-xl font-semibold">
            Email
          </label>
          <input
            type="text"
            className="input input-md input-primary bg-accent text-accent-content rounded-sm"
            name="email"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="" className="text-xl font-semibold">
            Password
          </label>
          <input
            type="text"
            className="input input-md input-primary bg-accent text-accent-content rounded-sm"
            name="password"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="w-full flex gap-x-2 mt-8">
          <button type="submit" className="btn btn-md btn-primary flex-1">
            Login
          </button>
          <Link to="/register" className="btn btn-md btn-outline flex-1">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
