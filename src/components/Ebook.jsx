import React from "react";
import Book from "../assets/book.png";

const Ebook = () => {
  return (
    <div className="flex justify-center items-center h-full relative pb-48 pt-20">
      <div>
        <img src={Book} alt="" className="h-[80vh]" />
      </div>
      <div className="pr-20 pl-32">
        <p className="text-light-green font-bold text-6xl pb-5">FREE! EBOOK</p>
        <p className="text-metal font-semibold text-2xl pb-5">
          7 Reasons You Need To Turn
          <br /> Your Business To A Mobile
          <br /> Business
        </p>
        <div className="flex justify-end">
        <button className="py-4 px-7 bg-light-green text-white font-semibold text-lg rounded-lg hover:border-2 shadow-button hover:border-light-green hover:bg-white hover:text-light-green">
          GET IT NOW
        </button>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
