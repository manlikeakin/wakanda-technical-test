import React from "react";
import Image01 from "../assets/Group 975.png";
import Image02 from "../assets/Group 678.png";
import Image03 from "../assets/Group 679.png";
import Image04 from "../assets/Goup 679.png";
import Image05 from "../assets/Grou 679.png";
import Image06 from "../assets/Grop 678.png";
import Button from "./Button";
import Headers from "./Headers";

const Features = () => {
  return (
    <div className="bg-eff7f0 ">
      <div className=" pb-7 flex justify-center items-center">
        <p className="pt-14 pb-3 text-metal font-bold text-2xl border-b-4 border-light-green">FEATURES</p>
      </div>
      <p className="pb-20 text-metal font-medium sm:text-2xl lg:text-3xl text-center">
        Wakanda CRM is Built to Bridge the Gap between <br />
        your Business and Customers, Management and Staff.
      </p>
      <div className="flex justify-between">
        <div className="">
          <div className="pb-20 flex justify-center items-center">
            <p className="text-lg text-light-green font-bold pb-2 border-b-4 border-a9d046">BUSINESS/CUSTOMER MANAGEMENT</p>
          </div>
          <div className="pl-16 pr-10">
            <Headers
              className=""
              image={Image02}
              header="Data Management for your Prospects and customers"
              body=" Wakanda CRM Provides all the necessary tools to work with existing
          clients. Essentially, it offers a database of names, emails, phone
          numbers and past communications history in a clear cut and precise
          way."
            />
            <Headers
              image={Image03}
              header="Categorized Customer data"
              body="Improve marketing efficiency with categorized existing customer database to reach individual clients with targeted offers via email, SMS, phone, messengers or social media."
            />
            <Headers
              image={Image04}
              header="Alerts and Reminders"
              body="Receive quick alerts, task reminders, and suggestions for the best times to contact your leads based on your past successful interaction, stay on top of your activities, and follow up better with your clients."
            />
            <Headers
              image={Image05}
              header="Performance Report"
              body="As your business is growing and evolving, Wakanda CRM tracks the progress and provide real time reports on your business performance."
            />
            <Headers
              image={Image06}
              header="Communicate with your customer from anywhere"
              body="Wakanda CRM enables easy communicate with clients and staying productive from anywhere at anytime."
            />
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <Button />
          </div>
        </div>
        <div>
          <img src={Image01} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
