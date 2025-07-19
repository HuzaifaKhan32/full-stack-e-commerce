"use client";
import React from "react";
import useStore from "../../store";
import { Product } from "../../sanity.types";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

type Props = {
  product: Product;
  className?: string;
};

function QuantityButton({ product, className }: Props) {
  const { addItem, removeItem, getItemCount } = useStore();
  const itemCount = getItemCount(product?._id as string);
  const isOutOfStock = product?.stock === 0;
  const handleAddItem = () => {
    if((product?.stock as number) > itemCount){
      addItem(product)
      toast.success("Quantity Increased Successfully")
    }else{
      toast.error(`Can't add more than ${product?.stock} items.`)
      
    }
  }

  const handleRemoveItem = () => {
    removeItem(product?._id)
    if(itemCount > 1){
      toast.success("Quantity Decreased Successfully")
    }else{
      toast.success(`${product?.name?.substring(0, 12)}... removed successfully`);
    }
  }
  return (
      <div className={cn("flex items-center gap-3 pb-1", className)}>
        <Button
          onClick={handleRemoveItem}
          size={"icon"}
          variant={"outline"}
          disabled={itemCount == 0 || isOutOfStock}
          className="bg-white hover:bg-shop_light_bg p-0 w-6 h-6 cursor-pointer active:bg-gray-300 rounded"
        >
          <Minus className="text-darkColor w-5 h-5" />
        </Button>
        <span className="font-semibold text-xs">{itemCount}</span>
        <Button
          onClick={handleAddItem}
          size={"icon"}
          variant={"outline"}
          disabled={isOutOfStock}
          className="bg-white hover:bg-shop_light_bg p-0 w-6 h-6 cursor-pointer active:bg-gray-300 rounded"
        >
          <Plus className="text-darkColor w-5 h-5" />
        </Button>
      </div>
  );
}

export default QuantityButton;
