import axios from 'axios';
import { API_BASE_URL } from '../config'; // Thêm URL cơ sở của bạn vào config

const AuthService = {
  // Đăng nhập
  login: async (username, password) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/Auth/login`, // API login
        {
          username,  // Sử dụng username thay vì email
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            accept: '*/*',
          },
        }
      );
      return response.data; // Trả về token hoặc thông tin người dùng nếu API trả về
    } catch (error) {
      console.error('Lỗi khi gọi API đăng nhập:', error);
      throw error; // Ném lỗi để có thể xử lý ở nơi gọi
    }
  },
};

export default AuthService;
