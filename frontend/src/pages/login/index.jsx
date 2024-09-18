import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
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
    <div className="w-full">
      <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-3xl">Login</h2>

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
        <button type="submit" className="btn btn-md btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
}
