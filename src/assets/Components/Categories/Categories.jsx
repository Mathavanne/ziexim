import React, { useEffect, useState } from 'react'
import Feature from '../../Feature/Feature'

const Categories = () => {
        const [categories, setCategories] = useState([
            
  "Fabrics",
  "Garments",
  "Leather products",
"Agriculture Products",

        ])

return (
<div>
<Feature cards={categories} />
</div>
)
}

export default Categories;
