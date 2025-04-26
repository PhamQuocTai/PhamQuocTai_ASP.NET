import React, { useEffect, useState } from "react";
import BrandService from "../services/BrandService";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AdminBrandList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const res = await BrandService.getAllBrands();
    setBrands(res);
  };

  const handleView = (id) => {
    alert(`Xem chi tiết thương hiệu ID: ${id}`);
    // Có thể điều hướng đến trang chi tiết nếu cần
  };

  const handleEdit = (id) => {
    alert(`Chỉnh sửa thương hiệu ID: ${id}`);
    // Có thể điều hướng đến trang sửa nếu cần
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa thương hiệu này?");
    if (confirmDelete) {
      try {
        await BrandService.deleteBrand(id);
        fetchBrands(); // Tải lại danh sách sau khi xóa
      } catch (error) {
        console.error("Lỗi khi xóa thương hiệu:", error);
      }
    }
  };

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold mb-4">Danh sách thương hiệu</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Tên thương hiệu</th>
            <th className="border px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{brand.id}</td>
              <td className="border px-4 py-2">{brand.name}</td>
              <td className="border px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <FaEye
                    className="cursor-pointer hover:text-blue-500"
                    onClick={() => handleView(brand.id)}
                    title="Xem"
                  />
                  <FaEdit
                    className="cursor-pointer hover:text-yellow-500"
                    onClick={() => handleEdit(brand.id)}
                    title="Sửa"
                  />
                  <FaTrash
                    className="cursor-pointer hover:text-red-500"
                    onClick={() => handleDelete(brand.id)}
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

export default AdminBrandList;
