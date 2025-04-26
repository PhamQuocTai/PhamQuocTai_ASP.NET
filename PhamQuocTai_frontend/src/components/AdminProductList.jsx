import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AdminProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await ProductService.getAllProducts();
    setProducts(res);
  };

  const handleView = (id) => {
    alert(`Xem chi tiết sản phẩm ID: ${id}`);
    // hoặc dùng: navigate(`/admin/products/${id}`)
  };

  const handleEdit = (id) => {
    alert(`Chỉnh sửa sản phẩm ID: ${id}`);
    // hoặc dùng: navigate(`/admin/products/edit/${id}`)
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (confirmDelete) {
      try {
        await ProductService.deleteProduct(id);
        fetchProducts(); // load lại danh sách sau khi xóa
      } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
      }
    }
  };

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold mb-4 text-black">Danh sách sản phẩm</h2>
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-black">ID</th>
            <th className="border px-4 py-2 text-black">Tên</th>
            <th className="border px-4 py-2 text-black">Giá</th>
            <th className="border px-4 py-2 text-black">Hình ảnh</th>
            <th className="border px-4 py-2 text-black">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">
                {Number(product.price).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </td>
              <td className="border px-4 py-2">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-20 h-14 object-cover"
                />
              </td>
              <td className="border px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-3 text-black">
                  <FaEye
                    className="cursor-pointer"
                    onClick={() => handleView(product.id)}
                    title="Xem"
                  />
                  <FaEdit
                    className="cursor-pointer"
                    onClick={() => handleEdit(product.id)}
                    title="Sửa"
                  />
                  <FaTrash
                    className="cursor-pointer"
                    onClick={() => handleDelete(product.id)}
                    title="Xóa"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;
