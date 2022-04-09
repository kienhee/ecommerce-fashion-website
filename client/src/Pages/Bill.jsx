import React from "react";
import BillingDetails from "../components/BillingDetails";
import ClientOrder from "../components/ClientOrder";

export default function Bill() {
  return (
    <div className="bill__container container">
      <BillingDetails />
      <ClientOrder />
      
    </div>
  );
}
