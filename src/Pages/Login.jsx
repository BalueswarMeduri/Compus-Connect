import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Navbar from "@/components/Navbar/Navbar";
import image from "@/assets/auth.svg";

const Login = () => {
  return (
    <div className="min-h-[38rem] flex items-center ">
      <div className="img flex items-center justify-center w-1/2">
        <img src={image} alt="" className="min-w-1/2 h-72" />
      </div>
      <div className="flex items-center w-1/2 justify-center min-h-[38rem]">
        <div className="w-96 p-6 rounded-lg ">
          <h1 className="text-2xl font-bold mb-2">Get started</h1>
          <p className="text-slate-400 mb-6">
            Enter your email below to login / signup
          </p>
          <div className="flex gap-4 mb-4">
            <Button className="flex-1" variant="outline">
              <span className="mr-2">
                <FaGithub />
              </span>
              GitHub
            </Button>
            <Button className="flex-1" variant="outline">
              <span className="mr-2">
                <FaGoogle />
              </span>
              Google
            </Button>
          </div>
          <div className="flex items-center my-4">
            <div className="border-t flex-grow"></div>
            <span className="px-4 text-sm dark:text-gray-600 text-gray-700">
              OR CONTINUE WITH
            </span>
            <div className="border-t flex-grow"></div>
          </div>
          <form>
            <div className="mb-4">
              <Label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <Label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full rounded-xl">
              Login
            </Button>
          </form>
          <div className="text-right w-full mt-1">
            <span
              className="cursor-pointer text-gray-600 hover:dark:text-gray-300 hover:text-gray-950"
              onClick={() => navigate("/")}
            >
              go back to home
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
