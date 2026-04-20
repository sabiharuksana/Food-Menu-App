import React, { useState } from "react";
import "./menu.css";

const menuData = [
  // 🍳 Breakfast
  { id: 1, name: "Masala Dosa", category: "Breakfast", rating: 4.5, price: 80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLytapOUGsPgw5JCotDKxCz7eyuWCXvr8T3g&s" },
  { id: 2, name: "Idli Sambar", category: "Breakfast", rating: 4.6, price: 60, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc" },
  { id: 3, name: "Onion Dosa", category: "Breakfast", rating: 4.2, price: 70, image: "https://thumbs.dreamstime.com/b/onion-dosa-plain-recipe-finely-chopped-topping-over-which-gives-very-yummy-taste-also-can-be-eaten-195902443.jpg" },
  { id: 4, name: "Poori Bhaji", category: "Breakfast", rating: 4.9, price: 90, image: "https://i.ytimg.com/vi/_8HcWaEs8I8/maxresdefault.jpg" },

  // 🍛 Biryani
  { id: 5, name: "Chicken Biryani", category: "Biryani", rating: 4.5, price: 249, image: "https://paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230323_230743.jpg" },
  { id: 6, name: "Mutton Biryani", category: "Biryani", rating: 4.2, price: 449, image: "https://media.istockphoto.com/id/1430345748/photo/biryani-overhead-view.jpg?s=612x612&w=0&k=20&c=XTh_RyL2FE5BkVYKarmAAR6iIYSeEXcmTR80hLzzKsM=" },
  { id: 7, name: "Veg Biryani", category: "Biryani", rating: 4.3, price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWA2Etw1RJ-InCXJa24bxqg8XIIYCpZ1v4QQ&s" },
  { id: 8, name: "Hyderabadi Dum Biryani", category: "Biryani", rating: 4.6, price: 299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLcjzfW_Wx_jh7swBDD9xC3WD4CqAQqarFA&s" },

  // 🍛 Curry Veg
  { id: 9, name: "Paneer Butter Masala", category: "Curry Veg", rating: 4.5, price: 180, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7" },
  { id: 10, name: "Veg Kadai", category: "Curry Veg", rating: 4.2, price: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUbM9RdW7hBhyMs5pEwXFlAWPN-viOPSdcQ&s" },
  { id: 11, name: "Dal Tadka", category: "Curry Veg", rating: 4.3, price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHMpt2EeQirHnK3png-X2BCbolSP93-bXLw&s" },

  // 🍗 Curry Non-Veg
  { id: 12, name: "Butter Chicken", category: "Curry Non-Veg", rating: 5.0, price: 299, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" },
  { id: 13, name: "Kadai Chicken", category: "Curry Non-Veg", rating: 4.5, price: 260, image: "https://mariasmenu.com/wp-content/uploads/Kadai-Chicken.png" },
  { id: 14, name: "Fish Curry", category: "Curry Non-Veg", rating: 4.2, price: 280, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2zeTQtt3yTHophMHcMMCQLO0lDsZO9V0dQ&s" },

  // 🍟 Starters
  { id: 15, name: "French Fries", category: "Starters", rating: 4.0, price: 120, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877" },
  { id: 16, name: "Chicken 65", category: "Starters", rating: 4.4, price: 220, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuU8u4Gayb238hVatt6geDnyxjrRcZFCM6eg&s" },
  { id: 17, name: "Paneer Tikka", category: "Starters", rating: 4.7, price: 180, image: "https://t4.ftcdn.net/jpg/04/75/65/21/360_F_475652107_Sx73qgHWljGylX5KRyDFeE46ftX0A4EE.jpg" },

  // 🥤 Drinks
  { id: 18, name: "Coke", category: "Drinks", rating: 4.5, price: 40, image: "https://i.pinimg.com/474x/71/da/fb/71dafb5841f9e306bd506a768ae37d3c.jpg" },
  { id: 19, name: "Mojito", category: "Drinks", rating: 4.2, price: 120, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87" },
  { id: 20, name: "Milkshake", category: "Drinks", rating: 4.6, price: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaR__cYvV5F5TndGAW4AgOKR8gRF6aX-caAg&s" },
  { id: 21, name: "Fresh Orange Juice", category: "Drinks", rating: 4.8, price: 90, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IEzrVWFHcl_4c6HCSSawKAbt_weQIEQ5Ug&s" }
];



const categories = ["All", "Breakfast", "Biryani", "Curry Veg", "Curry Non-Veg", "Starters", "Drinks"];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const filteredItems = menuData.filter((item) => {
    return (
      (activeCategory === "All" || item.category === activeCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="app-bg">
      <h1 className="title">🍽️ Food Menu</h1>

      <h3 className="cart">🛒 Cart: {cart.length}</h3>

      <input
        type="text"
        placeholder="Search food..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredItems.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="overlay">
              <h2>{item.name}</h2>
               <p>⭐{item.rating}</p>
              <p>₹{item.price}</p>

              <button onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;