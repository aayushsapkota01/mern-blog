import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    password === username ||
    !email.trim() ||
    !password.trim()
  ) {
    throw next(errorHandler(400, "All Fields Are Required !"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.json({ message: "Sign Up Successful" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password || email.trim() === "" || password.trim() === "") {
      return errorHandler(400, "All Fields Are Required !");
    }

    const validUser = await User.findOne({ email });

    if (!validUser) {
      return errorHandler(404, "User Not Found !!");
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return errorHandler(400, "Wrong Credentials");
    }

    const { password: pass, ...rest } = validUser._doc;

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
