import React from "react";
import Image01 from "../assets/Group 951.png";
import Image02 from "../assets/Group 78.png";
import Image03 from "../assets/Grou 679.png";
import Image04 from "../assets/Group 79.png";
import Image05 from "../assets/Grop 678.png";
import Headers from "./Headers";
import Button from "./Button";

const Customers = () => {
  return (
    <div className="bg-eff7f0 flex py-32">
      <div className="mt-10">
        <img src={Image01} alt="" />
      </div>
      <div className="w-[50%] pr-10">
        <div className="pb-16 flex justify-center items-center">
          <p className="text-2xl text-light-green font-bold pb-2 border-b-4 border-a9d046">
            CUSTOMER EMPOWERMENT
          </p>
        </div>
        <div>
          <Headers
            image={Image02}
            header="Help your customers succeeds"
            body="You customer can also gain access to the Wakanda Market App to sell their products and services and also receive free consultation from the BabaOja Wisdom Series."
          />
          <Headers
            image={Image03}
            header="Performance Report"
            body="As your business is growing and evolving, Wakanda CRM tracks the progress and provide real time reports on your business performance."
          />
          <Headers
            image={Image04}
            header="Free! and Easy to Use"
            body=" Wakanda is free for both your online and offline customers, through the Wakanda App and SMS alerts"
          />
          <Headers
            image={Image05}
            header="Communication and Feedbacks"
            body="Your customers can communicate with you and also provide their honest feedbacks towards your business with the anonymous voice feature."
          />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Customers;
