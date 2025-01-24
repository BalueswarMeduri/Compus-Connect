import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-[var(--dark)] text-[var(--green)] py-4 mt-9 flex justify-center items-center border-t-[1px] ">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
