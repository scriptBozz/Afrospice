import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to={"/"} color="inherit">
        Afrospice
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
        <Copyright sx={{ mt: 5 }} />
      </div>
    </div>
  );
}
