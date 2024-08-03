import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Cards from "../Cards/Cards";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="header-main p-6 bg-white shadow-sm md:shadow-none"
      id="site-navigation"
    >
      <div className="container mx-auto px-[15px]">
        <nav className="flex items-center justify-between">
          <div className="site-branding">
            <Link to={`/`}>
              <span className="font-black">YOG</span>INFO
            </Link>
          </div>
          <div
            className="hamm"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            ≡
          </div>
          <div className="main-navigation">
            <ul className={menu ? "open" : ""}>
              <li>
                {" "}
                <NavLink to={`/why`}>Why do yoga?</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={`/how`}>How do yoga?</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={`/expense`}>Track your expenses</NavLink>
              </li>
              <li>
                <button onClick={() => setIsOpen(true)}>
                  Get a random quote!
                </button>
                <Cards isOpen={isOpen} setIsOpen={setIsOpen} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
