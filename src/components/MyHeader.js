import React from "react";
import "../styles/header.css";

class MyHeader extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <a
            href="https://github.com/janaiscoding/memory-card"
            className="logo"
          >
            peepoMemory
          </a>
          <div className="right-wrapper">
            <div className="social">
              <a
                href="https://github.com/janaiscoding"
                className="social-link"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default MyHeader;
