import User from "../Model/User.model.js";
import { apiError } from "../utils/apiError.class.js";
import { apiResponse } from "../utils/apiRes.class.js";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const refreshToken = await user.generateRefreshToken();
    const accessToken = await user.generateAccessToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { refreshToken, accessToken };
  } catch (error) {
    throw new apiError(
      500,
      "Error occur while generating access and refresh token"
    );
  }
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      throw new apiError(400, "User already Exist");
    }
    user = new User({ name, email, password });
    await user.save();
    const { refreshToken, accessToken } = await generateAccessAndRefereshTokens(
      user._id
    );
    const option = {
      httpOnly: true,
      secure: true,
    };
    const selectedUser = await User.findById(user._id).select(
      "-password -refreshtoken"
    );
    return res
      .status(201)
      .cookie("refreshToken", refreshToken, option)
      .cookie("accessToken", accessToken, option)
      .json(new apiResponse(201, "User Regsitered SuccessFully", selectedUser));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new apiError(400, "Email not exist");
    }
    const checkPassword = await user.matchPassword(password);
    if (!checkPassword) {
      throw new apiError(400, "Password Not Matched");
    }
    const { refreshToken, accessToken } = await generateAccessAndRefereshTokens(
      user._id
    );
    const option={
        httpOnly:true,
        secure:true
    }
    const selectedUser = await User.findById(user._id).select(
      "-password -refreshtoken"
    );
    return res
      .status(200)
      .cookie("refreshToken",refreshToken,option)
      .cookie("accessToken",accessToken,option)
      .json(new apiResponse(200, "User Login SuccessFully", selectedUser));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message }, "Login catch error");
  }
};

export const logout = async(req,res)=>{
  try {
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
    return res.status(200).json({message:`${req.user._id} Logout SuccessFully`})
  } catch (error) {
    res.status(500).json({ message: error.message }, "Logout catch error");
  }
}

export const profile = async(req,res)=>{
   try {
    const user = await User.findById(req.user._id).select("-password -refreshToken")
    if(!user){
        throw new apiError(401,"Inavlid user")
    }
    return res.status(200).json(new apiResponse(200,`Show user profile ${user._id}`,user))
   } catch (error) {
    return res.status(500).json({message:`${error.message} Error while fetching Profile `})
   }
}
