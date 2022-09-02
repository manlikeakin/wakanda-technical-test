import React from "react";
import Image01 from "../assets/Group 971.png";
// import Image02 from "../assets/Layer_x0020_1.png";
import Image03 from "../assets/global-connection.png";
import Image04 from "../assets/email-marketing.png";
import Image05 from "../assets/sales.png";
import Button from "./Button";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-row py-[5vh] px-[5%] justify-between">
        <div className="w-[50%] my-auto flex flex-col  ">
          <div>
            <p className="text-metal sm:text-2xl lg:text-3xl xlg:text-4xl xxlg:text-5xl font-bold text-start pb-6" style={{lineHeight: '3rem'}}>
              Organise Your Sales.
              <br /> Build Great Relationships.
              <br /> Save Time.
            </p>
            <Button />
          </div>
        </div>
        <div className=" flex w-[50%]">
          <img src={Image01} alt="" className="w-[80%] p-10 mx-auto" />
        </div>
      </div>

      <div className="mt-10 mb-20 w-[80%] mx-auto">
        <p className="text-metal text-center sm:text-sm lg:text-2xl font-bold pb-16">How can Wakanda CRM help You Grow your Business?</p>
        <div className="flex lg:flex-row sm:flex-col justify-between items-center">
          <div className=" flex sm:mt-8 flex-col items-center">
            <img src={Image03} alt="" />
            <p className="text-metal text-2xl text-center font-bold pt-5">
              Build deeper connections with <br />
              your customers with ease.
            </p>
          </div>
          <div className=" sm:mt-8 flex flex-col items-center">
            <img src={Image05} alt="" />
            <p className="text-metal text-2xl text-center font-bold pt-5">Manage your sales process.</p>
          </div>
          <div className="flex sm:mt-8 flex-col items-center">
            <img src={Image04} alt="" />
            <p className="text-metal text-2xl text-center font-bold pt-5">
              Automate your everyday
              <br /> task and save time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
