import React from "react";
import InfoProduct from "../components/InfoProduct";
import DescriptionProduct from "../components/DescriptionProduct";
import { useParams } from "react-router-dom";
export default function Detail() {
  // let { id } = useParams();
  return (
    <>
      <InfoProduct />
      <DescriptionProduct />
    </>
  );
}
