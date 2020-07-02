import React from "react";
import classes from "./Footer.module.css";
import github from "../../resources/logos/github.png";
const logoWidth = 40;

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className={classes.IconContainer}>
            <ul className={classes.Icons}>
              <li className="link d-inline-block">
                <a
                  href="https://github.com/luisalfonsopreciado/FinanceWebApp"
                  rel="noopener noreferrer"
                  className="LinkU"
                  target="_blank"
                >
                  <img
                    src={github}
                    width={logoWidth}
                    alt="github"
                    style={{ pointer: "hover" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
