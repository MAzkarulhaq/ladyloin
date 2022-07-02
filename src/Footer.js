import React from "react";
import footerimg from "./assets/footer.webp";
const Footer = () => {
  return (
    <>
      <div className="container-fluid g-0">
        <img src={footerimg} className="img-fluid" alt="" />
      </div>
      <div className="container py-4">
        <h1 className="text-center">
          <a href="" className="btn rounded-pill bg-primary btn-follow">
            <i class="fab fa-twitter"></i> Follow
          </a>
        </h1>
      </div>
    </>
  );
};

export default Footer;
