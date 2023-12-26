import React from "react";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaRegStar } from "@react-icons/all-files/fa/FaRegStar";

export const CreateStar = () => {
  const stars = Math.ceil(Math.random() * 5);
  return Array.from({ length: 5 }, (_, index) => {
    const half = index + 0.5;
    if (index + 1 <= stars) {
      return <FaStar className="text-purple-400" key={"star" + index} />;
    }
    if (half >= stars) return <FaRegStar key={"star" + index} />;
    return;
  });
};
