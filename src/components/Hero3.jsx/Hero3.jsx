import React from 'react';
import image from "@/assets/find.svg";
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const Hero3 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center px-10 py-8">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 pr-52">
        <img className="w-64 md:w-96" src={image} alt="Find Faculty" />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-[var(--green)]">
          Find Faculty Details with Ease!
        </h1>
        <p className="mt-4 text-xl">
          Looking for a faculty member? Use our Cabin Finder! Easily search for faculty cabin locations along with their email IDs, all in one place. Simplifying connections and saving your time!
        </p>
        <Link to="/CabinFinder"><Button className="bg-[var(--green)] mt-5">Find a Cabin</Button></Link>
      </div>
    </div>
  );
};

export default Hero3;
