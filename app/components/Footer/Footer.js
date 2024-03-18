import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
      <footer>
        <div className="flex flex-col items-center justify-center">
          
          <div className="m-4">
            <a href="https://github.com/Alexrguez9">Github</a>
            <a className="ml-4"
            href="https://www.linkedin.com/in/alejandro-jos%C3%A9-rodr%C3%ADguez-montero/">LinkedIn</a>
          </div>
          <p className="m-4">© Alejandro Rodríguez</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  