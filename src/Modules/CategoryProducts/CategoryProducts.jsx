import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../assets/Components/Products/Products'
import { dummyData, subCategoryMap } from '../../Db/ProductData';

function CategoryProducts() {

  const [subcategories, setSubcategories] = useState([]);



    const { name } = useParams()

    const [products, setProducts] = useState([])
  useEffect(() => {
    const data = dummyData[name];
    setProducts(data || []);
      setSubcategories(subCategoryMap[name] || []);
  }, [name]);


    if(products.length === 0) return <div>Loading...</div>

  return (
     <Products products={products} subcategories={subcategories} />
  )
}

export default CategoryProducts