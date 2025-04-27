import { Request, Response } from "express";
import User from "../models/User.js";

interface CreateUserBody {
  username: string;
  email: string;
  avatarUrl?: string;
}

export default async function createUser(
  req: Request<{}, {}, CreateUserBody>,
  res: Response
) {
  try {
    const { username, email, avatarUrl } = req.body;
    
    if (!username || !email) {
      return res.status(400).json({ error: "username and email are required" });
    }
    
    const user = new User({ username, email, avatarUrl });
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
}
