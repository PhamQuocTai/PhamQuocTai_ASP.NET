import axios from 'axios';
import { API_BASE_URL } from '../config';

const BrandService = {
  // Lấy tất cả thương hiệu
  getAllBrands: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Brand`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi gọi API Brand:', error);
      return [];
    }
  },
};

export default BrandService;
