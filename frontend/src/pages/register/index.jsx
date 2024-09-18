import React from "react";

export default function Register() {
  return (
    <div className="w-full">
      <form action="" className="w-full">
        <h2 className="text-3xl">Register</h2>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-xl font-semibold">
            Username
          </label>
          <input type="text" className="input input-sm" name="username" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-xl font-semibold">
            Email
          </label>
          <input type="text" className="input input-sm" name="email" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-xl font-semibold">
            Password
          </label>
          <input type="text" className="input input-sm" name="password" />
        </div>
      </form>
    </div>
  );
}
