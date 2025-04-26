import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AuthService from '../services/AuthService'; // Import AuthService

const Login = () => {
  const [username, setUsername] = useState(""); // Thay email bằng username
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Thêm state để hiển thị lỗi
  const navigate = useNavigate(); // Để chuyển hướng sau khi đăng nhập thành công

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await AuthService.login(username, password); // Gọi API đăng nhập với username
      if (data.token) {
        localStorage.setItem('token', data.token); // Lưu token vào localStorage
        localStorage.setItem('username', username); // Lưu tên người dùng vào localStorage
        navigate('/'); // Chuyển hướng về trang chủ
      }
    } catch (error) {
      setError("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.");
      console.error("Lỗi đăng nhập:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[500px] max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Đăng nhập
        </h2>

        {/* Hiển thị lỗi nếu có */}
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold text-lg">Tên đăng nhập</label>
            <div className="flex items-center border rounded-lg px-4 py-3 focus-within:border-red-600 transition duration-300">
              <FaUser className="text-gray-500 mr-3 text-lg" />
              <input
                type="text" // Sử dụng type="text" cho username
                placeholder="Nhập tên đăng nhập..."
                className="w-full outline-none bg-transparent text-lg focus:ring-2 focus:ring-red-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Lấy giá trị username
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold text-lg">Mật khẩu</label>
            <div className="flex items-center border rounded-lg px-4 py-3 focus-within:border-red-600 transition duration-300">
              <FaLock className="text-gray-500 mr-3 text-lg" />
              <input
                type="password"
                placeholder="Nhập mật khẩu..."
                className="w-full outline-none bg-transparent text-lg focus:ring-2 focus:ring-red-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Lấy giá trị mật khẩu
                required
              />
            </div>
          </div>

          <div className="flex justify-between text-sm mb-6">
            <a href="#" className="text-blue-500 hover:underline text-lg">
              Quên mật khẩu?
            </a>
            <a href="#" className="text-blue-500 hover:underline text-lg">
              Đăng ký ngay
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300 text-lg font-semibold"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
