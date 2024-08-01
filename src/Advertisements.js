import React from "react";
import Advertisement from "./Advertisement";
import { advertisements } from "./data";

const Advertisements = () => {
  return (
    <div id="advertisements" className="row">
      {advertisements.map((ad) => (
        <Advertisement
          key={ad.id}
          image={ad.image}
          title={ad.title}
          text={ad.text}
          contact={ad.contact}
        />
      ))}
    </div>
  );
};

export default Advertisements;
