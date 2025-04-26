import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { FaHome, FaBoxOpen, FaSignOutAlt,FaTags } from "react-icons/fa";
import AdminProductList from "./AdminProductList";

const Admin = () => {
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Quản trị</h2>
        <ul className="space-y-4">
          <li
            className={`flex items-center gap-3 cursor-pointer hover:text-red-500 ${
              selectedSection === "dashboard" && "text-yellow-400"
            }`}
            onClick={() => setSelectedSection("dashboard")}
          >
            <FaHome />
            <span>Trang chủ</span>
          </li>
          <li
            className={`flex items-center gap-3 cursor-pointer hover:text-red-500 ${
              selectedSection === "products" && "text-yellow-400"
            }`}
            onClick={() => setSelectedSection("products")}
          >
            <FaBoxOpen />
            <Link to="/admin/products">Quản lý sản phẩm</Link>
          </li>
          <li className="flex items-center gap-3 hover:text-red-500">
                <FaTags />
                <Link to="/admin/brands">Quản lý thương hiệu</Link>
        </li>
          <li
            className="flex items-center gap-3 hover:text-red-500 cursor-pointer"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {selectedSection === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Chào mừng đến trang quản trị!
            </h1>
            <p className="text-gray-600">
              Đây là nơi bạn có thể quản lý sản phẩm, đơn hàng, người dùng,...
            </p>
          </>
        )}

        {selectedSection === "products" && <AdminProductList />}
      </div>
    </div>
  );
};

export default Admin;
