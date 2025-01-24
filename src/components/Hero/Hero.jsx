import React from "react";
import { Button } from "../ui/button";
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
    <>
      <div className="flex items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl font-bold">
          Your One-Stop Solution for All <br />{" "}
          <span className="text-[var(--green)] mt-8 font-bold text-6xl">
            University Problems
          </span>{" "}
          <p className="text-2xl pt-3">
            CampusConnect simplifies student concerns, making campus life easier!
          </p>
          {/* AlertDialog Trigger */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-[var(--green)]">Get Started</Button>
            </AlertDialogTrigger>
            {/* AlertDialog Content */}
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-[var(--green)]">Login Required</AlertDialogTitle>
                <AlertDialogDescription>
                  Please log in to your account to get started with CampusConnect.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Link to="/Login"><AlertDialogAction>Login</AlertDialogAction></Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </h1>
      </div>
    </>
  );
};

export default Hero;
