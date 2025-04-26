// services/CategoryService.js
import axios from 'axios';
import { API_BASE_URL } from '../config';

const CategoryService = {
  // Lấy tất cả danh mục
  getAllCategories: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Category`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi gọi API Category:', error);
      return [];
    }
  },
};

export default CategoryService;
