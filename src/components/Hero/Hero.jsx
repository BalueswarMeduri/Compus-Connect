import React from "react";
import { Button } from "../ui/button";
// import img from "../../../public/img.jpg"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 text-center back">
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight ">
        Your One-Stop Solution for All <br />
        <span className="text-[var(--green)] mt-4 font-bold text-5xl sm:text-6xl block">
          University Problems
        </span>
      </h1>
      <p className="text-lg sm:text-2xl pt-4 max-w-3xl">
        CampusConnect simplifies student concerns, making campus life easier!
      </p>
      <div className="mt-6">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="bg-[var(--green)] px-8 py-3 text-sm sm:text-base">
              Get Started
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-[var(--green)]">
                Login Required
              </AlertDialogTitle>
              <AlertDialogDescription>
                Please log in to your account to get started with CampusConnect.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Link to="/Login">
                <AlertDialogAction>Login</AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Hero;
