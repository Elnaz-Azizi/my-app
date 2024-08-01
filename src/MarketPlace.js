//rsc
import React from "react";
import Header from "./Header";
import AdFilter from "./AdFilter";
import Advertisements from "./Advertisements";
import Advertisement from "./Advertisement";
import MyButton from "./MyButton";

const MarketPlace = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h2 className="mb-4">Advertisement List</h2>
        <AdFilter />
        <Advertisements />
      </div>
    </div>
  );
};

export default MarketPlace;
