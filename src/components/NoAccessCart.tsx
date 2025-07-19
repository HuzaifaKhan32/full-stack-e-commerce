import React from "react";
import Logo from "./Logo";
import { Title } from "./ui/text";
import { Button } from "./ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

function NoAccessCart({details = `Log in to view your cart items and checkout. Don't miss out on your
          favorite products!`} : {details?: string}) {
  return (
    <div className="w-full py-20 flex justify-center bg-shop_light_bg">
      <div className="flex justify-center items-center bg-white/95 shadow-lg rounded-lg py-8 px-6 gap-5 flex-col max-w-md border">
        <div className="flex items-center justify-center gap-2 flex-col">
          <Logo />
          <Title className="tracking-tight font-semibold">Welcome Back!</Title>
        </div>
        <div className="text-shop_light_text text-base text-center">
          {details}
        </div>
        <SignInButton mode="modal">
          <Button className="w-full bg-shop_btn_dark_green/80 hover:bg-shop_btn_dark_green font-semibold cursor-pointer py-4 rounded-sm hoverEffect">
            Sign in
          </Button>
        </SignInButton>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <span className="text-shop_light_text text-sm">
            Don&apos;t have an account?
          </span>
          <SignUpButton>
            <Button className="w-full bg-transparent text-darkColor border hover:bg-shop_light_bg cursor-pointer hoverEffect">
                Create an account
            </Button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}

export default NoAccessCart;
