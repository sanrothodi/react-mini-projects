import React from "react";
import logo from "./logo.svg"

const companyName = 'ReactFacts';
let link1 = 'https://reactjs.org/';
let item1 = 'Get Started';

let link2 = "https://reactjs.org/tutorial/tutorial.html";
let item2 = 'Tutorial';

let link3 = "https://reactjs.org/docs/getting-started.html";
let item3 = 'Docs';

let link4 = "https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html";
let item4 = 'Docs';

let link5 = "https://reactjs.org/community/support.html";
let item5 = 'Community';


const Header = () => {
  return(
  <header> 
    <ul className="navbar">
      <div className="logo-and-name">
      <img src={logo} className="logo-size" alt="Didn't work!"></img>
      <h2 className="company-name">{companyName}</h2>
      </div>
      <ul className="navbar-list">
        <li className="navbar-list-item"><a href={link1}>{item1}</a></li>
        <li className="navbar-list-item"><a href={link2}>{item2}</a></li>
        <li className="navbar-list-item"><a href={link3}>{item3}</a></li>
        <li className="navbar-list-item"><a href={link4}>{item4}</a></li>
        <li className="navbar-list-item"><a href={link5}>{item5}</a></li>
      </ul>
    </ul>
  </header>
  )
};

export default Header