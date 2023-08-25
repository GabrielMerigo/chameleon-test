import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Dropdown } from "../components/Dropdown";
import { generateOptions } from "../utils/generateOptions";
import { httpGet } from "../utils/httpGet";

const getProducts = async () => {
  const products = await httpGet(`https://fakestoreapi.com/products`);
  return products;
};

function Home() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown
      dropdownSections={[
        {
          dropdownSectionHeader: "Products",
          dropdownSectionItems: generateOptions(products),
          dropdownSectionProps: {
            "aria-labelledby": "dropdownButton",
            role: "menu",
          },
        },
        {
          dropdownSectionHeader: "Other Items",
          dropdownSectionItems: [
            {
              children: "Item 1",
            },
            {
              children: "Item 2",
            },
          ],
        },
      ]}
      isOpen={isOpen}
      onToggle={onToggle}
      label={"My Dropdown"}
    />
  );
}

export default Home;
