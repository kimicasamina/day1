import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { man2, man1 } from "@/assets";
export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("LOGIN DATA:", formData);
    try {
      const { data } = await axios.post("/api/users/register", formData);
      console.log("DATA:", data);

      toast.success(data.message);
      return navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  }

  return (
    <div className="w-full min-h-full flex flex-col sm:flex-row bg-primary-foreground">
      <form
        className="w-full h-full sm:max-w-[50%] mx-auto flex flex-col justify-center gap-y-4 px-4 sm:px-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl mb-4 font-semibold">Create Your Account</h2>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="" className="text-xl font-semibold">
            Fullname
          </label>
          <input
            type="text"
            className="input input-md input-primary bg-accent text-accent-content rounded-sm"
            name="fullname"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="" className="text-xl font-semibold">
            Username
          </label>
          <input
            type="text"
            className="input input-md input-primary bg-accent text-accent-content rounded-sm"
            name="username"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
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
          <Link to="/login" className="btn btn-md btn-outline flex-1">
            Login
          </Link>
          <button type="submit" className="btn btn-md btn-primary flex-1">
            Sign up
          </button>
        </div>
      </form>

      <div className="w-full h-full hidden sm:flex relative">
        <img
          src={man2}
          alt=""
          className="w-full object-cover h-full relative"
        />
        <div className="absolute inset-0 bg-primary-foreground/10 flex items-center justify-center"></div>
      </div>
    </div>
  );
}
