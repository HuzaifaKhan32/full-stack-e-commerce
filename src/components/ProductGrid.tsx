"use client";
import React, { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "../../constants/data";
import { client } from "@/sanity/lib/client";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";
import { AnimatePresence, motion } from "motion/react";
import { Product } from "../../sanity.types";
import Loading from "./Loading";

function ProductGrid() {
  const [selectdTab, setSelectedTab] = useState<string>(
    productType[0]?.title || ""
  );
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const query = `*[_type == "product" && variant == $variant] | order(name desc){
    ...,"categories":categories[]->title
  }`;
  const params = { variant: selectdTab.toLowerCase() };
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await client.fetch(query, params);
        setProduct(response);
      } catch (error) {
        console.error("Product Fetching Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectdTab]);
  return (
      <div className="py-10">
        <HomeTabBar selectedTab={selectdTab} onTabSelect={setSelectedTab} />
        {loading ? (
          <Loading />
        ) : product?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-10">
            {product?.map((product, index) => (
              <AnimatePresence key={index}>
                <motion.div initial={{opacity: 0.2}} animate={{opacity: 1}} exit={{opacity: 0}}>
                  <ProductCard product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>) : (
          <NoProductAvailable />
        )}
      </div>
  );
}

export default ProductGrid;
