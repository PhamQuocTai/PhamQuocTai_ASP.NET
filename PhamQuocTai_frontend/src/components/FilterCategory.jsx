// CategoryFilter.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
                className={`px-4 py-2 rounded ${selectedCategory === "all" ? "bg-red-700 text-white" : "bg-gray-200"}`}
                onClick={() => setSelectedCategory("all")}
            >
                Tất cả
            </button>
            {categories.filter(cate => cate.status === 1)
                .map(cate => (
                    <button
                        key={cate.id}
                        className={`px-4 py-2 rounded ${selectedCategory === cate.slug ? "bg-red-700 text-white" : "bg-gray-200"}`}
                        onClick={() => {
                            setSelectedCategory(cate.slug);
                            navigate(`/category/${cate.slug || cate.id}`);
                        }}
                    >
                        {cate.name}
                    </button>
                ))}
        </div>
    );
};

export default CategoryFilter;
