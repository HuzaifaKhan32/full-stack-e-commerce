import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import Link from "next/link";
import { categoriesData, quickLinksData } from "../../constants/data";
import { Button } from "./ui/button";

function FooterMain() {
  return (
    <div className="py-12 border-b border-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
      <div className="flex flex-col gap-4 justify-center items-start">
        <Logo />
        <SubText className="text-sm text-gray-600">
          Discover curated furniture collections at Shopcart, blending style and
          comfort to elevate your living spaces.
        </SubText>
        <SocialMedia
          linkClassName="text-gray-600 hover:text-shop_dark_green border-gray-600"
          tooltipClassName="bg-darkColor text-white "
        />
      </div>
      <div>
        <SubTitle>Quick Links</SubTitle>
        <ul className="space-y-3 mt-4">
          {quickLinksData?.map((item, index) => (
            <li key={index}>
              <Link href={item?.href}>
                <SubText className="hover:text-shop_dark_green">{item?.title}</SubText>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SubTitle>Categories</SubTitle>
        <ul className="space-y-3 mt-4">
          {categoriesData?.map((item, index) => (
            <li key={index}>
              <Link href={`category/${item?.href}`}>
                <SubText className="hover:text-shop_dark_green">{item?.title}</SubText>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-3">
        <SubTitle>News Letter</SubTitle>
        <SubText>Subscribe to our newsletter to receive updates and exclusive offers.</SubText>
        <form action="">
          <input type="text" name="" id="" placeholder="Enter Your email" className="border px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-gray-200 focus:ring-2 "  />
        </form>
        <Button className="bg-gray-900 font-normal cursor-pointer text-white w-full text-base py-2 px-4 hoverEffect hover:bg-gray-800 rounded-lg">Subscribe</Button>
      </div>
    </div>
  );
}

export default FooterMain;
