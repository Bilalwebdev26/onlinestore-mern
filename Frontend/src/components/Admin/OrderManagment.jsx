import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteOrder, fetchOrders, updateStatus } from "../../redux/slices/adminSlice/adminOrder.Slice";
const OrderManagment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, loading, error } = useSelector((state) => state.adminOrder);
  const { user } = useSelector((state) => state.auth);
  useEffect(()=>{
    if(!user && user.role!=="admin"){
      navigate("/")
    }
  },[navigate,user])
  useEffect(() => {
    if (user && user.role === "admin") {
      dispatch(fetchOrders());
    }
  }, [dispatch,user]);
  const handleStatusChange = (id, status) => {
    console.log(id)
    if(user && user.role==="admin"){
      dispatch(updateStatus({id,status}))
    }
  };
  const handleDeleteOrder = (id)=>{
    const confirmed = window.confirm("⚠️ Are you sure you want to delete this Order? This action cannot be undone.");
    
      if (confirmed) {
        console.log(`✅ Order deleted successfully: ${id}`);
        dispatch(deleteOrder(id));
      } else {
        console.warn(`❌ Delete action cancelled for Order ID: ${id}`);
        alert("Order deletion cancelled. The Order was not removed.");
      }
  }
  if(loading){
    return <p className="text-xl text-center font-bold">Loading</p>
  }
  if(error){
    return <p className="text-xl text-center font-bold">Error:{error}</p>
  }
  return (
    <div className="max-w-7xl mx-auto md:p-6">
      <h2 className="text-2xl mb-6 font-bold">Order Management</h2>
      <div className="rounded overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3">Order Id</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Total Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
              <th className="px-4 py-3">Delete Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr className="border-b hover:bg-gray-50" key={order._id}>
                  <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                    {order.user?.name}
                  </td>
                  <td className="py-4 px-4 ">
                    {parseFloat(order.totalPrice).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 block p-2.5"
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      className="cursor-pointer bg-green-500 hover:bg-green-600 transition-all inline-flex items-center rounded px-4 py-2 whitespace-nowrap text-white text-sm"
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                    >
                      Mark As Delivered
                    </button>
                  </td>
                  <td className="p-4">
                    <button
                      className="cursor-pointer bg-red-500 hover:bg-red-900 transition-all inline-flex items-center rounded px-4 py-2 whitespace-nowrap text-white text-sm"
                      onClick={() => handleDeleteOrder(order._id)}
                    >
                      Delete Order
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={4} className="text-center p-4">
                  No Order
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagment;
