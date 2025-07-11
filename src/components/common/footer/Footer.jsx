
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Real Estate Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
