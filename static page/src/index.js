import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import MainContent from "./Content";
import Footer from "./Footer";


const Page = () => {
  return(
    <>
      <Header />
      <MainContent />
      <Footer />  
    </>
  )
};

ReactDOM.render(<Page />, document.getElementById('root'));

// import logo from './logo.svg';
// let item1 = 'Tutorial';
// let item2 = 'Docs';
// let item3 = 'Blog';
// let item4 = 'Community';
// let item5 = 'About';

// const Navbar = () => {
//   return(
//   <div> 
//     <ul className="navbar">
//       <img src={logo} className="logo-size" alt="Didn't work!"></img>
//       <ul className="navbar-list">
//         <li className="list-item">{item1}</li>
//         <li className="list-item">{item2}</li>
//         <li className="list-item">{item3}</li>
//         <li className="list-item">{item4}</li>
//         <li className="list-item">{item5}</li>
//       </ul>
//     </ul>
//   </div>
//   )
// };
// ReactDOM.render(<Navbar />, document.getElementById('navbar'));


// const Main = () => {
//   return(
//   <div>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
//   )
// };
// ReactDOM.render(<Main />, document.getElementById('main'));

