"use client";
import React from "react";
import { headerData } from "../../constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderMenu() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="hidden md:flex items-center gap-5 text-sm text-lightColor font-semibold capitalize">
      {headerData?.map((item, index) => (
        <Link
          href={item?.link}
          key={index}
          className={`hover:text-shop_light_green hoverEffect group relative 
                ${pathname === item?.link && "text-shop_light_green"}
                `}
        >
          {item?.title}
          <span
            className={`absolute bg-shop_light_green -bottom-0.5 w-0 left-1/2 h-0.5 group-hover:w-1/2 group-hover:left-0 hoverEffect 
                    ${pathname === item?.link && "w-1/2"}
                    `}
          />
          <span
            className={`absolute bg-shop_light_green -bottom-0.5 w-0 right-1/2 h-0.5 group-hover:w-1/2 group-hover:right-0 hoverEffect 
                    ${pathname === item?.link && "w-1/2"}
                    `}
          />
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;
