import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products({ products = [], subcategories = [] }) {
  const [filteredData, setFilteredData] = useState(products);

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  const filterBySubcategory = (subCat) => {
    console.log(subCat,"asd")
    if (subCat === 'all') {
      setFilteredData(products);
    } else {
      const filtered = products.filter((item) => item.category === subCat);
      setFilteredData(filtered);
    }
  };

  return (
    <>
        <div>
  {subcategories.length > 0 && (
          <div className="text-center py-5">
            {subcategories.map((sub, idx) => (
              <button
                key={idx}
                className="btn bg-black text-white m-2 p-2 rounded-md hover:bg-gray-700"
                onClick={() => filterBySubcategory(sub)}
              >
                {sub}
              </button>
            ))}
            <button
              className="btn bg-black text-white m-2 p-2 rounded-md hover:bg-gray-700"
              onClick={() => filterBySubcategory('all')}
            >
              Show All
            </button>

          </div>
        )}

        </div>
      

      {/* Product Cards */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {filteredData.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer"
              >
                <div className="block relative h-48 rounded overflow-hidden bg-white shadow">
                  <img
                    alt={product.title}
                    className="object-contain object-center w-full h-full"
                    src={product.image || 'https://via.placeholder.com/150'}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
