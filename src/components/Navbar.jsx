import React from "react";
import NavbarImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="shadow-lg py-6 lg:px-10 sm:px-5">
      {/* <img src={NavbarImg} alt="" />
      <div className="flex justify-end items-center absolute right-10 top-[21%] pr-16">
        <div className="flex text-metal text-xl font-bold">
            <p className="pr-10">Features</p>
            <p className="pr-10">Pricing</p>
            <p className="pr-10">FAQs</p>
            <p className="pr-10">Contacts</p>
        </div>
        <button className="text-648b7a text-xl font-bold p-5 bg-white border-2 border-light-green rounded-lg  hover:bg-light-green hover:text-white">LOG IN</button>
        <button className="text-white text-xl font-bold py-6 px-10 bg-light-green rounded-lg ml-5 hover:border-2 hover:border-light-green hover:bg-white hover:text-light-green">GET STARTED</button>
      </div> */}

      <div className="flex flex-row justify-between">
        <div className="">
          <img src={NavbarImg} alt="" className="md:w-[100px] " />
        </div>
        <div className="flex flex-row sm:hidden md:hidden lg:flex">
          <div className="flex text-center my-auto text-[#163828] text-lg font-bold">
            <p className="pr-10">Features</p>
            <p className="pr-10">Pricing</p>
            <p className="pr-10">FAQs</p>
            <p className="pr-10">Contacts</p>
          </div>
          <button className="text-648b7a  lg:text-sm font-bold p-5 bg-white border-2 border-light-green rounded-lg  hover:bg-light-green hover:text-white">
            LOG IN
          </button>
          <button className="text-white lg:text-sm font-bold py-4 px-10 bg-light-green rounded-lg ml-5 hover:border-2 hover:border-light-green hover:bg-white hover:text-light-green">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
