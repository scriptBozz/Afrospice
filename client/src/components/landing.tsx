import React from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";

import Typography from "@mui/material/Typography";
import StoreIcon from "@mui/icons-material/Store";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import IconButton from "@mui/material/IconButton";
import appstore from "../assets/images/appstore.png"
import hawei from "../assets/images/hawei.png";
import googleplay from "../assets/images/googleplay.png"


export default function landing() {
  return (
    <div className="landing">
      <div className="margin"></div>
      <div className="container "></div>
      <div className="landingheader">
        <div className="landingtext">
          <Typography
            variant="h2"
            gutterBottom
            fontWeight="500"
            color="#025629"
            fontFamily="lora"
          >
            Experience Home Abroad
          </Typography>

          {/* <div className="landingtext2">
          <Typography variant="h4" gutterBottom>
            Unlock Authentic Flavors, Seamless Connections
          </Typography>
        </div> */}
          <Typography
            variant="h5"
            fontWeight="300"
            color="#FFFFFF"
            fontFamily="lora"
          >
            Connect with Dealer and Vendors of your native spices and cuisine
          </Typography>

          <Typography
            variant="h4"
            fontWeight="400"
            color="#FFFFFF"
            fontFamily="lora"
          >
            Find shops and Vendors near you.
          </Typography>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Location | city..."
          />
          <button type="button" className="search-button">
            Search
          </button>
        </div>
      </div>
      <div className="content">
        <div className="left-content">
          <Typography
            gutterBottom
            fontWeight="4vw"
            color="#025629"
            fontFamily="lora"
          >
            Connect with Dealer and Vendors of your native spices and cuisine
          </Typography>
        </div>
        <div className="right-content">right</div>
      </div>

      <div className="landing1">
        <div>
          <Typography variant="h4" gutterBottom className="landing1-typo">
            Unlock Authentic Flavors, Seamless Connections
          </Typography>
          <Typography variant="h5" gutterBottom className="landing1-typo">
            How to order
          </Typography>
        </div>
        <div className="landinghow">
          <div>
            <PinDropIcon fontSize="large" sx={{ color: "#FF8000" }} />
            <Typography variant="h5" fontFamily="ojuju">
              Enter your Location
            </Typography>
          </div>
          <div>
            <StoreIcon fontSize="large" sx={{ color: "#FF8000" }} />
            <Typography variant="h5" fontFamily="ojuju">
              Find list of vendors
            </Typography>
          </div>
          <div>
            <IconButton>
              <RoomServiceIcon fontSize="large" sx={{ color: "#FF8000" }} />
            </IconButton>
            <Typography variant="h5" fontFamily="ojuju">
              delivery or pickup
            </Typography>
          </div>
        </div>
      </div>

      <div className="downloadapplanding">
        <h1>Download the app</h1>

        <div className="downloaddiv">
          <img src={appstore} alt="app store" className="downloadlink" />
          <img src={hawei} alt="app store" className="downloadlink" />
          <img src={googleplay} alt="app store" className="downloadlink" />
        </div>
      </div>
    </div>
  );
}
