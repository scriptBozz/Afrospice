import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu";

export default function navBarItem() {
  return (
    <div className="navbar">
      <div className="navbarbrand">
        <h2>Afrospice</h2>
      </div>
      <div className="navmenuitems">
        <Link to="/">
          <li className="navmenuitem">Home</li>
        </Link>
        <Link to="/wishlist">
          <li className="navmenuitem">Wishlist</li>
        </Link>
        <Link to="/favourites">
          <li className="navmenuitem">Favorites</li>
        </Link>
        <Link to="/products">
          <li className="navmenuitem">Store</li>
        </Link>
        <Link to="/vendors">
          <li className="navmenuitem">Vendors</li>
        </Link>
      </div>
      <div className="navactionkeys">
        <Link to="/login">
          <Button variant="contained">
            {" "}
            <p className="navmenuitem">Login</p>
          </Button>
        </Link>
      </div>
      <Button><MenuIcon sx={{fontSize:40}}/></Button>
    </div>
  );
}
