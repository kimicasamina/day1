import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function getAllUser(req, res, next) {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(401).json({ message: "No users found.", success: false });
  }
}

export async function createUser(req, res, next) {
  const { username, password, fullname, email } = req.body;
  let existingUser;
  console.log("REGISTER");

  // check if user already exists
  try {
    existingUser = await User.findOne({ email });
    console.log("USER: ", existingUser);
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Registration failed", success: true });
  }

  if (existingUser) {
    return res
      .status(401)
      .json({ success: false, message: "User already exist! Login Instead" });
  }

  // create new user
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    fullname,
    password: hashPassword,
  });

  return res
    .status(201)
    .json({ success: true, message: "User registered successfully" });
}

export async function loginUser(req, res, next) {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    // check if user exist
    if (!user) {
      return res
        .status(401)
        .json({ message: "User already exist! Login Instead" });
    }

    // check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "Incorrect password", success: false });
    }

    // create token
    const token = jwt.sign({ user: { id: user._id } }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    // const { password, habits, userCredentials } = user.toObject();
    const userCredentials = {
      username: user.username,
      email: user.email,
      fullname: user.fullname,
      _id: user._id,
    };

    res.cookie("access_token", token, {
      httpOnly: true,
      expiresIn: "5m",
    });

    res.status(201).json({
      success: true,
      message: "Logged in Successfully",
      user: userCredentials,
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Login Failed.", success: false });
  }
}

export async function logoutUser(req, res, next) {
  let token = req.cookies.access_token;
  console.log("DELETE TOKEN", token);
  try {
    res.clearCookie("access_token");
    res.json({ success: true, message: "You are logged out." });
  } catch (err) {
    console.log(err);
  }
}

export async function getProfile(req, res, next) {
  let user_token = req.user;
  console.log("REQ USER_ID", user_token);

  try {
    const user = await User.findById(user_token.id).select("-password");
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "User not found", success: false });
  }
}
