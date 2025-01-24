import React from "react";
import image from "@/assets/find.svg";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero3 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center px-6 md:px-10 py-8 space-y-6 md:space-y-0 md:space-x-8 mx-8 pt-40 ">
      {/* Image Section */}
      <div className="md:w-1/2 flex ">
        <img
          className="w-40 pt-14 sm:w-64 md:w-80 lg:w-[17rem] max-w-full"
          src={image}
          alt="Find Faculty"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--green)] pt-28">
          Find Faculty Details with Ease!
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Looking for a faculty member? Use our Cabin Finder! Easily search for faculty cabin locations along with their email IDs, all in one place. Simplifying connections and saving your time!
        </p>
        <Link to="/CabinFinder">
          {/* <Button className="bg-[var(--green)] mt-5 px-6 py-2 text-sm sm:text-base">
            Find a Cabin
          </Button> */}
        </Link>
      </div>
    </div>
    
  );
};

export default Hero3;
