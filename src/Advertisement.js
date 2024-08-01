import React from "react";
import MyButton from "./MyButton";
import AdImage from "./AdImage";
import AdTitle from "./AdTitle";
import AdText from "./AdText";
import AdContact from "./AdContact";

const Advertisement = ({ image, title, text, contact }) => {
  return (
    <div className="card mb-4 col-md-4">
      <AdImage src={image} alt={title} />

      <div className="card-body">
        <AdTitle title={title} />
        <AdText text={text} />
        <AdContact contact={contact} />
      </div>
      <div className="card-footer">
        <MyButton title="Details" color="primary" />
      </div>
    </div>
  );
};

export default Advertisement;
