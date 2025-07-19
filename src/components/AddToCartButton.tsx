"use client";
import React from "react";
import { Product } from "../../sanity.types";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import useStore from "../../store";
import toast from "react-hot-toast";
import PriceFormatter from "./PriceFormatter";
import QuantityButton from "./QuantityButton";

type Props = {
  product: Product;
  className?: string;
};

function AddToCartButton({ product, className }: Props) {
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock == 0;

  const handleCartItem = () => {
    if ((product?.stock as number) > itemCount) {
      addItem(product);
      toast.success(`${product?.name?.substring(0, 12)}... added successfully`);
    } else {
      toast.error(`Cannot add more than ${itemCount} item!`);
    }
  };
  return (
    <div className="w-full h-12">
      {itemCount ? (
        <div className="">
          <div className="w-full flex items-center justify-between border-b text-base">
            <div className="text-xs text-shop_light_text">Qunatity</div>
            <QuantityButton product={product}/>
        </div>
            <div className="flex justify-between items-center pt-1">
                <span className="text-xs font-semibold">Subtotal</span>
                <PriceFormatter amount={product?.price ? product?.price * itemCount : 0}/>
            </div>
        </div>
      ) : (
        <Button
          onClick={handleCartItem}
          className={cn(
            "bg-shop_dark_green/80 hover:bg-shop_dark_green text-white cursor-pointer hoverEffect tracking-wide",
            className
          )}
        >
          <ShoppingBag /> {isOutOfStock ? "Out of stock" : "Add to cart"}
        </Button>
      )}
    </div>
  );
}

export default AddToCartButton;
