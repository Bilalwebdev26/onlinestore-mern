import User from "../Model/User.model.js";
import { apiError } from "../utils/apiError.class.js";
import { apiResponse } from "../utils/apiRes.class.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      throw new apiError(400, "Users not Found");
    }
    return res.status(200).json(new apiResponse(200, "Show all users", users));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUserAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (!name || !email || !password || !role) {
      throw new apiError(400, "User credential");
    }
    let user = await User.findOne({ email });
    if (user) {
      throw new apiError(400, "User Already Exist");
    }
    user = await User.create({
      name,
      email,
      password,
      role,
    });
    console.log("new User : ", user);
    await user.save();
    return res
      .status(201)
      .json(new apiResponse(201, "User Created Successfully", user));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { role } = req.body;
  try {
    if (!role) {
      throw new apiError(400, "Role Not Found");
    }
    let user = await User.findById(req.params.id);
    user.role = role;
    await user.save();
    return res.status(201).json(new apiResponse(201, "Role Updated", user));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new apiError(400, "User not found");
    }
    return res
      .status(200)
      .json(new apiResponse(200, "User Deleted Successfully"));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
