import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import { getDealProducts } from "@/sanity/queries";
import React from "react";
import { DEAL_PRODUCTSResult, Product } from "../../../../sanity.types";
import HotDealGrid from "@/components/HotDealGrid";

// Normalization function to convert DEAL_PRODUCTSResult[number] to Product
type DealProduct = DEAL_PRODUCTSResult[number];
function normalizeDealProduct(product: DealProduct): Product {
  return {
    ...product,
    categories: undefined,
  };
}

async function HotDealPage() {
  const dealProducts: DEAL_PRODUCTSResult = await getDealProducts();
  const hotDealProducts: Product[] = dealProducts.map(normalizeDealProduct);
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
          <HotDealGrid product={product} key={index}/>
        ))}
      </div>
    </Container>
  );
}

export default HotDealPage;
