import React from "react";
import Logo from "../assets/Group 706.png";
import AppStore from "../assets/appStore.png";
import GooglePlay from "../assets/googlePlay.png";
import { MdOutlineEmail, MdCall, MdOutlineLocationOn } from "react-icons/md";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterLine,
  RiHeartFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <div className="bg-[#C1DE76] flex justify-between px-20 py-5 rounded-2xl items-center w-[70%] absolute top-[-20%] shadow-wakanda">
          <div>
            <p className="text-metal text-4xl font-bold">Get the Wakanda App</p>
            <p className="text-[#333333] text-base font-medium">Enjoy alot more awesome features on the Wakanda Mobile App</p>
          </div>
          <div>
            <img src={AppStore} alt=""  className="pb-3"/>
            <img src={GooglePlay} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-light-green flex justify-between h-[60vh] px-20 pt-40">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <p className="text-a9d046 text-xl pb-5 font-bold">Links</p>
          <p className="text-white text-xl pb-5 font-bold">About Us</p>
          <p className="text-white text-xl pb-5 font-bold">Our Offers</p>
          <p className="text-white text-xl pb-5 font-bold">Pricing</p>
          <p className="text-white text-xl pb-5 font-bold">FAQs</p>
        </div>
        <div>
          <p className="text-a9d046 text-xl pb-5 font-bold">CONTACTS:</p>
          <div className="flex items-center text-white text-xl font-medium pb-3">
            <MdOutlineLocationOn className="text-2xl mr-5" />
            <p>42 Montgomery Rd, Yaba, Lagos.</p>
          </div>
          <div className="flex items-center text-white text-xl font-medium pb-3">
            <MdOutlineEmail className="text-2xl mr-5" />
            <p>
              Christian@african-founders.com <br /> abiodun@african-funders.com
            </p>
          </div>
          <div className="flex items-center text-white text-xl font-medium pb-5">
            <MdCall className="text-2xl mr-5" />
            <p>08064289402</p>
          </div>
          <div className="flex items-center text-white text-xl font-medium">
            <RiFacebookCircleLine className="text-3xl mr-5" />
            <RiInstagramLine className="text-3xl mr-5" />
            <RiTwitterLine className="text-3xl mr-5" />
          </div>
        </div>
      </div>
      <div className="bg-a9d046 p-4 flex justify-center items-center">
        <p className="font-medium text-sm mr-1">Made with</p>
        <RiHeartFill className="text-red-500" />
        <p className="font-medium text-sm ml-1">by African Founders</p>
      </div>
    </div>
  );
};

export default Footer;
