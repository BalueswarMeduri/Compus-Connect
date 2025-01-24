import React from "react";
import image from "@/assets/ano.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center px-6 md:px-10 py-8 space-y-6 md:space-y-0 md:space-x-8 mx-7">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--green)]">
          Have a problem? We’re here to help!
        </h1>
        <p className="mt-4 text-lg sm:text-2xl">
          Have a campus issue? Just share it with us—we’ll summarize your
          problem and send it to the right department for a quick resolution!
        </p>
        {/* <Link to="/Problem">
          <Button className="bg-[var(--green)] mt-5 px-6 py-2 text-sm sm:text-base">
            Write a Problem
          </Button>
        </Link> */}
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          className="w-48 pb-14 sm:w-96 md:w-50 lg:w-[24rem] max-w-full"
          src={image}
          alt="Hero Illustration"
        />
      </div>
    </div>
  );
};

export default Hero2;
