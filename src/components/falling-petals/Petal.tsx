// components/Petal.js
import React from "react";

export const Petal = ({ imageUrl }: { imageUrl: string }) => {
  return <img src={imageUrl} alt="Petal" className="petal" />;
};
