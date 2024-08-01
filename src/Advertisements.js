import React from "react";
import Advertisement from "./Advertisement";

const Advertisements = () => {

  const advertisements = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Ad 1",
      text: "This is the first advertisement.",
      contact: "Contact 1",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Ad 2",
      text: "This is the second advertisement.",
      contact: "Contact 2",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Ad 3",
      text: "This is the third advertisement.",
      contact: "Contact 3",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Ad 4",
      text: "This is the fourth advertisement.",
      contact: "Contact 4",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      title: "Ad 5",
      text: "This is the fifth advertisement.",
      contact: "Contact 5",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      title: "Ad 6",
      text: "This is the sixth advertisement.",
      contact: "Contact 6",
    },
  ];

  
  return (
    <div id="advertisements" className="row">
      {advertisements.map((ad) => (
        <Advertisement
          id={ad.id}
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
