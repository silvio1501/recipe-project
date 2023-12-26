import React from "react";
import { Link } from "gatsby";

const Links = () => {
  return (
    <div className="flex gap-5">
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
    </div>
  );
};

export default Links;
