import { Subscriber } from "../Model/subscriber.model.js";
import { apiError } from "../utils/apiError.class.js";
import { apiResponse } from "../utils/apiRes.class.js";

export const subscribe = async (req, res) => {
  const { email } = req.body;
  if(!email){
    throw new apiError(400,"Email is required")
  }
  try {
    let checkEmail = await Subscriber.findOne({email});
    if (checkEmail) {
      throw new apiError(400, "Email already exist");
    }
    checkEmail = await Subscriber.create({
      email,
    });
    return res.status(201).json(new apiResponse(201,"Subscribe successfully",checkEmail))
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
};
