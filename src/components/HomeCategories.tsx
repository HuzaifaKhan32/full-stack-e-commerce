import React from "react";
import { Category } from "../../sanity.types";
import { Title } from "./ui/text";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

function HomeCategories({ categories }: { categories: Category[] }) {
  return (
    <div className="border border-shop_light_green/30 py-2 md:py-4 md:px-6 px-4 rounded-md mb-10">
      <Title className="border-b py-2">Popular Categories</Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center pt-4">
        {categories?.map((item, index) => (
          <div key={index} className="bg-shop_light_cat_bg flex items-center gap-2.5 px-4 py-6 group">
            {item?.image && (
              <div className="overflow-hidden w-20 h-20 border border-shop_orange/30 hover:border-shop_orange p-1 hoverEffect">
                <Link
                  href={`/category/${item?.slug?.current}`}>
                  <Image
                    src={urlFor(item?.image).url()}
                    alt="category image"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain group-hover:scale-110 hoverEffect"
                  />
                </Link>
              </div>
            )}
            <div>
              <h3 className="capitalize text-base font-semibold">{item?.title}</h3>
              <p className="text-sm font-semibold text-shop_dark_green">{`(${item?.productCount})`} items Available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCategories;
