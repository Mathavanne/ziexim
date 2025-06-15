import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../../Db/ProductData';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const foundProduct = allProducts.find(item => item.id === parseInt(id));
    setProduct(foundProduct || {});
  }, [id]);

  const handleCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find(item => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
    }
    alert('Added to Cart');
  };

  if (!product.id) return <div className="text-center py-20 text-xl">Product Not Found</div>;

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={product?.title}
              className="lg:w-1/2 w-full lg:h-auto h-64 max-h-[400px] object-contain object-center rounded"
              src={product?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{product?.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.title}</h1>
              <p className="leading-relaxed mb-4">{product?.description}</p>
              <div className="flex mt-6">
                {/* <button
                  onClick={() => handleCart(product)}
                  className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
                >
                  Add to Cart
                </button> */}
                {/* <Link
                  to="/cart"
                  className="ml-4 w-10 h-10 rounded-full bg-gray-200 inline-flex items-center justify-center text-gray-500"
                >
                  <svg fill="currentColor" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
