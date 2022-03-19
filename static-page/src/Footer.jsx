import React from "react";

const date = new Date();
const year = date.getFullYear();
const companyName = 'ReactFacts';

const Footer = () => {
  return(
    <footer>
      <small>© {year} {companyName}. All rights reserved.</small>
    </footer>
  )
};

export default Footer