import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos aperiam nihil adipisci itaque quo iusto omnis, animi
            aspernatur fugit unde consequatur dicta rerum voluptate amet.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
     <div>
         <p className="text-xl font-medium mb-5">Get In Touch</p>
        <ul className="text-xl font-medium mb-5">
          <li>+91-7982148755</li>
          <li>mohitpoewal12@gmail.com</li>
        </ul>
     </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">CopyWrite 2024 Indian.com All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
