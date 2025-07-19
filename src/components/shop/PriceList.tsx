import { title } from "process";
import React from "react";
import { Title } from "../ui/text";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

type Props = {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
};

const priceArray = [
  { title: "Under 100$", value: "0-100$" },
  { title: "100$ - 200$", value: "100-200" },
  { title: "200$ - 300$", value: "200-300" },
  { title: "300$ - 500$", value: "300-500" },
  { title: "Over 500$", value: "500-1000" },
];

function PriceList({ selectedPrice, setSelectedPrice }: Props) {
  return (
    <div className="w-full bg-white p-5 flex flex-col justify-start gap-2">
      <Title className="text-base text-black">Price</Title>
      <RadioGroup className="mt-2 space-y-1" value={selectedPrice || ""}>
        {priceArray?.map((price, index) => (
          <div
            key={index}
            className="flex items-center gap-2"
            onClick={() => setSelectedPrice(price?.value as string)}
          >
            <RadioGroupItem
              value={price?.value}
              id={price?.value}
              className="rounded"
            />
            <Label
              htmlFor={price?.value}
              className={`${selectedPrice == price?.value && "font-semibold text-shop_btn_dark_green"}`}
            >
              {price?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {selectedPrice && (
        <button
          onClick={() => setSelectedPrice(null)}
          className="mt-2 underline underline-offset-2 text-shop_btn_dark_green/80 hover:text-shop_btn_dark_green hoverEffect text-left cursor-pointer"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}

export default PriceList;
