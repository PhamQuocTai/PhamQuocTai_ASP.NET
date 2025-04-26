import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../services/ProductService';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const fetchProductDetail = async () => {
    try {
      const res = await ProductService.getProductById(id);
      setProduct(res); // ✅ Đúng rồi nè!
    } catch (error) {
      console.error('Lỗi khi lấy chi tiết sản phẩm:', error);
    }
  };
  

  if (!product) {
    return <div className="text-center mt-10 text-white">Đang tải...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">{product.name}</h2>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-red-500 font-bold text-2xl mb-6">
            {Number(product.price).toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </p>
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
