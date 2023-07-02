import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="units-row">
          <div className="unit-50">
            <p>Handcrafted by Raka Abdi Rmp</p>
          </div>
          <div className="unit-50">
            <ul className="social list-flat right">
              <li>
                <a href="mailto:rakaabdirmp@gmail.com">
                  <i className="fa fa-send"></i>
                </a>
              </li>
              <li>
                <a href="http://github.com/rakarmp">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="http://instagram.com/a.rakaabdirmp">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="http://twitter.com/Rakarmpx">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
