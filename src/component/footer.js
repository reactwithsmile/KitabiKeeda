import React from "react";
import "../css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdHome, MdEmail, MdLocalPhone, MdPrint, MdFacebook } from "react-icons/md";
import { LuInstagram, LuTwitter, LuLinkedin, LuGithub } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row">
          {/* Contact Section */}
          <div className="col-md-6 col-lg-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
            <p><MdHome className="me-2" />Surat, Gujarat, India</p>
            <p><MdEmail className="me-2" />info@example.com</p>
            <p><MdLocalPhone className="me-2" />+01 234 567 88</p>
            <p><MdPrint className="me-2" />+01 234 567 89</p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-6 col-lg-8 mb-4 text-center">
            <h5 className="text-uppercase fw-bold mb-4">Follow Us</h5>
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#3b5998" }} href="https://www.facebook.com/" role="button">
              <MdFacebook />
            </a>
            <a className="btn btn-info btn-floating m-1" style={{ backgroundColor: "#55acee" }} href="https://twitter.com/" role="button">
              <LuTwitter />
            </a>
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "navy" }} href="https://www.linkedin.com/" role="button">
              <LuLinkedin />
            </a>
            <a className="btn btn-dark btn-floating m-1" style={{ backgroundColor: "black" }} href="https://github.com/" role="button">
              <LuGithub />
            </a>
            <a className="btn btn-danger btn-floating m-1" style={{ backgroundColor: "red" }} href="https://www.instagram.com/" role="button">
              <LuInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center p-4" style={{ backgroundColor: "#e9ecef", color: "black" }}>
        © 2025 Copyright: 
        <a className="text-reset fw-bold ms-1" href="#!">Kitabee Keeda</a>
      </div>
    </footer>
  );
};

export default Footer;
