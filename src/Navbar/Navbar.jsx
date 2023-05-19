import React from 'react'
import "./Navbar.css"
import Logo from "../assets/lg.png"

function Navbar() {
    return (
        <section>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar">
            <nav>
              <ul>
                <li>About us</li>
                <li>Find creatives</li>
                <li>Hire Creatives</li>
                <li>Jobs</li>
                <li>
                  <span>LOGIN</span>
                  <button>Sign Up</button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      );
      
}

export default Navbar