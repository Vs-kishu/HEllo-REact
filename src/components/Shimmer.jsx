import React from "react";

const Shimmer = () => {
  const items = Array(20).fill(null);

  return (
    <div className="shimmer-container">
      {items.map((_, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;
