import React, { useEffect, useState } from 'react';
import Products from '../../assets/Components/Products/Products';
import { dummyData, subCategoryMap } from '../../Db/ProductData';
import Categories from '../../assets/Components/Categories/Categories';

const ProductSec = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const all = Object.values(dummyData).flat();
    setAllProducts(all);
    setCurrentProducts(all);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSubcategories(subCategoryMap[category] || []);
    const categoryProducts = dummyData[category] || [];
    setCurrentProducts(categoryProducts);
  };

  return (
    <div>
      <>
      <Categories/>
      </>
      {/* Top Header */}
      <div className="text-center my-5">
        <h2 className="text-xs text-black tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
      </div>

      
      <div className='text-center'>

      </div>

      {/* Products Component */}
      <Products products={currentProducts} subcategories={subcategories} />
    </div>
  );
};

export default ProductSec;
