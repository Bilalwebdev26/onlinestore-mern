import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    //   match: [/.+\@.+\.._+/, "Please Enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
    refreshToken:{
        type:String,
    }
  },
  { timestamps: true }
);
userSchema.pre("save", async function(next){
  if (!this.isModified("password")) {
    return next(); //skip if password was not changed
  }
  const saltrounds = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, saltrounds);
  next();
});
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateRefreshToken =  function(){
  return jwt.sign(
    {
        _id:this._id
    },
    process.env.REFRESH_TOKEN_SECRETKEY,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRYKEY
    }
  )
}
userSchema.methods.generateAccessToken =  function() {
    return jwt.sign(
        {
            _id:this._id,
            name:this.name,
            email:this.email,
        },
        process.env.ACCESS_TOKEN_SECRETKEY,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRYKEY
        }
    )
}
const User = mongoose.model("User", userSchema);
export default User;
