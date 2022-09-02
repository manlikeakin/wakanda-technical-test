import React from "react";
import Image01 from "../assets/Group 1187.png";
import Image02 from "../assets/Grou 679.png";
import Image03 from "../assets/Grop 678.png";
import Button from "./Button";
import Headers from "./Headers";

const Staff = () => {
  return (
    <div className="bg-eff7f0 flex pt-10 pb-20">
      <div className="w-[60%] pl-20 pr-72">
        <div className="pb-16 pl-7 flex justify-start items-center">
          <p className="text-2xl text-light-green font-bold pb-2 border-b-4 border-a9d046">
            STAFF MANAGEMENT
          </p>
        </div>
        <div>
          <Headers
            image={Image03}
            header="Better internal Communication "
            body="Create Internal communication channel with your staff, enhanced with the ability to create different categories of chat with your company community, and also anonymous voices chats for staffs to communicate with the managent."
          />
          <Headers
            image={Image02}
            header="Reports and Documentation"
            body="Track the performance of your staff members to ensure effectiveness and productivity. Including a centralized storage for your documents which can be easily accessible from anywhere in the world at any time."
          />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <Button />
        </div>
      </div>
      <div>
        <img src={Image01} alt="" className="h-[90vh]" />
      </div>
    </div>
  );
};

export default Staff;
