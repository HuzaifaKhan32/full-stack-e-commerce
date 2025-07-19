import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import BransDescription from "./BransDescription";
import { Brand } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  brands: Brand[];
};

function Brands({ brands }: Props) {
  return (
    <div className="py-6 px-5 bg-shop_light_cat_bg rounded-md mb-10 lg:mb-20">
      <div className="flex justify-between items-center">
        <Title className="capitalize">Shop By Brands</Title>
        <Link className="font-semibold hover:text-shop_dark_green hoverEffect" href={"/shop"}>
          View all
        </Link>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2.5 mt-10">
        {brands?.map((brand, index) => (
          <Link key={index} href={{pathname: "/shop", query: {brand: brand?.slug?.current}}} className="bg-white w-36 h-24 rounded-md overflow-hidden hover:shadow-lg shadow-shop_btn_dark_green/20 hoverEffect flex justify-center items-center ">
            {brand?.image && (
              <Image
                src={urlFor(brand?.image).url()}
                alt="brand image"
                width={250}
                height={250}
                loading="lazy"
                className="object-contain w-32 h-20"
              />
            )}
          </Link>
        ))}
      </div>
      <BransDescription />
    </div>
  );
}

export default Brands;
