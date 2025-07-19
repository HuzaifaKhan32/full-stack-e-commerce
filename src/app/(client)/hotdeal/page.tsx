import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { Title } from "@/components/ui/text";
import { getDealProducts } from "@/sanity/queries";
import React from "react";
import { AnimatePresence } from "motion/react";
import { Product } from "../../../../sanity.types";

async function HotDealPage() {
  const hotDealProducts: Product[] = await getDealProducts();
  console.log(hotDealProducts);
  return (
    <Container className="bg-shop_light_bg py-10">
      <div className="mb-5">
        <Title className="text-base uppercase underline">
          Hot deals of the week
        </Title>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-10">
        {hotDealProducts?.map((product, index) => (
          <AnimatePresence key={index}>
            <ProductCard product={product} />
          </AnimatePresence>
        ))}
      </div>
    </Container>
  );
}

export default HotDealPage;
