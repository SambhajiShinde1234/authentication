import User from "../models/userModel";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { username, email, password } = req;

  try {
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      res.Status(400).json({ message: "user already exist" });
    }

    const user = await User.create({ username, email, password });

    // generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.Status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const loginUser = async ({ req, res }) => {
  const { email, password } = req;

  try {
    const user = User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await User.matchPassword({ password });

    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid email or password" });
    }

    // generate token
    const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.send(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
