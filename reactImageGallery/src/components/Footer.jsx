import React from "react";
import logo from "../assets/logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const img = {
    height: 91,
    width: 232,
  };
  return (
    <footer className="bg-[#E8EEEE] text-black py-8 px-12">
      <div className="container mx-auto flex justify-between">
        {/* First Column */}
        <div className="w-1/3 flex justify-center items-center">
          <div className="mb-2">
            <img src={logo} alt="" height={img.height} width={img.width} />
          </div>
          {/* Add any additional content for the first column */}
        </div>
        {/* vertical Line */}
        <div className="h-45 w-0.5 bg-[#746C6A] mx-1"></div>
        {/* Second Column */}
        <div className="w-1/3 flex justify-between p-8">
          <div className="w-1/2">
            <h4 className="text-lg font-semibold mb-2 font-sans">About us</h4>
            <ul>
              <li>Pricing and solutions</li>
              <li>Press room</li>
              <li>Stories & Trends</li>
              <li>Careers</li>
              <li>Customer support</li>
              <li>Image collections</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h4 className="text-lg font-semibold mb-2">Tools</h4>
            <ul>
              <li>Embed</li>
              <li>Plugins and extensions</li>
              <li>Archival calendar</li>
            </ul>
          </div>
        </div>
        {/* vertical Line */}
        <div className="h-45 w-0.5 bg-[#746C6A] mx-1"></div>

        {/* Third Column */}
        <div className="w-1/3 p-8 ">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-black">
              <FacebookRoundedIcon />
            </a>
            <a href="#" className="text-black ">
              <TwitterIcon />
            </a>
            <a href="#" className="text-black">
              <InstagramIcon />
            </a>
            {/* Add more social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
