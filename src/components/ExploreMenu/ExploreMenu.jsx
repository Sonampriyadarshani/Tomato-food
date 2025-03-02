import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category ,setCategory}) => {


  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
  Discover a <span className="highlight">world of flavors</span> with our thoughtfully crafted menu.  
  From <span className="spicy">rich, aromatic spices</span> to <span className="fresh">fresh, handpicked ingredients</span>,  
  every dish is a <span className="celebration">celebration of taste</span> and quality.  
</p>

<div className="explore-menu-list">
  {menu_list.map((item, index) => (
    <div
      onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
      key={index}
      className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}  // ✅ Apply 'active' class to div
    >
      <img src={item.menu_image} alt={item.menu_name} />
      <p>{item.menu_name}</p>
    </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
