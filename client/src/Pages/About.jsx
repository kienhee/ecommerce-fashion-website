import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Hero from "../components/Hero";
import AboutFeatured from "../components/AboutFeatured";
import AboutFounder from "../components/AboutFounder";
import Heading from "../components/Heading";
import SwipeToSlide from "../components/SwipeToSlide";
export default function About() {
  const [featureData] = useState([
    {
      id: uuidv4(),
      imgUrl:
        "https://images.unsplash.com/photo-1593592023995-a857ecf39076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      urlLink: "/",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      urlLink: "/",
    },
  ]);
  const [founderData] = useState([
    {
      id: uuidv4(),
      img: "https://images.unsplash.com/photo-1628657487151-055f43d70667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "HM Jawad",
    },
    {
      id: uuidv4(),
      img: "https://images.unsplash.com/photo-1641573548584-ffb1c512e932?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Furqan Abid",
    },
    {
      id: uuidv4(),
      img: "https://images.unsplash.com/photo-1628657485502-38a19243392b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Abdullah Ah",
    },
    {
      id: uuidv4(),
      img: "https://images.unsplash.com/photo-1641271037863-24cb1e6a65e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80",
      name: "Abrar Khan",
    },
  ]);
  return (
    <div className="about">
      <Hero
        image={
          "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        title={"About Northstar"}
      />

      <AboutFeatured featureData={featureData} />
      <AboutFounder founderData={founderData} />
      {/* <SwipeToSlide /> */}
    </div>
  );
}
