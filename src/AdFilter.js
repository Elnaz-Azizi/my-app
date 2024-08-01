import React from "react";

const AdFilter = () => {
  return (
    <div className="mb-3">
      <label for="filterTitle">Filter by Title:</label>
      <input
        type="text"
        className="form-control"
        id="filterTitle"
        placeholder="Enter title"
      />
    </div>
  );
};

export default AdFilter;
