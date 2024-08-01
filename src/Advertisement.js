import React from "react";
import MyButton from "./MyButton";

const Advertisement = ({ image, title, text, contact, id }) => {

  return (
    <div key={id} className="card mb-4 col-md-4">
        <img class="card-img-top" src={image} alt={title} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{text}</p>
          <p class="card-text">Contact: {contact}</p>
        </div>
      <div className="card-footer">
        <MyButton title="Details" color="primary" />
      </div>
    </div>
  );
};

export default Advertisement;
