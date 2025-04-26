import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";

const ProductManager = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await ProductService.getAllProducts();
      setProducts(res.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Quản lý sản phẩm</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 border">STT</th>
              <th className="py-3 px-4 border">Tên sản phẩm</th>
              <th className="py-3 px-4 border">Giá</th>
              <th className="py-3 px-4 border">Ảnh</th>
              <th className="py-3 px-4 border">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={p.id} className="text-center">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{p.name}</td>
                <td className="py-2 px-4 border">{p.price?.toLocaleString()} đ</td>
                <td className="py-2 px-4 border">
                  <img src={p.image} alt={p.name} className="w-16 h-16 object-cover mx-auto" />
                </td>
                <td className="py-2 px-4 border">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded mr-2">
                    Sửa
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded">
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManager;
