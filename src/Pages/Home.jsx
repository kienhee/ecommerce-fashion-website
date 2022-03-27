import React from "react";
import Carousel from "../components/Carousel";
import Heading from "../components/Heading";
import LayoutItem from "../components/LayoutItem";
import Benefit from "../components/Benefit";
import Promo from "../components/Promo";
export default function Home() {
  
  return (
    <>
      <Carousel />
      <Heading
        heading={"Discover NEW Arrivals"}
        subHeading={"Recently added shirts!"}
      />
      <LayoutItem />
      <Benefit />
      <Promo />
      <Heading
        heading={"Top Sellers"}
        subHeading={"Browse our top-selling products"}
      />
      <LayoutItem />
    </>
  );
}
