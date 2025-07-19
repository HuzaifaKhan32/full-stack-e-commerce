import React from "react";
import { Product } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FlameIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import AddToWhishList from "./AddToWhishList";
import { Title } from "./ui/text";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const STATUS = [
  {
    status: "hot",
    className:
      "hoverEffect absolute top-2 left-2 border border-shop_orange/50 rounded-full group-hover:border-shop_orange p-1 z-10 text-xs",
    content: (
      <FlameIcon
        size={18}
        fill="#fb6c08"
        className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
      />
    ),
    href: "deal",
  },
  {
    status: "sale",
    className:
      "absolute top-2 left-2 border text-shop_dark_green border-shop_dark_green rounded-full group-hover:border-shop_light_green z-10 px-2 text-xs hoverEffect",
    content: "Sale!",
  },
  {
    status: "new",
    className:
      "absolute top-2 left-2 border text-shop_dark_green border-shop_dark_green rounded-full group-hover:border-shop_light_green z-10 px-2 text-xs hoverEffect",
    content: "New!",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="text-sm border-[1px] group bg-white rounded-md group">
      <div className="bg-shop_light_bg overflow-hidden relative group">
        <Link href={`/product/${product?.slug?.current}`}>
          {product?.images && (
            <Image
              src={urlFor(product?.images[0]).url()}
              alt="Product Image"
              loading="lazy"
              width={700}
              height={700}
              className={`w-full h-64 object-contain transition-transform hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
            />
          )}
        
        </Link>
        {STATUS?.map(
          (item, index) =>
            product?.status === item.status &&
            (item?.href ? (
              <Link href={`/${item.href}`} className={item?.className} key={index}>
                {item?.content}
              </Link>
            ) : (
              <p className={item.className} key={index}>
                {item?.content}
              </p>
            ))
        )}
        <AddToWhishList product={product}/>
      </div>
      <div className="flex flex-col p-3 gap-2">{product?.categories && (
        <p className="uppercase line-clamp-1 text-shop_light_text text-sm">{product.categories.map((cat) => cat).join(", ")}</p>
      )}
      <Title className="text-sm line-clamp-1">{product?.name}</Title>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon 
            key={index}
            size={13}
            className={index < 4 ? "text-shop_lighter_green" : "text-shop_lighter_text"}
            fill={index < 4 ? "#93D991" : "#ababab"}/>

          ))}
        </div>
        <div>5 Reviews</div>
      </div>
      <div className="flex items-center gap-2.5">
          <p className="font-normal">In Stock</p>
          <p className={`${product?.stock == 0 ? "text-red-600" : "text-shop_light_green"} font-medium`}>{(product?.stock as number) > 0 ? product?.stock : "unavailable"}</p>
      </div>
      <div>
        <PriceView price={product?.price} discount={product?.discount}/>
      </div>
      <AddToCartButton product={product} className="rounded-full w-36"/>
      </div>
    </div>
  );
}

export default ProductCard;
