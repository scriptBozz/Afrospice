import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
export default function footeritem() {
  return (
    <div className="footer">
      <div className="footeritemdiv1">
        <div className="footeritem socials">
          <FacebookSharpIcon />
          <WhatsAppIcon />
        </div>
        <div className="footeritem footerbrand">
          <h1>AfroSpice</h1>
        </div>
        <div className="footeritem support">
          <ForumRoundedIcon />
        </div>
      </div>
      <div className="footeritemdiv2">
        <p>created by Hex</p>
      </div>
    </div>
  );
}
