import { FaSearch, FaUser, FaShoppingCart,FaSignOutAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CategoryService from "../services/CategoryService";

const Header = () => {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();
  const [categories, setCategories] = useState([]);
  const [username, setUsername] = useState(null);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await CategoryService.getAllCategories();
      setCategories(data);
    };
  
    fetchCategories();
  }, []);
  //
    // Kiểm tra tên người dùng khi trang được tải lại
    useEffect(() => {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername); // Cập nhật tên người dùng từ localStorage
      }
    }, []);
     // Hàm đăng xuất
    const handleLogout = () => {
      localStorage.removeItem('token');  // Xóa token khỏi localStorage
      localStorage.removeItem('username');  // Xóa tên người dùng khỏi localStorage
      setUsername(null);  // Cập nhật lại state
    };



  return (
    <div className="p-4 bg-black flex items-center justify-between">
      {/* Logo + Nav */}
      <div className="flex items-center space-x-4">
        <h1 className="text-[40px] font-bold text-red-700">SGBakes</h1>
      </div>
      {/* //cate */}
      <div className="flex space-x-5 ml-5">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="text-white hover:text-red-500 transition"
          >
            {category.name}
          </Link>
        ))}
      </div>


      {/* Search Bar */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 pl-10 text-white bg-gray-800 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* User + Cart */}
      <div className="flex items-center space-x-6">
      {username ? (
          <>
            <span className="text-white text-lg">{username}</span>
            <button
              onClick={handleLogout}
              className="ml-4 text-white text-xl cursor-pointer hover:text-red-500 transition flex items-center gap-2"
            >
              <FaSignOutAlt /> Đăng xuất
            </button>
          </>
        ) : (
          <Link to="/login">
            <FaUser className="text-white text-2xl cursor-pointer hover:text-red-500 transition" />
          </Link>
        )}

        <Link to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-white text-2xl cursor-pointer hover:text-red-500 transition" />
            {totalQuantity > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-1 z-10">
                {totalQuantity}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
