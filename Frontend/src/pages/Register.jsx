import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/slices/auth.slice.js";
import { useDispatch } from "react-redux";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered : ", { name, email, password });
    dispatch(registerUser({name, email, password}))
  };
  return (
    <div className="w-[75%] flex items-center justify-center p-6 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-5 shadow-2xl rounded-lg mt-4 bg-gray-50">
          <h2 className="text-center mb-2 text-lg font-semibold">Rabbit</h2>
          <h3 className="text-center text-3xl font-bold mb-3">Hey there!👋</h3>
          <p className="text-center text-sm text-gray-800 mb-2">
            Enter your username and pasword to Login
          </p>
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            type="text"
            required
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Your Name"
            className="outline-none border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 mb-2"
          />
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            required
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Your Email"
            className="outline-none border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 mb-2"
          />
          <label htmlFor="password" className="text-sm font-semibold">
            Password
          </label>
          <input
            type="password"
            required
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Your Password"
            className="outline-none border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-black rounded-md text-white mt-3 px-3 py-2 cursor-pointer  hover:scale-110 duration-300 hover:bg-gray-950 mb-2"
          >
            Sign Up
          </button>
          <p className="text-sm text-center font-medium">
            Do you have an account?
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
