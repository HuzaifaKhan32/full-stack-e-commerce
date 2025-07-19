"use client";
import React, { useState } from "react";
import useStore from "../../store";
import Container from "./Container";
import { Heart, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Product } from "../../sanity.types";
import toast from "react-hot-toast";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceFormatter from "./PriceFormatter";
import AddToCartButton from "./AddToCartButton";

function WhishlistProducts() {
  const { favoriteProduct, resetFavorite, removeFromFavorite } = useStore();
  const [visibleProduct, setVisibleProduct] = useState(5);
  const loadMore = () => {
    setVisibleProduct((prev) => Math.min(prev + 5, favoriteProduct?.length));
  };

  const handleResetFavorite = () => {
    const confirm = window.confirm(
      "Are you sure you want to reset whishlist? "
    );
    if (confirm) {
      resetFavorite();
      toast.success("Whishlist reset successfully!");
    }
  };
  return (
    <Container className="pb-10 md:pb-20">
      {favoriteProduct?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="border-b">
              <tr className="bg-black/5">
                <th className="p-2 text-left">Image</th>
                <th className="p-2 text-left hidden md:table-cell">Category</th>
                <th className="p-2 text-left hidden md:table-cell">Type</th>
                <th className="p-2 text-left hidden md:table-cell">Status</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-center md:text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {favoriteProduct
                ?.slice(0, visibleProduct)
                ?.map((product: Product) => (
                  <tr key={product?._id} className="border-b">
                    <td className="px-2 py-4 flex items-center gap-2">
                      <X
                        className="hover:text-red-600 cursor-pointer hoverEffect"
                        size={18}
                        onClick={() => {
                          removeFromFavorite(product?._id);
                          toast?.success(
                            "Product removed from whishlish successfully"
                          );
                        }}
                      />
                      {product?.images && (
                        <Link
                          href={`/product/${product?.slug?.current}`}
                          className="hidden md:inline-block group border rounded-md"
                        >
                          <Image
                            src={urlFor(product?.images[0]).url()}
                            alt="product image"
                            width={80}
                            height={80}
                            className="rounded-md h-20 w-20 object-contain hoverEffect group-hover:scale-105"
                          />
                        </Link>
                      )}
                      <p className="line-clamp-1">{product?.name}</p>
                    </td>
                    <td className="p-2 capitalize hidden md:table-cell">
                      <p className="uppercase line-clamp-1 text-xs font-medium">
                        {product?.categories?.map((cat) => cat).join(", ")}
                      </p>
                    </td>
                    <td className="p-2 capitalize hidden md:table-cell">
                      {product?.variant}
                    </td>
                    <td
                      className={`p-2 capitalize hiddem md:table-cell w-24 ${(product?.stock as number) > 0 ? "text-green-600" : "text-red-600"}font-medium text-sm`}
                    >
                      {(product?.stock as number) > 0
                        ? "In Stock"
                        : "Out of Stock"}
                    </td>
                    <td className="p-2">
                      <PriceFormatter amount={product?.price} />
                    </td>
                    <td className="p-2">
                      <AddToCartButton product={product} className="w-full" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className={`flex justify-center my-3`}>
            {favoriteProduct?.length > 5 && visibleProduct <= 5 ? (
              <Button
                onClick={loadMore}
                className="cursor-pointer hover:bg-white/20 border text-center"
                variant={"outline"}
              >
                Load More
              </Button>
            ) : (
              <Button
                onClick={() => setVisibleProduct(5)}
                className={`${favoriteProduct?.length < 5 ? "hidden" : "flex"} justify-center my-5 bg-white hover:bg-white/50 border text-center`}
                variant={"outline"}
              >
                Load less
              </Button>
            )}
          </div>
          {favoriteProduct && (
            <Button
              variant={"destructive"}
              className="text-sm font-semibold mt-2 cursor-pointer"
              onClick={handleResetFavorite}
            >
              Reset Whishlist
            </Button>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[50vh] w-full space-y-8 flex-col">
          <div className="relative">
            <div className="absolute -top-1 -right-1 rounded-full bg-muted-foreground/20 w-4 h-4 animate-ping"></div>
            <Heart
              className="h-12 w-12 text-muted-foreground"
              strokeWidth={1.5}
            />
          </div>
          <div className="space-y-2 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-darkColor">
              Your wishlist is empty
            </h2>
            <p className="text-sm text-shop_light_text">
              Items added to your wishlist will appear here
            </p>
          </div>
          <Link href={"/shop"}>
            <Button
              className="font-semibold bg-shop_btn_dark_green/80 hover:bg-shop_btn_dark_green cursor-pointer text-white hover:text-white"
              variant={"outline"}
            >
              Continue Shopping
            </Button>
          </Link>
        </div>
      )}
    </Container>
  );
}

export default WhishlistProducts;
