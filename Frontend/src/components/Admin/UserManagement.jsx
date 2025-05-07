import React, { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      name: "Bilal",
      email: "bilal@gmail.com",
      password: "123",
      _id:1,
      role: "admin",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("Form Data : ",formData)
    setFormData({
      name:'',
      email:'',
      password:'',
      role:"customer"
    })
  }
  const handleRoleChange = (userId,newRole)=>{
    console.log({_id:userId,role:newRole})
  }
  const handleDeleteUser = (userId)=>{
    if(window.confirm("Are you sure you want to delete this user?")){
      console.log("User Id Is deleted : ",userId)
    }
  }
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-black mb-4">User Management</h1>
      <div className="p-3 border border-gray-300 rounded-md">
        <h3 className="text-xl font-mono">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={(e)=>setFormData({...formData,name:e.target.value})}
            className="w-full border rounded p-2"
          />
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <label htmlFor="" className="block text-gray-700`">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          >
            <option value="customer" >
              Customer
            </option>
            <option value="admin">Admin</option>
          </select>
          <div className=" flex items-center justify-center mt-3">
            <button
              type="submit"
              className="text-center cursor-pointer hover:scale-105 w-full bg-green-500 hover:bg-green-700 transition-all rounded py-2 px-4"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase  text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=>(
              <tr key={user._id} className="border-b hover:bg-gray-200">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <select className="p-2 border rounded" name="" value={user.role} onChange={(e)=>handleRoleChange(user._id,e.target.value)} >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td>
                  <button onClick={()=>handleDeleteUser(user._id)} className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
