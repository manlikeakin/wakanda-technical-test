import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Button = () => {
  return (
    <div className="flex justify-center items-center sm:py-4 lg:py-5 xxlg:py-7 px-4 text-white bg-light-green rounded-lg sm:w-1/2 lg:w-[50%] shadow-button hover:border-2 hover:border-light-green hover:bg-white hover:text-light-green"> 
      <button className="sm:text-xs text-sm text-center font-bold">
        GET STARTED NOW
      </button>
      <MdKeyboardArrowRight className="text-4xl"/>
    </div>
  );
};

export default Button;
