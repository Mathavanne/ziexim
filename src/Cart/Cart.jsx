import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
function Cart() {
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)

    const carts = JSON.parse(localStorage.getItem('cart')) || []

    useEffect(() => {
      const total = carts.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
      }, 0)
      setTotal(total)
    }, [carts])

    const handleInc = (id) => {
      const updatedCart = carts.map(item => {
        if(item.id === id){
          return{
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      navigate('/cart')
    }

    const handleDec = (id ) => {
      const updatedCart = carts.map(item => {
        if(item.id === id){
          const newQuantity = Math.max(1, item.quantity - 1);
          return{
            ...item,
            quantity: newQuantity
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      navigate('/cart')
    }

    const removeProduct = (id) => {
      const updatedCart = carts.filter(item => item.id !== id)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      navigate('/cart')
    }


    if(carts.length===0){
      return <h1 className=' h-[55vh] flex justify-center items-center text-4xl'>Cart is Empty</h1>
    }
     
    return (
        <div className="container mx-auto mt-10">
          <div className="w-3/4shadow-md my-10 flex-wrap">
            <div className=" bg-white px-10 py-1">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">ZI Global ExIm</h1>
                <h2 className="font-semibold text-2xl">{carts.length} Items</h2>
              </div>
              <div className="flex flex-wrap mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
              </div>
              {
                carts?.map(cart => {
                  return (
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                      <div className="flex w-2/5">
                        <div className="w-20">
                          <img className="h-24" src={cart?.image} alt={cart?.title} />
                        </div>
                        <div className="flex flex-col justify-between ml-4 flex-grow">
                          <span className="font-bold text-sm">{cart?.title}</span>
                          <span className="text-red-500 text-xs capitalize">{cart?.category}</span>
                          <div className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={() => removeProduct(cart?.id)}>Remove</div>
                        </div>
                      </div>
                      <div className="flex justify-center w-1/5">
                        <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() => handleDec(cart?.id)}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
    
                        <input className="mx-2 border text-center w-8" type="text" value={cart?.quantity} />
    
                        <svg className="fill-current text-gray-600 w-3 cursor-pointer" onClick={() => handleInc(cart?.id)} viewBox="0 0 448 512">
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">${cart?.price}</span>
                      <span className="text-center w-1/5 font-semibold text-sm">${(cart?.price * cart?.quantity).toFixed(2)}</span>
                    </div>
                  )
                })
              }
    
              <Link to={'/products'} className="flex font-semibold text-gray-900 text-sm mt-10">
    
                <svg className="fill-current mr-2 text-gray-900 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                Continue Shopping
              </Link>
            </div>
    
            <div id="summary" className="w-2/4 px-8 py-10 container">
              <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
              <div className="flex flex-wrap justify-between mt-10">
                <span className="font-semibold text-sm uppercase">Items {carts?.length}</span>
                <span className="font-semibold text-sm">$ {total?.toFixed(2)}</span>
              </div>
              <div className="py-7 mt-2">
                <label for="promo" className="font-semibold inline-block text-sm uppercase">Promo Code</label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-3 py-1 text-sm text-white uppercase">Apply</button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>$ {(total).toFixed(2)}</span>
                </div>
                <Link to='/checkout'
                 className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 p-2 text-sm text-white uppercase w-full">Checkout</Link>
              </div>
            </div>
          </div>
       </div>
      )
    }
    
     

export default Cart