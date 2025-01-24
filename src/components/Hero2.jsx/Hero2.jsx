import React from "react";
import image from "@/assets/ano.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center px-10 py-8 mb-56">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-4xl font-bold text-[var(--green)]">
          Have a problem? We’re here to help!
        </h1>
        <p className="mt-4 text-2xl">
          Have a campus issue? Just share it with us—we’ll summarize your
          problem and send it to the right department for a quick resolution!
        </p>
        <Link to="/Problem"><Button className="bg-[var(--green)] mt-5">write a problem</Button></Link>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center pl-60 ">
        <img className="w-64 md:w-96" src={image} alt="Hero Illustration" />
      </div>
    </div>
  );
};

export default Hero2;
