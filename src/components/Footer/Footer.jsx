import { NavLink } from "react-router-dom";
import facebookLogo from "../../assets/facebook-logo.svg";
import instagramLogo from "../../assets/instagram-icon-2.svg";
import Xlogo from "../../assets/X-logo-2.png";
import Logo from "../../assets/Logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-top-content">
          <div className="logo-and-icons">
            <img src={Logo} width={120} alt="" />
            <div className="logos-container">
              <div className="facebook-container">
                <a
                  href="https://www.facebook.com/worlanyo.kporfeame/"
                  target="_blank"
                >
                  <img src={facebookLogo} alt="" />
                </a>
              </div>
              <div className="instagram-container">
                <a href="https://www.instagram.com/worla_k/" target="_blank">
                  <img src={instagramLogo} alt="" />
                </a>
              </div>
              <div className="x-container">
                <a href="https://twitter.com/Worlanyo29" target="_blank">
                  <img src={Xlogo} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="menu-container">
            <h3>Menu</h3>
            <div className="links-container">
              <NavLink to="/">Home</NavLink>
              <NavLink to="shop/juices">Shop</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/cart">Cart</NavLink>
            </div>
          </div>
          <div className="contact-container">
            <h3>Contact</h3>
            <div className="contact-details">
              <p>
                Address: <span>2nd Street, Ashaiman - Accra, Ghana</span>
              </p>
              <p>
                Email: <span>laviejuicesandsmoothies@gmail.com</span>
              </p>
              <p>
                Call Us: <span>+233 242 900 465</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright &copy; {new Date().getFullYear()} Lavie Juices & Smoothies
        </p>
        <p>Designed & Developed by Worlanyo Kwabla Kporfeame</p>
      </div>
    </footer>
  );
}

export default Footer;
