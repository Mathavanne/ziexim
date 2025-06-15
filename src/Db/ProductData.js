import menshirt from "../assets/images/Shirt.png";
import tshirt from "../assets/images/t-shirt.png";
import womenjacket from "../assets/images/Jacket.png";
import Pant from "../assets/images/Pant.png";
import Kids from "../assets/images/kids.png";
export const subCategoryMap = {
  "Garments": ["Men's clothing", "WoMen's clothing", "Kids"],
   "Leather products": ["Accessories", "Footwear", "Fags"],
   "Agriculture Products": ["Grains", "Fruits", "Beverages", "Nuts"]
 };

export const dummyData = {
  "Garments": [
    {
      id: 1,
      title: "Men's Cotton T-Shirt",
      description: "Soft cotton t-shirt for everyday wear.",
      category: "Men's clothing",
      image: tshirt
    },
    {
      id: 2,
      title: "Women's Denim Jacket",
      description: "Classic denim jacket with a modern fit.",
      category: "WoMen's clothing",
      image: womenjacket
    },
    {
      id: 3,
      title: "Children's Pajama Set",
      description: "Comfortable pajama set for Kids.",
      category: "Kids",
      image: Kids
    },
    {
      id: 4,
      title: "Men's Formal Shirt",
      description: "Elegant formal shirt for office wear.",
      category: "Men's clothing",
      image: menshirt
    },
    {
      id: 5,
      title: "Women's Yoga Pants",
      description: "Flexible and breathable yoga pants.",
      category: "WoMen's clothing",
      image: Pant
    }
  ],
  "Leather products": [
    {
      id: 101,
      title: "Leather Wallet",
      description: "Compact wallet made from premium leather.",
      category: "Accessories",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 102,
      title: "Leather Handbag",
      description: "Elegant handbag perfect for daily use.",
      category: "WoMen's clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 103,
      title: "Leather Belt",
      description: "Durable leather belt with classic buckle.",
      category: "Men's clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 104,
      title: "Leather Jacket",
      description: "Stylish leather jacket for winter.",
      category: "Men's clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 105,
      title: "Leather Boots",
      description: "Premium boots crafted from full-grain leather.",
      category: "Footwear",
      image: "https://via.placeholder.com/150"
    }
  ],
  "Agriculture Products": [
    {
      id: 201,
      title: "Basmati Rice (5kg)",
      description: "High-quality long grain basmati rice.",
      category: "Grains",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 202,
      title: "Fresh Mangoes (2kg)",
      description: "Sweet and juicy mangoes sourced fresh.",
      category: "Fruits",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 203,
      title: "Arabica Coffee Beans (1kg)",
      description: "Rich and aromatic arabica coffee beans.",
      category: "Beverages",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 204,
      title: "GroundNuts (3kg)",
      description: "Crunchy and nutritious groundNuts.",
      category: "Nuts",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 205,
      title: "Green Tea Leaves (1kg)",
      description: "Organic green tea leaves for a healthy brew.",
      category: "Beverages",
      image: "https://via.placeholder.com/150"
    }
  ]
}

export const allProducts = Object.values(dummyData).flat();