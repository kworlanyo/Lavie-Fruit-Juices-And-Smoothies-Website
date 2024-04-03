import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import Logo from "../../assets/Logo.svg";
import "./Navigation.css";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function Navigation() {
  const {
    state: { cart },
  } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <nav className="navbar">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="hamburger" onClick={handleOpen}>
          {isOpen ? <MdClose /> : <FiMenu />}
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="cart">
              Cart {cart.length > 0 && <span>{cart.length}</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <ul className="navbar-links-mobile">
          <li>
            <NavLink to="/" onClick={handleOpen}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="shop" onClick={handleOpen}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="about" onClick={handleOpen}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="cart" onClick={handleOpen}>
              Cart {cart.length > 0 && <span>{cart.length}</span>}
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navigation;
