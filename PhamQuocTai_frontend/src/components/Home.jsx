// src/pages/Home.jsx
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import BrandService from '../services/BrandService';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await ProductService.getAllProducts();
      setProducts(data);
    };

    fetchData();
  }, []);
  //
  useEffect(() => {
    const fetchData = async () => {
      const productData = await ProductService.getAllProducts();
      const brandData = await BrandService.getAllBrands();
      setProducts(productData);
      setBrands(brandData);
    };

    fetchData();
  }, []);

  // Tạo map brandId -> brandName
  const brandMap = {};
  brands.forEach(b => {
    brandMap[b.id] = b.name;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Hiển thị brand */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Thương hiệu nổi bật</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div key={brand.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-center font-medium text-gray-800">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-600">Sản phẩm hôm nay</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="h-full"
          >
            <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition duration-300">
              <img
                src={product.imageUrl} // cần đảm bảo đường dẫn đúng
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-red-500 font-bold mb-4">
                  {Number(product.price).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <button className="mt-auto px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
                  Mua ngay
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
