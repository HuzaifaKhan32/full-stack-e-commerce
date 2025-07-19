"use client";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Product } from "../../sanity.types";
import { cn } from "@/lib/utils";
import useStore from "../../store";
import toast from "react-hot-toast";

type Props = {
  product: Product;
  className?: string;
  showProduct?: boolean;
};

function AddToWhishList({ product, className, showProduct = false }: Props) {
  const { addToFavorite, favoriteProduct } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);
  useEffect(() => {
    const availableProduct = favoriteProduct.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableProduct || null);
  }, [product, favoriteProduct]);
  const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? "Product removed successfully"
            : "Product added successfully"
        );
      });
    }
  };
  return (
    <div className={cn("absolute top-2 right-2 z-10", className)}>
      {showProduct ? (
        <button
        onClick={handleFavorite} 
        className={`cursor-pointer border border-shop_light_green/80 hoverEffect rounded-sm group-hover:border-shop_light_green p-1.5 mt-.5
        `}>
          <Heart className={`group-hover:text-shop_light_green text-shop_light_green/80 w-5 h-5`}
          fill={`${existingProduct ? "#063d29" : "#ffffff"}`} />
        </button>
      ) : (
        <div>
          <button
            onClick={handleFavorite}
            className={`cursor-pointer rounded-full p-2 hover:bg-shop_dark_green hover:text-white hoverEffect ${existingProduct ? "bg-shop_dark_green text-white" : "text-shop_dark_green bg-[#f1f3f8]"}`}
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default AddToWhishList;
