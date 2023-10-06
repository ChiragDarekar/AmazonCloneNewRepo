import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="nav-logo border">
          <div className="logo">
            <img src="amazon_logo.png" height="50px" />
          </div>
        </div>

        <div className="nav-add border">
          <p className="delivery">Deliver-to</p>
          <div className="add-icon">
            <i class="fa-solid fa-location-dot"></i>
            <p className="location">India</p>
          </div>
        </div>

        <div className="nav-search">
          <select className="search-select">
            <option>All</option>
            <option>All</option>
            <option>All</option>
            <option>All</option>
            <option>All</option>
          </select>
          <input className="search-input" placeholder="Search Amazon" />
          <div className="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

<div className="nav-lang">
<i class="fa-solid fa-globe"></i>  EN  <i class="fa-solid fa-sort-down"></i>

</div>

        <div className="nav-signin">
        <p className="nav-first"><span>Hello,SignIn</span></p>
        <p className="nav-second">Account & Lists</p>
        </div>

        <div className="nav-returns">
        <p className="nav-first"><span>Returns</span></p>
        <p className="nav-second">& Orders</p>
        </div>

        <div className="nav-cart">
        <i class="fa-solid fa-cart-shopping"></i>
        Cart
        </div>


      </div>
    </>
  );
};

export default Navbar;
