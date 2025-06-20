import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteProduct,
  fetchProducts,
} from "../../redux/slices/adminSlice/adminProduct.Slice";
const ProductManagment = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.adminProduct
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const deleteProductbyID = (id) => {
    const confirmed = window.confirm(
      "⚠️ Are you sure you want to delete this product? This action cannot be undone."
    );

    if (confirmed) {
      console.log(`✅ Product deleted successfully: ${id}`);
      dispatch(deleteProduct(id));
    } else {
      console.warn(`❌ Delete action cancelled for product ID: ${id}`);
      alert("Product deletion cancelled. The product was not removed.");
    }
  };
  if(loading){
    return <p className="text-2xl font-black">Loading</p>
  }
  return (
    <div className="max-w-7xl mx-auto p-0 md:p-6">
      <h2 className="text-2xl font-bold mb-6">Product Managemnet</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Sku</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  className="border-b hover:bg-gray-50 cursor-pointer"
                  key={product._id}
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4 flex ">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 duration-200"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 text-white px-2 py-1 duration-200 rounded cursor-pointer hover:bg-red-600"
                      onClick={() => deleteProductbyID(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-800">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagment;
