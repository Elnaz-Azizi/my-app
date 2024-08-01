import React from "react";

const MyButton = ({ title, color }) => {
  return <button className={`btn btn-${color} btn-block`}>{title}</button>;
};

export default MyButton;
