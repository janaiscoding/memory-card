import React from "react";
import "../styles/footer.css"

class MyFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <a
            href="https://github.com/janaiscoding"
            className="footer-link"
            rel="noopener noreferrer"
          >
            ©JanaIsCoding
          </a>
        </footer>
      </>
    );
  }
}

export default MyFooter;