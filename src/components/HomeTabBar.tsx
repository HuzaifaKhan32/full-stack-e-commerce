import Link from "next/link";
import React from "react";
import { productType } from "../../constants/data";
import { Button } from "./ui/button";

type Props = {
  selectedTab: string;
  onTabSelect: (tab: string) => void
};

function HomeTabBar({selectedTab, onTabSelect}: Props) {
  return (
    <div className="flex items-center justify-between gap-5 flex-wrap">
      <div className="flex gap-1.5 items-center">
        {productType?.map((item, index) => (
          <Button
            onClick={() => onTabSelect(item?.title)}
            key={index}
            className={`rounded-full bg-shop_light_green/10 hover:bg-shop_light_green hover:text-white text-sm font-semibold border border-shop_light_green/30 text-primary hoverEffect cursor-pointer px-4 md:px-6 ${selectedTab === item?.title && "bg-shop_light_green text-white"}`}
          >
            {item?.title}
          </Button>
        ))}
      </div>
      <Link
        href={"/shop"}
        className="rounded-full bg-shop_light_green/10 hover:bg-shop_light_green hover:text-white text-sm font-semibold border border-shop_light_green/30 text-primary hoverEffect cursor-pointer px-6 py-2"
      >
        See all
      </Link>
    </div>
  );
}

export default HomeTabBar;
