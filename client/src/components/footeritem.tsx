import React from "react";
export default function footeritem() {
  return (
    <div className="footer">
      <div className="footeritemdiv1">
        <div className="footeritem socials">
          <h1>AfroSpice</h1>
        </div>
        <div className="footeritem footerbrand">
          <li>info@afrospice.com</li>
          <li>+2341234567545</li>
          <li>
            <a href="/">facebook</a>
          </li>
          <a href="/contact">contacts us</a>
        </div>
        <div className="footeritem support">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/favorites">favourites</a>
          </li>
          <li>
            <a href="/orders">orders</a>
          </li>
          <li>
            <a href="/Account">My Account</a>
          </li>
          <a href="/shop">Shop</a>
        </div>
      </div>
      <div className="footeritemdiv2">
        <p>created by Hex</p>
      </div>
    </div>
  );
}
