import React from "react";
import { useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import Heading from "../components/Heading";
import LayoutItem from "../components/LayoutItem";
import Benefit from "../components/Benefit";
import Promo from "../components/Promo";

export default function Home() {
  const dataItem = useSelector((state) => state.listItem);
  const topSell = useSelector((state) => state.topSell);
  console.log(dataItem);

  return (
    <>
      <Carousel />
      <Heading
        heading={"Discover NEW Arrivals"}
        subHeading={"Recently added shirts!"}
      />
      <LayoutItem data={dataItem} />
      <Benefit />
      <Promo />
      <Heading
        heading={"Top Sellers"}
        subHeading={"Browse our top-selling products"}
      />
      <LayoutItem data={topSell} />
    </>
  );
}
